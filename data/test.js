const btn= document.querySelector('button')
console.log(btn)
        btn.addEventListener('click', e => {
            console.log('conver button to a')
            btn.outerHTML= `
                <a
                href="./index.html"
                onmouseover= "nextPage()"
                 >click here</a>
            `
        })

function nextPage() {
    const a= document.querySelector('a')

    a.addEventListener('mouseover', handleNextPage)
}



let index= 0
function background() {
   const images= document.querySelectorAll('.image1, .image2, .image3' )
   console.log(images)

   images.forEach((image, i) => {
       image.style.display= 'none'
   })

   
   if(index >= images.length) {
       index= 0
    }
    images[index].style.display= 'block'
   ++index

}
background()    

setInterval(background, 3000)



// cach 2 chua lam duoc
let index2= 0
function background2() {
    const images= document.querySelectorAll('.image1, .image2, .image3' )

    images.forEach((image, i) => {
        image.style.display= 'none'
    })

    if(index2 >= images.length) {
        index2= 0
    }

    images[index2].classList.add('show')
    index2++
}
// background2()
// setInterval(background2, 500)
