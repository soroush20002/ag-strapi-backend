'use strict';

/**
 * sup service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::sup.sup');
