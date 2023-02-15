class Post {
    #userId;
    #id;
    #title;
    #body;

    constructor(userId, id, title, body) {
        this.#userId = userId;
        this.#id = id;
        this.#title = title;
        this.#body = body;
    }

    get userId() {
        return this.#userId;
    }

    set userId(value) {
        this.#userId = value;
    }

    get id() {
        return this.#id;
    }

    set id(value) {
        this.#id = value;
    }

    get title() {
        return this.#title;
    }

    set title(value) {
        this.#title = value;
    }

    get body() {
        return this.#body;
    }

    set body(value) {
        this.#body = value;
    }
}