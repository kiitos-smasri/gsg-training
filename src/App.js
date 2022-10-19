import { useState } from "react";

function Cup({ guest }) {
  return <h2>Tea cup for guest #{guest}</h2>;
}

export default function TeaSet() {
  return (
    <>
      <Cup guest={1} />
      <Cup guest={2} />
      <Cup guest={3} />
      <Cup guest={4} />
    </>
  );
}

/**
 * // Array state
 * Adding/removing to array -> List
 * Transforming array -> Shape
 * Replacing items in array -> CountryList
 * Inserting into array -> InsertList
 * Updating object in array -> BucketList
 * Exercise -> ShoppingCart
 * exercise-pure-1
 */
