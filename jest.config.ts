/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */

import { pathsToModuleNameMapper } from "ts-jest";
import { compilerOptions } from "./tsconfig.test-paths.json";

module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  testMatch: ["**/**/*.test.ts"],
  collectCoverage: true,
  collectCoverageFrom: [
    "src/**/*.{js.jsx}",
    "src/**/*.{ts,tsx}",
    "!vendor/**/*.{js,tsx}",
    "!**/node_modules/**",
  ],
  verbose: true,
  forceExit: true,
  clearMocks: true,
  resetMocks: true,
  restoreMocks: true,
  rootDir: "src",
  moduleDirectories: ["node_modules", "<rootDir>"],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json"],
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths),
};
