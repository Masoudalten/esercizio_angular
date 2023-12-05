document.querySelector('h1').style.color = "red";

//EX_2
// document.getElementById('change_color').addEventListener('click', function(){
//     document.querySelector('h1').style.color = "blue";
// });

// while (true) {
//     console.log("hello")
// }


//EX_3

isTextColor1 = false;
let timeOut = setInterval(textColor, 2000);

function textColor(){
    document.querySelector('h1').style.color = isTextColor1 ? "red" : "green";
    isTextColor1 = !isTextColor1;
    // console.log("color changed");
    
}




// fetch('https://jsonplaceholder.typicode.com/comments/14')
//     .then(response => response.json())
//     .then(json => console.log(json))



// fetch('https://jsonplaceholder.typicode.com/comments/14')
//     .then(response => response.json())
//     .then(function(comments){
//         let postid = comments.postId;
//         fetch(`https://jsonplaceholder.typicode.com/posts/${postid}`)
//             .then(response => response.json())
//             .then(function(posts){
//             let userid = posts.userId
//             fetch(`https://jsonplaceholder.typicode.com/users/${userid}`)
//                 .then(response => response.json())
//                 .then(function(users){
//                 console.log(users.name)
//             }) 
//         })  
//     })


async function getUserInfo() {
    try {
        const commentsResponse = await fetch('https://jsonplaceholder.typicode.com/comments/14');
        const comments = await commentsResponse.json();

        const postsResponse = await fetch(`https://jsonplaceholder.typicode.com/posts/${comments.postId}`);
        const posts = await postsResponse.json();

        const usersResponse = await fetch(`https://jsonplaceholder.typicode.com/users/${posts.userId}`);
        const users = await usersResponse.json();

        console.log(users.name);
    } catch (error) {
        console.error('Error:', error);
    }
}

getUserInfo();
    


fetch('http://jsonplaceholder.typicode.com/comments/14').then(function(response) {
  response.json().then(function(comments){
      let postid = comments.postId;
  });
  
}).catch(err => console.error(err));


