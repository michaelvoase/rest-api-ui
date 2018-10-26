"use strict";
// src/instances/sequelize.ts
Object.defineProperty(exports, "__esModule", { value: true });
const Sequelize = require("sequelize");
const db = 'expressapp';
const username = 'root';
const password = 'root';
exports.sequelize = new Sequelize(db, username, password, {
    dialect: "mysql",
    port: 3306,
});
exports.sequelize.authenticate();
//# sourceMappingURL=sequelize.js.map