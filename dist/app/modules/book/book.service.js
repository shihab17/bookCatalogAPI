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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bookService = void 0;
const paginationHelper_1 = require("../../../helpers/paginationHelper");
const book_constant_1 = require("./book.constant");
const book_model_1 = require("./book.model");
const createBook = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield book_model_1.Book.create(payload);
    return result;
});
const getAllBook = (filters, paginationOptions) => __awaiter(void 0, void 0, void 0, function* () {
    const { searchTerm, publicationYear } = filters, filtersData = __rest(filters, ["searchTerm", "publicationYear"]);
    const { page, limit, skip, sortBy, sortOrder } = paginationHelper_1.paginationHelpers.calculatePagination(paginationOptions);
    const andConditions = [];
    if (searchTerm) {
        andConditions.push({
            $or: book_constant_1.BookSearchableFields.map(field => ({
                [field]: {
                    $regex: searchTerm,
                    $options: 'i',
                },
            })),
        });
    }
    if (publicationYear) {
        // Extract the year from publicationYear (assumed format: 'YYYY')
        const year = publicationYear.trim();
        if (year.length === 4 && /^\d+$/.test(year)) {
            // Construct a regular expression to match the publicationDate field in the format 'DD/MM/YYYY' where YYYY matches the year
            const regex = `\\b${year}\\b`;
            andConditions.push({
                publicationDate: {
                    $regex: regex,
                },
            });
        }
    }
    if (Object.keys(filtersData).length) {
        andConditions.push({
            $and: Object.entries(filtersData).map(([field, value]) => ({
                [field]: value,
            })),
        });
    }
    const sortConditions = {};
    if (sortBy && sortOrder) {
        sortConditions[sortBy] = sortOrder;
    }
    const whereConditions = andConditions.length > 0 ? { $and: andConditions } : {};
    const result = yield book_model_1.Book.find(whereConditions)
        .sort(sortConditions)
        .skip(skip)
        .limit(limit);
    const total = yield book_model_1.Book.countDocuments();
    return {
        meta: {
            page,
            limit,
            total,
        },
        data: result,
    };
});
const getSingleBook = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield book_model_1.Book.findOne({ _id: id }).lean();
    return {
        data: result,
    };
});
const updateBook = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield book_model_1.Book.findOneAndUpdate({ _id: id }, payload, {
        new: true,
    }).lean();
    return result;
});
const deleteBook = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield book_model_1.Book.findByIdAndDelete(id);
    return result;
});
const isRouteValid = (userId, BookId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield book_model_1.Book.findOne({ _id: BookId, seller: userId });
    if (!result || (result === null || result === void 0 ? void 0 : result.errors))
        return false;
    return true;
});
exports.bookService = {
    createBook,
    getAllBook,
    getSingleBook,
    updateBook,
    deleteBook,
    isRouteValid,
};
