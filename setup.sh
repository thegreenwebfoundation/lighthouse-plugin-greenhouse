# run this to set up the links needed to allow you to require
# this lighthouse-plugin, as it if it were already
# in your node modules.

# You need to to do this to simulate it being required
# as a third party dependency by lighthouse

npm link
npm link lighthouse-plugin-greenhouse
npm install
npm run json-run https://www.google.com/