import { ContentState, convertToRaw } from "draft-js";

export default function createDefaultData(str) {
  return convertToRaw(ContentState.createFromText(str));
}
