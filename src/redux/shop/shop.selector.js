import { createSelector } from "reselect";


const selectCollection = state => state.collection;

export const selectShopDataCollections = createSelector(
          [selectCollection],
          collection => collection.collections
);