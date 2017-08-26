class SectionTemplateManager {
  templates = [];
  register(templates) {
    let types = templates.map(t => t.type);
    this.templates = this.templates
      .filter(t => !(t.type in types))
      .concat(templates);
  }
  get(type) {
    return this.templates[type];
  }
  getTemplateGroups() {
    return this.templates.map(template => template.group);
  }
  getTemplatesInGroup(group) {
    return this.templates.filter(template => template.group === group);
  }
}
export default SectionTemplateManager;
