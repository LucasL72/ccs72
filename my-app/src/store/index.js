/*
 * React
 * ***** */
import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

/*
 * Reducers
 * ******** */
import { ArticlesReducer } from "./reducers/ArticlesReducer";
import { EventReducer } from "./reducers/EventReducer";
import { UsersReducer } from "./reducers/UsersReducer";
import { MessReducer } from "./reducers/MessReducer";
//import { PicsReducer } from "./reducers/PicsReducers";

/*
 * All (Root) Reducers
 * ******************* */
const rootReducer = combineReducers({
  articles: ArticlesReducer,
  events: EventReducer,
  users:UsersReducer,
  messages: MessReducer,
  // pics:PicsReducer,
});

/*
 * Store export
 * ************ */
export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
); // Dev
// export const store = createStore(rootReducer); // Prod
