# How to Contribute

First of all, thank you for your interest in `lighthouse-plugin-greenweb`!
We'd love to accept your patches and contributions!

#### 1. Install dependencies

```bash
npm link # create a global link for lighthouse-plugin-greenweb
npm link lighthouse-plugin-greenweb # install the link locally
npm install #actually install everything, with the plugin available as a symlink
```

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
