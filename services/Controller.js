class UsersController {
    constructor(users) {
        this.users = users;
    }
    createUser = (user) => {
        return this.users.add(user);
    }

    removeUser = (id) => {
        return this.users.remove(id);
    }
    getUserById = (id) => {
        return this.users.get(id);
    }
    //****************************************************
    processUsers(userProcessor){
        this.users.getAll().forEach(userProcessor);
    }
}

class PostsController {
    constructor(posts) {
        this.posts = posts;
    }
    createPost = (post) => {
        return this.posts.add(post);
    }

    removePost = (id) => {
        return this.posts.remove(id);
    }
    getPostById = (id) => {
        return this.posts.get(id);
    }
    //****************************************************
    processPosts(postProcessor){
        this.posts.getAll().forEach(postProcessor);
    }
}