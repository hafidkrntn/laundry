import {
  legacy_createStore as createStore,
  compose,
  applyMiddleware,
  combineReducers,
} from "redux";
import thunk from "redux-thunk";
import transaksiReducer from "./transaksi/reducer";
import masterDataReducer from "./masterData/reducer";
import customerReducer from "./customer/reducer";
import authReducer from "./auth/reducer"
import downloadFileReducer from "./downloadFile/reducer"

const composerEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducers = combineReducers({
  auth: authReducer,
  downloadFile : downloadFileReducer,
  transaksi: transaksiReducer,
  masterData: masterDataReducer,
  customer: customerReducer,
});

const store = createStore(
  rootReducers,
  composerEnhancer(applyMiddleware(thunk))
);

export default store;
