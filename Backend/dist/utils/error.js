"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
class CustomError extends Error {
    constructor(statusCode, message) {
        super(message);
        this.statusCode = statusCode;
    }
}
const errorHandler = (statusCode, message) => {
    throw new CustomError(statusCode, message);
};
exports.errorHandler = errorHandler;
