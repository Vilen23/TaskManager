export const errorHandler = (statusCode:number, message:string) => {
    const error = new Error(message);
    return error;
};
  