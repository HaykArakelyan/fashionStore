import { configureStore, combineReducers } from "@reduxjs/toolkit";
import getCarouselData from "./carouselReducers";
import isGuideSkipped from "./guideReucer";
import isLoggedIn from "./loggedInReducer";

import { setupListeners } from "@reduxjs/toolkit/query";
import { productsApi } from "./products";

import AsyncStorage from "@react-native-async-storage/async-storage";
import {
    persistStore,
    persistReducer,
} from "redux-persist";


const reducer = combineReducers({
    getCarouselData,
    isGuideSkipped,
    isLoggedIn,
    [productsApi.reducerPath]: productsApi.reducer,
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
        }).concat(productsApi.middleware)
})

setupListeners(Store.dispatch)

export const Persistor = persistStore(Store)
export default Store;