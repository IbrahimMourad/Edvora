import Cookies from 'js-cookie';
import { createContext, useReducer } from 'react';

export const Store = createContext();
const initialState = {
  //
  userInfo: Cookies.get('userInfo')
    ? JSON.parse(Cookies.get('userInfo'))
    : {
        station_code: 40,
        name: 'Dhruv Singh',
        profile_Key: 'url',
      },
  selectedKey: 'nearestRiders',
  isLoading: false,
};

function reducer(state, action) {
  switch (action.type) {
    case 'SET_MENU_TAB':
      return { ...state, selectedKey: action.payload };
    case 'SET_LOADING':
      return { ...state, isLoading: action.payload };

    default:
      return state;
  }
}

export function StoreProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };
  return <Store.Provider value={value}>{props.children}</Store.Provider>;
}
