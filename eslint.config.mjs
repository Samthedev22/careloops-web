import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

export default [
  ...compat.extends("next/core-web-vitals", "next/typescript"),

  {
    rules: {
      quotes: "off",
      "jsx-quotes": "off",
      "no-useless-escape": "off",
      "prefer-template": "off",
      "@next/next/no-img-element": "off", // turn off <img> warning
      "react/no-unescaped-entities": "off", // allow apostrophes in JSX
      "@typescript-eslint/no-unused-vars": "off", // disable unused vars warning
    },
  },
];
