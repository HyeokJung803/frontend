import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// 상대 경로 직접 지정
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": "/src",
    },
  },
});
