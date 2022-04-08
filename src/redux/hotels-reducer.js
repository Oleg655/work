const initialState = {
  hotels: [{ name: "", price: 23924, days: 1, stars: 3 }],

  favourites: 3,
};

const hotelsReducer = (state = initialState, action) => {
  return state;
};

export default hotelsReducer;
