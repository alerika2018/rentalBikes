import React from "react";
import { useRef, useState, useEffect } from "react";
import { provinces } from "./provinces.js";
import { hours } from "./hours.js";
import { Container } from "./canvasNewBikeForm.style.js";
import Button from "../button/button.jsx";
import { theme } from "../../theme.js";
import CanvasNewBikeFormAddRental from "./CanvasNewBikeFormAddRental.jsx";
import axios from "axios";
import { validateFormFields } from "../../assets/func.js";

const CanvasNewBikeForm = ({ setCounter, handleClose }) => {
  const key =
    "OTUwYzg1NjQzMzcyNGE1NWE2YjFlODU0YTU0NThiNzM6YjExNDUzY2EtNzQxZC00NTZhLTliZmEtYjYxNTQyZTBlOGIw";
  const [rentals, setRentals] = useState([0]);
  const [selectedProvince, setSelectedProvince] = useState();
  const [buttonValue, setButtonValue] = useState("Add more");
  const [storeHours, setStoreHours] = useState();
  const [displaySubmit, setDisplaySubmit] = useState("none");
  const [bikeRentals, setBikeRentals] = useState([]);
  const [showForm, setShowForm] = useState(true);
  const [showFormBikes, setShowFormBikes] = useState(false);
  const [storeObj, setStoreObj] = useState({
    storeName: "",
    storeAddress: "",
    storeProvince: "",
    storeCity: "",
    storePhone: "",
    storeEmail: "",
    storeWebsite: "",
    storeDescription: "",
    storeHours: [],
    storeRentals: [],
    latLng: [],
  });
  const [messages, setMessages] = useState("");

  const arrDays = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  const handleProvinceSelection = (e) => {
    setSelectedProvince(e.target.value);
  };
  const [postErrors, setPostErrors] = useState();

  const handleNewRentalOption = (e) => {
    e.preventDefault();

    if (rentals.length <= 4) {
      setRentals((prev) => [...prev, prev.length]);
    } else {
      setButtonValue("Save information");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("/api/v1/store", storeObj)
      .then((res) => {
        // console.log("Store saved");
        setCounter((prev) => prev + 1);
        handleClose(true);
      })
      .catch((error) => {
        console.log("ERROR AT SAVING STORE:", error.response.data);
        setPostErrors(error.response.data);
      });
  };

  const handleNext = (e) => {
    e.preventDefault();
    const message = validateFormFields(storeObj);
    setMessages(message);

    if (message !== "") {
      return;
    } else {
      //API key to get coordinates based on address
      const addressFetch = `https://api.myptv.com/geocoding/v1/locations/by-address?country=Canada&locality=${storeObj.storeCity.replace(
        " ",
        "%20"
      )}&street=${storeObj.storeAddress.replace(" ", "%20")}`;

      // console.log(" Obj: ", storeObj);

      fetch(addressFetch, {
        method: "GET",
        headers: { apiKey: key, "Content-Type": "application/json" },
      })
        .then((response) => {
          return response.json();
        })
        .then((result) => {
          setStoreObj((prev) => ({
            ...prev,
            latLng: [
              result.locations[0].referencePosition.latitude,
              result.locations[0].referencePosition.longitude,
            ],
          }));
        });

      setShowForm(false);
      setShowFormBikes(true);
    }
  };

  const handleBack = (e) => {
    e.preventDefault();
    setShowForm(true);
    setShowFormBikes(false);
  };

  useEffect(() => {
    setStoreObj((prev) => ({ ...prev, storeRentals: bikeRentals }));
  }, [bikeRentals]);
  useEffect(() => {
    setStoreObj((prev) => ({ ...prev, storeHours: storeHours }));
  }, [storeHours]);

  const style = { fontSize: "1rem" };

  return (
    <Container>
      {showForm && (
        <form id="mainForm">
          <div id="div1">
            <label htmlFor="storeName">
              Store Name<span>*</span>
            </label>
            <input
              defaultValue={storeObj.storeName}
              id="storeName"
              name="storeName"
              type="text"
              required
              onChange={(event) => {
                return setStoreObj((prev) => ({
                  ...prev,
                  storeName: event.target.value,
                }));
              }}
            />
          </div>
          <div id="div2">
            <label htmlFor="address">
              Address<span>*</span>
            </label>
            <input
              defaultValue={storeObj.storeAddress}
              id="address"
              name="address"
              type="text"
              required
              onChange={(event) => {
                return setStoreObj((prev) => ({
                  ...prev,
                  storeAddress: event.target.value,
                }));
              }}
            />
          </div>
          <div id="div3">
            <label htmlFor="province">
              Province<span>*</span>
            </label>
            <select
              defaultValue={storeObj.storeProvince || "default"}
              id="province"
              name="province"
              // defaultValue="default"
              required
              onChange={(event) => {
                handleProvinceSelection(event);
                return setStoreObj((prev) => ({
                  ...prev,
                  storeProvince: event.target.value,
                }));
              }}
            >
              <option disabled value="default">
                Select a province
              </option>
              {provinces.map((province) => (
                <option value={province.name} key={province.name}>
                  {province.name}
                </option>
              ))}
            </select>
          </div>
          <div id="div4">
            <label htmlFor="city">
              City<span>*</span>
            </label>
            <select
              defaultValue={storeObj.storeCity || "default"}
              id="city"
              name="city"
              required
              onChange={(event) => {
                return setStoreObj((prev) => ({
                  ...prev,
                  storeCity: event.target.value,
                }));
              }}
            >
              <option disabled value="default">
                Select a city
              </option>
              {provinces
                .filter((province) => province.name == selectedProvince)
                .map((province) =>
                  province.cities.sort().map((city) => (
                    <option value={city} key={city}>
                      {city}
                    </option>
                  ))
                )}
            </select>
          </div>
          <div id="div5">
            <label htmlFor="phone">Phone number</label>
            <input
              defaultValue={storeObj.storePhone}
              name="phone"
              id="phone"
              type="tel"
              onChange={(event) => {
                return setStoreObj((prev) => ({
                  ...prev,
                  storePhone: event.target.value,
                }));
              }}
            />
          </div>
          <div id="div6">
            <label htmlFor="email">
              email<span>*</span>
            </label>
            <input
              defaultValue={storeObj.storeEmail}
              name="email"
              id="email"
              type="email"
              required
              onChange={(event) => {
                return setStoreObj((prev) => ({
                  ...prev,
                  storeEmail: event.target.value,
                }));
              }}
            />
          </div>
          <div id="div7">
            <label htmlFor="website">
              Website<span>*</span>
            </label>
            <input
              defaultValue={storeObj.storeWebsite}
              name="website"
              id="website"
              type="url"
              onChange={(event) => {
                return setStoreObj((prev) => ({
                  ...prev,
                  storeWebsite: event.target.value,
                }));
              }}
            />
          </div>
          <div id="div8">
            <label htmlFor="description">
              Description<span>*</span>
            </label>
            <textarea
              defaultValue={storeObj.storeDescription}
              rows="6"
              name="description"
              id="description"
              placeholder="Please insert a short description about the store and services provided."
              onChange={(event) => {
                return setStoreObj((prev) => ({
                  ...prev,
                  storeDescription: event.target.value,
                }));
              }}
            />
          </div>
          <div id="div9">
            <label htmlFor="hours">Hours</label>
            <div id="hours">
              {arrDays.map((day, index) => (
                <div id={day} key={day}>
                  <label>{day}</label>
                  <select
                    onChange={(event) => {
                      if (event.target.value !== "default") {
                        return setStoreHours((prevHours) => ({
                          ...prevHours,
                          [day.concat("DateInit")]: event.target.value,
                        }));
                      } else {
                        delete storeHours[day.concat("DateInit")];
                        return setStoreHours(storeHours);
                      }
                    }}
                    id={day.concat("DateInit")}
                    name={day.concat("DateInit")}
                    defaultValue={
                      storeHours?.[day.concat("DateInit")] || "default"
                    }
                  >
                    <option value="default"></option>
                    {hours.map((time) => (
                      <option value={time} key={time}>
                        {time}
                      </option>
                    ))}
                  </select>
                  <select
                    onChange={(event) => {
                      if (event.target.value !== "default") {
                        return setStoreHours((prevHours) => ({
                          ...prevHours,
                          [day.concat("DateEnd")]: event.target.value,
                        }));
                      } else {
                        delete storeHours[day.concat("DateEnd")];
                        return setStoreHours(storeHours);
                      }
                    }}
                    id={day.concat("DateEnd")}
                    name={day.concat("DateEnd")}
                    defaultValue={
                      storeHours?.[day.concat("DateEnd")] || "default"
                    }
                  >
                    <option value="default"></option>
                    {hours.map((time) => (
                      <option value={time} key={time}>
                        {time}
                      </option>
                    ))}
                  </select>
                </div>
              ))}
            </div>
          </div>

          <div id="divNext">
            <div id="divMessages">{messages}</div>
            <Button
              width="50%"
              bgColor={theme.colors.lightPurple}
              bgColorHover={theme.colors.gray}
              color={theme.colors.secondary}
              colorHover={theme.colors.primary}
              title={"Next"}
              onClick={(e) => handleNext(e)}
              style={style}
            ></Button>
          </div>
        </form>
      )}

      {showFormBikes && (
        <form id="bikesForm" onSubmit={(e) => handleSubmit(e)}>
          <div id="divButtonAddRental">
            <Button
              width="32px"
              height="32px"
              bgColor={theme.colors.lightPurple}
              bgColorHover={theme.colors.gray}
              color={theme.colors.secondary}
              colorHover={theme.colors.primary}
              title="+"
              borderRadius="50%"
              onClick={handleNewRentalOption}
            />
          </div>

          <div id="divBikeRentalsArray">
            {rentals.map((index) => (
              <div key={index}>
                <CanvasNewBikeFormAddRental
                  bikeRentals={bikeRentals}
                  setBikeRentals={setBikeRentals}
                  position={index}
                  setDisplaySubmit={setDisplaySubmit}
                  setRentals={setRentals}
                  rentals={rentals}
                />
              </div>
            ))}
          </div>
          <div id="divErrors">
            {postErrors?.map((error, index) => (
              <label key={index}>{error.message}</label>
            ))}
          </div>

          <div id="divSubmit">
            <Button
              // style={{ display: displaySubmit }}
              width="150px"
              bgColor={theme.colors.gray}
              color={theme.colors.secondary}
              colorHover={theme.colors.primary}
              onClick={(e) => handleBack(e)}
              title={"Back"}
            ></Button>
            <Button
              style={{ display: displaySubmit }}
              width="150px"
              bgColor={theme.colors.lightPurple}
              color={theme.colors.secondary}
              colorHover={theme.colors.primary}
              title={"Submit"}
              onClick={(e) => handleSubmit(e)}
            ></Button>
          </div>
        </form>
      )}
    </Container>
  );
};

export default CanvasNewBikeForm;
