import dotenv from "dotenv";
import express from "express";
import connectDB from "./db/index.js";
import {app} from "./app.js";
dotenv.config(
    {
        path: "./.env"
    }
);



connectDB()
    .then(() => {
        app.listen(process.env.PORT || 8000, () => {
            console.log(`server is running on port ${process.env.PORT}`);
        })
    })
    .catch((err) => {
        console.log("mongodb connection error: ", err);
    })

















/*
(async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL)
        app.on("error", (err) => {
            console.log("error: ", err);
            throw err;
        })

        app.listen(process.env.PORT, () => {
            console.log(`server is running on port ${process.env.PORT}`);
        })
    }
    catch (err) {
        console.log("error: ", err);
        throw err;
    }
})()*/