import 'node-fetch';

export enum RequestType {
    GET = 'get',
    POST = 'post',
    PUT = 'put',
    DELETE = 'delete',
}

class Host {
    baseURL: string;

    constructor(baseURL: string) {
        this.baseURL = baseURL;
    }

    queryParams(params: any) {
        if (!params) return '';
        return Object.keys(params)
            .map((k) => encodeURIComponent(k) + '=' + encodeURIComponent(params[k]))
            .join('&');
    }

    fire(resource: string, type: RequestType, payload?: any) {
        // Need the 'credentials' field to be set to set a cookie
        // Will set cookie 'set-cookie' only if this is set to 'same-origin' if in production because on same domain
        // In development, using two different localhosts so use 'include'
        const credentials = process.env.NODE_ENV == 'development' ? 'include' : 'same-origin';

        switch (type) {
            case RequestType.POST:
                return new Promise((resolve, reject) => {
                    const payloadActual = payload ? payload : {};
                    fetch(`${this.baseURL}${resource}`, {
                        method: type,
                        body: JSON.stringify(payloadActual),
                        headers: {
                            Accept: 'application/json',
                            'Content-Type': 'application/json',
                        },
                        credentials: 'include',
                    })
                        .then((res) => res.json())
                        .then((json) => resolve(json))
                        .catch((error) => reject(error));
                });
            case RequestType.DELETE:
                return new Promise((resolve, reject) => {
                    const payloadActual = payload ? payload : {};
                    fetch(`${this.baseURL}${resource}`, {
                        method: type,
                        body: JSON.stringify(payloadActual),
                        headers: {
                            Accept: 'application/json',
                            'Content-Type': 'application/json',
                        },
                        credentials: 'include',
                    })
                        .then((res) => res.json())
                        .then((json) => resolve(json))
                        .catch((error) => reject(error));
                });
            case RequestType.GET:
                return new Promise((resolve, reject) => {
                    const payloadEmpty = !payload || Object.keys(payload).length == 0;
                    const paramUrl = !payloadEmpty ? this.queryParams(payload) : '';
                    const url = `${this.baseURL}${resource}?${paramUrl}`;

                    fetch(url.toString(), {
                        method: type,
                        credentials, // Will set cookie 'set-cookie' only if this is set to 'same-origin'
                    })
                        .then((res) => res.json())
                        .then((json) => resolve(json))
                        .catch((error) => reject(error));
                });

            default:
                return new Error(`This request type (${type}) is not implemented`);
        }
    }
}

export default Host;
