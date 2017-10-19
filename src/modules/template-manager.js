import { Map } from 'immutable';

class TemplateManager {
  templates = new Map({});

  registerTemplate({ group, name, ...template }) {
    this.templates = this.templates.setIn([group, name], { ...template });
  }

  getGroups() {
    return this.templates
      .entrySeq()
      .toJS()
      .map(t => [t[0], t[1].entrySeq().toJS()]);
  }

  getTemplates(group) {
    return this.templates.get(group).toJS();
  }
}

export default TemplateManager;
