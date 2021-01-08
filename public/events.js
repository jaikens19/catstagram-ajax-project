let loader = document.querySelector('.loader');
let newPic = document.getElementById('new-pic');
let downVote = document.getElementById('downvote');
let upVote = document.getElementById('upvote');
let score = document.querySelector('.score');
let bubble = document.getElementById('bubbler')
let userComment = document.getElementById('user-comment')
let commentBoard = document.querySelector('.comments')
let commentForm = document.querySelector('.comment-form')



async function defaultImage() {

    const res = await fetch('/kitten/image');
    const kitObj = await res.json();

    if (!res.ok) alert('sucks for you cats are dumb anyway...');

    let htmll = document.querySelector('.cat-pic');
    htmll.src=kitObj.src
    loader.innerHTML = ''
}

async function runningScore(event) {
    let url = "upvote"
    if(event.target === downVote) url = "downvote"
    const res = await fetch(`/kitten/${url}`, { method: 'PATCH' });
    const voteObj = await res.json();
    score.innerHTML = `${voteObj.score}`;
}

async function commentPost() {
    console.log(userComment.value, "am I hear??")
    let comment = await fetch('/kitten/comments',  {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({comment: userComment.value})
    })
    let commentObj = await comment.json()
    let allComments = commentObj.comments
    let newComment = commentObj.comments[allComments.length - 1]
    let current = commentBoard.innerText
    if(!current) {
        commentBoard.innerText = newComment
    } 
    else {
        current += `\n${newComment}`
        commentBoard.innerText = current
    }
}


commentForm.addEventListener('submit', event => {
    event.preventDefault()
    commentPost()
})
    


newPic.addEventListener('click', event => {
    loader.innerHTML = 'Loading...'
    defaultImage()
})

bubble.addEventListener('click', event => {
    runningScore(event)
})

document.addEventListener('DOMContentLoaded', defaultImage);






























// upVote.addEventListener('click', async () => {
//     const res = await fetch('/kitten/upvote', {method: 'PATCH'});
//     const upVoteObj = await res.json();
//     console.log(upVoteObj.score, 'ln 32')
//     runningScore(upVoteObj.score);
// })

// downVote.addEventListener('click', async () => {
//     const res = await fetch('/kitten/downvote', {method: 'PATCH'});
//     const downVoteObj = await res.json();
//     runningScore(downVoteObj.score);
// })