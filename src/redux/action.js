import { GET_LOADING, Set_Game, } from "./constant"
export const getGame = () => {
  console.log( "set game action call");
  return {
    type: Set_Game,
  };
};
export const setLoading = (loading) => ({
  type: GET_LOADING,
  payload: loading
});



