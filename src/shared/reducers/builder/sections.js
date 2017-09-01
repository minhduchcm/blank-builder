import { fromJS } from "immutable";
import {
  ADD_SECTION,
  MOVE_SECTION,
  SET_SECTION_DATA,
  DELETE_SECTION
} from "../../const";
import { v4 as uuid } from "uuid";

export default (state = fromJS([]), action) => {
  switch (action.type) {
    case ADD_SECTION:
      return state.insert(
        action.index,
        fromJS({
          id: uuid(),
          type: action.templateType,
          data: action.templateData
        })
      );
    case MOVE_SECTION: {
      let row = state.get(action.index);
      return state.delete(action.index).insert(action.toindex, row);
    }
    case DELETE_SECTION: {
      return state.delete(action.index);
    }
    case SET_SECTION_DATA: {
      return state.update(action.index, value => {
        return value.mergeDeep(fromJS({ data: action.data }));
      });
    }
    default:
      return state;
  }
};
