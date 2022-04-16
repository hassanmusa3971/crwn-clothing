import React from "react";
import { useSelector } from 'react-redux';
import { useParams } from "react-router-dom";
import CollectionItem from "../../components/collection-item/collection-item.component";
import { selectCollections } from "../../redux/shop/shop.selector";
import "./collection.style.scss";

const CollectionPage = () => {
  const { collectionId } = useParams();
  const collection = useSelector(selectCollections(collectionId));
  const { title, items } = collection;
  console.log(collection);
  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};


export default CollectionPage;
