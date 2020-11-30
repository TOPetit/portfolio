const pluginNavigation = require("@11ty/eleventy-navigation")

module.exports = function
    (eleventyConfig) {

    eleventyConfig.addPlugin(pluginNavigation)

    eleventyConfig.addPassthroughCopy('pages/css')
    eleventyConfig.addPassthroughCopy('files')
    return {
        dir: {
            input: "pages"
        },
        pathPrefix: '/~petitth'
    }
}