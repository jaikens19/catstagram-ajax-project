async function defaultImage() {
    // console.log(img, img.src);
    const res = await fetch('/kitten/image');
    const kitObj = await res.json();
    let htmll = document.querySelector('.cat-pic');
    htmll.src=kitObj.src
    loader.innerHTML = ''
}
document.addEventListener('DOMContentLoaded', defaultImage);

let loader = document.querySelector('.loader');

let newPic = document.getElementById('new-pic');

newPic.addEventListener('click', event => {
    loader.innerHTML = 'Loading...'
    defaultImage()
})