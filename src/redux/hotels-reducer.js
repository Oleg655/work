import photoOne from "../assets/RectangleOne.png";
import photoTwo from "../assets/RectangleTwo.png";
import photoThree from "../assets/RectangleThree.png";

const initialState = {
  hotels: [{ name: "", price: 23924, days: 1, stars: 3 }],
  images: [photoOne, photoTwo, photoThree],

  favourites: [],
};

const hotelsReducer = (state = initialState, action) => {
  return state;
};

export default hotelsReducer;
