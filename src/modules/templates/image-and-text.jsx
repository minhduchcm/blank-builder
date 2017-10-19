import React from 'react';
import * as DraftJS from '../widgets/draftjs';
import * as ImagePicker from '../widgets/image-picker';

export default {
  group: 'IMAGE',
  name: 'Image And Text',
  thumb: () => <p>Image And Text</p>,
  data: {
    width: [1, 1]
  },
  widgets: [
    {
      type: ImagePicker.Type,
      data: ImagePicker.createDefaultData()
    },
    {
      type: DraftJS.Type,
      data: DraftJS.createDefaultData()
    }
  ]
};
