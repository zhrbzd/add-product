// Project loaded add product page dont show when onclock add product button that be show
let addNewProduct = document.querySelector("#addNewProduct")
addNewProduct.style.display = "none"
function addNewProductPage(){
    addNewProduct.style.display = "block";
}

// When click on checking fixed transportation show transportation cost
let transprtationCost = document.querySelector(".transportaionCost")
let fixedCostInputox = document.querySelector("#fixedCostInput");
fixedCostInput.checked = false;
fixedCostInput.onchange = function() {
    transprtationCost.style.display = this.checked ? 'block' : 'none';
};
fixedCostInput.onchange();

// Navbar toggle
$("#burgerMenuIcon").click(function(){
    $("#responsiveSidebar").toggle()
})

let resAddProductLink = document.querySelector("#resAddProductLink")
let responsiveMain = document.querySelector("#responsiveMain")
resAddProductLink.addEventListener("click", e => {
    responsiveMain.style.display = "none" ? 'block' : 'none'
})