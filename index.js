
let test = {};

document.addEventListener("DOMContentLoaded", 
    fetchFile()
)

const elements = {
    mainImg: document.getElementById("main-img"),
    productName: document.getElementById("p-name"),
    productDescription: document.getElementById("p-desc"),
    productRating: document.getElementById("p-rating"),
    price: document.getElementById("price"),
    stock: document.getElementById("p-stock"),
    manufacturerName: document.getElementById("manuf-name"),
    manufacturerCountry: document.getElementById("manuf-country"),
    description: document.getElementById("desc"),
    info: document.getElementById("info"),
    processor: document.getElementById("proc"),
    ram: document.getElementById("ram"),
    storage: document.getElementById("storage"),
    graphics: document.getElementById("graphics"),
    commentName1: document.getElementById("name1"),
    commentText1: document.getElementById("comm1"),
    commentName2: document.getElementById("name2"),
    commentText2: document.getElementById("comm2"),
    demo: document.getElementById("demo")
};



function fetchFile() {

    const http = new XMLHttpRequest();
    http.onload = function () {
        const productObj = JSON.parse(this.responseText)
        load(productObj)
    }
    http.open("GET", "termek.json")
    http.send()
    
}


function load(prodObj) {
        elements.mainImg.src = prodObj.image;
    elements.mainImg.alt = prodObj.name;

    elements.productName.textContent = prodObj.name;
    elements.productDescription.textContent = prodObj.description;
    elements.description.textContent = prodObj.description;

    elements.productRating.textContent =
        `★★★★★ ${prodObj.rating} (${prodObj.reviews.length} értékelés)`;

    elements.price.textContent =
        `${prodObj.price.toLocaleString("hu-HU")} ${prodObj.currency}`;

    elements.stock.textContent =
        `Raktáron (${prodObj.stock} db)`;

    elements.manufacturerName.textContent = prodObj.manufacturer.name;
    elements.manufacturerCountry.textContent = prodObj.manufacturer.country;

    const featureElements = [
        elements.processor,
        elements.ram,
        elements.storage,
        elements.graphics
    ];

    featureElements.forEach((element, index) => {
        element.textContent = prodObj.features[index] ?? "";
    });

    const reviewCards = elements.comments.querySelectorAll(".comment");

    
    
}