/** @type {import("tailwindcss").Config} */
const config = {
  // content: ["./src/**/*.tsx"],
  content: [
    './src/**/*.tsx',
    './Components/**/*.tsx',
  ],
  // @ts-ignore
  presets: [require("@acme/tailwind-config")],
};

module.exports = config;
