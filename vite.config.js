import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Vite configuration. The React plugin enables JSX and fast refresh.
// If you deploy to a sub-path (for example GitHub Pages at /repo-name/),
// add:  base: "/repo-name/"  below and switch BrowserRouter to HashRouter
// in src/main.jsx (see README -> Deployment).
export default defineConfig({
  plugins: [react()],
});
