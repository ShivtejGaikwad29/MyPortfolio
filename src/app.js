require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const router = require("./Router/main");
const hbs = require("hbs");
const Project = require("./Model/Project");
const Contact = require("./Model/Contact");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use("/static", express.static("public"))
app.set("view engine", "hbs")
app.set("views", "View")
app.use("/", router)

hbs.registerPartials("View/partials")

// configuration for server
app.listen(process.env.PORT || 8585, () => {
  console.log("Server Connected...");
});

// configuration for database
mongoose
  .connect(process.env.MONGOOSE_CONNECT_DB)
  .then(() => {
    console.log("Database connected...");

    //configuration for project
    // Project.create([
    //   {
    //     title: "Krishna-E-super Shop",
    //     subtitle: "A Dynamic Web Application For Online Shopping",
    //     description:
    //       "A full-fledged eCommerce website with categories like Grocery and Stationery, item search, and dynamic item management using Spring Boot and MySQL.",
    //     url: "https://github.com/ShivtejGaikwad29/E-commerce-SpringBoot.git"
    //   },
    //   {
    //     title: "Notes App with Markdown",
    //     subtitle: "Mini Project Using React",
    //     description:
    //       "A responsive Notes application that allows users to write, edit, and preview Markdown-formatted notes in real time.",
    //     url: "https://github.com/ShivtejGaikwad29/NotesApp_Markdown"
    //   },
    //   {
    //     title: "Hangman Game",
    //     subtitle: "Fun Word Guessing Game in JavaScript",
    //     description:
    //       "A simple web-based game built using HTML, CSS, and JavaScript that lets users guess a hidden word with limited attempts.",
    //     url: "https://github.com/ShivtejGaikwad29/HangmanGame"
    //   },
    //   {
    //     title: "Portfolio Website",
    //     subtitle: "Personal Website Built Using Node.js & Express",
    //     description:
    //       "A professional personal portfolio showcasing projects, contact information, and resume built with Node.js, Express, MongoDB, and Handlebars.",
    //     url: "https://github.com/ShivtejGaikwad29/Portfolio-Website"
    //   },
    //   {
    //     title: "IPL Win Predictor",
    //     subtitle: "ML Project to Predict Match Winners",
    //     description:
    //       "A machine learning-based web application that predicts IPL match outcomes based on historical team performance and match data.",
    //     url: "https://github.com/ShivtejGaikwad29/IPL-Win-Predictor"
    //   },
    //   { 
    //     title: "MediLock - Healthcare App",
    //     subtitle: "Spring Boot Based Health Appointment System",
    //     description:
    //       "A digital platform for managing doctor-patient appointments and medicine inventory, built using Spring Boot and MySQL.",
    //     url: "https://github.com/ShivtejGaikwad29/HealthcareApp-MediLock"
    //   },
    //   {
    //     title: "Smart Contact Manager",
    //     subtitle: "Spring Boot Based Contact Management System",
    //     description:
    //       "A secure web application that allows users to register, login, and manage their contacts with CRUD operations using Spring Boot and MySQL.",
    //     url: "https://github.com/ShivtejGaikwad29/SmartContactManager"
    //   },
    //   {
    //     title: "Movie Recommendation System",
    //     subtitle: "Content-Based Filtering with ML & Flask",
    //     description:
    //       "A movie recommender system using cosine similarity and TF-IDF to suggest movies based on user-selected titles and show posters using the TMDB API.",
    //     url: "https://github.com/ShivtejGaikwad29/Movie-Recommendation-System"
    //   },
    //   {
    //     title: "eNotes - Notes Store",
    //     subtitle: "Secure Notes App Using Spring Boot & MySQL",
    //     description:
    //       "A simple and secure notes storing platform with user login, note creation, and email notifications built using Spring Boot, MySQL, and Spring Security.",
    //     url: "https://github.com/ShivtejGaikwad29/eNotes-SpringBoot"
    //   }
    // ]) 

  })
  .catch((err) => {
    console.log("MongoDB connection error:", err);
  });

