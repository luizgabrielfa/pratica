const express = require("express");
import { routes } from "./app/routes";

const cors = require("cors");

const app = express();

const port = 3001;

app.use(express.json());
app.use(cors());
app.use(routes);

app.listen(port, () => {
  console.log(`Server running at port ${port}`);
});
