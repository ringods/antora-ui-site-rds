import "../src/css/main.css";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const decorators = [
  (Story) => `<div class="h-full antialiased flex flex-col bg-zinc-50 dark:bg-black">${Story()}</div>`,
];
