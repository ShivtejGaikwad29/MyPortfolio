require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const router = require("./Router/main");
const hbs = require("hbs");
const Project = require("./Model/Project");
const Contact = require("./Model/Contact");
const Certificate = require("./Model/Certificate");
const app = express();

hbs.registerHelper("getFileId", function (url) {
  const match = url.match(/\/d\/([^/]+)\//);
  return match ? match[1] : "";
});

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

    // configuration for the certificates

    // Certificate.create([
    //   {
    //     imageurl: "https://drive.google.com/uc?export=view&id=1b9ZVPZ56N6QE72mh46zMRgNPv1tZHJ23",
    //     title: "Ethics In Age Of Generative Ai",
    //     viewurl: "https://drive.google.com/file/d/1b9ZVPZ56N6QE72mh46zMRgNPv1tZHJ23/view?usp=sharing"
    //   },
    //   {
    //     imageurl: "https://drive.google.com/uc?export=view&id=1vSueOHdpT2MZKlI6bJB71mKV9Ry4gUKE",
    //     title: "Generative Ai",
    //     viewurl: "https://drive.google.com/file/d/1vSueOHdpT2MZKlI6bJB71mKV9Ry4gUKE/view?usp=sharing"
    //   },
    //   {
    //     imageurl: "https://drive.google.com/uc?export=view&id=1vSueOHdpT2MZKlI6bJB71mKV9Ry4gUKE",
    //     title: "Introduction To Artificial Intelligence",
    //     viewurl: "https://drive.google.com/file/d/1vSueOHdpT2MZKlI6bJB71mKV9Ry4gUKE/view?usp=sharing"
    //   },
    //   {
    //     imageurl: "https://drive.google.com/uc?export=view&id=1fEQtjb7WuYVUBUn8GhsdEx-lpbjNG2bw",
    //     title: "Learning Microsoft 365 Copilot",
    //     viewurl: "https://drive.google.com/file/d/1fEQtjb7WuYVUBUn8GhsdEx-lpbjNG2bw/view?usp=sharing"
    //   },
    //   {
    //     imageurl: "https://drive.google.com/uc?export=view&id=1BktcIS9S1eb1cx30zxq_hdio2X_-GaiB",
    //     title: "Streamline Your Work With Microsoft Copilot",
    //     viewurl: "https://drive.google.com/file/d/1BktcIS9S1eb1cx30zxq_hdio2X_-GaiB/view?usp=sharing"
    //   },
    //   {
    //     imageurl: "https://drive.google.com/uc?export=view&id=11U-AAiRrMoA3zJdROT8FZF5QZnXIhUUa",
    //     title: "Cloud Computing",
    //     viewurl: "https://drive.google.com/file/d/11U-AAiRrMoA3zJdROT8FZF5QZnXIhUUa/view?usp=sharing"
    //   },
    //   {
    //     imageurl: "https://drive.google.com/uc?export=view&id=1ZoKvt5DnwzCjFSo9R7w2nqmuhjbDluw1",
    //     title: "Computer Vision",
    //     viewurl: "https://drive.google.com/file/d/1ZoKvt5DnwzCjFSo9R7w2nqmuhjbDluw1/view?usp=sharing"
    //   },
    //   {
    //     imageurl: "https://drive.google.com/uc?export=view&id=1PNSeiBQOzw7vug66S9QAAtz3YdVyUzlb",
    //     title: "Data Structure And Algorithm Using Java",
    //     viewurl: "https://drive.google.com/file/d/1PNSeiBQOzw7vug66S9QAAtz3YdVyUzlb/view?usp=sharing"
    //   },
    //   {
    //     imageurl: "https://drive.google.com/uc?export=view&id=1gyMdy7D2m408Bp1l8W1dFST82sSbwHoF",
    //     title: "Energy Literacy Course",
    //     viewurl: "https://drive.google.com/file/d/1gyMdy7D2m408Bp1l8W1dFST82sSbwHoF/view?usp=sharing"
    //   },
    //   {
    //     imageurl: "https://drive.google.com/uc?export=view&id=1BKdr9wVbqOiKcryA2zZkRPxGsipbHMN9",
    //     title: "Fullstack Java Developer",
    //     viewurl: "https://drive.google.com/file/d/1BKdr9wVbqOiKcryA2zZkRPxGsipbHMN9/view?usp=sharing"
    //   },
    //   {
    //     imageurl: "https://drive.google.com/uc?export=view&id=1SarrW_ZJRtbdaEBQPnCES4sj3STcjDOE",
    //     title: "Software Engineering",
    //     viewurl: "https://drive.google.com/file/d/1SarrW_ZJRtbdaEBQPnCES4sj3STcjDOE/view?usp=sharing"
    //   },
    //   {
    //     imageurl: "https://drive.google.com/uc?export=view&id=1S8_4UPkkZbNOejK-rI7XjVoCChQAqMYI",
    //     title: "Programming Fundamentals using Python - Part 1",
    //     viewurl: "https://drive.google.com/file/d/1S8_4UPkkZbNOejK-rI7XjVoCChQAqMYI/view?usp=sharing"
    //   },
    //   {
    //     imageurl: "https://drive.google.com/uc?export=view&id=1kY61rUtirCBqmaTy84HUQ2rbO9gOHBYp",
    //     title: "Cyber Security",
    //     viewurl: "https://drive.google.com/file/d/1kY61rUtirCBqmaTy84HUQ2rbO9gOHBYp/view?usp=sharing"
    //   },
    //   {
    //     imageurl: "https://drive.google.com/uc?export=view&id=17urteUAjGp2y4-e3djh4ms3yb50QId6H",
    //     title: "Machine Learning Course",
    //     viewurl: "https://drive.google.com/file/d/17urteUAjGp2y4-e3djh4ms3yb50QId6H/view?usp=sharing"
    //   },
    
    // ]);

  })
  .catch((err) => {
    console.log("MongoDB connection error:", err);
  });

