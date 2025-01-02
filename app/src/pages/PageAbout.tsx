import { Card, Divider, List, ListItem, Stack, Typography } from "@mui/joy";

export default function PageAbout() {
  return (
    <Stack spacing={4} sx={{ maxWidth: 800, mx: "auto" }}>
      <Typography level="h1">ST Web POC</Typography>

      <Card>
        <Typography level="h2">Tech Stack</Typography>
        <Divider />
        <List>
          <ListItem>🚀 Vite + React</ListItem>
          <ListItem>🎨 MUI Joy UI + Tailwind CSS</ListItem>
          <ListItem>📊 Recharts for data visualization</ListItem>
          <ListItem>🔄 Redux Toolkit for state management</ListItem>
          <ListItem>🛣️ React Router for navigation</ListItem>
          <ListItem>🌐 Express.js for backend services</ListItem>
        </List>
      </Card>

      <Card>
        <Typography level="h2">Features</Typography>
        <Divider />
        <List>
          <ListItem>📱 Responsive design</ListItem>
          <ListItem>🌓 Light/Dark mode support</ListItem>
          <ListItem>📊 Multiple chart types</ListItem>
          <ListItem>🔒 Authentication system</ListItem>
          <ListItem>🎯 TypeScript for type safety</ListItem>
          <ListItem>🎨 Modern UI components</ListItem>
        </List>
      </Card>

      <Card>
        <Typography level="h2">Development</Typography>
        <Divider />
        <List>
          <ListItem>
            <Typography level="body-sm" component="code">
              pnpm dev
            </Typography>
            {" - Start the development server"}
          </ListItem>
          <ListItem>
            <Typography level="body-sm" component="code">
              pnpm build
            </Typography>
            {" - Build the application"}
          </ListItem>
          <ListItem>
            <Typography level="body-sm" component="code">
              pnpm lint
            </Typography>
            {" - Run ESLint"}
          </ListItem>
          <ListItem>
            <Typography level="body-sm" component="code">
              pnpm format
            </Typography>
            {" - Format code with Prettier"}
          </ListItem>
        </List>
      </Card>

      <Card>
        <Typography level="h2">Project Structure</Typography>
        <Divider />
        <List>
          <ListItem>📁 app/ - Frontend application</ListItem>
          <ListItem>📁 server/ - Backend services</ListItem>
          <ListItem>📁 scripts/ - Build and utility scripts</ListItem>
        </List>
      </Card>
    </Stack>
  );
}
