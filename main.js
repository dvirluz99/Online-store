// // ייבוא נתונים
// import { products } from "./Modules/products.js";
// import { getCartCount } from "./Modules/Cart.js";

// // ייבוא פונקציות UI
// import { loadAllCard, updateCartCounter, setMainTitle } from "./Modules/UI.js";

// // ייבוא כל המאזינים
// import { setupEventListeners } from "./Modules/listeners.js";

// // --- הפעלה ראשונית ---

// // 1. קביעת כותרת ראשית
// setMainTitle("Store products");

// // 2. עדכון מונה הסל בטעינה
// updateCartCounter(getCartCount());

// // 3. טעינת כל המוצרים לדף הבית
// loadAllCard(products, ".continer_all_item", "add to card");

// // 4. הפעלת כל המאזינים לאירועים
// setupEventListeners();

import { App } from "./Modules/app";

const app = new App();

app.init();