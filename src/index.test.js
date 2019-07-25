
import debugLib from "debug"
import { runLighthouse } from 'lighthouse/lighthouse-cli/run'

const debug = debugLib("tgwf:test:greenHouse")

describe("Greenhouse", () => {
  const lhOptions = {
    output: ['json'],
    chromeFlags: '--headless --enable-logging --no-sandbox',
    plugins: ['lighthouse-plugin-greenhouse']
  }

  test("returns a green result for Google", async () => {

    const results = await runLighthouse('https://www.google.com', lhOptions)
    const score = results.lhr.categories['lighthouse-plugin-greenhouse'].score

    debug(score)
    expect(score).toBe(1)

  }, 15000)

  test("returns a grey result for some grey hosted site", async () => {

    // Koch industries, has funded climate denial to the tune of tens of millions
    // of dollars over the years. They seemd a pretty safe bet for a test that would fail, till we have actual mocks.
    const results = await runLighthouse('https://www.kochind.com/', lhOptions)
    const score = results.lhr.categories['lighthouse-plugin-greenhouse'].score

    debug(score)
    expect(score).toBeLessThan(1)

  }, 30000)
})
