module.exports = function
    (eleventyConfig) {

    eleventyConfig.addPassthroughCopy('pages/css')
    return {
        dir: {
            input: "pages"
        }
    }
}