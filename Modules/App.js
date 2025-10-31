import { Cart } from "./Cart.js";
import { UI } from "./UI.js";
import { ProductService } from "./ProductService.js";
import { ClassesName, State} from "./Constants.js";

export class App {
  #cart;
  #productService;
  #ui;
  #appState;
  constructor() {
    this.#cart = new Cart();
    this.#productService = new ProductService();
    this.#ui = new UI();
    this.#appState = {
        category: State.CATEGORY.ALL,
        screen: State.VIEW.SHOP,
    }
  }

  init() {
    this.#ui.updateCartCounter(this.#cart.getCartCount());
    this.#ui.renderAllCard(this.#productService.getAllProducts());
    this.#allListiner();
    // localStorage.removeItem("my_product");
  }

  #allListiner() {
    // האזנת לחיצה על משהו כלשהו על המסך
    document.body.addEventListener("click", (event) => {

      // לחיצה על כפתור הוסף לסל במסך כל המוצרים
      const buttonAddCart = event.target.closest(`.${ClassesName.BUTTON_FOR_ADD}`);
      if (buttonAddCart) {
        this.#cart.addToCart(
          this.#productService.getProductById(buttonAddCart.dataset.id)
        );
        this.#ui.updateCartCounter(this.#cart.getCartCount());
        return;
      }

      //לחיצה על מוצר כלשהו
      const product = event.target.closest(`.${ClassesName.PRODUCT_ITEM}`);
      if (product) {
        this.#ui.loadProductCard(
          this.#productService.getProductById(product.dataset.id)
        );
        return;
      }

      // לחיצה על הלוגו או על כפתור המוצרים
      const logoOrAllProduct = event.target.closest(
        `.${ClassesName.BUTTON_MY_LOGO}, .${ClassesName.SIDEBAR_OUR_PRODUCTS}`
      );
      if (logoOrAllProduct) {
        this.#ui.renderAllCard(this.#productService.getAllProducts());
        this.#appState.screen = State.VIEW.SHOP;
        return;
      }

      // לחיצה על כפתור החלונית בסל קניות למחיקת כל הסל קניות
      const buttonRemoveAllCart = event.target.closest(`.${ClassesName.BUTTON_IN_TOOLTIP_CART_REMOVE}`);
      if(buttonRemoveAllCart){
        this.#cart.clearCart();
        this.#ui.updateCartCounter(this.#cart.getCartCount());
        const screenNow = this.#appState.screen;
        switch (screenNow) {
            case State.VIEW.SHOP:
                this.#ui.renderAllCard(this.#productService.getAllProducts());
                break;
        
            case State.VIEW.CART:
                this.#ui.renderCardInCart(this.#cart.myCart);
                break;
        }
        return;
      }

      // לחיצה על כפתור סל הקניות
      const shopingCart = event.target.closest(`.${ClassesName.BUTTON_CART}`);
      if (shopingCart) {
        this.#ui.renderCardInCart(this.#cart.myCart);
        this.#appState.screen = State.VIEW.CART;
        return;
      }

      // לחיצה על כפתורי בחירת קטגוריה
      const buttonCategory = event.target.closest(`.${ClassesName.CATEGORY_BUTTON}`);
      if(buttonCategory){
        this.#appState.category = buttonCategory.dataset.state;
        const screenNow = this.#appState.screen;
        switch (screenNow) {
            case State.VIEW.SHOP:
                this.#ui.renderAllCard(this.#productService.selectProductsByCategory(this.#appState.category));
                break;
        
            case State.VIEW.CART:
                this.#ui.renderCardInCart(this.#cart.selectCartByCategory(this.#appState.category));
                break;
        }
        this.#ui.switchViewCategory(this.#appState.category);
        return;
      }
    
    });

    //האזנה האם העכבר נמצא מעל סל הקניות
    const tooltip_my_products = document.querySelector(".hover_element");
    tooltip_my_products.addEventListener("mouseenter", () => {
      this.#ui.creatTooltipBox();
    });
    tooltip_my_products.addEventListener("mouseleave", () => {
      this.#ui.removeTooltipBox();
    });
  }
}
