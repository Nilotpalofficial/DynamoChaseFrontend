import { GET_LOADING, Get_Game,  } from "./constant";

export const gameData = (state = { loading: false, data: [] }, action) => {
  switch (action.type) {
    case Get_Game:
      return { ...state, data: action.data };
    case GET_LOADING:
      return { ...state, loading: action.payload };
    default:
      return state;
  }
};

