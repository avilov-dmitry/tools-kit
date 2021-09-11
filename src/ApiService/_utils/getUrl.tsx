import { ApiServiceObject } from '../_types';

type ParamsType = { queryParams?: ApiServiceObject; url: string };

export const getUrl = ({ url, queryParams }: ParamsType): string => {
    let result: string | URL = url;

    if (queryParams) {
        result = new URL(url);

        result.search = new URLSearchParams(queryParams).toString();
    }

    return result.toString();
};
