import { configureStore, combineReducers } from "@reduxjs/toolkit";
import getCarouselData from "./carouselReducers";
import isGuideSkipped from "./guideReucer";
import isLoggedIn from "./loggedInReducer";


import AsyncStorage from "@react-native-async-storage/async-storage";
import {
    persistStore,
    persistReducer,
} from "redux-persist";

const reducer = combineReducers({
    getCarouselData,
    isGuideSkipped,
    isLoggedIn,
})


const persistConfig = {
    key: "persist-key",
    storage: AsyncStorage,
}

const persistedReducer = persistReducer(persistConfig, reducer)

const Store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            immutableCheck: false,
            serializableCheck: false,
        })
})


export const Persistor = persistStore(Store)
export default Store;