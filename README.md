# Vue boilerplate Project

## Overview

This project provides a boilerplate setup for a Vue.js project. It is designed for developers who want to quickly set up a new Vue project with a modern development stack that includes **Vite**, **Tailwind CSS**, **DaisyUI**, and **ESLint** for code quality. The project also includes a pre-configured Vue Router for handling routing.

## Project Setup

This boilerplate can be easily cloned and run locally to kickstart your Vue.js projects.

### Prerequisites

Ensure you have the following installed:
- **Node.js** (version 14+ recommended)
- **npm** or **Yarn**

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/vue-daisy.git
   cd vue-daisy
   ```
## 2. Installation

Install the dependencies using npm or Yarn:

```bash
npm install
# or
yarn install
```
## 3. Run the Development Server

Start the development server with npm or Yarn:

```bash
npm run dev
# or
yarn dev
```

## Scripts

The `package.json` file includes the following scripts:

- **`dev`**: Starts the development server using Vite.
- **`build`**: Builds the project for production.
- **`preview`**: Previews the production build locally.
- **`lint:oxlint`**: Runs the oxlint tool for linting with recommended rules.
- **`lint:eslint`**: Runs ESLint to fix issues in the codebase.
- **`lint`**: Runs both `lint:oxlint` and `lint:eslint` scripts together.

### Usage

#### Start the development server:

```bash
npm run dev
```
## Example

To start the development server:

```bash
npm run dev
```
To build the project for production:
```bash
npm run build
```
To preview the build:
```bash
npm run preview
```

## Configuration Details

### Tailwind CSS

The Tailwind CSS configuration file (`tailwind.config.js`) specifies the content to scan for class names and includes DaisyUI as a plugin.

```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
}
```
## Vue Router

Vue Router is set up in `src/router/index.js` to provide basic routing functionality.

```javascript
import { createRouter, createWebHistory } from "vue-router";
import HomeView from '../views/Home.vue';
import AboutView from "@/views/AboutPage.vue";

const routes = [
  { path: "/", component: HomeView },
  { path: "/about", component: AboutView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
```
## Main Entry (main.js)

The main entry file (`src/main.js`) initializes the Vue app and mounts it to the `#app` div.

```javascript
import './assets/main.css';
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

const app = createApp(App);
app.use(router);
app.mount('#app');
```
## Usage

### Start the Development Server

Run the following command to start the development server:

```bash
npm run dev
```
2.Access the app at `http://localhost:3000` (or the port shown in your terminal).
3.Build for production:
Preview the production build:
```bash
npm run preview
```
## Customization

### Add New Pages
1. Create new components in the `views/` directory.
2. Add them to `src/router/index.js` for routing.

### Add New Components
1. Place new components in the `components/` directory.
2. Import and use them as needed in your Vue components.

## Credits

This project uses the following tools and libraries:

- **Vue.js**: Frontend framework.
- **Vite**: Build tool and development server.
- **Tailwind CSS**: Utility-first CSS framework.
- **DaisyUI**: Component library for Tailwind CSS.
- **ESLint**: Linting tool for maintaining code quality.
- **Vue Router**: For handling navigation.
