import {configureStore, combineReducers} from '@reduxjs/toolkit';
import userReducer from './user';
  
const reducer = combineReducers({
  user: userReducer,
})
  
export const store = configureStore({
  reducer: reducer,
});
