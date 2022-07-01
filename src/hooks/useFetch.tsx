import { useEffect, useReducer } from "react";

type TState = {
  status: "idle" | "fetching" | "success" | "failed";
  data: null | any[] | {};
  error: null | string;
};

type TAction = {
  type: string;
  payload: string | any[] | object;
};

const INITIAL_STATE: TState = {
  status: "idle",
  data: null,
  error: null,
};

const reducer = (state: TState, action: TAction): TState => {
  switch (action.type) {
    case "fetching":
      return { ...state, status: "fetching" };
    case "success":
      return { ...state, status: "success", data: action.payload };
    case "failed":
      return { ...state, status: "failed", error: action.payload as string };
    default:
      return state;
  }
};

const BASE_URL = "https://api.airtable.com/v0/appjWdL7YgpxIxCKA";

function useFetch(url: string, max: number = 3) {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  const fetchRestaurants = () => {
    dispatch({ type: "fetching", payload: "" });
    fetch(`${BASE_URL}/${url}?maxRecords=${max}&view=Grid%20view`, {
      headers: {
        Authorization: "Bearer keyfXgn8PL6pB3x32",
      },
    })
      .then((response) => {
        if (response.status !== 200) {
          throw new Error(`Unable to fetch ${url}`);
        }

        return response.json();
      })
      .then((data) => {
        dispatch({ type: "success", payload: data.records });
      })
      .catch((error) => dispatch({ type: "failed", payload: error.message }));
  };

  useEffect(() => {
    if (state.status !== "fetching") {
      fetchRestaurants();
    }

    // eslint-disable-next-line
  }, []);

  return { ...state };
}

export default useFetch;
