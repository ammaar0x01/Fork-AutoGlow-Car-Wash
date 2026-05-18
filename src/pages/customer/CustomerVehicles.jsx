// // import React, { useState, useEffect } from "react";
// // import { useNavigate, useLocation } from "react-router-dom";
// // import axios from "axios";

// // import "./VehiclePage.css";

// // import { pageNames } from "../pageNames";

// // import NavbarCustomer from "../../components/NavbarCustomer";
// // import Footer from "../../components/Footer";

// // // import "../../components/Footer.css";



// // export default function VehiclePage(){
// //   document.title = pageNames.c_vehicle

// //   // ========================================
// //   // HOOKS & STATE
// //   // ========================================
// //   const [vehicles, setVehicles] = useState([]);
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState(null);
// //   const [showForm, setShowForm] = useState(false);
// //   const [editingVehicle, setEditingVehicle] = useState(null);
// //   const [showErrorPopup, setShowErrorPopup] = useState(false);
// //   const [errorDetails, setErrorDetails] = useState({
// //     title: "",
// //     message: "",
// //     type: "error",
// //   });
// //   const [showSuccessPopup, setShowSuccessPopup] = useState(false);
// //   const [successMessage, setSuccessMessage] = useState("");
// //   const [showDeletePopup, setShowDeletePopup] = useState(false);
// //   const [deleteTarget, setDeleteTarget] = useState(null);
// //   const [formData, setFormData] = useState({
// //     vehicleID: "",
// //     plateNumber: "",
// //     make: "",
// //     colour: "",
// //     model: "",
// //     customerId: parseInt(localStorage.getItem("userId") || "1"),
// //   });

// //   const location = useLocation();
// // const navigate = useNavigate();
// //   // Vehicle makes and models data
// //   const vehicleMakes = [
// //     "Toyota",
// //     "Honda",
// //     "Ford",
// //     "Chevrolet",
// //     "BMW",
// //     "Mercedes-Benz",
// //     "Audi",
// //     "Volkswagen",
// //     "Nissan",
// //     "Hyundai",
// //     "Kia",
// //     "Mazda",
// //     "Subaru",
// //     "Lexus",
// //     "Infiniti",
// //     "Acura",
// //     "Volvo",
// //     "Jaguar",
// //     "Land Rover",
// //     "Porsche",
// //     "Tesla",
// //     "Genesis",
// //     "Lincoln",
// //     "Cadillac",
// //     "Buick",
// //     "Chrysler",
// //     "Dodge",
// //     "Jeep",
// //     "Ram",
// //     "GMC",
// //     "Mitsubishi",
// //     "Suzuki",
// //     "Isuzu",
// //     "Fiat",
// //     "Alfa Romeo",
// //     "Maserati",
// //     "Bentley",
// //     "Rolls-Royce",
// //     "Aston Martin",
// //     "McLaren",
// //     "Ferrari",
// //     "Lamborghini",
// //     "Bugatti",
// //     "Koenigsegg",
// //     "Pagani",
// //   ];

// //   const vehicleModels = {
// //     Toyota: [
// //       "Camry",
// //       "Corolla",
// //       "RAV4",
// //       "Highlander",
// //       "Prius",
// //       "Avalon",
// //       "Sienna",
// //       "Tacoma",
// //       "Tundra",
// //       "4Runner",
// //       "Sequoia",
// //       "Land Cruiser",
// //       "Yaris",
// //       "C-HR",
// //       "Venza",
// //       "RunX",
// //     ],
// //     Honda: [
// //       "Civic",
// //       "Accord",
// //       "CR-V",
// //       "Pilot",
// //       "HR-V",
// //       "Passport",
// //       "Ridgeline",
// //       "Insight",
// //       "Fit",
// //       "Odyssey",
// //       "Element",
// //       "S2000",
// //       "NSX",
// //     ],
// //     Ford: [
// //       "F-150",
// //       "Escape",
// //       "Explorer",
// //       "Expedition",
// //       "Mustang",
// //       "Focus",
// //       "Fusion",
// //       "Edge",
// //       "Bronco",
// //       "Ranger",
// //       "Transit",
// //       "EcoSport",
// //       "Flex",
// //     ],
// //     Chevrolet: [
// //       "Silverado",
// //       "Equinox",
// //       "Traverse",
// //       "Tahoe",
// //       "Suburban",
// //       "Camaro",
// //       "Corvette",
// //       "Malibu",
// //       "Cruze",
// //       "Sonic",
// //       "Spark",
// //       "Trax",
// //       "Blazer",
// //     ],
// //     BMW: [
// //       "3 Series",
// //       "5 Series",
// //       "7 Series",
// //       "X1",
// //       "X3",
// //       "X5",
// //       "X7",
// //       "Z4",
// //       "i3",
// //       "i8",
// //       "M2",
// //       "M3",
// //       "M4",
// //       "M5",
// //       "M8",
// //     ],
// //     "Mercedes-Benz": [
// //       "C-Class",
// //       "E-Class",
// //       "S-Class",
// //       "A-Class",
// //       "CLA",
// //       "CLS",
// //       "GLA",
// //       "GLC",
// //       "GLE",
// //       "GLS",
// //       "G-Class",
// //       "SL",
// //       "AMG GT",
// //       "Sprinter",
// //     ],
// //     Audi: [
// //       "A3",
// //       "A4",
// //       "A6",
// //       "A8",
// //       "Q3",
// //       "Q5",
// //       "Q7",
// //       "Q8",
// //       "TT",
// //       "R8",
// //       "e-tron",
// //       "RS3",
// //       "RS4",
// //       "RS5",
// //       "RS6",
// //       "RS7",
// //     ],
// //     Volkswagen: [
// //       "Jetta",
// //       "Passat",
// //       "Golf",
// //       "Tiguan",
// //       "Atlas",
// //       "Beetle",
// //       "CC",
// //       "Arteon",
// //       "ID.4",
// //       "Touareg",
// //       "Golf R",
// //       "GTI",
// //     ],
// //     Nissan: [
// //       "Altima",
// //       "Sentra",
// //       "Maxima",
// //       "Rogue",
// //       "Murano",
// //       "Pathfinder",
// //       "Armada",
// //       "Frontier",
// //       "Titan",
// //       "370Z",
// //       "GT-R",
// //       "Leaf",
// //       "Versa",
// //     ],
// //     Hyundai: [
// //       "Elantra",
// //       "Sonata",
// //       "Tucson",
// //       "Santa Fe",
// //       "Palisade",
// //       "Kona",
// //       "Venue",
// //       "Veloster",
// //       "Genesis",
// //       "Ioniq",
// //       "Nexo",
// //     ],
// //     Kia: [
// //       "Forte",
// //       "Optima",
// //       "Sorento",
// //       "Telluride",
// //       "Sportage",
// //       "Soul",
// //       "Stinger",
// //       "Niro",
// //       "Cadenza",
// //       "Sedona",
// //       "Rio",
// //     ],
// //     Mazda: [
// //       "Mazda3",
// //       "Mazda6",
// //       "CX-3",
// //       "CX-5",
// //       "CX-9",
// //       "MX-5 Miata",
// //       "CX-30",
// //       "Mazda2",
// //       "RX-7",
// //       "RX-8",
// //     ],
// //     Subaru: [
// //       "Impreza",
// //       "Legacy",
// //       "Outback",
// //       "Forester",
// //       "Ascent",
// //       "WRX",
// //       "BRZ",
// //       "Crosstrek",
// //       "Tribeca",
// //       "Baja",
// //     ],
// //     Lexus: [
// //       "ES",
// //       "IS",
// //       "GS",
// //       "LS",
// //       "NX",
// //       "RX",
// //       "GX",
// //       "LX",
// //       "LC",
// //       "RC",
// //       "CT",
// //       "HS",
// //       "SC",
// //     ],
// //     Infiniti: [
// //       "Q50",
// //       "Q60",
// //       "Q70",
// //       "QX50",
// //       "QX60",
// //       "QX80",
// //       "G37",
// //       "M37",
// //       "FX35",
// //       "EX35",
// //       "JX35",
// //     ],
// //     Acura: [
// //       "ILX",
// //       "TLX",
// //       "RLX",
// //       "RDX",
// //       "MDX",
// //       "NSX",
// //       "TSX",
// //       "TL",
// //       "RL",
// //       "RSX",
// //       "Integra",
// //       "Legend",
// //     ],
// //     Volvo: [
// //       "S60",
// //       "S90",
// //       "V60",
// //       "V90",
// //       "XC40",
// //       "XC60",
// //       "XC90",
// //       "C30",
// //       "C70",
// //       "S40",
// //       "S80",
// //       "V40",
// //       "V70",
// //     ],
// //     Jaguar: [
// //       "XE",
// //       "XF",
// //       "XJ",
// //       "F-PACE",
// //       "E-PACE",
// //       "I-PACE",
// //       "F-TYPE",
// //       "XK",
// //       "S-TYPE",
// //       "X-TYPE",
// //     ],
// //     "Land Rover": [
// //       "Range Rover",
// //       "Range Rover Sport",
// //       "Range Rover Evoque",
// //       "Range Rover Velar",
// //       "Discovery",
// //       "Discovery Sport",
// //       "Defender",
// //     ],
// //     Porsche: [
// //       "911",
// //       "Cayenne",
// //       "Macan",
// //       "Panamera",
// //       "Taycan",
// //       "Boxster",
// //       "Cayman",
// //       "718",
// //       "918 Spyder",
// //       "Carrera GT",
// //     ],
// //     Tesla: [
// //       "Model S",
// //       "Model 3",
// //       "Model X",
// //       "Model Y",
// //       "Roadster",
// //       "Cybertruck",
// //       "Semi",
// //     ],
// //     Genesis: ["G70", "G80", "G90", "GV70", "GV80", "Coupe"],
// //     Lincoln: [
// //       "Continental",
// //       "MKZ",
// //       "MKX",
// //       "MKC",
// //       "Navigator",
// //       "Aviator",
// //       "Corsair",
// //       "Town Car",
// //     ],
// //     Cadillac: [
// //       "ATS",
// //       "CTS",
// //       "XTS",
// //       "CT6",
// //       "XT4",
// //       "XT5",
// //       "XT6",
// //       "Escalade",
// //       "SRX",
// //       "XLR",
// //     ],
// //     Buick: [
// //       "Encore",
// //       "Envision",
// //       "Enclave",
// //       "LaCrosse",
// //       "Regal",
// //       "Verano",
// //       "Cascada",
// //       "Century",
// //     ],
// //     Chrysler: [
// //       "300",
// //       "Pacifica",
// //       "Voyager",
// //       "Town & Country",
// //       "Sebring",
// //       "Crossfire",
// //       "PT Cruiser",
// //     ],
// //     Dodge: [
// //       "Challenger",
// //       "Charger",
// //       "Durango",
// //       "Journey",
// //       "Grand Caravan",
// //       "Dart",
// //       "Avenger",
// //       "Caliber",
// //     ],
// //     Jeep: [
// //       "Wrangler",
// //       "Grand Cherokee",
// //       "Cherokee",
// //       "Compass",
// //       "Renegade",
// //       "Gladiator",
// //       "Commander",
// //       "Liberty",
// //     ],
// //     Ram: ["1500", "2500", "3500", "ProMaster", "ProMaster City", "Dakota"],
// //     GMC: [
// //       "Sierra",
// //       "Canyon",
// //       "Acadia",
// //       "Terrain",
// //       "Yukon",
// //       "Savana",
// //       "Envoy",
// //       "Denali",
// //     ],
// //     Mitsubishi: [
// //       "Outlander",
// //       "Eclipse Cross",
// //       "Mirage",
// //       "Lancer",
// //       "Galant",
// //       "Endeavor",
// //       "Montero",
// //       "Diamante",
// //     ],
// //     Suzuki: [
// //       "Swift",
// //       "SX4",
// //       "Grand Vitara",
// //       "Kizashi",
// //       "Equator",
// //       "XL7",
// //       "Aerio",
// //       "Forenza",
// //     ],
// //     Isuzu: [
// //       "D-Max",
// //       "MU-X",
// //       "Trooper",
// //       "Rodeo",
// //       "Ascender",
// //       "i-Series",
// //       "Axiom",
// //     ],
// //     Fiat: [
// //       "500",
// //       "500L",
// //       "500X",
// //       "Panda",
// //       "Tipo",
// //       "Doblo",
// //       "Ducato",
// //       "124 Spider",
// //     ],
// //     "Alfa Romeo": [
// //       "Giulia",
// //       "Stelvio",
// //       "4C",
// //       "Spider",
// //       "GTV",
// //       "156",
// //       "147",
// //       "159",
// //     ],
// //     Maserati: [
// //       "Ghibli",
// //       "Quattroporte",
// //       "Levante",
// //       "GranTurismo",
// //       "GranCabrio",
// //       "MC20",
// //     ],
// //     Bentley: [
// //       "Continental",
// //       "Flying Spur",
// //       "Bentayga",
// //       "Mulsanne",
// //       "Azure",
// //       "Arnage",
// //     ],
// //     "Rolls-Royce": [
// //       "Phantom",
// //       "Ghost",
// //       "Wraith",
// //       "Dawn",
// //       "Cullinan",
// //       "Silver Shadow",
// //     ],
// //     "Aston Martin": [
// //       "DB11",
// //       "Vantage",
// //       "DBS",
// //       "Rapide",
// //       "Vanquish",
// //       "DB9",
// //       "V8 Vantage",
// //     ],
// //     McLaren: ["720S", "570S", "600LT", "GT", "Senna", "P1", "650S", "540C"],
// //     Ferrari: [
// //       "488",
// //       "F8",
// //       "SF90",
// //       "Roma",
// //       "Portofino",
// //       "812",
// //       "LaFerrari",
// //       "California",
// //     ],
// //     Lamborghini: [
// //       "Huracán",
// //       "Aventador",
// //       "Urus",
// //       "Gallardo",
// //       "Murciélago",
// //       "Countach",
// //     ],
// //     Bugatti: ["Chiron", "Veyron", "Divo", "Centodieci", "La Voiture Noire"],
// //     Koenigsegg: ["Regera", "Jesko", "Gemera", "CCX", "CCR", "Agera"],
// //     Pagani: ["Huayra", "Zonda", "Utopia", "Imola", "C10"],
// //   };

// //   // Vehicle colors data
// //   const vehicleColors = [
// //     "White",
// //     "Black",
// //     "Silver",
// //     "Gray",
// //     "Red",
// //     "Blue",
// //     "Green",
// //     "Brown",
// //     "Beige",
// //     "Gold",
// //     "Yellow",
// //     "Orange",
// //     "Purple",
// //     "Pink",
// //     "Maroon",
// //     "Navy",
// //     "Turquoise",
// //     "Cream",
// //     "Tan",
// //     "Champagne",
// //     "Pearl White",
// //     "Metallic Black",
// //     "Metallic Silver",
// //     "Metallic Gray",
// //     "Metallic Blue",
// //     "Metallic Red",
// //     "Metallic Green",
// //     "Metallic Brown",
// //     "Metallic Gold",
// //     "Matte Black",
// //     "Matte Gray",
// //     "Matte Blue",
// //     "Carbon Black",
// //     "Jet Black",
// //     "Arctic White",
// //     "Alpine White",
// //     "Mineral White",
// //     "Space Gray",
// //     "Midnight Blue",
// //     "Deep Blue",
// //     "Royal Blue",
// //     "Electric Blue",
// //     "Bright Red",
// //     "Crimson Red",
// //     "Fire Red",
// //     "Racing Green",
// //     "Forest Green",
// //     "Emerald Green",
// //     "British Racing Green",
// //     "Champagne Gold",
// //     "Rose Gold",
// //     "Copper",
// //     "Bronze",
// //     "Gunmetal",
// //     "Titanium",
// //     "Platinum",
// //     "Pearl",
// //     "Iridescent",
// //     "Chrome",
// //   ];

// //   // ========================================
// //   // API CONFIGURATION
// //   // ========================================
// //   const VEHICLE_API = "/api/vehicle";
// //   const API_BASE_URL = "http://localhost:8080/mobileglow";

// //   const getAuthToken = () => {
// //     return localStorage.getItem("authToken") || localStorage.getItem("token");
// //   };

// //   const apiClient = axios.create({
// //     baseURL: API_BASE_URL,
// //     headers: {
// //       "Content-Type": "application/json",
// //     },
// //   });

// //   apiClient.interceptors.request.use(
// //     (config) => {
// //       const token = getAuthToken();
// //       if (token) {
// //         config.headers.Authorization = `Bearer ${token}`;
// //       }
// //       return config;
// //     },
// //     (error) => Promise.reject(error)
// //   );

// //   // ========================================
// //   // VEHICLE SERVICE API
// //   // ========================================
// //   const vehicleService = {
// //     getAllVehicles: async () => {
// //       try {
// //         const response = await apiClient.get(`${VEHICLE_API}/findAll`);
// //         return response.data;
// //       } catch (error) {
// //         console.error("Error fetching vehicles:", error);
// //         throw error;
// //       }
// //     },

// //     getVehicleById: async (id) => {
// //       try {
// //         const response = await apiClient.get(`${VEHICLE_API}/read/${id}`);
// //         return response.data;
// //       } catch (error) {
// //         console.error(`Error fetching vehicle ${id}:`, error);
// //         throw error;
// //       }
// //     },

// //     createVehicle: async (vehicleData) => {
// //       try {
// //         const response = await apiClient.post(
// //           `${VEHICLE_API}/create`,
// //           vehicleData
// //         );
// //         return response.data;
// //       } catch (error) {
// //         console.error("Error creating vehicle:", error);
// //         throw error; // Re-throw the error so it can be handled by the calling function
// //       }
// //     },

// //     updateVehicle: async (id, vehicleData) => {
// //       try {
// //         console.log(`Updating vehicle ${id} with data:`, vehicleData);
// //         const response = await apiClient.put(
// //           `${VEHICLE_API}/update/${id}`,
// //           vehicleData
// //         );
// //         console.log("Update response:", response);
// //         return response.data;
// //       } catch (error) {
// //         console.error(`Error updating vehicle ${id}:`, error);
// //         throw error;
// //       }
// //     },

// //     deleteVehicle: async (id) => {
// //       try {
// //         console.log(`Attempting to delete vehicle with ID: ${id}`);
// //         const response = await apiClient.delete(`${VEHICLE_API}/delete/${id}`);
// //         console.log("Delete response:", response);
// //         return response.status === 204 || response.status === 200;
// //       } catch (error) {
// //         console.error(`Error deleting vehicle ${id}:`, error);
// //         throw error;
// //       }
// //     },

// //     findVehicleByPlateNumber: async (plateNumber) => {
// //       try {
// //         const response = await apiClient.get(
// //           `${VEHICLE_API}/plate/${plateNumber}`
// //         );
// //         return response.data;
// //       } catch (error) {
// //         console.error(`Error finding vehicle by plate ${plateNumber}:`, error);
// //         throw error;
// //       }
// //     },

// //     findVehiclesByCustomerId: async (customerId) => {
// //       try {
// //         const response = await apiClient.get(
// //           `${VEHICLE_API}/customer/${customerId}`
// //         );
// //         return response.data;
// //       } catch (error) {
// //         console.error(
// //           `Error finding vehicles for customer ${customerId}:`,
// //           error
// //         );
// //         throw error;
// //       }
// //     },
// //   };

// //   // ========================================
// //   // EFFECTS
// //   // ========================================
// //   useEffect(() => {
// //     const token = getAuthToken();
// //     console.log("Auth token status:", token ? "Present" : "Missing");

// //     if (!token) {
// //       setError(
// //         "Please log in to access vehicle management. Go to the login page first."
// //       );
// //       setLoading(false);
// //       return;
// //     }
// //     fetchVehicles();
// //   }, []);

// //   // ========================================
// //   // ERROR HANDLING
// //   // ========================================
// //   const displayErrorPopup = (title, message, type = "error") => {
// //     setErrorDetails({ title, message, type });
// //     setShowErrorPopup(true);
// //     setError(null); // Clear inline error
// //   };

// //   const closeErrorPopup = () => {
// //     setShowErrorPopup(false);
// //     setErrorDetails({ title: "", message: "", type: "error" });
// //   };

// //   const displaySuccessPopup = (message) => {
// //     setSuccessMessage(message);
// //     setShowSuccessPopup(true);
// //   };

// //   const closeSuccessPopup = () => {
// //     setShowSuccessPopup(false);
// //     setSuccessMessage("");
// //   };

// //   const showDeleteConfirmation = (vehicleId) => {
// //     setDeleteTarget(vehicleId);
// //     setShowDeletePopup(true);
// //   };

// //   const closeDeletePopup = () => {
// //     setShowDeletePopup(false);
// //     setDeleteTarget(null);
// //   };

// //   // ========================================
// //   // API FUNCTIONS
// //   // ========================================
// //   const fetchVehicles = async () => {
// //     try {
// //       setLoading(true);
// //       const userId = localStorage.getItem("userId") || "1";
// //       console.log("Fetching vehicles for user ID:", userId);

// //       const data = await vehicleService.findVehiclesByCustomerId(
// //         parseInt(userId)
// //       );
// //       console.log("Fetched vehicles for customer:", data);
// //       console.log("Number of vehicles:", data.length);
// //       setVehicles(data);
// //       setError(null);
// //     } catch (err) {
// //       console.error("Error fetching vehicles:", err);
// //       if (err.response?.status === 401) {
// //         displayErrorPopup(
// //           "Authentication Required",
// //           "Please log in to access your vehicles. You will be redirected to the login page.",
// //           "auth"
// //         );
// //       } else if (err.response?.status === 403) {
// //         displayErrorPopup(
// //           "Access Denied",
// //           "You do not have permission to access vehicle management. Please contact support.",
// //           "error"
// //         );
// //       } else if (err.response?.status >= 500) {
// //         displayErrorPopup(
// //           "Server Error",
// //           "Our servers are experiencing issues. Please try again later or contact support if the problem persists.",
// //           "error"
// //         );
// //       } else {
// //         displayErrorPopup(
// //           "Failed to Load Vehicles",
// //           err.response?.data?.message ||
// //             "Unable to fetch your vehicles. Please check your connection and try again.",
// //           "error"
// //         );
// //       }
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   // ========================================
// //   // FORM HANDLERS
// //   // ========================================
// //   const handleInputChange = (e) => {
// //     const { name, value } = e.target;
// //     setFormData((prev) => {
// //       const newData = {
// //         ...prev,
// //         [name]: value,
// //       };

// //       // If make changes, reset model
// //       if (name === "make") {
// //         newData.model = "";
// //       }

// //       return newData;
// //     });
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     setLoading(true);
// //     setError(null);

// //     try {
// //       // Frontend duplicate check for new vehicles
// //       if (!editingVehicle) {
// //         const isDuplicate = vehicles.some(
// //           (vehicle) =>
// //             vehicle.carPlateNumber.toLowerCase() ===
// //             formData.plateNumber.toLowerCase()
// //         );

// //         if (isDuplicate) {
// //           displayErrorPopup(
// //             "Plate Number Already Exists",
// //             "A vehicle with this plate number already exists. Please use a different plate number.",
// //             "error"
// //           );
// //           setLoading(false);
// //           return;
// //         }
// //       }

// //       const vehicleData = {
// //         carPlateNumber: formData.plateNumber,
// //         carMake: formData.make,
// //         carColour: formData.colour,
// //         carModel: formData.model,
// //         customerId: parseInt(formData.customerId),
// //       };

// //       console.log("Submitting vehicle data:", vehicleData);
// //       console.log("Editing vehicle:", editingVehicle);

// //       if (editingVehicle) {
// //         console.log("Updating vehicle with ID:", editingVehicle.vehicleID);
// //         const result = await vehicleService.updateVehicle(
// //           editingVehicle.vehicleID,
// //           vehicleData
// //         );
// //         console.log("Update result:", result);
// //         displaySuccessPopup("Vehicle updated successfully!");
// //       } else {
// //         console.log("Creating new vehicle");
// //         const result = await vehicleService.createVehicle(vehicleData);
// //         console.log("Create result:", result);
// //         displaySuccessPopup("Vehicle created successfully!");
// //       }

// //       await fetchVehicles();
// //       resetForm();
// //     } catch (err) {
// //       console.error("Failed to save vehicle:", err);
// //       console.error("Error response:", err.response);
// //       console.error("Error data:", err.response?.data);
// //       console.error("Error status:", err.response?.status);
// //       console.error("Error message:", err.response?.data?.message);

// //       if (err.response?.status === 400) {
// //         // Check if the error message indicates a duplicate plate number
// //         const errorMessage = err.response?.data?.message || "";
// //         if (
// //           errorMessage.toLowerCase().includes("plate") ||
// //           errorMessage.toLowerCase().includes("already exists") ||
// //           errorMessage.toLowerCase().includes("duplicate")
// //         ) {
// //           displayErrorPopup(
// //             "Plate Number Already Exists",
// //             "A vehicle with this plate number already exists. Please use a different plate number.",
// //             "error"
// //           );
// //         } else {
// //           displayErrorPopup(
// //             "Invalid Vehicle Data",
// //             "Please check your vehicle information and try again. Make sure all required fields are filled correctly.",
// //             "error"
// //           );
// //         }
// //       } else if (err.response?.status === 409) {
// //         displayErrorPopup(
// //           "Plate Number Already Exists",
// //           "A vehicle with this plate number already exists. Please use a different plate number.",
// //           "error"
// //         );
// //       } else if (err.response?.status >= 500) {
// //         displayErrorPopup(
// //           "Server Error",
// //           "Unable to save your vehicle due to server issues. Please try again later.",
// //           "error"
// //         );
// //       } else {
// //         // Check for any error message that might indicate a duplicate plate
// //         const errorMessage = err.response?.data?.message || err.message || "";
// //         if (
// //           errorMessage.toLowerCase().includes("plate") ||
// //           errorMessage.toLowerCase().includes("already exists") ||
// //           errorMessage.toLowerCase().includes("duplicate")
// //         ) {
// //           displayErrorPopup(
// //             "Plate Number Already Exists",
// //             "A vehicle with this plate number already exists. Please use a different plate number.",
// //             "error"
// //           );
// //         } else {
// //           displayErrorPopup(
// //             "Failed to Save Vehicle",
// //             errorMessage || "Unable to save your vehicle. Please try again.",
// //             "error"
// //           );
// //         }
// //       }
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   const resetForm = () => {
// //     const userId = localStorage.getItem("userId") || "1";

// //     setFormData({
// //       vehicleID: "",
// //       plateNumber: "",
// //       make: "",
// //       colour: "",
// //       model: "",
// //       customerId: parseInt(userId),
// //     });
// //     setEditingVehicle(null);
// //     setShowForm(false);
// //   };

// //   // ========================================
// //   // VEHICLE ACTIONS
// //   // ========================================
// //   const handleEdit = (vehicle) => {
// //     console.log("Editing vehicle:", vehicle);
// //     console.log("Vehicle ID type:", typeof vehicle.vehicleID);
// //     console.log("Vehicle ID value:", vehicle.vehicleID);
// //     setEditingVehicle(vehicle);

// //     const userId = localStorage.getItem("userId") || "1";

// //     setFormData({
// //       vehicleID: vehicle.vehicleID || "",
// //       plateNumber: vehicle.carPlateNumber || "",
// //       make: vehicle.carMake || "",
// //       colour: vehicle.carColour || "",
// //       model: vehicle.carModel || "",
// //       customerId: parseInt(userId),
// //     });
// //     setShowForm(true);
// //     setError(null);
// //   };

// //   const handleDelete = (id) => {
// //     console.log("Showing delete confirmation for vehicle ID:", id);
// //     showDeleteConfirmation(id);
// //   };

// //   const confirmDelete = async () => {
// //     if (!deleteTarget) return;

// //     console.log("Confirming deletion of vehicle with ID:", deleteTarget);
// //     setLoading(true);
// //     setError(null);
// //     closeDeletePopup();

// //     try {
// //       const result = await vehicleService.deleteVehicle(deleteTarget);
// //       console.log("Delete result:", result);
// //       displaySuccessPopup("Vehicle deleted successfully!");
// //       await fetchVehicles();
// //     } catch (err) {
// //       console.error("Failed to delete vehicle:", err);

// //       if (err.response?.status === 404) {
// //         displayErrorPopup(
// //           "Vehicle Not Found",
// //           "This vehicle may have already been deleted. Please refresh the page.",
// //           "error"
// //         );
// //       } else if (err.response?.status === 403) {
// //         displayErrorPopup(
// //           "Cannot Delete Vehicle",
// //           "You do not have permission to delete this vehicle.",
// //           "error"
// //         );
// //       } else if (err.response?.status >= 500) {
// //         displayErrorPopup(
// //           "Server Error",
// //           "Unable to delete the vehicle due to server issues. Please try again later.",
// //           "error"
// //         );
// //       } else {
// //         displayErrorPopup(
// //           "Failed to Delete Vehicle",
// //           err.response?.data?.message ||
// //             "Unable to delete the vehicle. Please try again.",
// //           "error"
// //         );
// //       }
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   // ========================================
// //   // RENDER HELPERS
// //   // ========================================
// //   const renderLoadingState = () => (
// //     <div className="loading-container">
// //       <div className="loading-spinner"></div>
// //       <p>Loading vehicles...</p>
// //     </div>
// //   );

// //   const renderErrorMessage = () => (
// //     <div className="error-message">
// //       {error}
// //       {error.includes("Authentication required") && (
// //         <div style={{ marginTop: "0.5rem", fontSize: "0.9rem" }}>
// //           <a
// //             href="/login"
// //             style={{ color: "white", textDecoration: "underline" }}
// //           >
// //             Go to Login Page
// //           </a>
// //         </div>
// //       )}
// //       <button onClick={() => setError(null)}>×</button>
// //     </div>
// //   );

// //   const renderVehicleTable = () => (
// //     <div className="vehicle-table-container">
// //       <div className="vehicle-table-header">
// //         <h2>Vehicle List</h2>
// //         <div className="vehicle-table-actions">
// //           <button className="vehicle-refresh-btn" onClick={fetchVehicles}>
// //             Refresh List
// //           </button>
// //         </div>
// //       </div>

// //       <div className="vehicle-table-wrapper">
// //         <table className="vehicle-table">
// //           <thead>
// //             <tr>
// //               <th>Plate Number</th>
// //               <th>Make</th>
// //               <th>Model</th>
// //               <th>Color</th>
// //               <th>Actions</th>
// //             </tr>
// //           </thead>
// //           <tbody>
// //             {vehicles.length === 0 ? (
// //               <tr>
// //                 <td
// //                   colSpan="5"
// //                   style={{
// //                     textAlign: "center",
// //                     padding: "2rem",
// //                     color: "#6b7280",
// //                   }}
// //                 >
// //                   No vehicles found. Add your first vehicle above.
// //                 </td>
// //               </tr>
// //             ) : (
// //               vehicles.map((vehicle) => (
// //                 <tr
// //                   key={vehicle.vehicleID}
// //                   className={
// //                     editingVehicle &&
// //                     editingVehicle.vehicleID === vehicle.vehicleID
// //                       ? "editing"
// //                       : ""
// //                   }
// //                 >
// //                   <td>
// //                     <div className="vehicle-plate">
// //                       <strong>{vehicle.carPlateNumber}</strong>
// //                     </div>
// //                   </td>
// //                   <td>
// //                     <span className="vehicle-make">
// //                       {vehicle.carMake || "N/A"}
// //                     </span>
// //                   </td>
// //                   <td>
// //                     <div className="vehicle-model">
// //                       {vehicle.carModel || "N/A"}
// //                     </div>
// //                   </td>
// //                   <td>
// //                     <div className="vehicle-color">
// //                       {vehicle.carColour || "N/A"}
// //                     </div>
// //                   </td>
// //                   <td>
// //                     <div className="vehicle-actions">
// //                       <button
// //                         className="edit-btn"
// //                         onClick={() => handleEdit(vehicle)}
// //                       >
// //                         Edit
// //                       </button>
// //                       <button
// //                         className="delete-btn"
// //                         onClick={() => handleDelete(vehicle.vehicleID)}
// //                       >
// //                         Delete
// //                       </button>
// //                     </div>
// //                   </td>
// //                 </tr>
// //               ))
// //             )}
// //           </tbody>
// //         </table>
// //       </div>
// //     </div>
// //   );

// //   const renderDeletePopup = () => (
// //     <div className="simple-popup-overlay">
// //       <div className="simple-popup-container">
// //         <div className="simple-popup-header">
// //           <h3>Delete Vehicle</h3>
// //         </div>
// //         <div className="simple-popup-content">
// //           <p>Are you sure you want to delete this vehicle?</p>
// //         </div>
// //         <div className="simple-popup-actions">
// //           <button
// //             className="simple-popup-btn simple-popup-no"
// //             onClick={closeDeletePopup}
// //             disabled={loading}
// //           >
// //             No
// //           </button>
// //           <button
// //             className="simple-popup-btn simple-popup-yes"
// //             onClick={confirmDelete}
// //             disabled={loading}
// //           >
// //             {loading ? "Deleting..." : "Yes"}
// //           </button>
// //         </div>
// //       </div>
// //     </div>
// //   );

// //   const renderSuccessPopup = () => (
// //     <div className="simple-popup-overlay">
// //       <div className="simple-popup-container">
// //         <div className="simple-popup-header">
// //           <h3>Success!</h3>
// //         </div>
// //         <div className="simple-popup-content">
// //           <p>{successMessage}</p>
// //         </div>
// //         <div className="simple-popup-actions">
// //           <button
// //             className="simple-popup-btn simple-popup-yes"
// //             onClick={closeSuccessPopup}
// //           >
// //             OK
// //           </button>
// //         </div>
// //       </div>
// //     </div>
// //   );

// //   const renderErrorPopup = () => (
// //     <div className="simple-popup-overlay">
// //       <div className="simple-popup-container">
// //         <div className="simple-popup-header">
// //           <h3>{errorDetails.title}</h3>
// //         </div>
// //         <div className="simple-popup-content">
// //           <p>{errorDetails.message}</p>
// //         </div>
// //         <div className="simple-popup-actions">
// //           {errorDetails.type === "auth" ? (
// //             <button
// //               className="simple-popup-btn simple-popup-yes"
// //               onClick={() => {
// //                 closeErrorPopup();
// //                 navigate("/login");
// //               }}
// //             >
// //               Go to Login
// //             </button>
// //           ) : (
// //             <button
// //               className="simple-popup-btn simple-popup-yes"
// //               onClick={closeErrorPopup}
// //             >
// //               OK
// //             </button>
// //           )}
// //         </div>
// //       </div>
// //     </div>
// //   );

// //   const renderVehicleForm = () => (
// //     <div className="form-sidebar" onClick={resetForm}>
// //       <div className="form-container" onClick={(e) => e.stopPropagation()}>
// //         <div className="form-header">
// //           <h2>{editingVehicle ? "Edit Vehicle" : "Add New Vehicle"}</h2>
// //           {editingVehicle && (
// //             <div className="editing-indicator">
// //               <span className="editing-badge">
// //                 Editing: {editingVehicle.carPlateNumber}
// //               </span>
// //             </div>
// //           )}
// //           <button className="close-btn" onClick={resetForm}>
// //             ×
// //           </button>
// //         </div>
// //         <form onSubmit={handleSubmit} className="vehicle-form">
// //           <div className="form-group">
// //             <label htmlFor="plateNumber">Plate Number *</label>
// //             <input
// //               type="text"
// //               id="plateNumber"
// //               name="plateNumber"
// //               value={formData.plateNumber}
// //               onChange={handleInputChange}
// //               required
// //               placeholder="Enter plate number"
// //             />
// //           </div>

// //           <div className="form-group">
// //             <label htmlFor="make">Make *</label>
// //             <select
// //               id="make"
// //               name="make"
// //               value={formData.make}
// //               onChange={handleInputChange}
// //               required
// //               className="form-select"
// //             >
// //               <option value="">Select a make...</option>
// //               {vehicleMakes.map((make) => (
// //                 <option key={make} value={make}>
// //                   {make}
// //                 </option>
// //               ))}
// //             </select>
// //           </div>

// //           <div className="form-group">
// //             <label htmlFor="model">Model *</label>
// //             <select
// //               id="model"
// //               name="model"
// //               value={formData.model}
// //               onChange={handleInputChange}
// //               required
// //               className="form-select"
// //               disabled={!formData.make}
// //             >
// //               <option value="">Select a model...</option>
// //               {formData.make &&
// //                 vehicleModels[formData.make] &&
// //                 vehicleModels[formData.make].map((model) => (
// //                   <option key={model} value={model}>
// //                     {model}
// //                   </option>
// //                 ))}
// //             </select>
// //           </div>

// //           <div className="form-group">
// //             <label htmlFor="colour">Color *</label>
// //             <select
// //               id="colour"
// //               name="colour"
// //               value={formData.colour}
// //               onChange={handleInputChange}
// //               required
// //               className="form-select"
// //             >
// //               <option value="">Select a color...</option>
// //               {vehicleColors.map((color) => (
// //                 <option key={color} value={color}>
// //                   {color}
// //                 </option>
// //               ))}
// //             </select>
// //           </div>

// //           <div className="form-actions">
// //             <button
// //               type="submit"
// //               className="btn btn-primary"
// //               disabled={loading}
// //             >
// //               {loading
// //                 ? "Saving..."
// //                 : editingVehicle
// //                 ? "Update Vehicle"
// //                 : "Add Vehicle"}
// //             </button>
// //             <button
// //               type="button"
// //               className="btn btn-secondary"
// //               onClick={resetForm}
// //               disabled={loading}
// //             >
// //               Cancel
// //             </button>
// //           </div>
// //         </form>
// //       </div>
// //     </div>
// //   );

// //   // ========================================
// //   // MAIN RENDER
// //   // ========================================
// //   if (loading) {
// //     return renderLoadingState();
// //   }

// //   return (
// //     <div className="vehicle-page">
// //       <NavbarCustomer />

// //       {/* Header Section */}
// //       <div className="vehicle-page-header-wrapper">
// //         <button
// //           className="vehicle-page-back-btn"
// //           onClick={() => navigate(-1)}
// //           title="Go back"
// //         >
// //           ← Back
// //         </button>
// //         <div className="vehicle-header-content">
// //           <h1>Vehicle Management</h1>
// //           <p className="vehicle-page-description">
// //             Keep your ride details up to date in one place. Add, edit, or remove
// //             vehicles from your profile so booking the right service is quick and
// //             hassle-free.
// //           </p>
// //         </div>
// //         <button
// //           className="vehicle-page-add-btn"
// //           onClick={() => setShowForm(true)}
// //         >
// //           + Add Vehicle
// //         </button>
// //       </div>

// //       {/* Messages */}
// //       {error && renderErrorMessage()}

// //       {/* Main Content */}
// //       <div className="vehicle-main-content">
// //         {renderVehicleTable()}
// //         {showForm && renderVehicleForm()}
// //       </div>

// //       {/* Continue Booking Section */}
// //       <div className="continue-booking-section">
// //         <button
// //           className="btn continue-booking-btn"
// //           onClick={() =>
// //             navigate("/bookingvehicle", {
// //               state: {
// //                 cart: location.state?.cart || [],
// //                 totalPrice: location.state?.totalPrice || 0,
// //                 selectedDateTime: location.state?.selectedDateTime || null,
// //                 serviceIds: location.state?.serviceIds || [],
// //               },
// //             })
// //           }
// //         >
// //           Continue Booking
// //         </button>
// //       </div>

// //             {/* Main Content */}
// //             <div className="vehicle-main-content">
// //                 {renderVehicleTable()}
// //                 {showForm && renderVehicleForm()}
// //             </div>
            
// //             {/* Continue Booking Section */}
// //             <div className="continue-booking-section">
// //                 <button
// //                     className="btn continue-booking-btn"
// //                     onClick={() => navigate('/booking')}
// //                 >
// //                     Continue Booking
// //                 </button>
// //             </div>
            
// //             <Footer />
            
// //             {/* Error Popup */}
// //             {showErrorPopup && renderErrorPopup()}
            
// //             {/* Success Popup */}
// //             {showSuccessPopup && renderSuccessPopup()}
            
// //             {/* Delete Confirmation Popup */}
// //             {showDeletePopup && renderDeletePopup()}
// //         </div>
// //     );
// // };


// // newer1 

// import React, { useState, useEffect } from "react";
// import { useNavigate, useLocation } from "react-router-dom";
// import axios from "axios";

// import { pageNames } from "../pageNames";

// import NavbarCustomer from "../../components/NavbarCustomer";
// import Footer from "../../components/Footer";

// export default function VehiclePage(){
//   document.title = pageNames.c_vehicle
  
//   // ========================================
//   // HOOKS & STATE
//   // ========================================
//   const [vehicles, setVehicles] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [showForm, setShowForm] = useState(false);
//   const [editingVehicle, setEditingVehicle] = useState(null);
//   const [showErrorPopup, setShowErrorPopup] = useState(false);
//   const [errorDetails, setErrorDetails] = useState({
//     title: "",
//     message: "",
//     type: "error",
//   });
//   const [showSuccessPopup, setShowSuccessPopup] = useState(false);
//   const [successMessage, setSuccessMessage] = useState("");
//   const [showDeletePopup, setShowDeletePopup] = useState(false);
//   const [deleteTarget, setDeleteTarget] = useState(null);
//   const [formData, setFormData] = useState({
//     vehicleID: "",
//     plateNumber: "",
//     make: "",
//     colour: "",
//     model: "",
//     customerId: parseInt(localStorage.getItem("userId") || "1"),
//   });

//   const location = useLocation();
//   const navigate = useNavigate();

//   // Vehicle makes and models data
//   const vehicleMakes = [
//     "Toyota", "Honda", "Ford", "Chevrolet", "BMW", "Mercedes-Benz", "Audi", 
//     "Volkswagen", "Nissan", "Hyundai", "Kia", "Mazda", "Subaru", "Lexus", 
//     "Infiniti", "Acura", "Volvo", "Jaguar", "Land Rover", "Porsche", "Tesla", 
//     "Genesis", "Lincoln", "Cadillac", "Buick", "Chrysler", "Dodge", "Jeep", 
//     "Ram", "GMC", "Mitsubishi", "Suzuki", "Isuzu", "Fiat", "Alfa Romeo", 
//     "Maserati", "Bentley", "Rolls-Royce", "Aston Martin", "McLaren", "Ferrari", 
//     "Lamborghini", "Bugatti", "Koenigsegg", "Pagani"
//   ];

//   const vehicleModels = {
//     Toyota: ["Camry", "Corolla", "RAV4", "Highlander", "Prius", "Avalon", "Sienna", "Tacoma", "Tundra", "4Runner", "Sequoia", "Land Cruiser", "Yaris", "C-HR", "Venza", "RunX"],
//     Honda: ["Civic", "Accord", "CR-V", "Pilot", "HR-V", "Passport", "Ridgeline", "Insight", "Fit", "Odyssey", "Element", "S2000", "NSX"],
//     Ford: ["F-150", "Escape", "Explorer", "Expedition", "Mustang", "Focus", "Fusion", "Edge", "Bronco", "Ranger", "Transit", "EcoSport", "Flex"],
//     Chevrolet: ["Silverado", "Equinox", "Traverse", "Tahoe", "Suburban", "Camaro", "Corvette", "Malibu", "Cruze", "Sonic", "Spark", "Trax", "Blazer"],
//     BMW: ["3 Series", "5 Series", "7 Series", "X1", "X3", "X5", "X7", "Z4", "i3", "i8", "M2", "M3", "M4", "M5", "M8"],
//     "Mercedes-Benz": ["C-Class", "E-Class", "S-Class", "A-Class", "CLA", "CLS", "GLA", "GLC", "GLE", "GLS", "G-Class", "SL", "AMG GT", "Sprinter"],
//     Audi: ["A3", "A4", "A6", "A8", "Q3", "Q5", "Q7", "Q8", "TT", "R8", "e-tron", "RS3", "RS4", "RS5", "RS6", "RS7"],
//     Volkswagen: ["Jetta", "Passat", "Golf", "Tiguan", "Atlas", "Beetle", "CC", "Arteon", "ID.4", "Touareg", "Golf R", "GTI"],
//     Nissan: ["Altima", "Sentra", "Maxima", "Rogue", "Murano", "Pathfinder", "Armada", "Frontier", "Titan", "370Z", "GT-R", "Leaf", "Versa"],
//     Hyundai: ["Elantra", "Sonata", "Tucson", "Santa Fe", "Palisade", "Kona", "Venue", "Veloster", "Genesis", "Ioniq", "Nexo"],
//     Kia: ["Forte", "Optima", "Sorento", "Telluride", "Sportage", "Soul", "Stinger", "Niro", "Cadenza", "Sedona", "Rio"],
//     Mazda: ["Mazda3", "Mazda6", "CX-3", "CX-5", "CX-9", "MX-5 Miata", "CX-30", "Mazda2", "RX-7", "RX-8"],
//     Subaru: ["Impreza", "Legacy", "Outback", "Forester", "Ascent", "WRX", "BRZ", "Crosstrek", "Tribeca", "Baja"],
//     Lexus: ["ES", "IS", "GS", "LS", "NX", "RX", "GX", "LX", "LC", "RC", "CT", "HS", "SC"],
//     Infiniti: ["Q50", "Q60", "Q70", "QX50", "QX60", "QX80", "G37", "M37", "FX35", "EX35", "JX35"],
//     Acura: ["ILX", "TLX", "RLX", "RDX", "MDX", "NSX", "TSX", "TL", "RL", "RSX", "Integra", "Legend"],
//     Volvo: ["S60", "S90", "V60", "V90", "XC40", "XC60", "XC90", "C30", "C70", "S40", "S80", "V40", "V70"],
//     Jaguar: ["XE", "XF", "XJ", "F-PACE", "E-PACE", "I-PACE", "F-TYPE", "XK", "S-TYPE", "X-TYPE"],
//     "Land Rover": ["Range Rover", "Range Rover Sport", "Range Rover Evoque", "Range Rover Velar", "Discovery", "Discovery Sport", "Defender"],
//     Porsche: ["911", "Cayenne", "Macan", "Panamera", "Taycan", "Boxster", "Cayman", "718", "918 Spyder", "Carrera GT"],
//     Tesla: ["Model S", "Model 3", "Model X", "Model Y", "Roadster", "Cybertruck", "Semi"],
//     Genesis: ["G70", "G80", "G90", "GV70", "GV80", "Coupe"],
//     Lincoln: ["Continental", "MKZ", "MKX", "MKC", "Navigator", "Aviator", "Corsair", "Town Car"],
//     Cadillac: ["ATS", "CTS", "XTS", "CT6", "XT4", "XT5", "XT6", "Escalade", "SRX", "XLR"],
//     Buick: ["Encore", "Envision", "Enclave", "LaCrosse", "Regal", "Verano", "Cascada", "Century"],
//     Chrysler: ["300", "Pacifica", "Voyager", "Town & Country", "Sebring", "Crossfire", "PT Cruiser"],
//     Dodge: ["Challenger", "Charger", "Durango", "Journey", "Grand Caravan", "Dart", "Avenger", "Caliber"],
//     Jeep: ["Wrangler", "Grand Cherokee", "Cherokee", "Compass", "Renegade", "Gladiator", "Commander", "Liberty"],
//     Ram: ["1500", "2500", "3500", "ProMaster", "ProMaster City", "Dakota"],
//     GMC: ["Sierra", "Canyon", "Acadia", "Terrain", "Yukon", "Savana", "Envoy", "Denali"],
//     Mitsubishi: ["Outlander", "Eclipse Cross", "Mirage", "Lancer", "Galant", "Endeavor", "Montero", "Diamante"],
//     Suzuki: ["Swift", "SX4", "Grand Vitara", "Kizashi", "Equator", "XL7", "Aerio", "Forenza"],
//     Isuzu: ["D-Max", "MU-X", "Trooper", "Rodeo", "Ascender", "i-Series", "Axiom"],
//     Fiat: ["500", "500L", "500X", "Panda", "Tipo", "Doblo", "Ducato", "124 Spider"],
//     "Alfa Romeo": ["Giulia", "Stelvio", "4C", "Spider", "GTV", "156", "147", "159"],
//     Maserati: ["Ghibli", "Quattroporte", "Levante", "GranTurismo", "GranCabrio", "MC20"],
//     Bentley: ["Continental", "Flying Spur", "Bentayga", "Mulsanne", "Azure", "Arnage"],
//     "Rolls-Royce": ["Phantom", "Ghost", "Wraith", "Dawn", "Cullinan", "Silver Shadow"],
//     "Aston Martin": ["DB11", "Vantage", "DBS", "Rapide", "Vanquish", "DB9", "V8 Vantage"],
//     McLaren: ["720S", "570S", "600LT", "GT", "Senna", "P1", "650S", "540C"],
//     Ferrari: ["488", "F8", "SF90", "Roma", "Portofino", "812", "LaFerrari", "California"],
//     Lamborghini: ["Huracán", "Aventador", "Urus", "Gallardo", "Murciélago", "Countach"],
//     Bugatti: ["Chiron", "Veyron", "Divo", "Centodieci", "La Voiture Noire"],
//     Koenigsegg: ["Regera", "Jesko", "Gemera", "CCX", "CCR", "Agera"],
//     Pagani: ["Huayra", "Zonda", "Utopia", "Imola", "C10"],
//   };

//   const vehicleColors = [
//     "White", "Black", "Silver", "Gray", "Red", "Blue", "Green", "Brown", "Beige", 
//     "Gold", "Yellow", "Orange", "Purple", "Pink", "Maroon", "Navy", "Turquoise", 
//     "Cream", "Tan", "Champagne", "Pearl White", "Metallic Black", "Metallic Silver", 
//     "Metallic Gray", "Metallic Blue", "Metallic Red", "Metallic Green", "Metallic Brown", 
//     "Metallic Gold", "Matte Black", "Matte Gray", "Matte Blue", "Carbon Black", 
//     "Jet Black", "Arctic White", "Alpine White", "Mineral White", "Space Gray", 
//     "Midnight Blue", "Deep Blue", "Royal Blue", "Electric Blue", "Bright Red", 
//     "Crimson Red", "Fire Red", "Racing Green", "Forest Green", "Emerald Green", 
//     "British Racing Green", "Champagne Gold", "Rose Gold", "Copper", "Bronze", 
//     "Gunmetal", "Titanium", "Platinum", "Pearl", "Iridescent", "Chrome"
//   ];

//   // ========================================
//   // API CONFIGURATION
//   // ========================================
//   const VEHICLE_API = "/api/vehicle";
//   const API_BASE_URL = "http://localhost:8080/mobileglow";

//   const getAuthToken = () => {
//     return localStorage.getItem("authToken") || localStorage.getItem("token");
//   };

//   const apiClient = axios.create({
//     baseURL: API_BASE_URL,
//     headers: {
//       "Content-Type": "application/json",
//     },
//   });

//   apiClient.interceptors.request.use(
//     (config) => {
//       const token = getAuthToken();
//       if (token) {
//         config.headers.Authorization = `Bearer ${token}`;
//       }
//       return config;
//     },
//     (error) => Promise.reject(error)
//   );

//   // ========================================
//   // VEHICLE SERVICE API
//   // ========================================
//   const vehicleService = {
//     getAllVehicles: async () => {
//       const response = await apiClient.get(`${VEHICLE_API}/findAll`);
//       return response.data;
//     },
//     getVehicleById: async (id) => {
//       const response = await apiClient.get(`${VEHICLE_API}/read/${id}`);
//       return response.data;
//     },
//     createVehicle: async (vehicleData) => {
//       const response = await apiClient.post(`${VEHICLE_API}/create`, vehicleData);
//       return response.data;
//     },
//     updateVehicle: async (id, vehicleData) => {
//       const response = await apiClient.put(`${VEHICLE_API}/update/${id}`, vehicleData);
//       return response.data;
//     },
//     deleteVehicle: async (id) => {
//       const response = await apiClient.delete(`${VEHICLE_API}/delete/${id}`);
//       return response.status === 204 || response.status === 200;
//     },
//     findVehicleByPlateNumber: async (plateNumber) => {
//       const response = await apiClient.get(`${VEHICLE_API}/plate/${plateNumber}`);
//       return response.data;
//     },
//     findVehiclesByCustomerId: async (customerId) => {
//       const response = await apiClient.get(`${VEHICLE_API}/customer/${customerId}`);
//       return response.data;
//     },
//   };

//   // ========================================
//   // EFFECTS
//   // ========================================
//   useEffect(() => {
//     const token = getAuthToken();
//     if (!token) {
//       setError("Please log in to access vehicle management. Go to the login page first.");
//       setLoading(false);
//       return;
//     }
//     fetchVehicles();
//   }, []);

//   // ========================================
//   // ERROR & POPUP HANDLERS
//   // ========================================
//   const displayErrorPopup = (title, message, type = "error") => {
//     setErrorDetails({ title, message, type });
//     setShowErrorPopup(true);
//     setError(null);
//   };

//   const closeErrorPopup = () => {
//     setShowErrorPopup(false);
//     setErrorDetails({ title: "", message: "", type: "error" });
//   };

//   const displaySuccessPopup = (message) => {
//     setSuccessMessage(message);
//     setShowSuccessPopup(true);
//   };

//   const closeSuccessPopup = () => {
//     setShowSuccessPopup(false);
//     setSuccessMessage("");
//   };

//   const showDeleteConfirmation = (vehicleId) => {
//     setDeleteTarget(vehicleId);
//     setShowDeletePopup(true);
//   };

//   const closeDeletePopup = () => {
//     setShowDeletePopup(false);
//     setDeleteTarget(null);
//   };

//   // ========================================
//   // API FUNCTIONS
//   // ========================================
//   const fetchVehicles = async () => {
//     try {
//       setLoading(true);
//       const userId = localStorage.getItem("userId") || "1";
//       const data = await vehicleService.findVehiclesByCustomerId(parseInt(userId));
//       setVehicles(data);
//       setError(null);
//     } catch (err) {
//       console.error("Error fetching vehicles:", err);
//       if (err.response?.status === 401) {
//         displayErrorPopup("Authentication Required", "Please log in to access your vehicles. You will be redirected to the login page.", "auth");
//       } else if (err.response?.status === 403) {
//         displayErrorPopup("Access Denied", "You do not have permission to access vehicle management. Please contact support.", "error");
//       } else if (err.response?.status >= 500) {
//         displayErrorPopup("Server Error", "Our servers are experiencing issues. Please try again later or contact support if the problem persists.", "error");
//       } else {
//         displayErrorPopup("Failed to Load Vehicles", err.response?.data?.message || "Unable to fetch your vehicles. Please check your connection and try again.", "error");
//       }
//     } finally {
//       setLoading(false);
//     }
//   };

//   // ========================================
//   // FORM HANDLERS
//   // ========================================
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => {
//       const newData = { ...prev, [name]: value };
//       if (name === "make") newData.model = "";
//       return newData;
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError(null);

//     try {
//       if (!editingVehicle) {
//         const isDuplicate = vehicles.some(
//           (vehicle) => vehicle.carPlateNumber.toLowerCase() === formData.plateNumber.toLowerCase()
//         );

//         if (isDuplicate) {
//           displayErrorPopup("Plate Number Already Exists", "A vehicle with this plate number already exists. Please use a different plate number.", "error");
//           setLoading(false);
//           return;
//         }
//       }

//       const vehicleData = {
//         carPlateNumber: formData.plateNumber,
//         carMake: formData.make,
//         carColour: formData.colour,
//         carModel: formData.model,
//         customerId: parseInt(formData.customerId),
//       };

//       if (editingVehicle) {
//         await vehicleService.updateVehicle(editingVehicle.vehicleID, vehicleData);
//         displaySuccessPopup("Vehicle updated successfully!");
//       } else {
//         await vehicleService.createVehicle(vehicleData);
//         displaySuccessPopup("Vehicle created successfully!");
//       }

//       await fetchVehicles();
//       resetForm();
//     } catch (err) {
//       console.error("Failed to save vehicle:", err);
//       const errorMessage = err.response?.data?.message || err.message || "";
//       if (err.response?.status === 400 || err.response?.status === 409 || errorMessage.toLowerCase().includes("plate") || errorMessage.toLowerCase().includes("already exists") || errorMessage.toLowerCase().includes("duplicate")) {
//         displayErrorPopup("Plate Number Already Exists", "A vehicle with this plate number already exists. Please use a different plate number.", "error");
//       } else if (err.response?.status >= 500) {
//         displayErrorPopup("Server Error", "Unable to save your vehicle due to server issues. Please try again later.", "error");
//       } else {
//         displayErrorPopup("Failed to Save Vehicle", errorMessage || "Unable to save your vehicle. Please try again.", "error");
//       }
//     } finally {
//       setLoading(false);
//     }
//   };

//   const resetForm = () => {
//     const userId = localStorage.getItem("userId") || "1";
//     setFormData({
//       vehicleID: "",
//       plateNumber: "",
//       make: "",
//       colour: "",
//       model: "",
//       customerId: parseInt(userId),
//     });
//     setEditingVehicle(null);
//     setShowForm(false);
//   };

//   const handleEdit = (vehicle) => {
//     setEditingVehicle(vehicle);
//     const userId = localStorage.getItem("userId") || "1";
//     setFormData({
//       vehicleID: vehicle.vehicleID || "",
//       plateNumber: vehicle.carPlateNumber || "",
//       make: vehicle.carMake || "",
//       colour: vehicle.carColour || "",
//       model: vehicle.carModel || "",
//       customerId: parseInt(userId),
//     });
//     setShowForm(true);
//     setError(null);
//   };

//   const handleDelete = (id) => {
//     showDeleteConfirmation(id);
//   };

//   const confirmDelete = async () => {
//     if (!deleteTarget) return;
//     setLoading(true);
//     setError(null);
//     closeDeletePopup();

//     try {
//       await vehicleService.deleteVehicle(deleteTarget);
//       displaySuccessPopup("Vehicle deleted successfully!");
//       await fetchVehicles();
//     } catch (err) {
//       console.error("Failed to delete vehicle:", err);
//       if (err.response?.status === 404) {
//         displayErrorPopup("Vehicle Not Found", "This vehicle may have already been deleted. Please refresh the page.", "error");
//       } else if (err.response?.status === 403) {
//         displayErrorPopup("Cannot Delete Vehicle", "You do not have permission to delete this vehicle.", "error");
//       } else if (err.response?.status >= 500) {
//         displayErrorPopup("Server Error", "Unable to delete the vehicle due to server issues. Please try again later.", "error");
//       } else {
//         displayErrorPopup("Failed to Delete Vehicle", err.response?.data?.message || "Unable to delete the vehicle. Please try again.", "error");
//       }
//     } finally {
//       setLoading(false);
//     }
//   };

//   // ========================================
//   // RENDER SUBSYSTEM
//   // ========================================
//   if (loading && vehicles.length === 0) {
//     return (
//       <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center font-sans">
//         <div className="w-12 h-12 border-4 border-blue-900 border-t-transparent rounded-full animate-spin"></div>
//         <p className="mt-4 text-sm font-bold tracking-wide text-gray-500 uppercase">Loading vehicles...</p>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gray-50 font-sans antialiased text-gray-800 flex flex-col relative">
//       {/* <NavbarCustomer /> */}

//       <div className="flex-grow max-w-6xl w-full mx-auto px-4 sm:px-6 pt-24 pb-12">
        
//         {/* Inline Error Banner */}
//         {error && (
//           <div className="mb-6 p-4 bg-red-900 text-white text-xs font-bold uppercase tracking-wider rounded-xl flex items-center justify-between shadow-sm">
//             <span>{error}</span>
//             {error.includes("Authentication required") && (
//               <a href="/login" className="underline hover:text-gray-200 ml-2">Go to Login</a>
//             )}
//             <button onClick={() => setError(null)} className="text-lg font-bold leading-none">&times;</button>
//           </div>
//         )}

//         {/* Workspace Management Header */}
//         <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-gray-200 pb-5 mb-8 gap-4">
//           <div>
//             <h2 className="text-3xl font-black text-gray-900 tracking-tight">Vehicle Garage</h2>
//             <p className="text-gray-400 text-xs font-semibold uppercase tracking-wider mt-1">
//               Configure and audit individual profile vehicle parameters
//             </p>
//           </div>
//           <button
//             onClick={() => setShowForm(true)}
//             className="self-start sm:self-auto px-5 py-3 bg-blue-900 hover:bg-blue-800 text-white text-xs font-black uppercase tracking-wider rounded-xl shadow-sm transition-colors"
//           >
//             + Add New Vehicle
//           </button>
//         </div>

//         {/* Main Table Segment Container */}
//         <div className="bg-white border border-gray-100 rounded-[2rem] shadow-[0_15px_40px_rgba(0,0,0,0.01)] overflow-hidden">
//           <div className="p-6 border-b border-gray-50 flex items-center justify-between flex-wrap gap-2">
//             <h3 className="text-xs font-black text-gray-900 uppercase tracking-wider">Registered Roster Ledger</h3>
//             <button 
//               onClick={fetchVehicles}
//               className="text-[10px] font-black text-blue-900 uppercase tracking-wider hover:text-blue-800 transition-colors"
//             >
//               Refresh List
//             </button>
//           </div>

//           <div className="overflow-x-auto">
//             <table className="w-full text-left border-collapse">
//               <thead>
//                 <tr className="bg-gray-50/70 border-b border-gray-100">
//                   <th className="p-4 text-[10px] font-black text-gray-400 uppercase tracking-wider pl-6">Plate Number</th>
//                   <th className="p-4 text-[10px] font-black text-gray-400 uppercase tracking-wider">Make Designation</th>
//                   <th className="p-4 text-[10px] font-black text-gray-400 uppercase tracking-wider">Model Variant</th>
//                   <th className="p-4 text-[10px] font-black text-gray-400 uppercase tracking-wider">Color Finish</th>
//                   <th className="p-4 text-[10px] font-black text-gray-400 uppercase tracking-wider text-right pr-6">Row Actions</th>
//                 </tr>
//               </thead>
//               <tbody className="divide-y divide-gray-50">
//                 {vehicles.length === 0 ? (
//                   <tr>
//                     <td colSpan="5" className="text-center p-12 text-xs font-semibold text-gray-400 uppercase tracking-wider">
//                       No vehicles found. Add your first vehicle above.
//                     </td>
//                   </tr>
//                 ) : (
//                   vehicles.map((vehicle) => (
//                     <tr 
//                       key={vehicle.vehicleID} 
//                       className={`hover:bg-gray-50/40 transition-colors ${
//                         editingVehicle?.vehicleID === vehicle.vehicleID ? "bg-blue-50/30" : ""
//                       }`}
//                     >
//                       <td className="p-4 pl-6">
//                         <span className="px-3 py-1.5 bg-gray-900 text-white font-mono text-xs font-black tracking-wider rounded-md border border-gray-800 shadow-sm">
//                           {vehicle.carPlateNumber}
//                         </span>
//                       </td>
//                       <td className="p-4 text-sm font-bold text-gray-900">{vehicle.carMake || "N/A"}</td>
//                       <td className="p-4 text-xs font-semibold text-gray-500">{vehicle.carModel || "N/A"}</td>
//                       <td className="p-4 text-xs font-semibold text-gray-500">
//                         <div className="flex items-center gap-2">
//                           <span className="text-gray-700">{vehicle.carColour || "N/A"}</span>
//                         </div>
//                       </td>
//                       <td className="p-4 text-right pr-6">
//                         <div className="flex items-center justify-end gap-2">
//                           <button
//                             onClick={() => handleEdit(vehicle)}
//                             className="px-3 py-1.5 bg-gray-50 hover:bg-gray-100 border border-gray-100 rounded-lg text-xs font-bold text-gray-700 transition-colors"
//                           >
//                             Edit
//                           </button>
//                           <button
//                             onClick={() => handleDelete(vehicle.vehicleID)}
//                             className="px-3 py-1.5 bg-red-50 hover:bg-red-100 rounded-lg text-xs font-bold text-red-700 transition-colors"
//                           >
//                             Delete
//                           </button>
//                         </div>
//                       </td>
//                     </tr>
//                   ))
//                 )}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>

//       {/* Slide-out Sidebar Form Overlay Framework */}
//       {showForm && (
//         <div 
//           onClick={resetForm}
//           className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex justify-end animate-in fade-in duration-200"
//         >
//           <div 
//             onClick={(e) => e.stopPropagation()}
//             className="w-full max-w-md bg-white h-full shadow-2xl flex flex-col p-6 sm:p-8 space-y-6 overflow-y-auto animate-in slide-in-from-right duration-300"
//           >
//             <div className="flex items-center justify-between border-b border-gray-100 pb-4">
//               <div>
//                 <h2 className="text-xl font-black text-gray-900 tracking-tight">
//                   {editingVehicle ? "Edit Vehicle Parameters" : "Add Profile Vehicle"}
//                 </h2>
//                 {editingVehicle && (
//                   <span className="mt-1 inline-block px-2 py-0.5 bg-blue-50 text-blue-900 text-[10px] font-black uppercase tracking-wider rounded">
//                     Target: {editingVehicle.carPlateNumber}
//                   </span>
//                 )}
//               </div>
//               <button 
//                 onClick={resetForm}
//                 className="w-8 h-8 flex items-center justify-center bg-gray-50 rounded-full text-lg font-bold text-gray-400 hover:bg-gray-100 hover:text-gray-600 transition-colors"
//               >
//                 &times;
//               </button>
//             </div>

//             <form onSubmit={handleSubmit} className="flex-grow flex flex-col justify-between">
//               <div className="space-y-4">
//                 <div className="flex flex-col space-y-1">
//                   <label htmlFor="plateNumber" className="text-[10px] font-black text-gray-400 uppercase tracking-wider">Plate Number *</label>
//                   <input
//                     type="text"
//                     id="plateNumber"
//                     name="plateNumber"
//                     value={formData.plateNumber}
//                     onChange={handleInputChange}
//                     required
//                     placeholder="e.g. CA 123-456"
//                     className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-xl text-sm font-medium tracking-wide outline-none focus:border-blue-900 transition-all uppercase"
//                   />
//                 </div>

//                 <div className="flex flex-col space-y-1">
//                   <label htmlFor="make" className="text-[10px] font-black text-gray-400 uppercase tracking-wider">Make Designation *</label>
//                   <select
//                     id="make"
//                     name="make"
//                     value={formData.make}
//                     onChange={handleInputChange}
//                     required
//                     className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-xl text-sm font-semibold text-gray-900 outline-none focus:border-blue-900 transition-all"
//                   >
//                     <option value="">Select a make...</option>
//                     {vehicleMakes.map((make) => (
//                       <option key={make} value={make}>{make}</option>
//                     ))}
//                   </select>
//                 </div>

//                 <div className="flex flex-col space-y-1">
//                   <label htmlFor="model" className="text-[10px] font-black text-gray-400 uppercase tracking-wider">Model Variant *</label>
//                   <select
//                     id="model"
//                     name="model"
//                     value={formData.model}
//                     onChange={handleInputChange}
//                     required
//                     disabled={!formData.make}
//                     className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-xl text-sm font-semibold text-gray-900 outline-none focus:border-blue-900 transition-all disabled:opacity-50"
//                   >
//                     <option value="">Select a model...</option>
//                     {formData.make && vehicleModels[formData.make]?.map((model) => (
//                       <option key={model} value={model}>{model}</option>
//                     ))}
//                   </select>
//                 </div>

//                 <div className="flex flex-col space-y-1">
//                   <label htmlFor="colour" className="text-[10px] font-black text-gray-400 uppercase tracking-wider">Color Finish *</label>
//                   <select
//                     id="colour"
//                     name="colour"
//                     value={formData.colour}
//                     onChange={handleInputChange}
//                     required
//                     className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-xl text-sm font-semibold text-gray-900 outline-none focus:border-blue-900 transition-all"
//                   >
//                     <option value="">Select a color...</option>
//                     {vehicleColors.map((color) => (
//                       <option key={color} value={color}>{color}</option>
//                     ))}
//                   </select>
//                 </div>
//               </div>

//               <div className="pt-8 flex gap-2">
//                 <button
//                   type="button"
//                   onClick={resetForm}
//                   className="flex-1 py-3.5 bg-gray-50 hover:bg-gray-100 border border-gray-100 text-gray-500 font-bold text-xs uppercase tracking-wider rounded-xl transition-colors"
//                 >
//                   Cancel
//                 </button>
//                 <button
//                   type="submit"
//                   disabled={loading}
//                   className="flex-1 py-3.5 bg-blue-900 hover:bg-blue-800 text-white font-black text-xs uppercase tracking-wider rounded-xl shadow-sm transition-colors disabled:opacity-50"
//                 >
//                   {loading ? "Saving Records..." : editingVehicle ? "Update Vehicle" : "Commit Vehicle"}
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}

//       {/* Global Delete Confirmation Overlay Prompt */}
//       {showDeletePopup && (
//         <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex justify-center items-center z-50 p-4 animate-in fade-in duration-150">
//           <div className="bg-white rounded-[2rem] border border-gray-100 w-full max-w-sm shadow-2xl p-6 sm:p-8 space-y-6 text-center">
//             <div>
//               <h3 className="text-lg font-black text-gray-900 tracking-tight">Delete Vehicle</h3>
//               <p className="text-gray-400 text-[10px] font-black uppercase tracking-wider mt-0.5">Destructive action confirmation</p>
//             </div>
//             <p className="text-sm font-medium text-gray-500">Are you sure you want to permanently strip this vehicle registration entry from the stack ledger?</p>
//             <div className="flex gap-2 pt-2">
//               <button
//                 onClick={closeDeletePopup}
//                 disabled={loading}
//                 className="flex-1 py-3 bg-gray-50 hover:bg-gray-100 border border-gray-100 text-gray-500 font-bold text-xs uppercase tracking-wider rounded-xl transition-colors"
//               >
//                 No
//               </button>
//               <button
//                 onClick={confirmDelete}
//                 disabled={loading}
//                 className="flex-1 py-3 bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-sm transition-colors disabled:opacity-50"
//               >
//                 {loading ? "Deleting..." : "Yes, Delete"}
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Global Operational Success Message Prompt */}
//       {showSuccessPopup && (
//         <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex justify-center items-center z-50 p-4 animate-in fade-in duration-150">
//           <div className="bg-white rounded-[2rem] border border-gray-100 w-full max-w-sm shadow-2xl p-6 sm:p-8 space-y-6 text-center">
//             <div>
//               <h3 className="text-lg font-black text-gray-900 tracking-tight">Success!</h3>
//               <p className="text-gray-400 text-[10px] font-black uppercase tracking-wider mt-0.5">Transaction entry verified</p>
//             </div>
//             <p className="text-sm font-semibold text-emerald-700 bg-emerald-50 border border-emerald-100/50 p-4 rounded-xl leading-relaxed">
//               {successMessage}
//             </p>
//             <button
//               onClick={closeSuccessPopup}
//               className="w-full py-3 bg-gray-900 hover:bg-gray-800 text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-sm transition-colors"
//             >
//               OK
//             </button>
//           </div>
//         </div>
//       )}

//       {/* Global Error Exception Interface Dialog */}
//       {showErrorPopup && (
//         <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex justify-center items-center z-50 p-4 animate-in fade-in duration-150">
//           <div className="bg-white rounded-[2rem] border border-gray-100 w-full max-w-sm shadow-2xl p-6 sm:p-8 space-y-6 text-center">
//             <div>
//               <h3 className="text-lg font-black text-red-600 tracking-tight">{errorDetails.title}</h3>
//               <p className="text-gray-400 text-[10px] font-black uppercase tracking-wider mt-0.5">Logistics failure handler</p>
//             </div>
//             <p className="text-sm font-medium text-gray-500 leading-relaxed">{errorDetails.message}</p>
//             <div>
//               {errorDetails.type === "auth" ? (
//                 <button
//                   onClick={() => {
//                     closeErrorPopup();
//                     navigate("/login");
//                   }}
//                   className="w-full py-3 bg-blue-900 hover:bg-blue-800 text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-sm transition-colors"
//                 >
//                   Go to Login
//                 </button>
//               ) : (
//                 <button
//                   onClick={closeErrorPopup}
//                   className="w-full py-3 bg-gray-900 hover:bg-gray-800 text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-sm transition-colors"
//                 >
//                   OK
//                 </button>
//               )}
//             </div>
//           </div>
//         </div>
//       )}

//       {/* <Footer /> */}


//     </div>
//   );
// }


// // newer2 
import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

import { pageNames } from "../pageNames";

// Import decoupled vehicle properties data
import { vehicleMakes, vehicleModels, vehicleColors } from "./vehicleData";

import NavbarCustomer from "../../components/NavbarCustomer";
import Footer from "../../components/Footer";


export default function CustomerVehicles(){
  document.title = pageNames.c_vehicle
  
  // ========================================
  // HOOKS & STATE
  // ========================================
  const [vehicles, setVehicles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [editingVehicle, setEditingVehicle] = useState(null);
  const [showErrorPopup, setShowErrorPopup] = useState(false);
  const [errorDetails, setErrorDetails] = useState({
    title: "",
    message: "",
    type: "error",
  });
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [showDeletePopup, setShowDeletePopup] = useState(false);
  const [deleteTarget, setDeleteTarget] = useState(null);
  const [formData, setFormData] = useState({
    vehicleID: "",
    plateNumber: "",
    make: "",
    colour: "",
    model: "",
    customerId: parseInt(localStorage.getItem("userId") || "1"),
  });

  const location = useLocation();
  const navigate = useNavigate();

  // ========================================
  // API CONFIGURATION
  // ========================================
  const VEHICLE_API = "/api/vehicle";
  const API_BASE_URL = "http://localhost:8080/mobileglow";

  const getAuthToken = () => {
    return localStorage.getItem("authToken") || localStorage.getItem("token");
  };

  const apiClient = axios.create({
    baseURL: API_BASE_URL,
    headers: {
      "Content-Type": "application/json",
    },
  });

  apiClient.interceptors.request.use(
    (config) => {
      const token = getAuthToken();
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error) => Promise.reject(error)
  );

  // ========================================
  // VEHICLE SERVICE API
  // ========================================
  const vehicleService = {
    getAllVehicles: async () => {
      const response = await apiClient.get(`${VEHICLE_API}/findAll`);
      return response.data;
    },
    getVehicleById: async (id) => {
      const response = await apiClient.get(`${VEHICLE_API}/read/${id}`);
      return response.data;
    },
    createVehicle: async (vehicleData) => {
      const response = await apiClient.post(`${VEHICLE_API}/create`, vehicleData);
      return response.data;
    },
    updateVehicle: async (id, vehicleData) => {
      const response = await apiClient.put(`${VEHICLE_API}/update/${id}`, vehicleData);
      return response.data;
    },
    deleteVehicle: async (id) => {
      const response = await apiClient.delete(`${VEHICLE_API}/delete/${id}`);
      return response.status === 204 || response.status === 200;
    },
    findVehicleByPlateNumber: async (plateNumber) => {
      const response = await apiClient.get(`${VEHICLE_API}/plate/${plateNumber}`);
      return response.data;
    },
    findVehiclesByCustomerId: async (customerId) => {
      const response = await apiClient.get(`${VEHICLE_API}/customer/${customerId}`);
      return response.data;
    },
  };

  // ========================================
  // EFFECTS
  // ========================================
  useEffect(() => {
    const token = getAuthToken();
    if (!token) {
      setError("Please log in to access vehicle management. Go to the login page first.");
      setLoading(false);
      return;
    }
    fetchVehicles();
  }, []);

  // ========================================
  // ERROR & POPUP HANDLERS
  // ========================================
  const displayErrorPopup = (title, message, type = "error") => {
    setErrorDetails({ title, message, type });
    setShowErrorPopup(true);
    setError(null);
  };

  const closeErrorPopup = () => {
    setShowErrorPopup(false);
    setErrorDetails({ title: "", message: "", type: "error" });
  };

  const displaySuccessPopup = (message) => {
    setSuccessMessage(message);
    setShowSuccessPopup(true);
  };

  const closeSuccessPopup = () => {
    setShowSuccessPopup(false);
    setSuccessMessage("");
  };

  const showDeleteConfirmation = (vehicleId) => {
    setDeleteTarget(vehicleId);
    setShowDeletePopup(true);
  };

  const closeDeletePopup = () => {
    setShowDeletePopup(false);
    setDeleteTarget(null);
  };

  // ========================================
  // API FUNCTIONS
  // ========================================
  const fetchVehicles = async () => {
    try {
      setLoading(true);
      const userId = localStorage.getItem("userId") || "1";
      const data = await vehicleService.findVehiclesByCustomerId(parseInt(userId));
      setVehicles(data);
      setError(null);
    } catch (err) {
      console.error("Error fetching vehicles:", err);
      if (err.response?.status === 401) {
        displayErrorPopup("Authentication Required", "Please log in to access your vehicles. You will be redirected to the login page.", "auth");
      } else if (err.response?.status === 403) {
        displayErrorPopup("Access Denied", "You do not have permission to access vehicle management. Please contact support.", "error");
      } else if (err.response?.status >= 500) {
        displayErrorPopup("Server Error", "Our servers are experiencing issues. Please try again later or contact support if the problem persists.", "error");
      } else {
        displayErrorPopup("Failed to Load Vehicles", err.response?.data?.message || "Unable to fetch your vehicles. Please check your connection and try again.", "error");
      }
    } finally {
      setLoading(false);
    }
  };

  // ========================================
  // FORM HANDLERS
  // ========================================
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => {
      const newData = { ...prev, [name]: value };
      if (name === "make") newData.model = "";
      return newData;
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      if (!editingVehicle) {
        const isDuplicate = vehicles.some(
          (vehicle) => vehicle.carPlateNumber.toLowerCase() === formData.plateNumber.toLowerCase()
        );

        if (isDuplicate) {
          displayErrorPopup("Plate Number Already Exists", "A vehicle with this plate number already exists. Please use a different plate number.", "error");
          setLoading(false);
          return;
        }
      }

      const vehicleData = {
        carPlateNumber: formData.plateNumber,
        carMake: formData.make,
        carColour: formData.colour,
        carModel: formData.model,
        customerId: parseInt(formData.customerId),
      };

      if (editingVehicle) {
        await vehicleService.updateVehicle(editingVehicle.vehicleID, vehicleData);
        displaySuccessPopup("Vehicle updated successfully!");
      } else {
        await vehicleService.createVehicle(vehicleData);
        displaySuccessPopup("Vehicle created successfully!");
      }

      await fetchVehicles();
      resetForm();
    } catch (err) {
      console.error("Failed to save vehicle:", err);
      const errorMessage = err.response?.data?.message || err.message || "";
      if (err.response?.status === 400 || err.response?.status === 409 || errorMessage.toLowerCase().includes("plate") || errorMessage.toLowerCase().includes("already exists") || errorMessage.toLowerCase().includes("duplicate")) {
        displayErrorPopup("Plate Number Already Exists", "A vehicle with this plate number already exists. Please use a different plate number.", "error");
      } else if (err.response?.status >= 500) {
        displayErrorPopup("Server Error", "Unable to save your vehicle due to server issues. Please try again later.", "error");
      } else {
        displayErrorPopup("Failed to Save Vehicle", errorMessage || "Unable to save your vehicle. Please try again.", "error");
      }
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    const userId = localStorage.getItem("userId") || "1";
    setFormData({
      vehicleID: "",
      plateNumber: "",
      make: "",
      colour: "",
      model: "",
      customerId: parseInt(userId),
    });
    setEditingVehicle(null);
    setShowForm(false);
  };

  const handleEdit = (vehicle) => {
    setEditingVehicle(vehicle);
    const userId = localStorage.getItem("userId") || "1";
    setFormData({
      vehicleID: vehicle.vehicleID || "",
      plateNumber: vehicle.carPlateNumber || "",
      make: vehicle.carMake || "",
      colour: vehicle.carColour || "",
      model: vehicle.carModel || "",
      customerId: parseInt(userId),
    });
    setShowForm(true);
    setError(null);
  };

  const handleDelete = (id) => {
    showDeleteConfirmation(id);
  };

  const confirmDelete = async () => {
    if (!deleteTarget) return;
    setLoading(true);
    setError(null);
    closeDeletePopup();

    try {
      await vehicleService.deleteVehicle(deleteTarget);
      displaySuccessPopup("Vehicle deleted successfully!");
      await fetchVehicles();
    } catch (err) {
      console.error("Failed to delete vehicle:", err);
      if (err.response?.status === 404) {
        displayErrorPopup("Vehicle Not Found", "This vehicle may have already been deleted. Please refresh the page.", "error");
      } else if (err.response?.status === 403) {
        displayErrorPopup("Cannot Delete Vehicle", "You do not have permission to delete this vehicle.", "error");
      } else if (err.response?.status >= 500) {
        displayErrorPopup("Server Error", "Unable to delete the vehicle due to server issues. Please try again later.", "error");
      } else {
        displayErrorPopup("Failed to Delete Vehicle", err.response?.data?.message || "Unable to delete the vehicle. Please try again.", "error");
      }
    } finally {
      setLoading(false);
    }
  };

  // ========================================
  // RENDER SUBSYSTEM
  // ========================================
  if (loading && vehicles.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center font-sans">
        <div className="w-12 h-12 border-4 border-blue-900 border-t-transparent rounded-full animate-spin"></div>
        <p className="mt-4 text-sm font-bold tracking-wide text-gray-500 uppercase">Loading vehicles...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 font-sans antialiased text-gray-800 flex flex-col relative">
      {/* <NavbarCustomer /> */}

         {/* Absolute Back Button */}
      <button
        onClick={() => navigate('/customer')}
        className="absolute top-8 left-8 flex items-center justify-center 
        w-10 h-10 bg-white border border-gray-100 rounded-xl text-gray-400 
        hover:text-blue-900 shadow-sm hover:shadow transition-all group z-10 font-bold"
      >
        <span className="group-hover:-translate-x-0.5 transition-transform">←</span>
      </button>    

      <div className="flex-grow max-w-6xl w-full mx-auto px-4 sm:px-6 pt-24 pb-12">
        
        {/* Inline Error Banner */}
        {error && (
          <div className="mb-6 p-4 bg-red-900 text-white text-xs font-bold uppercase tracking-wider rounded-xl flex items-center justify-between shadow-sm">
            <span>{error}</span>
            {error.includes("Authentication required") && (
              <a href="/login" className="underline hover:text-gray-200 ml-2">Go to Login</a>
            )}
            <button onClick={() => setError(null)} className="text-lg font-bold leading-none">&times;</button>
          </div>
        )}

        {/* Workspace Management Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-gray-200 pb-5 mb-8 gap-4">
          <div>
            <h2 className="text-3xl font-black text-gray-900 tracking-tight">My Vehicles</h2>
            <p className="text-gray-400 text-xs font-semibold uppercase tracking-wider mt-1">
              Configure and audit individual profile vehicle parameters
            </p>
          </div>
          <button
            onClick={() => setShowForm(true)}
            className="self-start sm:self-auto px-5 py-3 bg-blue-900 hover:bg-blue-800 text-white text-xs font-black uppercase tracking-wider rounded-xl shadow-sm transition-colors"
          >
            + Add New Vehicle
          </button>
        </div>

        {/* Main Table Segment Container */}
        <div className="bg-white border border-gray-100 rounded-[2rem] shadow-[0_15px_40px_rgba(0,0,0,0.01)] overflow-hidden">
          <div className="p-6 border-b border-gray-50 flex items-center justify-between flex-wrap gap-2">
            <h3 className="text-xs font-black text-gray-900 uppercase tracking-wider">Registered Roster Ledger</h3>
            <button 
              onClick={fetchVehicles}
              className="text-[10px] font-black text-blue-900 uppercase tracking-wider hover:text-blue-800 transition-colors"
            >
              Refresh List
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50/70 border-b border-gray-100">
                  <th className="p-4 text-[10px] font-black text-gray-400 uppercase tracking-wider pl-6">Plate Number</th>
                  <th className="p-4 text-[10px] font-black text-gray-400 uppercase tracking-wider">Make Designation</th>
                  <th className="p-4 text-[10px] font-black text-gray-400 uppercase tracking-wider">Model Variant</th>
                  <th className="p-4 text-[10px] font-black text-gray-400 uppercase tracking-wider">Color Finish</th>
                  <th className="p-4 text-[10px] font-black text-gray-400 uppercase tracking-wider text-right pr-6">Row Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {vehicles.length === 0 ? (
                  <tr>
                    <td colSpan="5" className="text-center p-12 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                      No vehicles found. Add your first vehicle above.
                    </td>
                  </tr>
                ) : (
                  vehicles.map((vehicle) => (
                    <tr 
                      key={vehicle.vehicleID} 
                      className={`hover:bg-gray-50/40 transition-colors ${
                        editingVehicle?.vehicleID === vehicle.vehicleID ? "bg-blue-50/30" : ""
                      }`}
                    >
                      <td className="p-4 pl-6">
                        <span className="px-3 py-1.5 bg-gray-900 text-white font-mono text-xs font-black tracking-wider rounded-md border border-gray-800 shadow-sm">
                          {vehicle.carPlateNumber}
                        </span>
                      </td>
                      <td className="p-4 text-sm font-bold text-gray-900">{vehicle.carMake || "N/A"}</td>
                      <td className="p-4 text-xs font-semibold text-gray-500">{vehicle.carModel || "N/A"}</td>
                      <td className="p-4 text-xs font-semibold text-gray-500">
                        <div className="flex items-center gap-2">
                          <span className="text-gray-700">{vehicle.carColour || "N/A"}</span>
                        </div>
                      </td>
                      <td className="p-4 text-right pr-6">
                        <div className="flex items-center justify-end gap-2">
                          <button
                            onClick={() => handleEdit(vehicle)}
                            className="px-3 py-1.5 bg-gray-50 hover:bg-gray-100 border border-gray-100 rounded-lg text-xs font-bold text-gray-700 transition-colors"
                          >
                            Edit
                          </button>
                          <button
                            onClick={() => handleDelete(vehicle.vehicleID)}
                            className="px-3 py-1.5 bg-red-50 hover:bg-red-100 rounded-lg text-xs font-bold text-red-700 transition-colors"
                          >
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Slide-out Sidebar Form Overlay Framework */}
      {showForm && (
        <div 
          onClick={resetForm}
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex justify-end animate-in fade-in duration-200"
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-md bg-white h-full shadow-2xl flex flex-col p-6 sm:p-8 space-y-6 overflow-y-auto animate-in slide-in-from-right duration-300"
          >
            <div className="flex items-center justify-between border-b border-gray-100 pb-4">
              <div>
                <h2 className="text-xl font-black text-gray-900 tracking-tight">
                  {editingVehicle ? "Edit Vehicle Parameters" : "Add Profile Vehicle"}
                </h2>
                {editingVehicle && (
                  <span className="mt-1 inline-block px-2 py-0.5 bg-blue-50 text-blue-900 text-[10px] font-black uppercase tracking-wider rounded">
                    Target: {editingVehicle.carPlateNumber}
                  </span>
                )}
              </div>
              <button 
                onClick={resetForm}
                className="w-8 h-8 flex items-center justify-center bg-gray-50 rounded-full text-lg font-bold text-gray-400 hover:bg-gray-100 hover:text-gray-600 transition-colors"
              >
                &times;
              </button>
            </div>

            <form onSubmit={handleSubmit} className="flex-grow flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex flex-col space-y-1">
                  <label htmlFor="plateNumber" className="text-[10px] font-black text-gray-400 uppercase tracking-wider">Plate Number *</label>
                  <input
                    type="text"
                    id="plateNumber"
                    name="plateNumber"
                    value={formData.plateNumber}
                    onChange={handleInputChange}
                    required
                    placeholder="e.g. CA 123-456"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-xl text-sm font-medium tracking-wide outline-none focus:border-blue-900 transition-all uppercase"
                  />
                </div>

                <div className="flex flex-col space-y-1">
                  <label htmlFor="make" className="text-[10px] font-black text-gray-400 uppercase tracking-wider">Make Designation *</label>
                  <select
                    id="make"
                    name="make"
                    value={formData.make}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-xl text-sm font-semibold text-gray-900 outline-none focus:border-blue-900 transition-all"
                  >
                    <option value="">Select a make...</option>
                    {vehicleMakes.map((make) => (
                      <option key={make} value={make}>{make}</option>
                    ))}
                  </select>
                </div>

                <div className="flex flex-col space-y-1">
                  <label htmlFor="model" className="text-[10px] font-black text-gray-400 uppercase tracking-wider">Model Variant *</label>
                  <select
                    id="model"
                    name="model"
                    value={formData.model}
                    onChange={handleInputChange}
                    required
                    disabled={!formData.make}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-xl text-sm font-semibold text-gray-900 outline-none focus:border-blue-900 transition-all disabled:opacity-50"
                  >
                    <option value="">Select a model...</option>
                    {formData.make && vehicleModels[formData.make]?.map((model) => (
                      <option key={model} value={model}>{model}</option>
                    ))}
                  </select>
                </div>

                <div className="flex flex-col space-y-1">
                  <label htmlFor="colour" className="text-[10px] font-black text-gray-400 uppercase tracking-wider">Color Finish *</label>
                  <select
                    id="colour"
                    name="colour"
                    value={formData.colour}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-xl text-sm font-semibold text-gray-900 outline-none focus:border-blue-900 transition-all"
                  >
                    <option value="">Select a color...</option>
                    {vehicleColors.map((color) => (
                      <option key={color} value={color}>{color}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="pt-8 flex gap-2">
                <button
                  type="button"
                  onClick={resetForm}
                  className="flex-1 py-3.5 bg-gray-50 hover:bg-gray-100 border border-gray-100 text-gray-500 font-bold text-xs uppercase tracking-wider rounded-xl transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  className="flex-1 py-3.5 bg-blue-900 hover:bg-blue-800 text-white font-black text-xs uppercase tracking-wider rounded-xl shadow-sm transition-colors disabled:opacity-50"
                >
                  {loading ? "Saving Records..." : editingVehicle ? "Update Vehicle" : "Commit Vehicle"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Global Delete Confirmation Overlay Prompt */}
      {showDeletePopup && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex justify-center items-center z-50 p-4 animate-in fade-in duration-150">
          <div className="bg-white rounded-[2rem] border border-gray-100 w-full max-w-sm shadow-2xl p-6 sm:p-8 space-y-6 text-center">
            <div>
              <h3 className="text-lg font-black text-gray-900 tracking-tight">Delete Vehicle</h3>
              <p className="text-gray-400 text-[10px] font-black uppercase tracking-wider mt-0.5">Destructive action confirmation</p>
            </div>
            <p className="text-sm font-medium text-gray-500">Are you sure you want to permanently strip this vehicle registration entry from the stack ledger?</p>
            <div className="flex gap-2 pt-2">
              <button
                onClick={closeDeletePopup}
                disabled={loading}
                className="flex-1 py-3 bg-gray-50 hover:bg-gray-100 border border-gray-100 text-gray-500 font-bold text-xs uppercase tracking-wider rounded-xl transition-colors"
              >
                No
              </button>
              <button
                onClick={confirmDelete}
                disabled={loading}
                className="flex-1 py-3 bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-sm transition-colors disabled:opacity-50"
              >
                {loading ? "Deleting..." : "Yes, Delete"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Global Operational Success Message Prompt */}
      {showSuccessPopup && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex justify-center items-center z-50 p-4 animate-in fade-in duration-150">
          <div className="bg-white rounded-[2rem] border border-gray-100 w-full max-w-sm shadow-2xl p-6 sm:p-8 space-y-6 text-center">
            <div>
              <h3 className="text-lg font-black text-gray-900 tracking-tight">Success!</h3>
              <p className="text-gray-400 text-[10px] font-black uppercase tracking-wider mt-0.5">Transaction entry verified</p>
            </div>
            <p className="text-sm font-semibold text-emerald-700 bg-emerald-50 border border-emerald-100/50 p-4 rounded-xl leading-relaxed">
              {successMessage}
            </p>
            <button
              onClick={closeSuccessPopup}
              className="w-full py-3 bg-gray-900 hover:bg-gray-800 text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-sm transition-colors"
            >
              OK
            </button>
          </div>
        </div>
      )}

      {/* Global Error Exception Interface Dialog */}
      {showErrorPopup && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex justify-center items-center z-50 p-4 animate-in fade-in duration-150">
          <div className="bg-white rounded-[2rem] border border-gray-100 w-full max-w-sm shadow-2xl p-6 sm:p-8 space-y-6 text-center">
            <div>
              <h3 className="text-lg font-black text-red-600 tracking-tight">{errorDetails.title}</h3>
              <p className="text-gray-400 text-[10px] font-black uppercase tracking-wider mt-0.5">Logistics failure handler</p>
            </div>
            <p className="text-sm font-medium text-gray-500 leading-relaxed">{errorDetails.message}</p>
            <div>
              {errorDetails.type === "auth" ? (
                <button
                  onClick={() => {
                    closeErrorPopup();
                    navigate("/login");
                  }}
                  className="w-full py-3 bg-blue-900 hover:bg-blue-800 text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-sm transition-colors"
                >
                  Go to Login
                </button>
              ) : (
                <button
                  onClick={closeErrorPopup}
                  className="w-full py-3 bg-gray-900 hover:bg-gray-800 text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-sm transition-colors"
                >
                  OK
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      {/* <Footer /> */}
    </div>
  );
}


