import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
    ],
  },
  {
    rules: {
      "@next/next/no-img-element": "off",
      "react/no-unknown-property": ["warn", {
        ignore: [
          // React Three Fiber geometry / mesh props
          "args", "attach", "object", "rotation", "transparent", "jsx", "global",
          // Shader material props — valid R3F JSX, not actual unknown DOM props
          "vertexShader", "fragmentShader", "uniforms",
          // Common R3F material / light / shadow props
          "intensity", "position", "castShadow", "receiveShadow",
          "depthWrite", "depthTest", "blending", "side",
        ],
      }],
    },
  },
];

export default eslintConfig;
