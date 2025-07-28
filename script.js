const image = [{
src:'https://www.shutterstock.com/blog/wp-content/uploads/sites/5/2015/06/shutterstock_306601151-1.jpg',
alt:'Fennec fox',category:'predators'
},
{
src:'https://d1jyxxz9imt9yb.cloudfront.net/medialib/4350/image/s768x1300/AdobeStock_123823873_433578_reduced.jpg',
alt: 'Lynx',category:'predators'
},
{
src:'https://www.dartmoorzoo.org.uk/wp-content/uploads/2021/01/Tiger-1.jpg',
alt:'Tiger', category:'predators'
},
{
src:'https://media.wired.com/photos/65caa6f6f553745750c04769/3:2/w_2560%2Cc_limit/elephant-congo-science-GettyImages-630005418.jpg', alt: 'Elephant', 
category: 'herbivores'
},
{src:'https://www.apple.com/tv-pr/articles/2024/11/apple-tv-announces-stunning-new-nature-docuseries-the-secret-lives-of-animals-narrated-by-sag-award-winner-hugh-bonneville-to-debut-december-18/images/big-image/big-image-06/1108024_The_Secret_Lives_of_Animals_Big_Image_06_big_image_post.jpg.large.jpg',
    alt:'Monkey',category:'herbivores'
},
{src:'https://media.gettyimages.com/id/1758145205/video/group-of-cheetahs-together-breathing-heavily-on-luscious-african-plain-panting-in-bright.jpg?s=640x640&k=20&c=iJjb_knSgbtTdQ1ko-iv3N7-tgu2w1s0axsuzcyjE7w=',
    alt:'Jaguar', category:'predators'
},
{
    src:'https://www.centralfloridazoo.org/wp-content/uploads/2017/04/ANIMALS-shutterstock_382892662_1400x840_acf_cropped.jpg',
alt:'Giraffe', category:'herbivores'
},
{ src: 'https://varmentguard.com/uploads/permanent/963dbe2472d23882bf65f6fc5748ffbe.jpg',
    alt:'Raccoon', category:'predators'

}
]
const gallery = document.getElementById('gallery');
image.forEach((imgData) => {
   const img =document.createElement('img');
   img.setAttribute('src', imgData.src);
   img.setAttribute('alt', imgData.alt);
   img.setAttribute('data-category',imgData.category);
   gallery.appendChild(img);
});
const select = document.querySelectorAll('.type');
select.forEach(button =>{
    button.addEventListener('click', () =>{ 
        const selectCateg = button.getAttribute('data-category');
        const images = document.querySelectorAll('#gallery img');
        images. forEach(img => {
            if(selectCateg === 'all'|| img.getAttribute('data-category') === selectCateg){
                img.style.display = 'block';}
                else {
                   img.style.display = 'none';
                }
            })
        })

    })
    let changeThe = document.getElementById('change-theme');
    let body = document.body;
      changeThe.addEventListener('click', function(){
        let currentTheme = body.getAttribute('data-theme');
        if(currentTheme === 'white'){
            body.removeAttribute('data-theme');
        }else{
            body.setAttribute('data-theme','white')
        }
    })
