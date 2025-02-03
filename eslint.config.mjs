import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import checkFile from "eslint-plugin-check-file";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    plugins: {
      "check-file": checkFile,
    },
    rules: {
      "check-file/filename-naming-convention": [
        "error",
        {
          "**/*.{ts,tsx}": "KEBAB_CASE",
        },
        {
          ignoreMiddleExtensions: true,
        },
      ],
      "check-file/folder-naming-convention": [
        "error",
        {
          "src/**/!(__tests__)": "KEBAB_CASE",
        },
      ],
      "import/no-restricted-paths": [
        "error",
        {
          zones: [
            {
              target: "./src/features",
              from: "./src/app",
            },
            {
              target: [
                "./src/components",
                "./src/lib",
                "./src/types",
                "./src/actions",
                "./src/hooks",
                "./src/utils",
                "./src/styles",
              ],
              from: ["./src/features", "./src/app"],
            },
            {
              target: "./src/features/auth",
              from: "./src/features",
              except: ["./auth"],
            },
            {
              target: "./src/features/campaigns",
              from: "./src/features",
              except: ["./campaigns"],
            },
          ],
        },
      ],
    },
  },
];

export default eslintConfig;
