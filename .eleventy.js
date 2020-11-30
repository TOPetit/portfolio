const pluginNavigation = require("@11ty/eleventy-navigation")

module.exports = function
    (eleventyConfig) {

    eleventyConfig.addPlugin(pluginNavigation)

    eleventyConfig.addPassthroughCopy('pages/css')
    return {
        dir: {
            input: "pages"
        }
    }
}