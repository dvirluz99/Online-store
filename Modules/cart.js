
export class Cart {
  #myCart;
  constructor() {
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
    this.saveCart();
  }

  removeFromCart(id) {
    this.#myCart = myproduct.filter((item) => item.id !== id);
    saveCart();
  }

  clearCart() {
    this.#myCart.length = 0; // מרוקן את המערך
    localStorage.removeItem("my_product");
  }

  selectCartByCategory(nameOfCategory) {
    if (nameOfCategory === "All Products") return myproduct;
    return this.#myCart.filter((item) => item.category === nameOfCategory);
  }

  get myCart(){
    return [...this.#myCart];
  }
}
