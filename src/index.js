module.exports = {
  audits: [
    { path: 'lighthouse-plugin-field-greenweb/src/audits/greenweb-audit.js' },

  ],
  groups: {
    page: {
      title: 'Page summary'
    }
  },
  category: {
    title: 'Green Web',
    description:
      'content goes here to explain ',
    auditRefs: [
      { id: 'greenweb-id', weight: 1, group: 'page' },
    ]
  }
}