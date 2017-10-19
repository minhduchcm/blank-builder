import React from 'react';
import * as DraftJS from '../widgets/draftjs';

export default {
  group: 'TEXT',
  name: 'Double Text Block',
  thumb: () => <p>Double Text Block</p>,
  data: {
    width: [1, 2]
  },
  widgets: [
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
