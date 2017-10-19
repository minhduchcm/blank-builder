import React from 'react';
import * as DraftJS from '../widgets/draftjs';
import * as ImagePicker from '../widgets/image-picker';

export default {
  group: 'TEXT',
  name: 'Text And Image',
  thumb: () => <p>Text And Image</p>,
  data: {
    width: [1, 1]
  },
  widgets: [
    {
      type: DraftJS.Type,
      data: DraftJS.createDefaultData()
    },
    {
      type: ImagePicker.Type,
      data: ImagePicker.createDefaultData()
    }
  ]
};
