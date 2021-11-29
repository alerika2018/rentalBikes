const joi = require("joi");
const validator = require("validator");

const validators = (req, res, next) => {
  const data = req.body;

  const bikeSchema = joi.object({
    storeName: joi
      .string()
      .empty("")
      .trim()
      .required()
      .min(2)
      .max(100)
      .messages({
        "any.required": "Please enter a name",
        "string.min": "Store name must have at least 2 characters",
        "string.max": "Store name can not have more than 100 characters",
      }),
    storeAddress: joi
      .string()
      .empty("")
      .trim()
      .required()
      .min(2)
      .max(250)
      .messages({
        "any.required": "Please enter an address",
        "string.min": "Store name must have at least 2 characters",
        "string.max": "Store name can not have more than 250 characters",
      }),
    storeProvince: joi
      .string()
      .required()
      .custom((value) => {
        if (
          [
            "Alberta",
            "British Columbia",
            "Manitoba",
            "New Brunswick",
            "Newfoundland",
            "Northwest Territories",
            "Nova Scotia",
            "Ontario",
            "Prince Edward Island",
            "Quebec",
            "Saskatchewan",
          ].includes(req.body.storeProvince) == false
        ) {
          throw new Error();
        } else {
          return value;
        }
      })
      .messages({
        "any.required": "Please select the province",
        "any.custom": "Please select an option from the dropdownlist ",
      }),
    storeCity: joi
      .string()
      .required()
      .custom((value) => {
        if (
          [
            "Airdrie",
            "Grande Prairie",
            "Red Deer",
            "Beaumont",
            "Hanna",
            "St. Albert",
            "Bonnyville",
            "Hinton",
            "Spruce Grove",
            "Brazeau",
            "Irricana",
            "Strathcona County",
            "Breton",
            "Lacombe",
            "Strathmore",
            "Calgary",
            "Leduc",
            "Sylvan Lake",
            "Camrose",
            "Lethbridge",
            "Swan Hills",
            "Canmore",
            "McLennan",
            "Taber",
            "Didzbury",
            "Medicine Hat",
            "Turner Valley",
            "Drayton Valley",
            "Olds",
            "Vermillion",
            "Edmonton",
            "Onoway",
            "Wood Buffalo",
            "Ft. Saskatchewan",
            "Provost",
            "Burnaby",
            "Lumby",
            "City of Port Moody",
            "Cache Creek",
            "Maple Ridge",
            "Prince George",
            "Castlegar",
            "Merritt",
            "Prince Rupert",
            "Chemainus",
            "Mission",
            "Richmond",
            "Chilliwack",
            "Nanaimo",
            "Saanich",
            "Clearwater",
            "Nelson",
            "Sooke",
            "Colwood",
            "New Westminster",
            "Sparwood",
            "Coquitlam",
            "North Cowichan",
            "Surrey",
            "Cranbrook",
            "North Vancouver",
            "Terrace",
            "Dawson Creek",
            "Tumbler",
            "Delta",
            "Osoyoos",
            "Vancouver",
            "Fernie",
            "Parksville",
            "Invermere",
            "Peace River",
            "Vernon",
            "Kamloops",
            "Penticton",
            "Victoria",
            "Kaslo",
            "Port Alberni",
            "Whistler",
            "Langley",
            "Port Hardy",
            "Birtle",
            "Flin Flon",
            "Swan River",
            "Brandon",
            "Snow Lake",
            "The Pas",
            "Cranberry Portage",
            "Steinbach",
            "Thompson",
            "Dauphin",
            "Stonewall",
            "Winnipeg",
            "Cap-Pele",
            "Miramichi",
            "Saint John",
            "Fredericton",
            "Moncton",
            "Saint Stephen",
            "Grand Bay-Westfield",
            "Oromocto",
            "Shippagan",
            "Grand Falls",
            "Port Elgin",
            "Sussex",
            "Memramcook",
            "Sackville",
            "Tracadie-Sheila",
            "Argentia",
            "Corner Brook",
            "Paradise",
            "Bishop's Falls",
            "Labrador City",
            "Portaux Basques",
            "Botwood",
            "Mount Pearl",
            "St. John's",
            "Brigus",
            "Town of Hay River",
            "Town of Inuvik",
            "Yellowknife",
            "Amherst",
            "Hants County",
            "Pictou",
            "Annapolis",
            "Inverness County",
            "Pictou County",
            "Argyle",
            "Kentville",
            "Queens",
            "Baddeck",
            "County of Kings",
            "Richmond",
            "Bridgewater",
            "Lunenburg",
            "Shelburne",
            "Cape Breton",
            "Lunenburg County",
            "Stellarton",
            "Chester",
            "Mahone Bay",
            "Truro",
            "Cumberland County",
            "New Glasgow",
            "Windsor",
            "East Hants",
            "New Minas",
            "Yarmouth",
            "Halifax",
            "Parrsboro",
            "Ajax",
            "Halton",
            "Peterborough",
            "Atikokan",
            "Halton Hills",
            "Pickering",
            "Barrie",
            "Hamilton",
            "Port Bruce",
            "Belleville",
            "Hamilton-Wentworth",
            "Port Burwell",
            "Blandford-Blenheim",
            "Hearst",
            "Port Colborne",
            "Blind River",
            "Huntsville",
            "Port Hope",
            "Brampton",
            "Ingersoll",
            "Prince Edward",
            "Brant",
            "James",
            "Quinte West",
            "Brantford",
            "Kanata",
            "Renfrew",
            "Brock",
            "Kincardine",
            "Richmond Hill",
            "Brockville",
            "King",
            "Sarnia",
            "Burlington",
            "Kingston",
            "Sault Ste. Marie",
            "Caledon",
            "Kirkland Lake",
            "Scarborough",
            "Cambridge",
            "Kitchener",
            "Scugog",
            "Chatham-Kent",
            "Larder Lake",
            "Souix Lookout CoC Sioux Lookout",
            "Chesterville",
            "Leamington",
            "Smiths Falls",
            "Clarington",
            "Lennox-Addington",
            "South-West Oxford",
            "Cobourg",
            "Lincoln",
            "St. Catharines",
            "Cochrane",
            "Lindsay",
            "St. Thomas",
            "Collingwood",
            "London",
            "Stoney Creek",
            "Cornwall",
            "Loyalist Township",
            "Stratford",
            "Cumberland",
            "Markham",
            "Sudbury",
            "Deep River",
            "Metro Toronto",
            "Temagami",
            "Dundas",
            "Merrickville",
            "Thorold",
            "Durham",
            "Milton",
            "Thunder Bay",
            "Dymond",
            "Nepean",
            "Tillsonburg",
            "Ear Falls",
            "Newmarket",
            "Timmins",
            "East Gwillimbury",
            "Niagara",
            "Toronto",
            "East Zorra-Tavistock",
            "Niagara Falls",
            "Uxbridge",
            "Elgin",
            "Niagara-on-the-Lake",
            "Vaughan",
            "Elliot Lake",
            "North Bay",
            "Wainfleet",
            "Flamborough",
            "North Dorchester",
            "Wasaga Beach",
            "Fort Erie",
            "North Dumfries",
            "Waterloo",
            "Fort Frances",
            "North York",
            "Gananoque",
            "Norwich",
            "Welland",
            "Georgina",
            "Oakville",
            "Wellesley",
            "Glanbrook",
            "Orangeville",
            "West Carleton",
            "Gloucester",
            "Orillia",
            "West Lincoln",
            "Goulbourn",
            "Osgoode",
            "Whitby",
            "Gravenhurst",
            "Oshawa",
            "Wilmot",
            "Grimsby",
            "Ottawa",
            "Windsor",
            "Guelph",
            "Ottawa-Carleton",
            "Woolwich",
            "Haldimand-Norfork",
            "Owen Sound",
            "York",
            "Alberton",
            "Montague",
            "Stratford",
            "Charlottetown",
            "Souris",
            "Summerside",
            "Cornwall",
            "Alma",
            "Fleurimont",
            "Longueuil",
            "Amos",
            "Gaspe",
            "Marieville",
            "Anjou",
            "Gatineau",
            "Mount Royal",
            "Aylmer",
            "Hull",
            "Montreal",
            "Beauport",
            "Joliette",
            "Montreal Region",
            "Bromptonville",
            "Jonquiere",
            "Montreal-Est",
            "Brosssard",
            "Lachine",
            "Quebec",
            "Chateauguay",
            "Lasalle",
            "Saint-Leonard",
            "Chicoutimi",
            "Laurentides",
            "Sherbrooke",
            "Coaticook",
            "LaSalle",
            "Sorel",
            "Laval",
            "Thetford Mines",
            "Dorval",
            "Lennoxville",
            "Victoriaville",
            "Drummondville",
            "Levis",
            "Avonlea",
            "Melfort",
            "Swift Current",
            "Colonsay",
            "Nipawin",
            "Tisdale",
            "Craik",
            "Prince Albert",
            "Unity",
            "Creighton",
            "Regina",
            "Weyburn",
            "Eastend",
            "Saskatoon",
            "Wynyard",
            "Esterhazy",
            "Shell Lake",
            "Yorkton",
            "Gravelbourg",
            "Carcross",
            "Whitehorse",
          ].includes(req.body.storeCity) == false
        ) {
          throw new Error();
        } else {
          return value;
        }
      })
      .messages({
        "any.required": "Please select the city",
        "any.custom": "Please select an option from the dropdownlist ",
      }),
    storePhone: joi
      .string()
      .empty("")
      .trim()
      .custom((value) => {
        if (!validator.isMobilePhone(value, "en-CA")) {
          throw new Error();
        } else {
          return value;
        }
      })
      .messages({
        "any.custom": "Please enter a valid phone number",
      }),
    storeEmail: joi
      .string()
      .empty("")
      .trim()
      .required()
      .custom((value) => {
        if (!validator.isEmail(value)) {
          throw new Error();
        } else {
          return value;
        }
      })
      .messages({
        "any.required": "Please enter an email address",
        "any.custom": "Please enter a valid email address",
      }),
    storeWebsite: joi
      .string()
      .empty("")
      .trim()
      .required()
      .custom((value) => {
        if (!validator.isURL(value)) {
          throw new Error();
        } else {
          return value;
        }
      })
      .messages({
        "any.required": "Please enter the store website URL",
        "any.custom": "Please enter a valid website URL",
      }),
    storeDescription: joi
      .string()
      .empty("")
      .trim()
      .required()
      .min(2)
      .max(1000)
      .messages({
        "any.required": "Please enter a store description",
        "string.min": "Description must have at least 2 characters",
        "string.max": "Description can not have more than 1000 characters",
      }),
    latLng: joi.array(),
    storeRentals: joi.array().items(
      joi.object().keys({
        bikeType: joi
          .string()
          .required()
          .custom((value) => {
            if (
              [
                "Bike",
                "Tandem Bike",
                "Trail-A-Bike",
                "Baby Seats",
                "eBike",
              ].includes(value) == false
            ) {
              throw new Error();
            } else {
              return value;
            }
          })
          .messages({
            "any.required": "Please select a bike type for the rental",
            "any.custom": "Please select an option from the dropdownlist ",
          }),
        bikeDescription: joi
          .string()
          .empty("")
          .trim()
          .required()
          .min(2)
          .max(2000)
          .messages({
            "any.required": "Please enter the bike description",
            "string.min": "Description must have at least 2 characters",
            "string.max": "Description can not have more than 2000 characters",
          }),
        bikePrice: joi
          .number()
          .precision(2)
          .positive()
          .max(9999.99)
          .required()
          .empty("")
          .messages({
            "any.required": "Please enter the price",
            "number.integer": "Price  must be between 1 and 9999",
            "number.positive": "Price number must be greater than 1",
            "number.max": "Price number must not be greater than 9999",
          }),
        bikePrice2: joi
          .number()
          .precision(2)
          .positive()
          .max(9999.99)
          .optional()
          .empty("")
          .messages({
            "number.integer": "Price  must be between 1 and 9999",
            "number.positive": "Price number must be greater than 1",
            "number.max": "Price number must not be greater than 9999",
          }),
        bikePrice3: joi
          .number()
          .precision(2)
          .positive()
          .max(9999.99)
          .optional()
          .empty("")
          .messages({
            "number.integer": "Price  must be between 1 and 9999",
            "number.positive": "Price number must be greater than 1",
            "number.max": "Price number must not be greater than 9999",
          }),
        position: joi.number(),
        bikeTime: joi.string(),
        bikeTime2: joi.string().empty("").optional(),
        bikeTime3: joi.string().empty("").optional(),
      })
    ),
    storeHours: joi.object(),
  });

  const { value, error } = bikeSchema.validate(data, {
    abortEarly: false,
  });

  if (error) {
    res.status(400).json(error.details);
  } else {
    //201
    res.locals.value = value;
    next();
  }
};

exports.validators = validators;
