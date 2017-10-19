import React from 'react';
import * as ImagePicker from '../widgets/image-picker';

export default {
  group: 'IMAGE',
  name: 'Image Block',
  thumb: () => <p>Image Block</p>,
  data: {
    width: [1]
  },
  widgets: [
    {
      type: ImagePicker.Type,
      data: ImagePicker.createDefaultData()
    }
  ]
};
