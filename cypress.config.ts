import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "http://localhost:3000",
    setupNodeEvents(on, config) {
      on("task", {
        log(message) {
          console.log("📢 Лог из Cypress:", message);
          return null;
        },
      });
    },
  },
});
