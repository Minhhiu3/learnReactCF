// function getUser(callBack) {
//     setTimeout(() => console.log(1), 1000);
//     console.log('da in ra 1');
// }
// getUser((data) => {
//     console.log(data);

// })


// function getUser(userId, callback) {
//     setTimeout(() => {
//         const user = { userId: userId, name: "Nguyễn Văn A" };
//         callback(user);
//     }, 1000);
// }

// function getPosts(userId, callback) {
//     setTimeout(() => {
//         const posts = [
//             { postId: 1, userId: userId, title: "Bài viết 1" },
//             { postId: 2, userId: userId, title: "Bài viết 2" },
//         ];
//         callback(posts);
//     })
// }
// function getComments(post, callback) {
//     setTimeout(() => {
//         const comments = [
//             { commentId: 1, postId: post.postId, content: "Bình luận 1" },
//             { commentId: 2, postId: post.postId, content: "Bình luận 2" },
//         ];
//         callback(comments);
//     })
// }


// console.log(getUser.userId);

// function getCommentInFirstPostByUser(userId) {
//     console.log(userId);

// }
// getCommentInFirstPostByUser(getUser)

// getUser(1, (user) => {
//     console.log(user);
//     getPosts(user.userId, (post) => {
//         console.log(post);

//         getComments(post[0], (Comment) => {
//             for (let i = 0; i < Comment.length; i++) {
//                 console.log(Comment[i]);

//             }

//         })
//     })
// })


function getUser(userId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const user = { userId: userId, name: "Nguyễn Văn A" };
            resolve(user);
        }, 1000);
    });
}

function getPosts(userId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const posts = [
                { postId: 1, userId: userId, title: "Bài viết 1" },
                { postId: 2, userId: userId, title: "Bài viết 2" },
            ];
            resolve(posts);
            reject("Lỗi khi lấy bài viết");
        }, 1000);
    });

}

function getComments(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const comments = [
                { commentId: 1, postId: post.postId, content: "Bình luận 1" },
                { commentId: 2, postId: post.postId, content: "Bình luận 2" },
            ];
            resolve(comments);
            reject("Lỗi khi lấy bình luận");
        }, 1000);
    });
}


//cach 1
// getUser(1).then((user) => {
//     console.log(user);
//     return getPosts(user.userId)
// })
// getPosts(1).then((user) => {
//     console.log(user);
//     return getPosts(user.userId)

// })
// getComments(1).then((Comment) => {
//     console.log(Comment);

// })

//cach 2
getUser(1)
    .then((user) => { return getPosts(user.userId) })
    .then((post) => { return getComments(post[0]) })
    .then((comment) => console.log(comment))
    .catch(Error => console.log(Error));


