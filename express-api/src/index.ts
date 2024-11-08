import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";

import * as item from "../routes/item";
import * as user from "../routes/user";
import * as order from "../routes/order";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use("/item", item.router);
app.use("/user", user.router);
app.use("/order", order.router);

app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});
