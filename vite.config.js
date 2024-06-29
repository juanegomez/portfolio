import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dotenv from "dotenv";

const env = dotenv.config().parsed;

export default defineConfig({
  plugins: [react()],
  define: {
    "process.env": Object.keys(env).reduce((prev, next) => {
      prev[next] = JSON.stringify(env[next]);
      return prev;
    }, {}),
  },
});
