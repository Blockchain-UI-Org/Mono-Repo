import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import babel from "rollup-plugin-babel";
import external from "rollup-plugin-peer-deps-external";
import postcss from "rollup-plugin-postcss";
import commonjs from "rollup-plugin-commonjs";
import { terser } from "rollup-plugin-terser";
import svg from "rollup-plugin-svg";

export default [
  {
    input: "./src/index.ts",
    output: [
      {
        file: "dist / index.js",
        format: "cjs",
        sourcemap: true,
        inlineDynamicImports: true,
      },
      {
        file: "dist / index.es.js",
        format: "es",
        exports: "named",
        inlineDynamicImports: true,
      },
    ],
    plugins: [
      postcss({ plugins: [], minimize: true }),
      babel({ exclude: "node_modules/**", presets: ["@babel/preset-react"] }),
      external({ plugins: ["styled-components"] }),
      resolve(),
      commonjs({
        ignoreGlobal: true,
        include: /\/node_modules\//,
        namedExports: {
          react: Object.keys(require("react")),
          "react-is": Object.keys(require("react-is")),
        },
      }),
      svg(),
      typescript({ tsconfig: "./tsconfig.json" }),
      terser(),
    ],
  },
  //   {
  //     input: "dist/esm/types/index.d.ts",
  //     output: [{ file: "dist/index.d.ts", format: "esm" }],
  //     plugins: [dts.default()],
  //   },
];
