const express = require("express");
const Project = require("../Model/Project");
const Contact = require("../Model/Contact");
const nodemailer = require("nodemailer");
const router = express.Router();

router.get("/home",async (req,res)=>{
    res.render("home");
});

router.get("/about",async (req,res)=>{
    res.render("about");
});

router.get("/project",async (req,res)=>{
    try {
        const projectinfo = await Project.find();
        // console.log(projectinfo)
        res.render("project",
            {projectinfo:projectinfo});
    } catch (error) {
        console.log(error);
    }
});

router.get("/skills",async (req,res)=>{
    res.render("skills");
});

router.get("/contact",async (req,res)=>{
    res.render("contact");
});

router.get("/resume",async (req,res)=>{
    res.render("resume");
});

router.post("/process_form", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // 1. Store contact form data in MongoDB
    const contactEntry = await Contact.create({ name, email, message });

    // 2. Configure the transporter
    const transporter = nodemailer.createTransport({
      service: "gmail", // or use smtp config
      auth: {
        user: process.env.MY_EMAIL,         // your Gmail
        pass: process.env.MY_EMAIL_PASSWORD // your App Password
      }
    });

    // 3. Email options
    const mailOptions = {
      from: `"Portfolio Website" <${process.env.MY_EMAIL}>`,
      to: process.env.MY_EMAIL, // your email address to receive messages
      subject: `New Contact Message from ${name}`,
      html: `
        <h3>You have received a new message from your portfolio website:</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `
    };

    // 4. Send the email
    await transporter.sendMail(mailOptions);

    console.log("Email sent successfully.");
    res.redirect("/contact"); // or send a success message
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send("Message not sent. Please try again later.");
  }
});

module.exports = router 