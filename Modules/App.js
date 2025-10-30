import { Cart } from "./Cart.js";
import { UI } from "./UI.js";
import { ProductService } from "./ProductService.js";
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
        localStorage.removeItem("my_product");
    }

    #allListiner(){
        document.body.addEventListener("click", (event) => {

            // לחיצה על כפתור הוסף לסל במסך כל המוצרים
            const buttonAddCart = event.target.closest(`.${ClassesName.BUTTON_FOR_ADD}`)
            if(buttonAddCart){
                this.#cart.addToCart(this.#productService.getProductById(buttonAddCart.dataset.id));
                this.#ui.updateCartCounter(this.#cart.getCartCount());
                return;
            }

            //לחיצה על מוצר כלשהו
            const product = event.target.closest(`.${ClassesName.PRODUCT_ITEM}`);
            if(product){
                this.#ui.loadProductCard(this.#productService.getProductById(product.dataset.id));
                return;
            }

            // לחיצה על הלוגו או על כפתור המוצרים
            const logoOrAllProduct = event.target.closest(`.${ClassesName.BUTTON_MY_LOGO}, .${ClassesName.SIDEBAR_OUR_PRODUCTS}`);
            if(logoOrAllProduct){
                this.#ui.renderAllCard(this.#productService.getAllProducts());
                return;
            }

            // לחיצה על כפתור סל הקניות
            const shopingCart = event.target.closest(`.${ClassesName.BUTTON_CART}`);
            if(shopingCart){
                this.#ui.renderCardInCart(this.#cart.myCart);
            }

        }) 
    }
}

