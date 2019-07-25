# How to Contribute

First of all, thank you for your interest in `lighthouse-plugin-greenhouse`!
We'd love to accept your patches and contributions!

#### 1. Install dependencies

You use Lighthouse plugins in larger projects referring to them like so:

```bash
npx lighthouse --plugins=lighthouse-plugin-greenhouse --view
```

Lighthouse looks in `node_modules` to find the code to run.

But if we're _in_ the plugin, how do we refer the plugin in node_modules?

[npm link][] is your friend here. It creates a symlink, so you can then refer to the module you're working on _as if it had already been installed into `node_modules`_.

Witchcraft.

[npm link]: https://docs.npmjs.com/cli/link.html

```bash
npm link # create a global link for lighthouse-plugin-greenhouse
npm link lighthouse-plugin-greenhouse # install the link locally
npm install #actually install everything, with the plugin available as a symlink
```

Alternatively, you can run the `setup.sh` script, which does this for you.

#### 2. Run plugin

```bash
# add symlink to test the plugin locally
npm run mobile-run https://www.google.com/
```

#### 3. Improve the plugin

Write your patc

Helpful links:

- [Google Lighthouse Plugin docs](https://github.com/GoogleChrome/lighthouse/blob/master/docs/plugins.md)
- [The Green Web Foundatino Greencheck API](https://developers.google.com/speed/pagespeed/insights)

#### 4. Tests and linters

Coding style is fully defined in [.prettierrc](./.prettierrc).

```bash
npm test # run tests
```

If you're looking for support or pointers, come say hi in the [ClimateActionTech](http://climateaction.tech/) slack.
