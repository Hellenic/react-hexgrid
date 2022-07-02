import type { Config } from "@jest/types"

// Sync object
const config: Config.InitialOptions = {
  testEnvironment: "jsdom",
  // verbose: true,
}
export default config

// Or async function
// export default async (): Promise<Config.InitialOptions> => {
//   return {
//     verbose: true,
//   }
// }
