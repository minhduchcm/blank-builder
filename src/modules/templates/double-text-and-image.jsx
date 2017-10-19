import React from 'react';
import * as DraftJS from '../widgets/draftjs';
import * as ImagePicker from '../widgets/image-picker';

export default {
  group: 'IMAGE',
  name: 'Double Text And Image',
  thumb: () => <p>Double Text And Image</p>,
  data: {
    width: [1, 1, 2]
  },
  widgets: [
    {
      type: DraftJS.Type,
      data: DraftJS.createDefaultData()
    },
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
