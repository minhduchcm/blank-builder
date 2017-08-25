class ModalsManager {
  constructor() {
    this.register(require("./empty-modal").default);
  }
  modals = [];
  register(modal) {
    this.modals[modal.type] = modal;
  }
  get(type) {
    return this.modals[type];
  }
}
export default ModalsManager;
