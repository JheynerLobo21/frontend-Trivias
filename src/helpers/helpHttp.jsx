export const helpHttp = () => {
    const customFetch = async (endpoint, options) => {
        const defaultHeader = {
            "Accept": "application/json",
            "Content-Type": "application/json"
        };

        const controller = new AbortController();
        options.signal = controller.signal;

        options.method = options.method || "GET";
        options.headers = options.headers
            ? { ...defaultHeader, ...options.headers }
            : defaultHeader;

        options.body = JSON.stringify(options.body) || false;
        if (!options.body) delete options.body;

        //console.log(options);
        setTimeout(() => controller.abort(), 3000);

        try {
            const response = await fetch(endpoint, options);
            if (response.ok) {
                return await response.json();
            } else {
                throw {
                    err: true,
                    status: response.status || "00",
                    statusText: response.statusText || "Ocurrió un error",
                };
            }
        } catch (error) {
            return error;
        }
    };

    const get = (url, options = {}) => customFetch(url, options);

    const post = (url, options = {}) => {
        options.method = "POST";
        return customFetch(url, options);
    };

    const put = (url, options = {}) => {
        options.method = "PUT";
        return customFetch(url, options);
    };

    const patch = (url, options = {}) => {
        options.method = "PATCH";
        return customFetch(url, options);
    };

    const del = (url, options = {}) => {
        options.method = "DELETE";
        return customFetch(url, options);
    };

    return {
        get,
        post,
        put,
        patch,
        del,
    };
};
