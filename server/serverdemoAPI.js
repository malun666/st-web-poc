/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run "npm run dev" in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run "npm run deploy" to publish your worker
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

export default {
  async fetch(request, env, ctx) {
    // return new Response('Hello World!');
    // accept post request
    // return the result { status: 200, info: "ok", success: 1, error: null}
    const origin = getOrigin(request);
    if (origin) {
      const response = new Response("ok");
      appendCorsHeaders(response, origin);
      if (request.method === "OPTIONS") {
        return response;
      }
    }

    // allow cors
    const headers = new Headers();
    headers.set("Access-Control-Allow-Origin", "*");
    headers.set("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
    headers.set("Access-Control-Allow-Headers", "Content-Type");

    if (request.method === "OPTIONS") {
      return new Response("ok", { headers, status: 200, statusText: "ok" });
    }

    const body = await request.json();
    console.log(body);

    return new Response(
      JSON.stringify({
        status: 200,
        info: "ok",
        success: 1,
        error: null,
        body,
        token: "tokenofauth",
        user: {
          id: "123",
          username: "mullen",
          email: "malunsg@gmail.com",
        },
      })
    );
  },
};

function appendCorsHeaders(response, origin) {
  if (
    origin &&
    (origin.includes("localhost") ||
      origin.includes("127.0.0.1") ||
      origin.includes(".pages.dev") ||
      origin.includes("addr-d8i.pages.dev") ||
      origin.includes("malun.xyz"))
  ) {
    response.headers.set("Access-Control-Allow-Origin", origin);
    response.headers.set(
      "Access-Control-Allow-Methods",
      "GET, POST, OPTIONS, PUT, DELETE, PATCH, HEAD, CONNECT, TRACE"
    );
    response.headers.set("Access-Control-Allow-Headers", "Content-Type");
    response.headers.set("Access-Control-Max-Age", "86400");
    response.headers.set("Referrer-Policy", "no-referrer");
  }
}

function getOrigin(request) {
  const origin =
    request.headers.get("Origin") ||
    request.headers.get("origin") ||
    request.headers.get("referer")?.split("/").slice(0, 3).join("/");
  if (origin) {
    return origin;
  }
  const url = new URL(request.url);
  return `${url.protocol}//${url.hostname}`;
}
