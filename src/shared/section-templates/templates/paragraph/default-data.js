import { ContentState, convertToRaw } from "draft-js";
import createDefaultData from "../../../widgets/draftjs/default-data";

export default {
  title: {
    contentState: createDefaultData(
      "Esse deserunt ad do pariatur voluptate elit sint minim occaecat cillum ea aliqua nulla."
    ),
    alignment: "center",
    fontType: "heading",
    fontStyle: "none"
  },
  content: {
    contentState: createDefaultData(
      "Sit consectetur cupidatat ad excepteur. Officia nisi aliqua est reprehenderit ullamco mollit duis sit. Duis reprehenderit in incididunt ut cillum consequat fugiat veniam eu ipsum do irure consectetur eu. Sit consectetur cupidatat ad excepteur. Officia nisi aliqua est reprehenderit ullamco mollit duis sit. Duis reprehenderit in incididunt ut cillum consequat fugiat veniam eu ipsum do irure consectetur eu."
    ),
    alignment: "justify",
    fontType: "text",
    fontStyle: "none"
  }
};
