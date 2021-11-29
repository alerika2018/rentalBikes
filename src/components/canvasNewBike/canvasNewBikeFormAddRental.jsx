import React from "react";
import { useState } from "react";
import { Container } from "./canvasNewBikeFormAddRental.style.js";
import { validateRentalFields } from ".././../assets/func.js";
import { FaTrashAlt } from "react-icons/fa";

const CanvasNewBikeFormAddRental = ({
  bikeRentals,
  setBikeRentals,
  position,
  setDisplaySubmit,
  // setRentals,
}) => {
  const [rental, setRental] = useState({
    position: position,
    bikeType: bikeRentals[position - 1]?.bikeType || "",
    bikeDescription: bikeRentals[position - 1]?.bikeDescription || "",
    bikeTime: bikeRentals[position - 1]?.bikeTime || "",
    bikePrice: bikeRentals[position - 1]?.bikePrice || "",
    bikeTime2: bikeRentals[position - 1]?.bikeTime2 || "",
    bikePrice2: bikeRentals[position - 1]?.bikePrice2 || "",
    bikeTime3: bikeRentals[position - 1]?.bikeTime3 || "",
    bikePrice3: bikeRentals[position - 1]?.bikePrice3 || "",
  });
  const [rentalMessages, setRentalMessages] = useState("");

  const handleAddBike = (e) => {
    e.preventDefault();

    const message = validateRentalFields(rental);
    setRentalMessages(message);
    if (message !== "") {
      return;
    } else {
      const index = bikeRentals.findIndex((bike) => bike.position === position);

      if (index !== -1) {
        const newa = bikeRentals;

        newa.splice(index, 1, rental);
        setRentalMessages("Bike rental updated");
        setBikeRentals(newa);
      } else {
        setRentalMessages("Bike rental saved");
        setBikeRentals((prev) => [...prev, rental]);
      }

      setDisplaySubmit("flex");
    }
  };

  const handleDelete = (e) => {
    e.preventDefault();
    // const index = bikeRentals.findIndex((bike) => bike.position === position);
    // const newa = bikeRentals;

    // setRentals((prev) => prev.splice(position, 1));
    // newa.splice(index, 1);
    // console.log("nuevo ya borrado", newa);
    // setBikeRentals(newa);
  };

  console.log("bike type", bikeRentals, bikeRentals[position - 1]?.bikeType);
  return (
    <Container>
      <div className="delete">
        <label id="lblBikeType" htmlFor="bikeType">
          Bike type<span>*</span>
        </label>
        <button onClick={(e) => handleDelete(e, position)}>
          <FaTrashAlt />
        </button>
      </div>

      <select
        defaultValue={bikeRentals[position - 1]?.bikeType || "default"}
        name="bikeType"
        onChange={(event) => {
          return setRental((prev) => ({
            ...prev,
            bikeType: event.target.value,
          }));
        }}
        required
      >
        <option disabled value="default">
          Select a Bike
        </option>
        <option value="Bike">Bike</option>
        <option value="Tandem Bike">Tandem Bike</option>
        <option value="Trail-A-Bike">Trail-A-Bike</option>
        <option value="Baby Seats">Baby Seats</option>
        <option value="eBike">eBike</option>
      </select>
      <label htmlFor="description">
        Description<span>*</span>
      </label>
      <textarea
        name="description"
        rows=" 5"
        onChange={(event) => {
          return setRental((prev) => ({
            ...prev,
            bikeDescription: event.target.value,
          }));
        }}
        defaultValue={bikeRentals[position - 1]?.bikeDescription}
        required
      />
      <div id="divTimePrices">
        <div id="divPriceTime1">
          <div id="divTime">
            <label htmlFor="time1">
              Time<span>*</span>
            </label>
            <input
              onChange={(event) => {
                return setRental((prev) => ({
                  ...prev,
                  bikeTime: event.target.value,
                }));
              }}
              type="text"
              name="time1"
              placeholder="e.g. 2 hours"
              required
              defaultValue={bikeRentals[position - 1]?.bikeTime}
            />
          </div>
          <div id="divPrice">
            <label htmlFor="price1">
              Price<span>*</span>
            </label>
            <input
              onChange={(event) => {
                return setRental((prev) => ({
                  ...prev,
                  bikePrice: event.target.value,
                }));
              }}
              type="number"
              step="0.1"
              min="0"
              name="price1"
              required
              defaultValue={bikeRentals[position - 1]?.bikePrice}
            />
          </div>
        </div>
        {/* second price/time */}
        <div id="divPriceTime2">
          <div id="divTime">
            <label htmlFor="time2">Time</label>
            <input
              onChange={(event) => {
                return setRental((prev) => ({
                  ...prev,
                  bikeTime2: event.target.value,
                }));
              }}
              type="text"
              name="time2"
              placeholder="e.g. 2 hours"
              defaultValue={bikeRentals[position - 1]?.bikeTime2}
            />
          </div>
          <div id="divPrice">
            <label htmlFor="price2">Price</label>
            <input
              onChange={(event) => {
                return setRental((prev) => ({
                  ...prev,
                  bikePrice2: event.target.value,
                }));
              }}
              type="number"
              step="0.1"
              min="0"
              name="price2"
              defaultValue={bikeRentals[position - 1]?.bikePrice2}
            />
          </div>
        </div>
        {/* Third price/time */}
        <div id="divPriceTime3">
          <div id="divTime">
            <label htmlFor="time3">Time</label>
            <input
              onChange={(event) => {
                return setRental((prev) => ({
                  ...prev,
                  bikeTime3: event.target.value,
                }));
              }}
              type="text"
              name="time3"
              placeholder="e.g. 2 hours"
              defaultValue={bikeRentals[position - 1]?.bikeTime3}
            />
          </div>
          <div id="divPrice">
            <label htmlFor="price3">Price</label>
            <input
              onChange={(event) => {
                return setRental((prev) => ({
                  ...prev,
                  bikePrice3: event.target.value,
                }));
              }}
              type="number"
              step="0.1"
              min="0"
              name="price3"
              defaultValue={bikeRentals[position - 1]?.bikePrice3}
            />
          </div>
        </div>
      </div>
      <div id="divSave">
        <div id="divMessages">{rentalMessages}</div>
        <button onClick={(e) => handleAddBike(e)}>Save Rental</button>
      </div>
    </Container>
  );
};
export default CanvasNewBikeFormAddRental;
