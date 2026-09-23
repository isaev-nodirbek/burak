import express from "express";
import path from "node:path/win32";

/** 1- ENRTANCE **/
const app = express();

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

/** 1- SESSIONS **/

/** 1- VIEWS **/
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

/** 1- ROUTERS **/

export default app; //module.exports
