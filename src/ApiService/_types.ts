export enum RequestMethod {
    get = 'GET',
    post = 'POST',
    patch = 'PATCH',
    delete = 'DELETE',
    put = 'PUT',
}

export type ApiServiceObject = {
    [key: string]: any;
};
