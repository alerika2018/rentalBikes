export const validateFormFields = (storeObj, setMessages) => {
  setMessages("");
  if (storeObj.storeName == "") {
    setMessages("Please provide the store name");
  }
  if (storeObj.storeAddress == "") {
    setMessages((prev) => prev + "\nPlease provide the store address");
  }
  if (storeObj.storeProvince == "") {
    setMessages((prev) => prev + "\nPlease select the province");
  }
  if (storeObj.storeCity == "") {
    setMessages((prev) => prev + "\nPlease select the city");
  }
  if (storeObj.storeEmail == "") {
    setMessages((prev) => prev + "\nPlease provide an email");
  }
  if (storeObj.storeWebsite == "") {
    setMessages((prev) => prev + "\nPlease provide store Website");
  }
  if (storeObj.storeDescription == "") {
    setMessages((prev) => prev + "\nPlease provide store description");
  }
};

export const validateRentalFields = (rental, setRentalMessages) => {
  setRentalMessages("");
  if (rental.bikeType === "") {
    setRentalMessages("Plase select the bike type");
  }
  if (rental.bikeDescription === "") {
    setRentalMessages(
      (prev) => prev + "\n Plase add a description for this rental"
    );
  }
  if (rental.bikeTime === "") {
    setRentalMessages((prev) => prev + "\n Plase add a time");
  }
  if (rental.bikePrice === "") {
    setRentalMessages((prev) => prev + "\n Plase add a price");
  }
};
