const next = document.querySelector("#next")
const previous = document.querySelector('#previous')
const gallery = document.querySelector('#image')
const elements = [
    {img: "./images/4aIqgqSOWrs.jpg"},
    {img: "./images/92d5b78aba41e17268624d9907e7.jpg"},
    {img: "./images/anime.jpg"},
    {img: "./images/devushka_s.jpg"},
    {img: "./images/dg19g7Jb1Iw.jpg"},
    {img: "./images/P7cGphyBkhM.jpg"},
    {img: "./images/thinkABOUT.jpg"},
]
let index = 0

previous.onclick = function previousItem(){
    if(index <= 0){
        index = elements.length - 1
    }else{
        index--
    }
    gallery.innerHTML = showImg(index)
}

next.onclick = function nextItem(){
    if(index >= elements.length - 1){
        index = 0
    }else{
        index++
    }
    gallery.innerHTML = showImg(index)
}

gallery.innerHTML = showImg(index)

function showImg(index){
    return `<img style="object-fit: cover;border-radius: 10px" height="400px" width="350" src="${elements[index].img}"><br>
    <h1>${index + 1}/${elements.length}</h1>`
}