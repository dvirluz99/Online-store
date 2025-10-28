
// טעינה ראשונית מ-localStorage
const savedProducts = JSON.parse(localStorage.getItem("my_product"));
export const myproduct = Array.isArray(savedProducts) ? savedProducts : [];

// פונקציה לשמירה
function saveCart() {
  localStorage.setItem("my_product", JSON.stringify(myproduct));
}

export function getCartCount() {
  return myproduct.length;
}

export function addToCart(product) {
  myproduct.push(product);
  saveCart();
}

export function removeFromCart(index) {
  myproduct.splice(index, 1);
  saveCart();
}

export function clearCart() {
  myproduct.length = 0; // מרוקן את המערך
  localStorage.removeItem("my_product");
}