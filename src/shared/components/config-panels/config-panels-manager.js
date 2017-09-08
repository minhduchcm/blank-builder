import { Map } from "immutable";

class ConfigPanelsManager {
  constructor() {
    this.panels = new Map();
  }
  register(id, panels) {
    this.panels = this.panels.setIn([id], panels);
  }
  get(id) {
    return this.panels.getIn([id]);
  }
}

export default ConfigPanelsManager;
