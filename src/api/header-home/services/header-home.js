'use strict';

/**
 * header-home service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::header-home.header-home');
