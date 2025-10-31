import { ClassesName, State} from "./Constants.js";

export class UI {
  #mainContiner;
  #continerProduct;
  #nameOfClasses;
  #tooltip_my_products;
  #tooltipBox;
  constructor() {
    this.#mainContiner = document.querySelector(".main_continer");
    this.#continerProduct = document.querySelector(".continer_product");
    this.#tooltip_my_products = document.querySelector(".hover_element");
    this.#nameOfClasses = {
      pOpenFace: "main_p_open_face",
      categoryMenu: "category_menu",
      productItem: "item_price",
      productFigureImg: "figureImg",
      productItemImg: "item_price_img",
      productfigcaptionPrice: "item_figcaption_price",
      countOfCart: ".figcaption_my_products",
      productActions: "product_actions",
      productQuantity: "product_quantity",
      buttonForAdd: "button_for_add",
      buttonForPay: "button_for_pay",
      butoonForRemove: "butoon_for_remove",
    };
  }

  updateCartCounter(count) {
    document.querySelector(this.#nameOfClasses.countOfCart).textContent = count;
  }

  #renderMainP(title) {
    const mainP = document.createElement("p");
    mainP.className = ClassesName.MAIN_P_OPEN_FACE;
    mainP.textContent = title;
    this.#mainContiner.appendChild(mainP);
  }

  #renderCategoryMenu() {
    const div = document.createElement("div");
    div.className = ClassesName.CATEGORY_MENU;

    const butoon1 = document.createElement("button");
    butoon1.className = ClassesName.CATEGORY_BUTTON + " " + ClassesName.ACTIVE;
    butoon1.setAttribute("data-state", `${State.CATEGORY.ALL}`)
    butoon1.textContent = "All Products";

    const butoon2 = document.createElement("button");
    butoon2.className = ClassesName.CATEGORY_BUTTON;
    butoon2.setAttribute("data-state", `${State.CATEGORY.ELECTRONIC}`)
    butoon2.textContent = "electronic";

    const butoon3 = document.createElement("button");
    butoon3.className = ClassesName.CATEGORY_BUTTON;
    butoon3.setAttribute("data-state", `${State.CATEGORY.CELLPHONE}`)
    butoon3.textContent = "Cellphone";

    div.appendChild(butoon1);
    div.appendChild(butoon2);
    div.appendChild(butoon3);

    this.#mainContiner.appendChild(div);
  }

  // טעינת כל המוצרים על הלוח
  renderAllCard(productsArry) {
    this.#mainContiner.innerHTML = ""; // נקה קודם
    this.#continerProduct.innerHTML = "";
    this.#renderMainP("our store");
    this.#renderCategoryMenu();
    productsArry.forEach((product) => {
      const productElement = this.#createProductForStore(product);
      this.#continerProduct.appendChild(productElement);
    });
    this.#mainContiner.appendChild(this.#continerProduct);
  }

  // יצירת מוצר אחד לטובת מוצרי החנות
  #createProductForStore(product) {
    // אלמנטים עיקריים
    const div = document.createElement("div");
    div.className = ClassesName.PRODUCT_ITEM;
    div.setAttribute("data-id", product.id);

    const ancore = document.createElement("a");
    ancore.setAttribute("data-id", product.id);

    const figure = document.createElement("figure");
    figure.className = ClassesName.PRODUCT_FIGURE_IMG;
    figure.setAttribute("data-id", product.id);

    const img = document.createElement("img");
    img.className = ClassesName.PRODUCT_ITEM_IMG;
    img.src = product.img;
    img.setAttribute("data-id", product.id);

    const figcaption = document.createElement("figcaption");
    figcaption.className = ClassesName.PRODUCT_FIGCAPTION_PRICE;
    figcaption.textContent = product.price;
    figcaption.setAttribute("data-id", product.id);

    // אלמנט לפעולות על המוצר (כמות + כפתור)
    const productActionsDiv = document.createElement("div");
    productActionsDiv.className = ClassesName.PRODUCT_ACTION;

    const quantityP = document.createElement("p");
    quantityP.className = ClassesName.PRODUCT_QUANTITY;
    quantityP.textContent = `Quantity in stack: ${product.Quantity}`;
    quantityP.setAttribute("data-id", product.id);

    const button = document.createElement("button");
    button.className = ClassesName.BUTTON_FOR_ADD;
    button.textContent = "add to card";
    button.setAttribute("data-id", product.id);

    // בניית מבנה ה־DOM
    productActionsDiv.appendChild(quantityP);
    productActionsDiv.appendChild(button);

    figure.appendChild(img);
    figure.appendChild(figcaption);

    ancore.appendChild(figure);

    div.appendChild(ancore);
    div.appendChild(productActionsDiv);

    return div;
  }

  // טעינת כל המוצרים על הלוח
  renderCardInCart(productsArry) {
    this.#mainContiner.innerHTML = ""; // נקה קודם
    this.#continerProduct.innerHTML = "";
    this.#renderMainP("your products");
    this.#renderCategoryMenu();
    productsArry.forEach((product) => {
      const productElement = this.#createProductForCart(product);
      this.#continerProduct.appendChild(productElement);
    });
    this.#mainContiner.appendChild(this.#continerProduct);
  }

  // יצירת מוצר אחד לטובת מוצרי החנות
  #createProductForCart(product) {
    // אלמנטים עיקריים
    const div = document.createElement("div");
    div.className = ClassesName.PRODUCT_ITEM;
    div.setAttribute("data-id", product.id);

    const ancore = document.createElement("a");
    ancore.setAttribute("data-id", product.id);

    const figure = document.createElement("figure");
    figure.className = ClassesName.PRODUCT_FIGURE_IMG;
    figure.setAttribute("data-id", product.id);

    const img = document.createElement("img");
    img.className = ClassesName.PRODUCT_ITEM_IMG;
    img.src = product.img;
    img.setAttribute("data-id", product.id);

    const figcaption = document.createElement("figcaption");
    figcaption.className = ClassesName.PRODUCT_FIGCAPTION_PRICE;
    figcaption.textContent = product.price;
    figcaption.setAttribute("data-id", product.id);

    // אלמנט לפעולות על המוצר (כמות + כפתור)
    const productActionsDiv = document.createElement("div");
    productActionsDiv.className = ClassesName.PRODUCT_ACTION;

    const buttonRemove = document.createElement("button"); // תיקנתי מ-"butoon" ל-"button"
    buttonRemove.className = ClassesName.BUTTON_FOR_REMOVE;
    buttonRemove.textContent = "remove";
    buttonRemove.setAttribute("data-id", product.id);
    productActionsDiv.appendChild(buttonRemove); // Add quantity paragraph first

    const button = document.createElement("button");
    button.className = ClassesName.BUTTON_FOR_PAY;
    button.textContent = "pay now";
    button.setAttribute("data-id", product.id);
    productActionsDiv.appendChild(button); // Add button second

    // בניית מבנה ה־DOM
    productActionsDiv.appendChild(button);

    figure.appendChild(img);
    figure.appendChild(figcaption);

    ancore.appendChild(figure);

    div.appendChild(ancore);
    div.appendChild(productActionsDiv);

    return div;
  }

  // יצירת כרטיס מוצר אחד
  loadProductCard(itemProduct) {
    this.#mainContiner.innerHTML = "";
    this.#continerProduct.innerHTML = "";
    this.#renderMainP(itemProduct.h2ForProduct);
    this.#continerProduct.innerHTML = `<div class = "item_in_choice_for_img"><img class= "item_in_choice_img" src = ${itemProduct.img}></img></div>
        <div class = "item_Description"><p class= "p_ProductDescription">${itemProduct.ProductDescription}</p></div>
        <div class = "item_for_button_for_pay"><button class = "item_button_pay">${itemProduct.price}<br>pay</button></div>`;
    this.#mainContiner.appendChild(this.#continerProduct);
  }

  // החלפת פעולה על הכפתורים בתפריט הקטגוריות
  switchViewCategory(viewToShowCategory) {
    // קודם כל, להסתיר הכל
    document.querySelectorAll(`.${ClassesName.CATEGORY_BUTTON}`).forEach((item) => {
      item.classList.remove("active");
      if(item.dataset.state === viewToShowCategory){
        item.classList.add("active");
      }
    });
    return;
  }

  // יצירת חלונית קטנה מתחת לסל קניות אם העכבר מעליו
  creatTooltipBox() {
    if (!this.#tooltipBox) {
      this.#tooltipBox = document.createElement("div");
      this.#tooltipBox.className = ClassesName.TOOLTIP_BOX_MY_CART;
      const button_remove = document.createElement("button");
      button_remove.className = ClassesName.BUTTON_IN_TOOLTIP_CART_REMOVE;
      button_remove.textContent = "clear cart";
      this.#tooltipBox.appendChild(button_remove);
      this.#tooltip_my_products.appendChild(this.#tooltipBox);
    }
  }

  // הסרת החלונית הקטנה אם העכבר כבר לא מעליו
  removeTooltipBox() {
    setTimeout(() => {
      if (this.#tooltipBox && !this.#tooltip_my_products.matches(":hover")) {
        this.#tooltipBox.remove();
        this.#tooltipBox = null;
      }
    }, 300);
  }
}
