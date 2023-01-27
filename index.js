require('dotenv').config()
const express = require('express');
const PORT = process.env.PORT;
const app = express();
const cors = require('cors');
const {connection} = require("./config/connection");
const {userRouter} = require("./routes/User.route")



/// Middleware
app.use(express.json());
app.use(cors());

app.get("/", (req, res) =>{
    res.send("Hello from other side!");
})

app.use("/user", userRouter);

app.listen(PORT, () => {
    connection();
    console.log(`Server Running on http://localhost:${PORT}`);
});