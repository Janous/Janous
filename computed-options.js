/*
 * Overridden renderer options
 */

module.exports = function (themeConfig) {
let customConfigOptionValue = themeConfig.customConfig.filter(option => option.name === 'featuredPostsNumber')[0].value;
let computedValue = customConfigOptionValue;

return [
    {
       name: 'authorsFeaturedPostsNumber',
       value: computedValue
    },
    {
        name: 'tagsFeaturedPostsNumber',
        value: computedValue
    }
  ];
};