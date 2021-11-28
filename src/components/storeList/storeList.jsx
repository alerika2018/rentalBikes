import { Container } from "./storeList.style.js";

import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import { FaShareSquare } from "react-icons/fa";

const StoreList = ({ setTotalStoresFound, totalStoresFound, counter }) => {
  const [storeList, setStoreList] = useState([]);
  const [getPics, setGetPics] = useState([]);

  useEffect(() => {
    axios
      .get("/api/store")
      .then((results) => {
        setStoreList(results.data);

        setTotalStoresFound(results.data.length);

        axios
          .get(
            `https://api.unsplash.com/photos/random/?query=bike&count=${results.data.length}&client_id=KkP-5iBFj6rnEwJkeBH6Rd19sxRuBK4JtqZChiKkisg`
          )
          .then((res) => {
            res.data.map((item) => {
              setGetPics((prev) => [...prev, item.urls.thumb]);
            });
          })
          .catch((error) => console.log(error));
      })
      .catch((error) => console.log(error));
  }, [counter]);

  return (
    <Container>
      {storeList &&
        storeList.map((store, index) => (
          <div className="store" key={store.data._id}>
            <div
              className="divPicture"
              style={{
                backgroundImage: "url(" + getPics[index] + ")",
                backgroundSize: "cover",
              }}
            >
              <Link
                to={{
                  pathname: "/store-detail",
                  state: { id: store.data._id, picture: getPics[index] },
                }}
              >
                <FaShareSquare />
              </Link>
            </div>
            <div>
              <h2>{store.data.storeName}</h2>
              <p>{store.data.storeAddress}</p>
              <a href={store.data.storeWebsite} target="_blank">
                {store.data.storeWebsite}
              </a>
            </div>
          </div>
        ))}
    </Container>
  );
};

export default StoreList;
