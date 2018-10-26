"use strict";
// src/index.ts
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const app = express();
const port = 4001;
app.get('/', (req, res, next) => {
    res.json('HEEEELLLOO');
});
app.listen(port, () => {
    console.log('App is listening on port ${port}');
});
//# sourceMappingURL=index.js.map