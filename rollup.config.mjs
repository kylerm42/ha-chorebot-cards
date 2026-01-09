import typescript from "@rollup/plugin-typescript";
import resolve from "@rollup/plugin-node-resolve";
import terser from "@rollup/plugin-terser";
import commonjs from "@rollup/plugin-commonjs";

const production = !process.env.ROLLUP_WATCH;

// Single bundle configuration - all cards in one file
export default {
  input: "src/index.ts",
  output: {
    file: "dist/chorebot-cards.js",
    format: "es",
    sourcemap: !production,
  },
  plugins: [
    resolve({ browser: true }),
    commonjs(),
    typescript(),
    production && terser(),
  ],
};
