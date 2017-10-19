import * as DraftJS from './draftjs';
import * as ImagePicker from './image-picker';

export const Widgets = [
  {
    type: DraftJS.Type,
    component: {
      defaultData: DraftJS.createDefaultData(),
      Editor: DraftJS.Editor
    }
  },
  {
    type: ImagePicker.Type,
    component: {
      defaultData: ImagePicker.createDefaultData(),
      Editor: ImagePicker.Editor
    }
  }
];
