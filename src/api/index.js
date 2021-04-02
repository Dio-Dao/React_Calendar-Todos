export const defaultConfig = {
    headers: {
        Accept: 'application/json',
    }
}
const baseUrl = '/api/v1/events'

export const API = {
    request(url, config = {}) {
        return fetch(url, {
            ...defaultConfig,
            ...config,
        });
    },
    get(start, end, config = {}) {
        return this.request(`${baseUrl}`, config);
    },
    post(config = {}) {
        return this.request(baseUrl, config);
    },
    put(eventId, config = {}) {
        return this.request(`${baseUrl}: ${eventId}`, config)
    },
    delete(eventId, config = {}) {
        return this.request(`${baseUrl}:${eventId}`, config)
    },
};
