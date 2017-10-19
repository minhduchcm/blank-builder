import defaultImage from './default-image.jpg';
export function createDefaultData(src = defaultImage) {
  return {
    src,
    animation: {
      event: 'none',
      type: 'fade',
      duration: 1,
      delay: 0
    }
  };
}
