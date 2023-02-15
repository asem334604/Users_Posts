class User {
    #id;
    #name;
    #username;
    #email;
    #address;
    #phone;
    #website;
    #company;


    constructor(id, name, username, email, phone) {
        this.#id = id;
        this.#name = name;
        this.#username = username;
        this.#email = email;
        this.#phone = phone;
        this.#address = {};
        this.#company = {};
        this.#website = ' ';
    }


    get address() {
        return this.#address;
    }

    set address(value) {
        this.#address = value;
    }

    get website() {
        return this.#website;
    }

    set website(value) {
        this.#website = value;
    }

    get company() {
        return this.#company;
    }

    set company(value) {
        this.#company = value;
    }

    get id() {
        return this.#id;
    }

    set id(value) {
        this.#id = value;
    }

    get name() {
        return this.#name;
    }

    set name(value) {
        this.#name = value;
    }

    get username() {
        return this.#username;
    }

    set username(value) {
        this.#username = value;
    }

    get email() {
        return this.#email;
    }

    set email(value) {
        this.#email = value;
    }

    get phone() {
        return this.#phone;
    }

    set phone(value) {
        this.#phone = value;
    }
}