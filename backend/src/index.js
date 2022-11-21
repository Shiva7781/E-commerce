const express = require("express");
const app = express();

const userRoute = require("./routes/user.controller");
const authRoute = require("./routes/auth.controller");
const productRoute = require("./routes/product.controller");
const cartRoute = require("./routes/cart.controller");
const orderRoute = require("./routes/order.controller");
const stripeRoute = require("./routes/stripe");
const cors = require("cors");

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/carts", cartRoute);
app.use("/api/orders", orderRoute);
app.use("/api/checkout", stripeRoute);

module.exports = app;
