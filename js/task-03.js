const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];
console.log(images);
const imagesGallery = document.querySelector("#gallery");
imagesGallery.classList.add("listGallery")
console.log(imagesGallery);

const makeElGallery = ({ url, alt }) => {
    const elItem = document.createElement("li")
    // const elImage = document.createElement("img")
    // elImage.src = url
    // elImage.alt = alt
    // elImage.width=320
    // elItem.append(elImage)
    elItem.insertAdjacentHTML("beforeend",`<img class="image" src=${url} alt="${alt}">`)
    return elItem
}
const listItem = images.map(makeElGallery)
// console.log(makeElGallery(images[0]))
// console.log(makeElGallery(images[1]))
// console.log(makeElGallery(images[2]))

// console.log(listItem)
imagesGallery.append(...listItem)
