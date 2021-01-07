let loader = document.querySelector('.loader');
let newPic = document.getElementById('new-pic');
let downVote = document.getElementById('downvote');
let upVote = document.getElementById('upvote');
let score = document.querySelector('.score');


async function defaultImage() {

    const res = await fetch('/kitten/image');
    const kitObj = await res.json();

    if (!res.ok) alert('sucks for you cats are dumb anyway...');

    let htmll = document.querySelector('.cat-pic');
    htmll.src=kitObj.src
    loader.innerHTML = ''
}

function runningScore(num) {
    score.innerHTML = `${num}`;
}

newPic.addEventListener('click', event => {
    loader.innerHTML = 'Loading...'
    defaultImage()
})

upVote.addEventListener('click', async () => {
    const res = await fetch('/kitten/upvote', {method: 'PATCH'});
    const upVoteObj = await res.json();
    console.log(upVoteObj.score, 'ln 32')
    runningScore(upVoteObj.score);
})

downVote.addEventListener('click', async () => {
    const res = await fetch('/kitten/downvote', {method: 'PATCH'});
    const downVoteObj = await res.json();
    runningScore(downVoteObj.score);
})

document.addEventListener('DOMContentLoaded', defaultImage);
