import type { Config } from "@jest/types";

// Sync object
const config: Config.InitialOptions = {
  verbose: true,
  collectCoverage: true,
  coverageReporters: ["html"],
};
export default config;
