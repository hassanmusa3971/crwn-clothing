import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import PreviewCollection from "../preview-collection/preview.collection.component";
import { selectShopDataCollections } from "../../redux/shop/shop.selector";

import "./collection-overview.style.scss";

const CollectionOverview = ({ collections }) => (
  <div className="collections-overview">
    {collections.map(({ id, ...otherCollectionProps }) => (
      <PreviewCollection key={id} {...otherCollectionProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: selectShopDataCollections,
});

export default connect(mapStateToProps)(CollectionOverview)
