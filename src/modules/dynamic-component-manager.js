import { Map } from 'immutable';

class DynamicComponentManager {
  components = new Map();

  registerComponent(name, component) {
    this.components = this.components.set(name, component);
  }

  removeComponent(name) {
    this.components = this.components.delete(name);
  }

  getComponent(name) {
    return this.components.get(name);
  }
}

export default DynamicComponentManager;
