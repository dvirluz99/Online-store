
// טעינה ראשונית מ-localStorage
// const savedProducts = JSON.parse(localStorage.getItem("my_product"));
// export let myproduct = Array.isArray(savedProducts) ? savedProducts : [];

// // פונקציה לשמירה
// function saveCart() {
//   localStorage.setItem("my_product", JSON.stringify(myproduct));
// }

// export function getCartCount() {
//   return myproduct.length;
// }

// export function addToCart(product) {
//   myproduct.push(product);
//   saveCart();
// }

// export function removeFromCart(id) {
//   myproduct = myproduct.filter((item) => item.id !== id);
//   saveCart();
// }

// export function clearCart() {
//   myproduct.length = 0; // מרוקן את המערך
//   localStorage.removeItem("my_product");
// }

// export function selectCartByCategory(nameOfCategory){
//   if(nameOfCategory === "All Products") return myproduct;
//   return myproduct.filter((item) => item.category === nameOfCategory)
// }

export class Cart{
    #myCart;
    constructor(){
      const savedProducts = JSON.parse(localStorage.getItem("my_product"));
      this.#myCart = Array.isArray(savedProducts) ? savedProducts : [];
    }

    saveCart() {
      localStorage.setItem("my_product", JSON.stringify(this.#myCart));
    }

    getCartCount() {
      return this.#myCart.length;
    }

    addToCart(product) {
      this.#myCart.push(product);
      saveCart();
    }

    removeFromCart(id) {
      this.#myCart = myproduct.filter((item) => item.id !== id);
      saveCart();
    }

    clearCart() {
      this.#myCart.length = 0; // מרוקן את המערך
      localStorage.removeItem("my_product");
    }

    selectCartByCategory(nameOfCategory){
      if(nameOfCategory === "All Products") return myproduct;
      return this.#myCart.filter((item) => item.category === nameOfCategory)
    }

}