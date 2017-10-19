import { ContentState, convertToRaw } from 'draft-js';

const defaultStr =
  'Sit consectetur cupidatat ad excepteur. Officia nisi aliqua est reprehenderit ullamco mollit duis sit. Duis reprehenderit in incididunt ut cillum consequat fugiat veniam eu ipsum do irure consectetur eu. Sit consectetur cupidatat ad excepteur. Officia nisi aliqua est reprehenderit ullamco mollit duis sit. Duis reprehenderit in incididunt ut cillum consequat fugiat veniam eu ipsum do irure consectetur eu.';

export function createDefaultData(str = defaultStr) {
  return {
    content: convertToRaw(ContentState.createFromText(str)),
    animation: {
      event: 'none',
      type: 'fade',
      duration: 1,
      delay: 0
    }
  };
}
