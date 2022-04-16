import { createSelector } from "reselect";

/*const COLLECTION_ID_MAP = {
          hats: 1,
          sneakers: 2,
          jackets: 3,
          womens: 4,
          mens: 5
}*/


const selectCollection = state => state.collection;

export const selectShopDataCollections = createSelector(
          [selectCollection],
          collection => collection.collections
);

export const selectCollections = collectionUrlParam => createSelector(
          [selectShopDataCollections],
          collections => collections[collectionUrlParam]
);