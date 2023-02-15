class API {
    #baseUrl;

    constructor(baseUrl) {
        this.#baseUrl = baseUrl;
    }

    get baseUrl() {
        return this.#baseUrl;
    }

    set baseUrl(value) {
        this.#baseUrl = value;
    }

    getFullList = async (dataType) => {
        const requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };
        const url = this.baseUrl + '/' + dataType;
        const req = await fetch(url, requestOptions);
        return await req.json();
    }

    getListForItemId = async (dataType, parentIdType, parentId) => {
        const requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };
        const url = this.baseUrl + '/' + dataType + '?' + parentIdType + '=' + parentId;
        const req = await fetch(url, requestOptions);
        return await req.json();
    }

    getListForItem = async (dataType, id, subDataType) => {
        const requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };
        const url = this.baseUrl + '/' + dataType + '/' + id + '/' + subDataType;
        const req = await fetch(url, requestOptions);
        return await req.json();
    }

    getItem = async (dataType, id) => {
        const requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };
        const url = this.baseUrl + '/' + dataType + '/' + id;
        const req = await fetch(url, requestOptions);
        return await req.json();
    }


}