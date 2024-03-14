import express from "express";
import morgan from "morgan";
import cors from "cors";

import routes from "./routes";
import config from "./config";

const app = express();

app.set("port", config.PORT);

app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

app.use(routes);

export default app;