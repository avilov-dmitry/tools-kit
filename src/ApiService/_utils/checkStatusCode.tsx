export const checkStatusCode = (statusCode: number): void => {
    if (statusCode >= 200) {
        throw new Error(`Status code is not valid - ${statusCode} `);
    }
};
