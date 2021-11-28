export const validateFormFields = (storeObj) => {
  let message = "";
  if (storeObj.storeName == "") {
    message = "Please provide the store name";
  }
  if (storeObj.storeAddress == "") {
    message += "\nPlease provide the store address";
  }
  if (storeObj.storeProvince == "") {
    message += "\nPlease select the province";
  }
  if (storeObj.storeCity == "") {
    message += "\nPlease select the city";
  }
  if (storeObj.storeEmail == "") {
    message += "\nPlease provide an email";
  }
  if (storeObj.storeWebsite == "") {
    message += "\nPlease provide store Website";
  }
  if (storeObj.storeDescription == "") {
    message += "\nPlease provide store description";
  }
  return message;
};

export const validateRentalFields = (rental) => {
  let message = "";
  if (rental.bikeType === "") {
    message = "Plase select the bike type";
  }
  if (rental.bikeDescription === "") {
    message += "\n Plase add a description for this rental";
  }
  if (rental.bikeTime === "") {
    message += "\n Plase add a time";
  }
  if (rental.bikePrice === "") {
    message += "\n Plase add a price";
  }
  return message;
};
