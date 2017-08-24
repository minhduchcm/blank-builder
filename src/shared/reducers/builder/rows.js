import { fromJS } from "immutable";
import { ADD_ROW, MOVE_ROW } from "../../const";
import { v4 as uuid } from "uuid";

export default (state = fromJS([]), action) => {
  switch (action.type) {
    case ADD_ROW:
      return state.push(
        fromJS({
          id: uuid(),
          text: "Demo Rows " + state.count()
        })
      );
    case MOVE_ROW: {
      let row = state.get(action.index);
      return state.delete(action.index).insert(action.toindex, row);
    }
    default:
      return state;
  }
};
