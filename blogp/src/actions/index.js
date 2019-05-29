import jsonPlaceHolder from "../apis/jsonPlaceHolder";

export const fetchPosts = () => async (dispatch) => {
        const response = await jsonPlaceHolder.get("/post");
        
        dispatch({type: "FETCH_POST", payload: response});
    }