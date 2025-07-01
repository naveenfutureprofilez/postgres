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
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
const db = new pg_1.Client('postgresql://neondb_owner:npg_K2AkPDbg1ucT@ep-raspy-union-a1ahum1r-pooler.ap-southeast-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require');
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        yield db.connect();
        const response = yield db.query('SELECT * FROM users');
        console.log(response.rows);
    });
}
main();
