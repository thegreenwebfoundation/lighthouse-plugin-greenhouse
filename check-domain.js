const { runLighthouse } = require('lighthouse/lighthouse-cli/run')

const lhOptions = {
  output: ['json'],
  outputPath: './results/test-results.json',
  chromeFlags: '--headless --enable-logging --no-sandbox',
  plugins: ['lighthouse-plugin-greenhouse']
}

runLighthouse('https://www.google.com', lhOptions).then(result => {
  process.exit(0);
})