import React from "react";
import { Container } from "./storeDetail.style.js";
import { useLocation } from "react-router";
import { useState, useEffect } from "react";
import axios from "axios";
import Map from "../../components/map/map.jsx";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

const StoreDetail = () => {
  //useLocation to get props from Link
  const location = useLocation();
  const { id, picture } = location.state;
  const [store, setStore] = useState();
  const [latLng, setLatLng] = useState();

  useEffect(() => {
    axios
      .get(`/api/store/${id}`)
      .then((res) => {
        setStore(res.data.data);

        setLatLng({
          lat: res.data.data.latLng[0],
          lng: res.data.data.latLng[1],
        });
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <Container>
      {store && (
        <>
          <Link
            id="linkBack"
            to={{
              pathname: "/store",
            }}
          >
            <FaArrowLeft /> Back
          </Link>

          <div id="divImage">
            <img src={picture} alt="" />
          </div>
          <div id="divStoreInfo">
            <h1>{store.storeName}</h1>
            <h2>Address: </h2>
            <p>
              {store.storeAddress +
                ` ` +
                store.storeCity +
                ` ` +
                store.storeProvince}
            </p>
            <h2>Email</h2>
            <p>{store.storeEmail}</p>
            <h2>Phone</h2>
            <p>{store.storePhone}</p>
            <h2>Website</h2>
            <p>
              <a href={store.storeWebsite} target="_blank">
                {store.storeWebsite}
              </a>
            </p>
          </div>

          <div id="divDescription">
            <h2>Description and Services</h2>
            <p>{store.storeDescription}</p>
          </div>

          <div id="divStoreHours">
            <h3>Store Hours</h3>

            <h2>Monday</h2>

            {store.storeHours[0]?.MondayDateInit &&
            store.storeHours[0]?.MondayDateEnd ? (
              <p>
                From: <span>{store.storeHours[0].MondayDateInit}</span> to:
                <span>{store.storeHours[0].MondayDateEnd}</span>{" "}
              </p>
            ) : (
              <p>Closed</p>
            )}

            <h2>Tuesday</h2>

            {store.storeHours[0]?.TuesdayDateInit &&
            store.storeHours[0]?.TuesdayDateEnd ? (
              <p>
                From: <span>{store.storeHours[0].TuesdayDateInit}</span> to:
                <span>{store.storeHours[0].TuesdayDateEnd}</span>{" "}
              </p>
            ) : (
              <p>Closed</p>
            )}

            <h2>Wednesday</h2>

            {store.storeHours[0]?.WednesdayDateInit &&
            store.storeHours[0]?.WednesdayDateEnd ? (
              <p>
                From: <span>{store.storeHours[0].WednesdayDateInit}</span> to:
                <span>{store.storeHours[0].WednesdayDateEnd}</span>{" "}
              </p>
            ) : (
              <p>Closed</p>
            )}

            <h2>Thursday</h2>

            {store.storeHours[0]?.ThursdayDateInit &&
            store.storeHours[0]?.ThursdayDateEnd ? (
              <p>
                From: <span>{store.storeHours[0].ThursdayDateInit}</span> to:
                <span>{store.storeHours[0].ThursdayDateEnd}</span>{" "}
              </p>
            ) : (
              <p>Closed</p>
            )}

            <h2>Friday</h2>

            {store.storeHours[0]?.FridayDateInit &&
            store.storeHours[0]?.FridayDateEnd ? (
              <p>
                From: <span>{store.storeHours[0].FridayDateInit}</span> to:
                <span>{store.storeHours[0].FridayDateEnd}</span>{" "}
              </p>
            ) : (
              <p>Closed</p>
            )}
            <h2>Saturday</h2>

            {store.storeHours[0]?.SaturdayDateInit &&
            store.storeHours[0]?.SaturdayDateEnd ? (
              <p>
                From: <span>{store.storeHours[0].SaturdayDateInit}</span> to:
                <span>{store.storeHours[0].SaturdayDateEnd}</span>{" "}
              </p>
            ) : (
              <p>Closed</p>
            )}

            <h2>Sunday</h2>

            {store.storeHours[0]?.SundayDateInit &&
            store.storeHours[0]?.SundayDateEnd ? (
              <p>
                From: <span>{store.storeHours[0].SundayDateInit}</span> to:
                <span>{store.storeHours[0].SundayDateEnd}</span>{" "}
              </p>
            ) : (
              <p>Closed</p>
            )}
          </div>

          <div id="divStoreRentals">
            <h3>Store Rentals</h3>

            {store.storeRentals.map((rent) => (
              <div className="divChildStoreRental" key={rent._id}>
                <h2 className="bikeType">
                  Type: <span>{rent.bikeType}</span>
                </h2>

                <h2>Description</h2>
                <p>{rent.bikeDescription}</p>
                <div>
                  <h2>
                    Time: <span>{rent.bikeTime}</span> Price:{" "}
                    <span>{rent.bikePrice}</span>
                  </h2>

                  {rent.bikeTime2 !== "" && (
                    <>
                      <h2>
                        Time: <span>{rent.bikeTime2}</span> Price:{" "}
                        <span>{rent.bikePrice2}</span>
                      </h2>
                    </>
                  )}
                  {rent.bikeTime3 !== "" && (
                    <>
                      <h2>
                        Time: <span>{rent.bikeTime3}</span> Price:{" "}
                        <span>{rent.bikePrice3}</span>
                      </h2>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>

          {latLng && (
            <div className="map">
              <Map latLng={latLng} />
            </div>
          )}
        </>
      )}
    </Container>
  );
};

export default StoreDetail;
