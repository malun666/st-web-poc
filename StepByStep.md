# Step by Step

## Create the project and initialize the git repository

```shell
pnpm create vite st-web-poc --template react-ts
```

## Initialize the git repository

```shell
git init
```

## Initialize the changelog

```shell
pnpm add -D changelog
```

## Initialize the Tailwind CSS

```shell
pnpm add -D tailwindcss postcss autoprefixer
```

## Initialize the Tailwind CSS configuration

```shell
npx tailwindcss init -p
```

## Add the Tailwind CSS directives to the base CSS

```shell
echo "@tailwind base;
@tailwind components;
@tailwind utilities;" > src/index.css
```
