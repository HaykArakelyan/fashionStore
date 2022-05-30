import { configureStore, combineReducers } from "@reduxjs/toolkit";
import getCarouselData from "./carouselReducers";

import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER
} from "redux-persist";
// import storage from "redux-persist/lib/storage";
import AsyncStorage from "@react-native-async-storage/async-storage";

const reducer = combineReducers({
    getCarouselData,
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
            serializableCheck: {
                ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
            },
            // immutableCheck: false,
            // serializableCheck: false,
        })
})


export const Persistor = persistStore(Store)
export default Store;