let backbtn=document.getElementById('backbtn')
let nextbtn=document.getElementById('nextbtn')
let photos=document.getElementById('photos')






photos.style.scrollBehavior="smooth"


// photos.addEventListener('wheel',(e)=>{
//     e.preventDefault()
//     photos.scrollLeft+=e.deltaY
// })
nextbtn.style.cursor="pointer"
backbtn.style.cursor="pointer"

nextbtn.addEventListener('click',()=>{
    photos.scrollLeft+=450
    photos.style.scrollBehavior="smooth"
})
backbtn.addEventListener('click',()=>{
    photos.style.scrollBehavior="smooth"
    photos.scrollLeft-=450
})