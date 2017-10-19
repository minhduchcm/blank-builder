import React from 'react';
import * as DraftJS from '../widgets/draftjs';
export default {
  group: 'TEXT',
  name: 'Text Block',
  thumb: () => <p>Text Block</p>,
  data: {
    width: [1]
  },
  widgets: [
    {
      type: DraftJS.Type,
      data: DraftJS.createDefaultData()
    }
  ]
};
