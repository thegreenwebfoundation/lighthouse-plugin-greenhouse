const { runLighthouse } = require('lighthouse/lighthouse-cli/run')

runLighthouse('https://www.google.com', {
  // extends: 'lighthouse:default',
  plugins: ['lighthouse-plugin-greenweb'],
  output: []
}).then(result => {
  // console.log(NetworkRecords)

  // console.log(result)
  process.exit(0);
})