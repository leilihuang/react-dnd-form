export const SAVE_FORM_DATA = "SAVE_FORM_DATA";
export const SET_COMMON = "SET_COMMON";

export const setCommon = (data) => {
  return {
    type: SET_COMMON,
    data,
  };
};
