
import debugLib from "debug"
import { runLighthouse } from 'lighthouse/lighthouse-cli/run'

const debug = debugLib("tgwf:test:greenHouse")

describe("Greenhouse", () => {
  test("returns a green result for Google", async () => {

    const lhOptions = {
      output: ['json'],
      chromeFlags: '--headless --enable-logging --no-sandbox',
      plugins: ['lighthouse-plugin-greenhouse']
    }

    const res = await runLighthouse('https://www.google.com', lhOptions)
    const score = res.lhr.categories['lighthouse-plugin-greenhouse'].score
    expect(score).toBe(1)

  }, 10000)
})
