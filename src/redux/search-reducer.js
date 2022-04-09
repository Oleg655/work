const date = new Date();

const initialState = {
  location: "Москва",
  date: {
    day: date.getDate(),
    mounth: date.getMonth(),
    year: date.getFullYear(),
  },
  days: 1,
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE_CITY":
      return {
        ...state,
        location: action.text,
      };
    case "CHANGE_DAYS":
      return {
        ...state,
        days: action.newDays,
      };
    default:
      return state;
  }
};

export default searchReducer;

export const changeCity = (text) => {
  return { type: "CHANGE_CITY", text };
};
export const changeDays = (newDays) => {
  return { type: "CHANGE_DAYS", newDays };
};
