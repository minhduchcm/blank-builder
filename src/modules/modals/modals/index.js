import { modalTypes } from './../../../constant';
import { InsertRowModal } from './insert-row';
import { SelectImageModal } from './select-image';
export const Modals = [
  {
    type: modalTypes.INSERT_ROW_MODAL,
    modal: InsertRowModal
  },
  {
    type: modalTypes.SELECT_IMAGE,
    modal: SelectImageModal
  }
];
