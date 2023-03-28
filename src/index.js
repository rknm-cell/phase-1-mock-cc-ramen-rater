// write your code here
let url = "http://localhost:3000/ramens"

fetch(url)
.then((response) => response.json())
.then((data) => {
    console.log(data);
    ramenRender(data);
}) 




// 1 create img element
// 2 append images to img element

const ramenRender = (ramens) => {
    ramens.forEach(ramen => {
        
        let imgSrc = ramen.image;
        let ramenId = ramen.id
        var img = document.createElement("img");
        img.setAttribute("src", `${imgSrc}`);
        img.classList.add(`ramen-menu-img-${ramenId}`);
        document.getElementById("ramen-menu").appendChild(img);


})};

// 3 create an event listener to click the image in the navbar
// 4 attach the information of that clicked image to main menu 
document.querySelector("ramen-menu-image");

// when i click on the image it should show me the url of the image
// document.addEventListener("click", selectRamen);


// two out of three ain't bad
// just gotta add that last third


document.addEventListener('click', function(e) {
    e = e || window.event; 
    var target = e.target; 
    if(target.tagName == 'IMG'){ 
        console.log(target.src); 
        ramenDetailImg = `${target.src}`;
        document.querySelector(".detail-image")
        .setAttribute("src", `${ramenDetailImg}`);

        // find the entry through the img src
        // and return the rest of the data set
        // once found append to appropriate tags
        // Array.indexOf(url, target.src)
    }
   }, false);

// get info from dataset from the src of the image

