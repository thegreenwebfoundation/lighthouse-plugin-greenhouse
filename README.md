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

This readme assumes you have some familiarity with lighthouse, and know how to install it with npm or your prferred package manager:

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

### Contributing

See CONTRIBUTING for getting started, and either see [the issues list](https://github.com/thegreenwebfoundation/lighthouse-plugin-greenhouse/issues), or if you have questions, please [file one yourself](https://github.com/thegreenwebfoundation/lighthouse-plugin-greenhouse/issues/new).

You don't need to be a hard core developer to contribute to it, as help with copy, or the documentation, or a sample email to send to the people running services you want runnign on green power is just as valuable as actual code.

### FAQ's

#### I'm seeing a my site marked green when it should be grey (or vice versa)!

This plugin uses data from The Green Web Foundation, specifically the [Green Web API](https://api.thegreenwebfoundation.org/). If you host infrastructure yourself, you can [update the information yourself on the admin site][tgwf-admin-site].

#### I'm seeing someone else's site marked green when it should be grey (or vice versa)!

If you use infrastructure run by someone else, it's important that you ask them as a customer or user - this is the number one reason cited for continuing to use infrastructure that runs on fossil fuels.

[tgwf-admin-site]: https://admin.thegreenwebfoundation.org/
