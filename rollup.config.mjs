import external from "rollup-plugin-peer-deps-external";
import typescript from "@rollup/plugin-typescript";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";

import pkg from "./package.json" assert { type: "json" };

export default {
  external: ["react", "react-dom"],
  input: "src/index.ts",
  output: [
    {
      file: pkg.main,
      format: "cjs",
      sourcemap: true,
    },
    {
      file: pkg.module,
      format: "es",
      sourcemap: true,
    },
  ],
  plugins: [
    external(),
    resolve(),
    typescript(),
    commonjs({ extensions: [".js", ".ts"] }),
  ],
};
