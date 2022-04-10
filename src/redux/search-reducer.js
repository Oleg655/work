const date = new Date();

const day = date.getDate();
const month = date.getMonth();
const year = date.getFullYear();
const actualMonth = month + 1

const initialState = {
  location: "Москва",
  date: `${year}-${actualMonth < 10 ? "0" + actualMonth : actualMonth}-${
    day < 10 ? "0" + day : day
  }`,
  days: 1,
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE_CITY":
      debugger;
      return {
        ...state,
        location: action.text,
      };
    case "CHANGE_DAYS":
      return {
        ...state,
        days: action.newDays,
      };
    case "SET_DATE":
      debugger;
      return {
        ...state,
        date: action.newDate,
      };
    default:
      return state;
  }
};

export default searchReducer;

export const changeCity = (text) => {
  debugger;
  return { type: "CHANGE_CITY", text };
};
export const changeDays = (newDays) => {
  return { type: "CHANGE_DAYS", newDays };
};

export const setDate = (newDate) => {
  debugger;
  return { type: "SET_DATE", newDate };
};
