"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Book = exports.BookSchema = void 0;
const mongoose_1 = require("mongoose");
exports.BookSchema = new mongoose_1.Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    genre: { type: String, required: true },
    publicationDate: { type: String, required: true },
    reviews: { type: [], required: false },
    createdBy: { type: mongoose_1.Schema.Types.ObjectId, required: false, ref: 'User' },
    updatedBy: { type: mongoose_1.Schema.Types.ObjectId, required: false, ref: 'User' },
}, { timestamps: true, versionKey: false });
exports.Book = (0, mongoose_1.model)('Book', exports.BookSchema);
