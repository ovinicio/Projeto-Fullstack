"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createClient = void 0;
const connections_1 = __importDefault(require("../database/connections"));
const createClient = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let errorCode = 400;
    try {
        const name = req.body.name;
        if (!name) {
            throw new Error("Nome inválido!!!");
        }
        yield (0, connections_1.default)("Case_Clients").insert({
            name
        });
        res.status(200).send("Client criado com sucesso!");
    }
    catch (error) {
        res.status(errorCode).send({ message: error.message });
    }
});
exports.createClient = createClient;
exports.default = exports.createClient;
