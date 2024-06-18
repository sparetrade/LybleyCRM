const express = require("express");
require("./src/db/connection");
require("dotenv").config();
const cors = require("cors");
const app = express();
const registration = require("./src/routers/registration");
const product = require("./src/routers/product");
const productCategory = require("./src/routers/productCategory");
const complaintNature = require("./src/routers/complaintNature");
const sparePart = require("./src/routers/sparePart");
const complaint = require("./src/routers/complaint");
const bulkUploadComplaint = require("./src/routers/bulkUploadComplaint");
const location = require("./src/routers/location");
const feedback = require("./src/routers/feedback");
const notification = require("./src/routers/notification");
const technician = require("./src/routers/technician");
const order = require("./src/routers/order");
const dashboard = require("./src/routers/dashboard");

app.use(express.json());
app.use(cors());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Methods",
        "GET, POST, OPTIONS, PUT, PATCH, DELETE, HEAD"
    );
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
});
const PORT = process.env.PORT || 5000;

app.use(registration);
app.use(technician);
app.use(product);
app.use(productCategory);
app.use(complaintNature);
app.use(sparePart);
app.use(complaint);
app.use(bulkUploadComplaint);
app.use(location);
app.use(feedback);
app.use(notification);
app.use(order);
app.use(dashboard);

app.listen(5000, () => {
    console.log("Server is running on PORT", PORT);
});