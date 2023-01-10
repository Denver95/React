
import { createStore, compose, combineReducers, applyMiddleware } from "redux";
import { profile_reducer } from './Profile/profile_reducer';
import { messages_Reducer } from './Messages/reducer'
import thunk from "redux-thunk";
import { persistStore, persistReducer } from 'redux-persist'
import storage from "redux-persist/lib/storage";


import { blogsReducer } from './Api_blogs/reducer'


const persistConfig = {
	key: 'root',
	storage,
	blacklist: ['blogs', 'messages', 'profile']
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
	profile: profile_reducer,
	messages: messages_Reducer,
	blogs: blogsReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = createStore(persistedReducer, composeEnhancers(applyMiddleware(thunk)))


export const persistor = persistStore(store)


