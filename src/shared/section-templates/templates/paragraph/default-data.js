import { ContentState, convertToRaw } from "draft-js";
import createDefaultData from "../../../widgets/draftjs/default-data";

export default {
  title: {
    contentState: createDefaultData(
      "Esse deserunt ad do pariatur voluptate elit sint minim occaecat cillum ea aliqua nulla."
    ),
    alignment: "center",
    fontType: "heading",
    fontStyle: "none",
    link: {
      type: "none",
      link: ""
    },
    animation: {
      event: "none",
      type: "fade",
      duration: 1,
      delay: 0
    }
  },
  content: {
    contentState: createDefaultData(
      "Sit consectetur cupidatat ad excepteur. Officia nisi aliqua est reprehenderit ullamco mollit duis sit. Duis reprehenderit in incididunt ut cillum consequat fugiat veniam eu ipsum do irure consectetur eu. Sit consectetur cupidatat ad excepteur. Officia nisi aliqua est reprehenderit ullamco mollit duis sit. Duis reprehenderit in incididunt ut cillum consequat fugiat veniam eu ipsum do irure consectetur eu."
    ),
    alignment: "left",
    link: {
      type: "none",
      href: ""
    },
    fontType: "text",
    fontStyle: "none",
    animation: {
      event: "none",
      type: "fade",
      duration: 1,
      delay: 0
    }
  }
};
