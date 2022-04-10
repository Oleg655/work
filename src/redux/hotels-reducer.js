import photoOne from "../assets/RectangleOne.png";
import photoTwo from "../assets/RectangleTwo.png";
import photoThree from "../assets/RectangleThree.png";
import photoFour from "../assets/four.png";



const initialState = {
  hotels: [
    {
      fullName: '',
      id: Math.random(),
      label: "Moscow Marriott Grand Hotel",
      location: {lon: 0, lat: 0},
      locationId: 0,
      locationName: "Москва, Россия",
      _score: 0,
      price: 23924,
      days: 1,
      stars: 3,
      
    },
  ],
  images: [photoOne, photoTwo, photoThree],

  favourites: [],
};

const hotelsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_HOTEL":
      return {
        ...state,
        hotels: [...action.hotelData],
      };
    case "ADD_FAVOURITES":
      return {
        ...state,
        favourites: [{ ...action.hotel }, ...state.favourites],
      };
    case "DELETE_FROM_FAVOURITES":
      return {
        ...state,
        favourites: state.favourites.filter((hotel) => hotel !== action.hotel),
      };
    default:
      return state;
  }
};

export default hotelsReducer;

export const addFavourites = (hotel) => {
  return { type: "ADD_FAVOURITES", hotel };
};

export const deleteFromFavourites = (hotel) => {
  return { type: "DELETE_FROM_FAVOURITES", hotel };
};

export const getHotel = (hotelData) => {
  return { type: "SET_HOTEL", hotelData };
};
