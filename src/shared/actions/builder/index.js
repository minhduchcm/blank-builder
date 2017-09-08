import {
  ADD_SECTION,
  MOVE_SECTION,
  DELETE_SECTION,
  SET_SECTION_DATA,
  SELECT_SECTION
} from "../../const";

export function addSection(index, templateType, templateData) {
  return { type: ADD_SECTION, index, templateType, templateData };
}

export function moveSection(index, toindex) {
  return { type: MOVE_SECTION, index, toindex };
}

export function selectSection(id, childWidget) {
  return { type: SELECT_SECTION, id, childWidget };
}

export function deleteSection(index) {
  return { type: DELETE_SECTION, index };
}

export function setSectionData(index, data) {
  return { type: SET_SECTION_DATA, index, data };
}
