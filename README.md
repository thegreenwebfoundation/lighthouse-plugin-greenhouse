# Greenhouse - Lighthouse, but for a web that doesn't use fossil fuels

[Lighthouse][lighthouse] is a nice tool for helping you workout how to make a site more accessible, performance or mobile friendly.

[lighthouse]: https://developers.google.com/web/tools/lighthouse/

But given climate change is a thing, what about making websites planet friendly too?

### The general plan

- Point lighthouse at a url.
- Analyse the rendered page
- See which domains in use run on renewable power, by checking against the [Green Web Foundation API](https://api.thegreenwebfoundation.org/), or seeing what's returned at `carbon.txt`
- Compile this info into information you could present in a lighthouse run, so tools that provide lighthouse as a service can _also_ do this.

### Installation

Greenhouse is a lighthouse plugin, means you need lighthouse installed before you can use this plugin.

This readme assumes you have some familiarity with lighthouse, and know how to install it with npm or your preferred package manager:

```
npm install lighthouse
```

If you aren't, you can follow the instructions for installing lighthouse on [the github project page for Lighthouse](https://github.com/GoogleChrome/lighthouse/).

Lighthouse plugins need to follow a specific naming convention to be detected, and you currently can't use namespaces, so remember the name:

```
npm install lighthouse-plugin-greenhouse
```

### Usage

Make sure you have Google lighthouse installed version 5 for above, and node 10 or above. You activate it by passing a `--plugins` flag on the command line, like this example using npm's npx command, to use the local version of lighthouse:

```
npx lighthouse https://www.yoursite.com --plugins=lighthouse-plugin-greenweb
```

You can also run this in a script if you want to automate running this, like as part of continuous integration process, to break the build when you're using infrastructure that relies on fossil fuels.

```javascript

import { runLighthouse } from "lighthouse/lighthouse-cli/run"

const lhOptions = {
  output: ["json"],
  chromeFlags: "--headless --enable-logging --no-sandbox",
  plugins: ["lighthouse-plugin-greenhouse"]
}

// we're using async/await syntax, as runLighthouse returns a Promise
async runCheck() {
  const results = await runLighthouse("https://www.google.com", lhOptions)

  // do something to inspect the result if need be
  const score = res.lhr.categories["lighthouse-plugin-greenhouse"].score
}
runcheck()


```

### Contributing

See CONTRIBUTING for getting started, and either see [the issues list](https://github.com/thegreenwebfoundation/lighthouse-plugin-greenhouse/issues), or if you have questions, please [file one yourself](https://github.com/thegreenwebfoundation/lighthouse-plugin-greenhouse/issues/new).

You don't need to be a hard core developer to contribute to it, as help with copy, or the documentation, or a sample email to send to the people running services you want runnign on green power is just as valuable as actual code.

### FAQ's

#### Is this the most effective thing I can do?

No, but given that _page weight budgets are effectively carbon budgets for websites_, it's worth using, and is a way in to thinking systemically about the environmental impact of the digital products we build. You can read more here in this post about the impact of [sending data over the wire](https://www.thegreenwebfoundation.org/news/packets-yet-another-lever-for-a-low-carbon-internet/). There are other levers available your organisation too, from changes to [infrastructure you control directly (aka _Platform_)](https://www.thegreenwebfoundation.org/news/provisioning-and-providers-two-levers-for-a-lower-carbon-internet/), or [changes to where and how you work (process)](https://www.thegreenwebfoundation.org/news/place-policy-procurement-more-levers-for-a-lower-carbon-internet/).

#### I'm seeing a my site marked green when it should be grey (or vice versa)!

This plugin uses data from The Green Web Foundation, specifically the [Green Web API](https://api.thegreenwebfoundation.org/). If you host infrastructure yourself, you can [update the information yourself on the admin site][tgwf-admin-site].

#### I'm seeing someone else's site marked green when it should be grey (or vice versa)!

If you use infrastructure run by someone else, it's important that you ask them as a customer or user - this is the number one reason cited for continuing to use infrastructure that runs on fossil fuels.

[tgwf-admin-site]: https://admin.thegreenwebfoundation.org/

#### I work in tech, I'm freaking out about the climate and I want to know what else I can do

Yeah, it's scary AF.

You can work with the [The Green Web Foundation](https://www.thegreenwebfoundation.org/) to work out a plan for reducing emissions, by following [this contact form](https://docs.google.com/forms/d/1W-Xc_2bjoor1sV2mufeYqoWntE1c0f0Ib6xL4HhHNc8/viewform?edit_requested=true), or come hang out in the [Climate Action Tech Slack](http://climateaction.tech/) - there's a bunhc of us trying to figure it out, and you're welcome to join us.
