
function createProductElement(product, index, strForButtonInCard) {
  const className1 = {
    productItem: "item_price",
    productFigureImg: "figureImg",
    productItemImg: "item_price_img",
    productfigcaptionPrice: "item_figcaption_price",
  };

  // אלמנטים עיקריים
  const div = document.createElement("div");
  div.className = className1.productItem;
  div.setAttribute("data-index", index);

  const ancore = document.createElement("a");
  ancore.setAttribute("data-index", index);

  const figure = document.createElement("figure");
  figure.className = className1.productFigureImg;
  figure.setAttribute("data-index", index);

  const img = document.createElement("img");
  img.className = className1.productItemImg;
  img.src = product.img;
  img.setAttribute("data-index", index);

  const figcaption = document.createElement("figcaption");
  figcaption.className = className1.productfigcaptionPrice;
  figcaption.textContent = product.price;
  figcaption.setAttribute("data-index", index);

  // אלמנט לפעולות על המוצר (כמות + כפתור)
  const productActionsDiv = document.createElement("div");
  productActionsDiv.className = "product_actions";

  const quantityP = document.createElement("p");
  quantityP.className = "product_quantity";
  quantityP.textContent = `Quantity in stack: ${product.Quantity}`;
  quantityP.setAttribute("data-index", index);

  const button = document.createElement("button");
  button.className = "button_for_card";
  button.textContent = strForButtonInCard;
  button.setAttribute("data-index", index);

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

// פונקציה ליצירת קונטיינר של כל המוצרים במסך הראשי
export function loadAllCard(productsArry, containerProducts, strForButtonInCard) {
  const container = document.querySelector(containerProducts);
  container.innerHTML = ""; // נקה קודם
  productsArry.forEach((product, index) => {
    const productElement = createProductElement(
      product,
      index,
      strForButtonInCard
    );
    container.appendChild(productElement);
  });
}


function createProductElementInMyShoppingCart(
  product,
  index,
  strForButtonInCardForPay
) {
  const className1 = {
    productItem: "item_price",
    productFigureImg: "figureImg",
    productItemImg: "item_price_img",
    productfigcaptionPrice: "item_figcaption_price",
  };
  const div = document.createElement("div");
  div.className = className1.productItem;

  const ancore = document.createElement("a");

  const figure = document.createElement("figure");
  figure.className = className1.productFigureImg;

  const img = document.createElement("img");
  img.className = className1.productItemImg;

  const figcaption = document.createElement("figcaption");
  figcaption.className = className1.productfigcaptionPrice;

  figcaption.textContent = product.price;
  img.src = product.img;

  // Create a container for the button and quantity
  const productActionsDiv = document.createElement("div");
  productActionsDiv.className = "product_actions";

  const buttonRemove = document.createElement("button"); // תיקנתי מ-"butoon" ל-"button"
  buttonRemove.className = "butoon_for_remove";
  buttonRemove.textContent = `remove`;
  buttonRemove.setAttribute("data-index", index);
  productActionsDiv.appendChild(buttonRemove); // Add quantity paragraph first

  const button = document.createElement("button");
  button.className = "button_for_card";
  button.textContent = strForButtonInCardForPay;
  button.setAttribute("data-index", index);
  productActionsDiv.appendChild(button); // Add button second

  div.setAttribute("data-index", index);
  ancore.setAttribute("data-index", index);
  figure.setAttribute("data-index", index);
  img.setAttribute("data-index", index);
  figcaption.setAttribute("data-index", index);

  figure.appendChild(img);
  figure.appendChild(figcaption);

  ancore.appendChild(figure);

  div.appendChild(ancore);
  div.appendChild(productActionsDiv); // Append the new container to the item_price div
  return div;
}

// פונקציה ליצירת קונטיינר של כל המוצרים במסך סל קניות
export function loadAllCardInMyShoppingCart(
  productsArry,
  containerProducts,
  strForButtonInCard
) {
  const container = document.querySelector(containerProducts);
  container.innerHTML = ""; // נקה קודם
  if (productsArry.length > 0) {
    productsArry.forEach((product, index) => {
      const productElement = createProductElementInMyShoppingCart(
        product,
        index,
        strForButtonInCard
      );
      container.appendChild(productElement);
    });
  }
}

// יצירת כרטיס מוצר אחד
export function loadProductCard(itemProduct) {
  const continer_item = document.querySelector(".continer_item");
  const main_p_open_face = document.querySelector(".main_p_open_face");
  main_p_open_face.textContent = itemProduct.h2ForProduct;
  continer_item.innerHTML = `<div class = "item_in_choice_for_img"><img class= "item_in_choice_img" src = ${itemProduct.img}></img></div>
     <div class = "item_Description"><p class= "p_ProductDescription">${itemProduct.ProductDescription}</p></div>
     <div class = "item_for_button_for_pay"><button class = "item_button_pay">${itemProduct.price}<br>pay</button></div>`;
}

export function updateCartCounter(count) {
    document.querySelector(".figcaption_my_products").textContent = count;
}

export function setMainTitle(title) {
    document.querySelector(".main_p_open_face").textContent = title;
}

// פונקציה שמחליפה בין התצוגות
export function switchView(viewToShow) {
    // קודם כל, להסתיר הכל
    document.querySelector(".continer_all_item").classList.add("hidden");
    document.querySelector(".continer_my_item").classList.add("hidden");
    document.querySelector(".continer_item").classList.add("hidden");
    
    // להציג את התצוגה הרצויה
    if(viewToShow) {
        document.querySelector(viewToShow).classList.remove("hidden");
    }
}


export function switchViewCategory(viewToShow) {
    // קודם כל, להסתיר הכל
    document.querySelectorAll(".category_button").forEach((item) => {
        item.classList.remove("active");
    })

    // להציג את התצוגה הרצויה
    if(viewToShow) {
        viewToShow.classList.add("active");
    }
    else{document.querySelector(".category_button").classList.add("active")}
}

