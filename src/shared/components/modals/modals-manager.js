class ModalsManager {
  constructor() {
    this.register(require("./empty-modal").default);
    this.register(require("./add-section-modal").default);
    this.register(require("./select-image").default);
    this.register(require("./select-filter").default);
    this.register(require("./change-image").default);
  }
  modals = [];
  register(modal) {
    this.modals.push(modal);
  }
  get(type) {
    return this.modals.find(m => m.type === type);
  }
}
export default ModalsManager;
