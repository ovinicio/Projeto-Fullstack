"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const ping_1 = require("./endpoints/ping");
const createClient_1 = require("./endpoints/createClient");
const allClients_1 = __importDefault(require("./endpoints/allClients"));
const allProducts_1 = require("./endpoints/allProducts");
const createOrder_1 = require("./endpoints/createOrder");
const stock_1 = require("./endpoints/stock");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.listen(process.env.PORT || 3003, () => {
    console.log(`Servidor rodando na porta ${process.env.PORT || 3003}`);
});
app.get("/ping", ping_1.ping);
app.post("/client", createClient_1.createClient);
app.get("/clients", allClients_1.default);
app.get("/products", allProducts_1.getAllProducts);
app.post("/order", createOrder_1.createOrder);
app.get("/stock", stock_1.getStock);
