import photoOne from "../assets/RectangleOne.png";
import photoTwo from "../assets/RectangleTwo.png";
import photoThree from "../assets/RectangleThree.png";
import photoFour from "../assets/four.png";

const initialState = {
  hotels: [{ name: "sdsdvsdv", price: 23924, days: 1, stars: 3, id: 5 }],
  images: [photoOne, photoTwo, photoThree, photoFour],

  favourites: [],
};

const hotelsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_FAVOURITES":
      return{
        ...state,
        favourites: [
          ...state.favourites,
          ...state.hotels[action.id]
        ]
      }
    default:
      return state;
  }
};

export default hotelsReducer;

export const addFavourites = (id) => {
  return { type: "ADD_FAVOURITES", id };
};
