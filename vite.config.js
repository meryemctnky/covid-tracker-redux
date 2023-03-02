import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import EnvironmentPlugin  from "vite-plugin-environment";

export default defineConfig({
  plugins: [
    react(),
    EnvironmentPlugin({
      BASE_URL: process.env.BASE_URL,
    }),
  ],
});
