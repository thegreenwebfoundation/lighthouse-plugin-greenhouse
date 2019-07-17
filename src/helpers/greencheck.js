const axios = require("axios")
const debug = require("debug")

const GreenCheck = {

  async runGreenCheck(url) {
    const apiUrl = `http://api.thegreenwebfoundation.org/greencheck/${url}`
    debug(apiUrl)
    let response = await axios.get(apiUrl)
    return response
  },

  checkDomains(domains) {
    const greenChecks = await domainArray.map(async (domain) => {
      const resp = await runGreenCheck(domain)
      return resp.data
    })

    const greenCheckResults = await Promise.all(greenChecks).then(values => {
      return values.map(val => {
        if (val.data) {
          return val.data
        }
      })
    })

    const greenDomainResults = greenCheckResults.filter(res => { res.green == 'true' })

    let greenDomainScore
    if (greenDomainResults.length === 0) {
      greenDomainScore = 0
    } else {
      greenDomainScore = greenDomainResults.length / greenCheckResults.length
    }
    return {
      greenDomainScore,
      greenCheckResults
    }
  }

}


module.exports = GreenCheck;