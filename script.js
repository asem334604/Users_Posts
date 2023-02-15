const baseUrl = 'https://jsonplaceholder.typicode.com';
const api = new API('https://jsonplaceholder.typicode.com');
const users = new Users();
const usersController = new UsersController(users);
const posts = new Posts();
const postsController = new PostsController(posts);

const btnFormUser = document.querySelector('#btn_form_user');
const btnGetPosts = document.querySelector('#btn_form_get_posts');
const btnAddPost = document.querySelector('#btn_form_add_post');
const btnListUser = document.querySelector('#btn_user_list');
const formUser = document.querySelector('#form_user');
const formGetPosts = document.querySelector('#form_get_posts');
const formAddPost = document.querySelector('#form_add_post');
const list = document.querySelector('#list');

console.log(users);
console.log(posts);

btnFormUser.addEventListener('click', (evt) => {
    Toolbox.addNavButtonControl2(['#form_user', '#form_add_post', '#form_get_posts'])
    list.innerHTML = '';
    usersController.processUsers(user => {
        Toolbox.addItemToList('#list',
            `User ID: ${user.id} , 
            user Name: ${user.name},
            user Nickname: ${user.username}
            `)
    })
});

btnAddPost.addEventListener('click', (evt) => {
    Toolbox.addNavButtonControl2(['#form_add_post', '#form_user', '#form_get_posts'])
    list.innerHTML = '';
    postsController.processPosts(post => {
        Toolbox.addItemToList('#list', `
        userId: ${post.userId}
        id: ${post.id}
        title: ${post.title}
        body: ${post.body}
        `);
    })
});

btnGetPosts.addEventListener('click', (evt) => {
    Toolbox.addNavButtonControl2(['#form_get_posts', '#form_add_post', '#form_user'])
    document.querySelector('#list').innerHTML = '';
    postsController.processPosts(post => {
        Toolbox.addItemToList('#list', `
        userId: ${post.userId} id: ${post.id}  title: ${post.title} body: ${post.body}
        `);
    })
});

formGetPosts.addEventListener('submit', e => {
    e.preventDefault();
    list.innerHTML = '';
    Object.values(posts.posts).filter(post => post.userId === +e.target.elements.id_posts.value)
        .forEach(post => {
            Toolbox.addItemToList('#list', `
        userId: ${post.userId} id: ${post.id}  title: ${post.title} body: ${post.body}`)
        })
});

document.addEventListener('DOMContentLoaded', () => {
    const resUsers = api.getFullList('users');
    resUsers.then(items => {
        items.forEach(item => usersController.createUser(item))
    })
        .then(user => {
            usersController.processUsers(user => {
                Toolbox.addItemToList('#list',
                    `User ID: ${user.id} , 
            user Name: ${user.name},
            user Nickname: ${user.username}
            `)
            })
        })

    const resPosts = api.getFullList('posts');
    resPosts.then(items => {
        items.forEach(item => postsController.createPost(item))
    })


})

//*************************Form User Handler***************************
Toolbox.formHandler('#form_user', user => {
    usersController.createUser(user);
    Toolbox.addItemToList('ul', `User ID: ${user.id} ,
     user Name: ${user.name},
     user Nickname: ${user.username}`);
});

//**********************Form Add Post**********************************
Toolbox.formHandler('#form_add_post', item => {
    let post = {
        title: item.title,
        body: item.body,
        userId: item.userId
    };
    fetch(`${baseUrl}/posts`, {
        method: 'POST',
        body: JSON.stringify(post),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        }
    }).then(response => {
        console.log(response);
        return response.json()
    })
        .then(post => {
            console.log(post);
            alert(`Post by User#${post.userId} successfully added`)
            postsController.createPost(post);
            postsController.processPosts(post => {
                Toolbox.addItemToList('#list', `
        userId: ${post.userId} id: ${post.id}  title: ${post.title} body: ${post.body}
        `);
            });
        });
})