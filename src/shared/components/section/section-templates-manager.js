class SectionTemplateManager {
  templates = [];
  register(templates) {
    for (let template in templates) {
      this.templates[template.type] = template;
    }
    console.log(templates);
  }
  get(type) {
    return this.templates[type];
  }
}
export default SectionTemplateManager;
