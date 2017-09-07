class ConfigPanelsManager {
  panels = [];
  constructor() {}
  register(panels) {
    this.panels = panels;
    if (this.panelRootRef) {
      this.panelRootRef.forceUpdate();
    }
  }
  get() {
    return this.panels;
  }
}

export default ConfigPanelsManager;
