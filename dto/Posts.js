class Posts {
    constructor() {
        this.posts = {};
    }

    add = (post) => {
        const users = new Users();
        if (this.posts[post.id])
            throw new Error('This ID not unique!')
        else {
            this.posts[post.id] = post;
            return true;
        }
    }

    remove = (id) => {
        if (this.posts[id]) {
            delete this.posts[id];
        } else throw new Error('There is not such post')
    }

    removeAll = () => {
        this.posts.clear();
    }

    get = (id) => {
        if (this.posts[id]) {
            return this.posts[id];
        } else throw new Error('post not found!');
    }

    getAll = () => {
        return Object.values(this.posts);
    }

    set = (post) => {
        if (!this.posts[post.id])
            throw new Error('post not found!');
        else {
            this.posts[post.id] = post;
            return true;
        }

    }
}