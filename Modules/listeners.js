


// ייבוא נתונים
import { products } from "./products.js";
import * as cart from "./cart.js"; // נייבא את כל הפונקציות מהסל

// ייבוא פונקציות UI
import {
  loadAllCardInMyShoppingCart,
  loadProductCard,
  updateCartCounter,
  setMainTitle,
  switchView,
  switchViewCategory
} from "./ui.js";

// משתנה פנימי למודול הזה
let numOfMyProductsBeforeAdd = 0;

// פונקציה אחת שמפעילה את כל המאזינים
export function setupEventListeners() {
  
  // לחיצה על כפתור הסל קניות או ניקוי
  document
    .querySelector(".button_my_shopinig")
    .addEventListener("click", (event) => {
      if (event.target.classList.contains("a_my_area")) {
        cart.clearCart(); // שימוש בפונקציה מהמודול
        updateCartCounter(0);
        numOfMyProductsBeforeAdd = 0;
        document.querySelector(".continer_my_item").innerHTML = ""; // ניקוי התצוגה
        setMainTitle("Your products");
        return;
      } else {
        switchView(".continer_my_item"); // הצג סל
        setMainTitle("Your products");
        switchViewCategory(null);
        
        const currentCartCount = cart.getCartCount();
        if (
          (currentCartCount > 0 && numOfMyProductsBeforeAdd !== currentCartCount) ||
          (numOfMyProductsBeforeAdd === 0 && currentCartCount > 0)
        ) {
          loadAllCardInMyShoppingCart(
            cart.myproduct, // שימוש במערך המיובא
            ".continer_my_item",
            "pay now"
          );
        }
      }
      numOfMyProductsBeforeAdd = cart.getCartCount();
    });

  // לחיצה על לוגו או "המוצרים שלנו"
  document
    .querySelectorAll(".button_my_logo, .sidebar_ul_a_ourProducts")
    .forEach((item) =>
      item.addEventListener("click", () => {
        switchView(".continer_all_item"); // הצג דף בית
        setMainTitle("Store products");
        switchViewCategory(null);
      })
    );

  // האזנה לשני הקונטיינרים (מוצרים וסל)
  document
    .querySelectorAll(".continer_all_item, .continer_my_item")
    .forEach((item) => {
      item.addEventListener("click", (event) => {
        if (event.target === item) return; // נלחץ על הרקע, לא על פריט

        const target = event.target;

        // לחיצה על "הוסף לסל" בדף הבית
        if (target.classList.contains("button_for_card") && target.closest(".continer_all_item")) {
          const index = target.getAttribute("data-index");
          cart.addToCart(products[index]);
          updateCartCounter(cart.getCartCount());
          return;
        }

        // לחיצה על "הסר" מסל הקניות
        if (target.classList.contains("butoon_for_remove")) {
          const index = target.getAttribute("data-index");
          cart.removeFromCart(index);
          updateCartCounter(cart.getCartCount());
          // טען מחדש את תצוגת הסל
          loadAllCardInMyShoppingCart(
            cart.myproduct,
            ".continer_my_item",
            "pay now"
          );
          return;
        }

        // לחיצה על הכרטיס עצמו (לצפייה בפרטים)
        if (target.closest(".item_price")) {
          const card = target.closest(".item_price");
          const index = card.getAttribute("data-index");
          let selectedProduct;

          if (card.closest(".continer_all_item")) {
            selectedProduct = products[index];
          } else if (card.closest(".continer_my_item")) {
            selectedProduct = cart.myproduct[index];
          }

          if (selectedProduct) {
            switchView(".continer_item"); // הצג פרטי מוצר
            loadProductCard(selectedProduct);
          }
        }
      });
    });

  // לוגיקת ה-Tooltip
  const tooltip_my_products = document.querySelector(".hover_element");
  let tooltipBox;
  tooltip_my_products.addEventListener("mouseenter", () => {
    if (!tooltipBox) {
      tooltipBox = document.createElement("div");
      tooltipBox.className = "tooltip_box";
      const button_remove = document.createElement("button");
      button_remove.className = "a_my_area";
      button_remove.textContent = "clear products";
      tooltipBox.appendChild(button_remove);
      tooltip_my_products.appendChild(tooltipBox);

      tooltipBox.addEventListener("mouseenter", () => {
        tooltipBox.setAttribute("data-hover", "true");
      });
      tooltipBox.addEventListener("mouseleave", () => {
        tooltipBox.remove();
        tooltipBox = null;
      });
    }
  });
  tooltip_my_products.addEventListener("mouseleave", () => {
    setTimeout(() => {
      if (
        tooltipBox &&
        !tooltipBox.matches(":hover") &&
        !tooltip_my_products.matches(":hover")
      ) {
        tooltipBox.remove();
        tooltipBox = null;
      }
    }, 300);
  });

  // הדגשת כפתור בתפריט קטגוריות
  document.querySelectorAll(".category_button").forEach((item) => {
    item.addEventListener("click", () => {
      switchViewCategory(item);
    });
  })
}