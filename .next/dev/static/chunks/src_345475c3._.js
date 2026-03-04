(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/ProdactCard.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "addButton": "ProdactCard-module__-G8fXW__addButton",
  "card": "ProdactCard-module__-G8fXW__card",
  "cardTitle": "ProdactCard-module__-G8fXW__cardTitle",
  "image": "ProdactCard-module__-G8fXW__image",
  "price": "ProdactCard-module__-G8fXW__price",
  "priceRow": "ProdactCard-module__-G8fXW__priceRow",
  "productDescription": "ProdactCard-module__-G8fXW__productDescription",
  "productName": "ProdactCard-module__-G8fXW__productName",
});
}),
"[project]/src/store/cartStore.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useCartStore",
    ()=>useCartStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/react.mjs [app-client] (ecmascript)");
;
const useCartStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["create"])((set)=>({
        items: [
            {
                id: "1",
                title: "Hoodie",
                description: "Зручне чорне худі з логотипом",
                price: 1200,
                image: "/images/blouse.jpg",
                stock: 10,
                quantity: 2
            },
            {
                id: "2",
                title: "Hoodie",
                description: "Зручне чорне худі з логотипом",
                price: 1200,
                image: "/images/blouse.jpg",
                stock: 10,
                quantity: 2
            },
            {
                id: "3",
                title: "Hoodie",
                description: "Зручне чорне худі з логотипом",
                price: 1200,
                image: "/images/blouse.jpg",
                stock: 10,
                quantity: 2
            },
            {
                id: "4",
                title: "Hoodie",
                description: "Зручне чорне худі з логотипом",
                price: 1200,
                image: "/images/blouse.jpg",
                stock: 10,
                quantity: 2
            },
            {
                id: "5",
                title: "Hoodie",
                description: "Зручне чорне худі з логотипом",
                price: 1200,
                image: "/images/blouse.jpg",
                stock: 10,
                quantity: 2
            },
            {
                id: "6",
                title: "Hoodie",
                description: "Зручне чорне худі з логотипом",
                price: 1200,
                image: "/images/blouse.jpg",
                stock: 10,
                quantity: 2
            },
            {
                id: "7",
                title: "Hoodie",
                description: "Зручне чорне худі з логотипом",
                price: 1200,
                image: "/images/blouse.jpg",
                stock: 10,
                quantity: 2
            },
            {
                id: "8",
                title: "Hoodie",
                description: "Зручне чорне худі з логотипом",
                price: 1200,
                image: "/images/blouse.jpg",
                stock: 10,
                quantity: 2
            },
            {
                id: "9",
                title: "Hoodie",
                description: "Зручне чорне худі з логотипом",
                price: 1200,
                image: "/images/blouse.jpg",
                stock: 10,
                quantity: 2
            },
            {
                id: "10",
                title: "Hoodie",
                description: "Зручне чорне худі з логотипом",
                price: 1200,
                image: "/images/blouse.jpg",
                stock: 10,
                quantity: 2
            },
            {
                id: "11",
                title: "Cup",
                description: "Керамічне горнятка для кави",
                price: 350,
                image: "/images/cup.jpg",
                stock: 25,
                quantity: 1
            },
            {
                id: "12",
                title: "Cup",
                description: "Керамічне горнятка для кави",
                price: 350,
                image: "/images/cup.jpg",
                stock: 25,
                quantity: 1
            },
            {
                id: "13",
                title: "Cup",
                description: "Керамічне горнятка для кави",
                price: 350,
                image: "/images/cup.jpg",
                stock: 25,
                quantity: 1
            }
        ],
        addToCart: (product)=>set((state)=>{
                const existing = state.items.find((item)=>item.id === product.id);
                if (!existing) {
                    // Якщо товару ще немає — додаємо новий
                    return {
                        items: [
                            ...state.items,
                            {
                                ...product,
                                quantity: 1
                            }
                        ]
                    };
                }
                if (existing.quantity < product.stock) {
                    // Якщо ще не досягли stock — збільшуємо кількість
                    return {
                        items: state.items.map((item)=>item.id === product.id ? {
                                ...item,
                                quantity: item.quantity + 1
                            } : item)
                    };
                }
                // Якщо вже максимум — не змінюємо
                return {
                    items: state.items
                };
            }),
        removeFromCart: (id)=>set((state)=>({
                    items: state.items.filter((item)=>item.id !== id)
                })),
        clearCart: ()=>set({
                items: []
            })
    }));
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ProductPopup.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "addButton": "ProductPopup-module__4uaAaW__addButton",
  "bottomRow": "ProductPopup-module__4uaAaW__bottomRow",
  "closeBtn": "ProductPopup-module__4uaAaW__closeBtn",
  "color": "ProductPopup-module__4uaAaW__color",
  "contentWrap": "ProductPopup-module__4uaAaW__contentWrap",
  "desc": "ProductPopup-module__4uaAaW__desc",
  "fadeIn": "ProductPopup-module__4uaAaW__fadeIn",
  "image": "ProductPopup-module__4uaAaW__image",
  "imageWrap": "ProductPopup-module__4uaAaW__imageWrap",
  "infoWrap": "ProductPopup-module__4uaAaW__infoWrap",
  "overlay": "ProductPopup-module__4uaAaW__overlay",
  "popup": "ProductPopup-module__4uaAaW__popup",
  "popupIn": "ProductPopup-module__4uaAaW__popupIn",
  "price": "ProductPopup-module__4uaAaW__price",
  "stock": "ProductPopup-module__4uaAaW__stock",
  "title": "ProductPopup-module__4uaAaW__title",
});
}),
"[project]/src/components/ProductPopup.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductPopup$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/ProductPopup.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
;
;
;
const ProductPopup = ({ product, onClose, onAddToCart })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductPopup$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].overlay,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductPopup$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].popup,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductPopup$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].closeBtn,
                    onClick: onClose,
                    children: "×"
                }, void 0, false, {
                    fileName: "[project]/src/components/ProductPopup.tsx",
                    lineNumber: 22,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductPopup$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].contentWrap,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductPopup$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].imageWrap,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                src: product.image,
                                alt: product.title,
                                width: 260,
                                height: 220,
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductPopup$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].image
                            }, void 0, false, {
                                fileName: "[project]/src/components/ProductPopup.tsx",
                                lineNumber: 25,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/components/ProductPopup.tsx",
                            lineNumber: 24,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductPopup$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].infoWrap,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductPopup$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].title,
                                    children: product.title
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ProductPopup.tsx",
                                    lineNumber: 28,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductPopup$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].desc,
                                    children: product.description
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ProductPopup.tsx",
                                    lineNumber: 29,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductPopup$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].stock,
                                    children: [
                                        "У наявності: ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                            children: [
                                                product.stock,
                                                " шт"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/ProductPopup.tsx",
                                            lineNumber: 30,
                                            columnNumber: 56
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ProductPopup.tsx",
                                    lineNumber: 30,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductPopup$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].color,
                                    children: "Колір: білий"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ProductPopup.tsx",
                                    lineNumber: 31,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductPopup$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].bottomRow,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductPopup$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].addButton,
                                            onClick: onAddToCart,
                                            children: "+"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ProductPopup.tsx",
                                            lineNumber: 33,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductPopup$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].price,
                                            children: [
                                                product.price,
                                                "$"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/ProductPopup.tsx",
                                            lineNumber: 34,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ProductPopup.tsx",
                                    lineNumber: 32,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ProductPopup.tsx",
                            lineNumber: 27,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ProductPopup.tsx",
                    lineNumber: 23,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ProductPopup.tsx",
            lineNumber: 21,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/ProductPopup.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = ProductPopup;
const __TURBOPACK__default__export__ = ProductPopup;
var _c;
__turbopack_context__.k.register(_c, "ProductPopup");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ProdactCard.tsx [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

const e = new Error("Could not parse module '[project]/src/components/ProdactCard.tsx'\n\nReturn statement is not allowed here");
e.code = 'MODULE_UNPARSABLE';
throw e;
}),
"[project]/src/services/mockData.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "mockProducts",
    ()=>mockProducts
]);
const mockProducts = [
    {
        id: "1",
        title: "Hoodie",
        description: "Зручне чорне худі з логотипом",
        price: 1200,
        image: "/images/blouse.jpg",
        // category: "Clothes",
        stock: 10
    },
    {
        id: "2",
        title: "Cup",
        description: "Керамічне горнятка для кави",
        price: 350,
        image: "/images/cup.jpg",
        // category: "Accessories",
        stock: 25
    },
    {
        id: "3",
        title: "Notebook",
        description: "Зручний блокнот з логотипом",
        price: 200,
        image: "/images/notebook.jpg",
        // category: "Stationery",
        stock: 50
    },
    {
        id: "4",
        title: "Pen",
        description: "Кольорова ручка з логотипом",
        price: 150,
        image: "/images/handle.jpg",
        // category: "Stationery",
        stock: 100
    },
    {
        id: "5",
        title: "T-Shirt",
        description: "Біла футболка з логотипом Creator IT",
        price: 800,
        image: "/images/t-shirt.jpg",
        // category: "Clothes",
        stock: 30
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/page.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "arrowButton": "page-module___8aEwW__arrowButton",
  "arrowIcon": "page-module___8aEwW__arrowIcon",
  "basketButton": "page-module___8aEwW__basketButton",
  "basketCount": "page-module___8aEwW__basketCount",
  "basketFooter": "page-module___8aEwW__basketFooter",
  "basketItem": "page-module___8aEwW__basketItem",
  "basketItemBottomRow": "page-module___8aEwW__basketItemBottomRow",
  "basketItemDesc": "page-module___8aEwW__basketItemDesc",
  "basketItemImage": "page-module___8aEwW__basketItemImage",
  "basketItemInfo": "page-module___8aEwW__basketItemInfo",
  "basketItemPrice": "page-module___8aEwW__basketItemPrice",
  "basketItemTitle": "page-module___8aEwW__basketItemTitle",
  "basketItems": "page-module___8aEwW__basketItems",
  "basketPayButton": "page-module___8aEwW__basketPayButton",
  "basketRemoveButton": "page-module___8aEwW__basketRemoveButton",
  "basketTotal": "page-module___8aEwW__basketTotal",
  "by": "page-module___8aEwW__by",
  "container": "page-module___8aEwW__container",
  "emptyBasket": "page-module___8aEwW__emptyBasket",
  "header": "page-module___8aEwW__header",
  "homeButton": "page-module___8aEwW__homeButton",
  "logo": "page-module___8aEwW__logo",
  "main": "page-module___8aEwW__main",
  "prodactCard": "page-module___8aEwW__prodactCard",
  "prodactCardImage": "page-module___8aEwW__prodactCardImage",
  "productsGrid": "page-module___8aEwW__productsGrid",
  "title": "page-module___8aEwW__title",
});
}),
"[project]/src/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProdactCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ProdactCard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$mockData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/mockData.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/app/page.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$cartStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/cartStore.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
function Home() {
    _s();
    const [currentProduct, setCurrentProduct] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const handlePrev = ()=>{
        setCurrentProduct((prev)=>prev === 0 ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$mockData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockProducts"].length - 1 : prev - 1);
    };
    const handleNext = ()=>{
        setCurrentProduct((prev)=>prev === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$mockData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockProducts"].length - 1 ? 0 : prev + 1);
    };
    const getVisibleProducts = ()=>{
        const products = [];
        for(let i = 0; i < 3; i++){
            products.push(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$mockData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockProducts"][(currentProduct + i) % __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$mockData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockProducts"].length]);
        }
        return products;
    };
    const items = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$cartStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCartStore"])({
        "Home.useCartStore[items]": (state)=>state.items
    }["Home.useCartStore[items]"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].container,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].header,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        src: "/images/logo.jpg",
                        alt: "Logo",
                        width: 180,
                        height: 90,
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].logo
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 35,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].title,
                        children: [
                            "ТОВАР ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].by,
                                children: "by"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 36,
                                columnNumber: 52
                            }, this),
                            " CREATOR IT ACADEMY"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 36,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "/basket",
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].basketLink,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].basketButton,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    src: "/images/basket.png",
                                    alt: "Basket",
                                    width: 40,
                                    height: 40,
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].basketImage
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 39,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].basketCount,
                                    children: items.reduce((sum, item)=>sum + item.quantity, 0)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 41,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 38,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 37,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 34,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].main,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handlePrev,
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].arrowButton,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: "/images/left.png",
                            alt: "Назад",
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].arrowIcon
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 51,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 50,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].productsGrid,
                        children: getVisibleProducts().map((product)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProdactCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProdactCard"], {
                                data: product
                            }, product.id, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 57,
                                columnNumber: 25
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 55,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleNext,
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].arrowButton,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: "/images/right.png",
                            alt: "вперед",
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].arrowIcon
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 61,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 60,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 48,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {}, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 65,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 32,
        columnNumber: 9
    }, this);
}
_s(Home, "T5+dRqJWZYOTdNm5Vcwoc/j1hBI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$cartStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCartStore"]
    ];
});
_c = Home;
var _c;
__turbopack_context__.k.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_345475c3._.js.map