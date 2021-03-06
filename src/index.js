module.exports = {
  audits: [
    { path: 'lighthouse-plugin-greenhouse/src/audits/greenhouse-audit.js' },

  ],
  groups: {
    page: {
      title: 'Page summary'
    }
  },
  category: {
    title: 'Sustainable Web',
    description:
      "These checks show changes to make to reduce the carbon emissions from what you build. Climate crisis, remember?",
    auditRefs: [
      { id: 'greenhouse-id', weight: 1, group: 'page' },
    ]
  }
}