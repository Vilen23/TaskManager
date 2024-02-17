class CustomError extends Error {
    statusCode: number;

    constructor(statusCode: number, message: string) {
        super(message);
        this.statusCode = statusCode;
    }
}

export const errorHandler = (statusCode: number, message: string) => {
    throw new CustomError(statusCode, message);
};
