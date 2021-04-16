import { SET_COMMON } from "./action";

const initState = {
  formData: [], //表单数据集合
};

export default (state = initState, action) => {
  switch (action.type) {
    case SET_COMMON:
      return Object.assign({}, ...state, ...action.data);
    default:
      return state;
  }
};
