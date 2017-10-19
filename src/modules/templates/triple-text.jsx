import React from 'react';
import * as DraftJS from '../widgets/draftjs';

export default {
  group: 'TEXT',
  name: 'Triple Text Block',
  thumb: () => <p>Triple Text Block</p>,
  data: {
    width: [1, 1, 1]
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
      type: DraftJS.Type,
      data: DraftJS.createDefaultData()
    }
  ]
};
