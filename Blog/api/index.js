const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const multer = require("multer"); //To deal images
const path = require("path"); 

const authRoute = require("./routes/auth");
const usersRoute = require("./routes/users");
const postsRoute = require("./routes/posts");
const CatRoute = require("./routes/categories");

dotenv.config();
app.use(express.json());

mongoose.connect(process.env.MONGO_URL)
.then(console.log("API is MongoDB"))
.catch((err)=> console.log(err));

const storage = multer.diskStorage({
    destination: (req,file,cb) => {
        cb(null, "images");
    },
    filename: (req,file,cb) =>{
        cb(null, req.body.name);
    }
});

const upload = multer({storage: storage});
app.post("/api/upload", upload.single("file"),(req,res)=>{
    res.status(200).json("File has been uploaded!")
})

app.use("/api/auth",authRoute);
app.use("/api/users",usersRoute);
app.use("/api/posts",postsRoute);
app.use("/api/cats",CatRoute);
app.use("/images", express.static(path.join(__dirname,"/images")))

app.listen("5000", ()=>{
    console.log("API is running!");
})