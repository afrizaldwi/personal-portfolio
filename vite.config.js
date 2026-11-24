import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import staticPages from "./scripts/staticPages.js";

export default defineConfig({
  plugins: [react(), staticPages()],
});
