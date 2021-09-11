import { ApiServiceObject, RequestMethod } from './_types';
import { checkStatusCode, getUrl } from './_utils';

type ApiServiceConstructorType = {
    headers: HeadersInit;
};

type RequestParamsType = {
    body?: any;
    headers?: any;
    queryParams?: ApiServiceObject;
    retry?: number;
    url: string;
    withPayload?: boolean;
};

type SendRequestParamsType = RequestParamsType & {
    method?: RequestMethod;
};

export class ApiService {
    headers: HeadersInit;

    constructor(params: ApiServiceConstructorType) {
        const { headers } = params;

        this.headers = headers;
    }

    public getRequest(params: RequestParamsType): void {
        this.sendRequest({ ...params, method: RequestMethod.get });
    }

    public postRequest(params: RequestParamsType): void {
        this.sendRequest({ ...params, method: RequestMethod.post });
    }

    public patchRequest(params: RequestParamsType): void {
        this.sendRequest({ ...params, method: RequestMethod.patch });
    }

    public putRequest(params: RequestParamsType): void {
        this.sendRequest({ ...params, method: RequestMethod.put });
    }

    public deleteRequest(params: RequestParamsType): void {
        this.sendRequest({ ...params, method: RequestMethod.delete });
    }

    protected sendRequest(params: SendRequestParamsType): Promise<void> {
        const { method, body, headers, withPayload = true, queryParams } = params;

        const url = getUrl({ url: params.url, queryParams });

        return fetch(url, {
            method,
            body: JSON.stringify(body),
            headers: {
                ...this.headers,
                ...headers,
            },
        })
            .then((response) => {
                checkStatusCode(response.status);

                return response.json();
            })
            .then((data: any) => {
                if (withPayload) {
                    if (data) {
                        return data;
                    } else {
                        throw new Error('Response data is empty');
                    }
                }
            })
            .catch((error: Error) => {
                const { message } = error;

                console.error(message);
            });
    }
}
