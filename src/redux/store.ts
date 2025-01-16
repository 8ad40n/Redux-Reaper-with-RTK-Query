import { configureStore } from '@reduxjs/toolkit'
import { pokemonApi } from './api/pokemon'
import { counterSlice } from './features/counter/counterSlice'
import { showSlice } from './features/show/showSlice'


export const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
        show: showSlice.reducer,
        [pokemonApi.reducerPath]: pokemonApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(pokemonApi.middleware),

})


// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch