import createDefaultData from "../../../widgets/image-picker/default-data";

export default {
  main: {
    img: createDefaultData(),
    height: "350px",
    sizing: "original",
    link: {
      type: "none",
      link: ""
    },
    filter: {
      name: "",
      value: 0
    },
    animation: {
      event: "none",
      type: "fade",
      duration: 1,
      delay: 0
    }
  }
};
