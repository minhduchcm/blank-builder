import { fromJS } from "immutable";
import { SELECT_SECTION } from "../../const";

export default (state = fromJS({}), action) => {
  switch (action.type) {
    case SELECT_SECTION:
      return fromJS({ id: action.id, childWidget: action.childWidget });
    default:
      return state;
  }
};
