import { SHOW_MODAL, HIDE_MODAL, CLOSE_MODAL } from "../../const";

export function showModal(modalType, modalProps) {
  return { type: SHOW_MODAL, modalType, modalProps };
}

export function hideModal() {
  return { type: HIDE_MODAL };
}
export function closeModal() {
  return { type: CLOSE_MODAL };
}
