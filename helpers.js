/*
 * Custom theme helpers for Handlebars.js
 */

let themeHelpers = {
    getTagColor: function(tag, tagsConfig = '') {
        if(tagsConfig.trim() === '') {
            return 'u-tag--1';
        }

        tagsConfig = tagsConfig.split(',');

        if(tagsConfig.length) {
            tagsConfig = tagsConfig.map(item => item.split('='));

            for(let tagConfig of tagsConfig) {
                if(tagConfig.length !== 2) {
                    continue;
                }

                if(tagConfig[0].trim() === tag) {
                    return 'u-tag--' + tagConfig[1];
                }
            }
        } else {
            return 'u-tag--1';
        }

        return 'u-tag--1';
    }
};

module.exports = themeHelpers;
