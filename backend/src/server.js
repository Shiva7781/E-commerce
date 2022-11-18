const app = require("./index");
const connectDB = require("./configs/db");
const dotenv = require("dotenv");
dotenv.config();

const Port = process.env.PORT || 5000;
app.listen(Port, () => {
  connectDB();
  console.log(
    `Backend server is runnig on http://localhost:${Port} DB connecting...`
  );
});
