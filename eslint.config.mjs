import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = {
  extends: [...compat.extends("next/core-web-vitals")],
  rules: {
    "react/no-unescaped-entities": "off",
    "@typescript-eslint/quotes": "off",
    "quotes": "off", // or 0
    "avoidEscape": "off", // or 0, if this is a custom rule, ensure it is configured correctly.
    "allowTemplateLiterals": "off", // or 0
    "no-useless-escape": "off", // or 0
  },
};

export default eslintConfig;
