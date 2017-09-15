import { fromJS } from "immutable";
import {
  ADD_SECTION,
  MOVE_SECTION,
  SET_SECTION_DATA,
  DELETE_SECTION
} from "../../const";
import { v4 as uuid } from "uuid";

export default (state = fromJS({}), action) => {
  switch (action.type) {
    case ADD_SECTION:
      const section = {
        id: uuid(),
        index: action.index,
        type: action.templateType,
        data: action.templateData
      };
      return state
        .map(section => {
          const index = section.get("index");
          if (index >= action.index) return section.set("index", index + 1);
          return section;
        })
        .set(section.id, fromJS(section));
    case MOVE_SECTION: {
      if (action.index < action.toindex)
        return state.map(section => {
          let index = section.get("index");
          if (index == action.index)
            return section.set("index", action.toindex);
          else if (index > action.index && index <= action.toindex)
            return section.set("index", index - 1);
          return section;
        });
      else
        return state.map(section => {
          let index = section.get("index");
          if (index == action.index)
            return section.set("index", action.toindex);
          else if (index >= action.toindex && index < action.index)
            return section.set("index", index + 1);
          return section;
        });
      // let row = state.get(action.index);
      // return state.delete(action.index).insert(action.toindex, row);
    }
    case DELETE_SECTION: {
      return state.delete(action.index);
    }
    case SET_SECTION_DATA: {
      return state.update(action.id, value => {
        return value.mergeDeep(fromJS({ data: action.data }));
      });
    }
    default:
      return state;
  }
};
