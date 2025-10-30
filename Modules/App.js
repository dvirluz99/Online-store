import { Cart } from "./Cart.js";
import { UI } from "./UI.js";
import {ProductService} from "./productService.js";
import { ClassesName } from "./ClassesName.js";


export class App{
    #cart;
    #productService;
    #ui;
    constructor(){
        this.#cart = new Cart();
        this.#productService = new ProductService();
        this.#ui = new UI();
    }

    init(){

        this.#ui.updateCartCounter(this.#cart.getCartCount());
        this.#ui.renderAllCard(this.#productService.getAllProducts());
        this.#allListiner();
    }

    #allListiner(){
        document.body.addEventListener("click", (event) => {

            const shoppingCart = event.target.closest(ClassesName.BUTTON_FOR_PAY)
            if(shoppingCart){
                this.#cart.addToCart(this.#productService.getProductById(shoppingCart.dataset.id));
                this.#ui.updateCartCounter(this.#cart.getCartCount());
            }

        }) 
    }
}

