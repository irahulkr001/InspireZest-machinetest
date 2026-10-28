
const colourOptions = document.querySelectorAll(".colour-option");
const mainImage = document.getElementById("mainImage");
const selectedColour = document.getElementById("selectedColour");
const stockStatus = document.getElementById("stockStatus");
const quantity = document.getElementById("quantity");
const addToCart = document.getElementById("addToCart");
const message = document.getElementById("message");
let currentStock = 0;
function selectColour(option) {
    colourOptions.forEach((button) => {
        button.classList.remove("active");
        button.setAttribute("aria-pressed", "false");
    });
    option.classList.add("active");
    option.setAttribute("aria-pressed", "true");
    mainImage.src = option.dataset.image;
    selectedColour.textContent = option.dataset.colour;
    currentStock = Number(option.dataset.stock);
    stockStatus.textContent =
        currentStock > 0 ? "In Stock" : "Out of Stock";
    quantity.value = 1;
    quantity.max = Math.max(currentStock, 1);
    quantity.disabled = currentStock === 0;
    addToCart.disabled = currentStock === 0;
    addToCart.textContent =
        currentStock > 0 ? "Add to Cart" : "Out of Stock";
    message.textContent = "";
}
colourOptions.forEach((option) => {
    option.addEventListener("click", () => selectColour(option));
});
if (colourOptions.length > 0) {
    selectColour(colourOptions[0]);
}
addToCart.addEventListener("click", () => {
    const selectedQuantity = Number(quantity.value);
    if (
        !Number.isInteger(selectedQuantity) ||
        selectedQuantity < 1 ||
        selectedQuantity > currentStock
    ) {
        message.textContent = "Please enter a valid quantity.";
        return;
    }
    message.textContent =
        "Colour and quantity selected. Cart functionality is not connected yet.";
});
