import { products as allProducts } from "./products.js";

export class ProductService {
  #products;

  constructor() {
    // בעתיד, כאן אפשר לעשות fetch ל-API
    this.#products = allProducts;
  }

  getAllProducts() {
    return [...this.#products];
  }

  getProductById(id) {
    return this.#products.find((item) => item.id === id);
  }

  selectProductsByCategory(nameOfCategory) {
    if (nameOfCategory === "All Products") return this.getAllProducts();
    return this.#products.filter((item) => item.category === nameOfCategory);
  }
}