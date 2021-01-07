async function defaultImage() {
    // console.log(img, img.src);
    const res = await fetch('/kitten/image');
    const kitObj = await res.json();
    let htmll = document.querySelector('.cat-pic');
    htmll.src=kitObj.src

}

document.addEventListener('DOMContentLoaded', defaultImage;
