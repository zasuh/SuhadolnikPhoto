const site = require('./site.js')

module.exports = {
  'sl-sl': {
    default: true,
    path: 'sl',
    locale: 'sl-sl',
    htmlLang: 'sl',
    ogLang: 'sl_SL',
    dateFormat: 'DD.MM.YYYY',
    siteTitle: site.siteTitle,
    siteDescription: site.siteDescription,
    siteHeadline: site.siteHeadline,
    projects: 'Zgodbe',
    contact: 'Kontakt',
  },
  'en-gb': {
    path: 'en',
    locale: 'en-gb',
    htmlLang: 'en',
    ogLang: 'en_US',
    dateFormat: 'DD/MM/YYYY',
    siteTitle: 'LekoArts - Graphic Designer & Front-End Developer',
    siteDescription: `Hi! I'm Lennart and I'm a self-taught and passionate graphic designer & front-end developer. I design, create and develop cross-platform design concepts to get the most out of your brand.`,
    siteHeadline: 'Graphic Designer & Front-End Developer',
    projects: 'Projects',
    contact: 'Contact',
  },
}
