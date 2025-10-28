## תיעוד מחלקות CSS בפרויקט

מסמך זה מפרט את מחלקות ה-CSS המרכזיות בפרויקט, תפקידן וכיצד נעשה בהן שימוש בקוד ה-JavaScript.

### מחלקות כלליות

- `.hidden`
  - **תיאור:** מחלקה שירות (utility class) שמסתירה אלמנטים על ידי הגדרת `display: none !important;`.
  - **שימוש ב-JS:** משמשת להחלפה דינמית בין תצוגות שונות: רשימת כל המוצרים (`.continer_all_item`), רשימת המוצרים בסל הקניות (`.continer_my_item`), ותצוגת מוצר בודד (`.continer_item`).

---

### Header (כותרת עליונה)

- `.div_continer_head`: קונטיינר ראשי של ההדר, משתמש ב-Flexbox لסידור התוכן.
- `.img_logo`: מעצב את תמונת הלוגו. לחיצה עליו מחזירה למסך הראשי של המוצרים.
- `.button_my_shopinig`: הכפתור של סל הקניות.
- `.hover_element`: אלמנט עוטף לסל הקניות, שבהעברת עכבר מעליו מציג את ה-tooltip.
- `.tooltip_box`: התיבה הקופצת (tooltip) שמופיעה בהעברת עכבר על סל הקניות.
- `.a_my_area`: מעצב כפתור. משמש ככפתור "נקה מוצרים" בתוך ה-tooltip של סל הקניות.

---

### Sidebar (סרגל צד)

- `.div_continer_side`: הקונטיינר של סרגל הצד.
- `.sidebar_ul_a_ourProducts`: כפתור הניווט בסרגל הצד שמחזיר לתצוגת כל המוצרים.

---

### Main Content (תוכן ראשי)

- `.main_p_open_face`: מעצב את הכותרת הראשית שמתארת את התצוגה הנוכחית (למשל, "Store products" או "Your products").

#### קונטיינרים של תצוגות

- `.continer_all_item`: קונטיינר Grid המציג את כל המוצרים בחנות.
- `.continer_my_item`: קונטיינר Grid המציג את המוצרים שהמשתמש הוסיף לסל הקניות.
- `.continer_item`: קונטיינר המציג פרטים של מוצר בודד שנבחר.

---

### כרטיסיית מוצר (Product Card)

אלו המחלקות שמרכיבות כל כרטיסיית מוצר ברשימות `.continer_all_item` ו-`.continer_my_item`.

- `.item_price`: הקונטיינר הראשי של כרטיסיית מוצר בודדת.
- `.figureImg`: אלמנט `<figure>` שעוטף את התמונה והמחיר.
- `.item_price_img`: תמונת המוצר.
- `.item_figcaption_price`: המחיר של המוצר.
- `.product_actions`: קונטיינר Flex המכיל את הכמות במלאי ואת כפתור הפעולה.
- `.product_quantity`: פסקה המציגה את הכמות הזמינה במלאי.
- `.button_for_card`: כפתור הפעולה בכרטיסייה ("add to card" או "pay now").

---

### תצוגת מוצר בודד (Single Product View)

אלו המחלקות המרכיבות את תצוגת המוצר הבודד בתוך `.continer_item`.

- `.item_in_choice_for_img`: קונטיינר לתמונת המוצר.
- `.item_in_choice_img`: תמונת המוצר עצמה.
- `.item_Description`: קונטיינר לתיאור המוצר.
- `.p_ProductDescription`: פסקה המכילה את טקסט תיאור המוצר.
- `.item_for_button_for_pay`: קונטיינר לכפתור התשלום.
- `.item_button_pay`: כפתור התשלום.

---

### Footer (כותרת תחתונה)

- `.div_continer_footer`: הקונטיינר הראשי של הפוטר.
- `.item_span_footer`: מעצב את הקישורים/כפתורים בפוטר.
