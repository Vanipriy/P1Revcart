"use strict";
(self["webpackChunkrevcart_frontend"] = self["webpackChunkrevcart_frontend"] || []).push([["main"],{

/***/ 92:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 2510);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/auth.service */ 4796);
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/cart.service */ 6868);








const _c0 = () => ({
  exact: true
});
function AppComponent_span_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.cartCount);
  }
}
function AppComponent_a_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " Admin ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function AppComponent_div_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 21)(1, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Sign In");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Sign Up");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}
function AppComponent_div_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 24)(1, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppComponent_div_21_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r0.logout());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Welcome, ", (tmp_1_0 = ctx_r0.getCurrentUser()) == null ? null : tmp_1_0.name, "");
  }
}
class AppComponent {
  constructor(authService, cartService) {
    this.authService = authService;
    this.cartService = cartService;
    this.title = 'RevCart - Premium Grocery Delivery';
    this.cartCount = 0;
    this.cartSubscription = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subscription();
    this.authSubscription = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subscription();
  }
  ngOnInit() {
    this.cartSubscription = this.cartService.getCartItems().subscribe(items => {
      this.cartCount = items.reduce((total, item) => total + item.quantity, 0);
    });
    this.authSubscription = this.authService.currentUser$.subscribe(user => {
      // This will trigger change detection when user state changes
    });
  }
  ngOnDestroy() {
    this.cartSubscription.unsubscribe();
    this.authSubscription.unsubscribe();
  }
  isLoggedIn() {
    return this.authService.isAuthenticated();
  }
  isAdmin() {
    return this.authService.isAdmin();
  }
  getCurrentUser() {
    return this.authService.getCurrentUser();
  }
  logout() {
    this.authService.logout();
  }
  static {
    this.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_cart_service__WEBPACK_IMPORTED_MODULE_1__.CartService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
      decls: 24,
      vars: 6,
      consts: [[1, "navbar"], [1, "nav-container"], [1, "nav-brand"], ["routerLink", "/", 1, "brand-link"], [1, "fas", "fa-shopping-cart"], [1, "brand-text"], [1, "nav-menu"], ["routerLink", "/", "routerLinkActive", "active", 1, "nav-link", 3, "routerLinkActiveOptions"], [1, "fas", "fa-home"], ["routerLink", "/products", "routerLinkActive", "active", 1, "nav-link"], [1, "fas", "fa-shopping-bag"], ["routerLink", "/cart", "routerLinkActive", "active", 1, "nav-link", "cart-link"], ["class", "cart-badge", 4, "ngIf"], ["routerLink", "/admin", "class", "nav-link", "routerLinkActive", "active", 4, "ngIf"], [1, "nav-auth"], ["class", "auth-buttons", 4, "ngIf"], ["class", "user-menu", 4, "ngIf"], [1, "main-content"], [1, "cart-badge"], ["routerLink", "/admin", "routerLinkActive", "active", 1, "nav-link"], [1, "fas", "fa-cog"], [1, "auth-buttons"], ["routerLink", "/login", 1, "btn", "btn-ghost", "btn-sm"], ["routerLink", "/signup", 1, "btn", "btn-primary", "btn-sm"], [1, "user-menu"], [1, "user-name"], [1, "btn", "btn-ghost", "btn-sm", 3, "click"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nav", 0)(1, "div", 1)(2, "div", 2)(3, "a", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "i", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "span", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "RevCart");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 6)(8, "a", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "i", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, " Home ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "a", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "i", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, " Products ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "a", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](15, "i", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, " Cart ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, AppComponent_span_17_Template, 2, 1, "span", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](18, AppComponent_a_18_Template, 3, 0, "a", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](20, AppComponent_div_20_Template, 5, 0, "div", 15)(21, AppComponent_div_21_Template, 5, 1, "div", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "main", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](23, "router-outlet");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](5, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.cartCount > 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isAdmin());
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.isLoggedIn());
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isLoggedIn());
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterOutlet, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLinkActive],
      styles: [".navbar[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  z-index: 1000;\n  padding: var(--space-4) 0;\n  background: rgba(255, 255, 255, 0.95);\n  backdrop-filter: blur(20px);\n  border-bottom: 1px solid var(--border-color);\n  box-shadow: var(--shadow-sm);\n}\n\n.nav-container[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 0 var(--space-6);\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.nav-brand[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n.brand-link[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--space-3);\n  text-decoration: none;\n  font-size: var(--font-size-xl);\n  font-weight: var(--font-weight-bold);\n}\n\n.brand-link[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: var(--primary);\n  font-size: var(--font-size-2xl);\n}\n\n.brand-text[_ngcontent-%COMP%] {\n  color: var(--primary);\n  font-weight: var(--font-weight-bold);\n}\n\n.nav-menu[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--space-8);\n}\n\n.nav-link[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--space-2);\n  text-decoration: none;\n  font-weight: var(--font-weight-medium);\n  padding: var(--space-2) var(--space-4);\n  border-radius: var(--radius-md);\n  transition: var(--transition-normal);\n  position: relative;\n  color: var(--text-secondary);\n  font-size: var(--font-size-sm);\n}\n\n.nav-link[_ngcontent-%COMP%]:hover {\n  background: var(--bg-secondary);\n  color: var(--primary) !important;\n  text-decoration: none;\n}\n\n.nav-link.active[_ngcontent-%COMP%] {\n  background: rgba(99, 102, 241, 0.1);\n  color: var(--primary) !important;\n  font-weight: var(--font-weight-semibold);\n}\n\n.cart-link[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.cart-badge[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -6px;\n  right: -6px;\n  background: var(--error);\n  color: var(--text-inverse);\n  border-radius: var(--radius-full);\n  width: 18px;\n  height: 18px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: var(--font-size-xs);\n  font-weight: var(--font-weight-semibold);\n  border: 2px solid var(--bg-primary);\n}\n\n.cart-badge.animate[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_cartPulse 0.3s ease-in-out;\n}\n\n@keyframes _ngcontent-%COMP%_cartPulse {\n  0% { transform: scale(1); }\n  50% { transform: scale(1.2); }\n  100% { transform: scale(1); }\n}\n\n.nav-auth[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n.auth-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--space-3);\n}\n\n.user-menu[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--space-4);\n}\n\n.user-name[_ngcontent-%COMP%] {\n  font-weight: var(--font-weight-medium);\n  color: var(--text-primary);\n  font-size: var(--font-size-sm);\n}\n\n.main-content[_ngcontent-%COMP%] {\n  margin-top: 80px;\n}\n\n@media (max-width: 768px) {\n  .nav-menu[_ngcontent-%COMP%] {\n    display: none;\n  }\n  \n  .nav-container[_ngcontent-%COMP%] {\n    padding: 0 var(--space-4);\n  }\n  \n  .auth-buttons[_ngcontent-%COMP%] {\n    gap: var(--space-2);\n  }\n  \n  .brand-link[_ngcontent-%COMP%] {\n    font-size: var(--font-size-lg);\n  }\n  \n  .user-name[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlO0VBQ2YsTUFBTTtFQUNOLE9BQU87RUFDUCxRQUFRO0VBQ1IsYUFBYTtFQUNiLHlCQUF5QjtFQUN6QixxQ0FBcUM7RUFDckMsMkJBQTJCO0VBQzNCLDRDQUE0QztFQUM1Qyw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsY0FBYztFQUNkLHlCQUF5QjtFQUN6QixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixxQkFBcUI7RUFDckIsOEJBQThCO0VBQzlCLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQiwrQkFBK0I7QUFDakM7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixxQkFBcUI7RUFDckIsc0NBQXNDO0VBQ3RDLHNDQUFzQztFQUN0QywrQkFBK0I7RUFDL0Isb0NBQW9DO0VBQ3BDLGtCQUFrQjtFQUNsQiw0QkFBNEI7RUFDNUIsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsK0JBQStCO0VBQy9CLGdDQUFnQztFQUNoQyxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxtQ0FBbUM7RUFDbkMsZ0NBQWdDO0VBQ2hDLHdDQUF3QztBQUMxQzs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsV0FBVztFQUNYLHdCQUF3QjtFQUN4QiwwQkFBMEI7RUFDMUIsaUNBQWlDO0VBQ2pDLFdBQVc7RUFDWCxZQUFZO0VBQ1osYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsOEJBQThCO0VBQzlCLHdDQUF3QztFQUN4QyxtQ0FBbUM7QUFDckM7O0FBRUE7RUFDRSxxQ0FBcUM7QUFDdkM7O0FBRUE7RUFDRSxLQUFLLG1CQUFtQixFQUFFO0VBQzFCLE1BQU0scUJBQXFCLEVBQUU7RUFDN0IsT0FBTyxtQkFBbUIsRUFBRTtBQUM5Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usc0NBQXNDO0VBQ3RDLDBCQUEwQjtFQUMxQiw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRTtJQUNFLGFBQWE7RUFDZjs7RUFFQTtJQUNFLHlCQUF5QjtFQUMzQjs7RUFFQTtJQUNFLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLDhCQUE4QjtFQUNoQzs7RUFFQTtJQUNFLGFBQWE7RUFDZjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdmJhciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgei1pbmRleDogMTAwMDtcbiAgcGFkZGluZzogdmFyKC0tc3BhY2UtNCkgMDtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjk1KTtcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDIwcHgpO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTtcbiAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LXNtKTtcbn1cblxuLm5hdi1jb250YWluZXIge1xuICBtYXgtd2lkdGg6IDEyMDBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHBhZGRpbmc6IDAgdmFyKC0tc3BhY2UtNik7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLm5hdi1icmFuZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5icmFuZC1saW5rIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiB2YXIoLS1zcGFjZS0zKTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS14bCk7XG4gIGZvbnQtd2VpZ2h0OiB2YXIoLS1mb250LXdlaWdodC1ib2xkKTtcbn1cblxuLmJyYW5kLWxpbmsgaSB7XG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbiAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtMnhsKTtcbn1cblxuLmJyYW5kLXRleHQge1xuICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XG4gIGZvbnQtd2VpZ2h0OiB2YXIoLS1mb250LXdlaWdodC1ib2xkKTtcbn1cblxuLm5hdi1tZW51IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiB2YXIoLS1zcGFjZS04KTtcbn1cblxuLm5hdi1saW5rIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiB2YXIoLS1zcGFjZS0yKTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBmb250LXdlaWdodDogdmFyKC0tZm9udC13ZWlnaHQtbWVkaXVtKTtcbiAgcGFkZGluZzogdmFyKC0tc3BhY2UtMikgdmFyKC0tc3BhY2UtNCk7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cy1tZCk7XG4gIHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXRpb24tbm9ybWFsKTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBjb2xvcjogdmFyKC0tdGV4dC1zZWNvbmRhcnkpO1xuICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1zbSk7XG59XG5cbi5uYXYtbGluazpob3ZlciB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWJnLXNlY29uZGFyeSk7XG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5KSAhaW1wb3J0YW50O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5uYXYtbGluay5hY3RpdmUge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDk5LCAxMDIsIDI0MSwgMC4xKTtcbiAgY29sb3I6IHZhcigtLXByaW1hcnkpICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiB2YXIoLS1mb250LXdlaWdodC1zZW1pYm9sZCk7XG59XG5cbi5jYXJ0LWxpbmsge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5jYXJ0LWJhZGdlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC02cHg7XG4gIHJpZ2h0OiAtNnB4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1lcnJvcik7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWludmVyc2UpO1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpdXMtZnVsbCk7XG4gIHdpZHRoOiAxOHB4O1xuICBoZWlnaHQ6IDE4cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS14cyk7XG4gIGZvbnQtd2VpZ2h0OiB2YXIoLS1mb250LXdlaWdodC1zZW1pYm9sZCk7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWJnLXByaW1hcnkpO1xufVxuXG4uY2FydC1iYWRnZS5hbmltYXRlIHtcbiAgYW5pbWF0aW9uOiBjYXJ0UHVsc2UgMC4zcyBlYXNlLWluLW91dDtcbn1cblxuQGtleWZyYW1lcyBjYXJ0UHVsc2Uge1xuICAwJSB7IHRyYW5zZm9ybTogc2NhbGUoMSk7IH1cbiAgNTAlIHsgdHJhbnNmb3JtOiBzY2FsZSgxLjIpOyB9XG4gIDEwMCUgeyB0cmFuc2Zvcm06IHNjYWxlKDEpOyB9XG59XG5cbi5uYXYtYXV0aCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5hdXRoLWJ1dHRvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IHZhcigtLXNwYWNlLTMpO1xufVxuXG4udXNlci1tZW51IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiB2YXIoLS1zcGFjZS00KTtcbn1cblxuLnVzZXItbmFtZSB7XG4gIGZvbnQtd2VpZ2h0OiB2YXIoLS1mb250LXdlaWdodC1tZWRpdW0pO1xuICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5KTtcbiAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtc20pO1xufVxuXG4ubWFpbi1jb250ZW50IHtcbiAgbWFyZ2luLXRvcDogODBweDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5uYXYtbWVudSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICBcbiAgLm5hdi1jb250YWluZXIge1xuICAgIHBhZGRpbmc6IDAgdmFyKC0tc3BhY2UtNCk7XG4gIH1cbiAgXG4gIC5hdXRoLWJ1dHRvbnMge1xuICAgIGdhcDogdmFyKC0tc3BhY2UtMik7XG4gIH1cbiAgXG4gIC5icmFuZC1saW5rIHtcbiAgICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1sZyk7XG4gIH1cbiAgXG4gIC51c2VyLW5hbWUge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 2181:
/*!*******************************!*\
  !*** ./src/app/app.routes.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   routes: () => (/* binding */ routes)
/* harmony export */ });
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/home/home.component */ 2865);
/* harmony import */ var _components_auth_login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/auth/login/login.component */ 4860);
/* harmony import */ var _components_auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/auth/signup/signup.component */ 5170);
/* harmony import */ var _components_products_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/products/product-list/product-list.component */ 3548);
/* harmony import */ var _components_cart_cart_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/cart/cart.component */ 2727);
/* harmony import */ var _components_checkout_checkout_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/checkout/checkout.component */ 9215);
/* harmony import */ var _components_order_success_order_success_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/order-success/order-success.component */ 4585);
/* harmony import */ var _components_admin_dashboard_admin_dashboard_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/admin/dashboard/admin-dashboard.component */ 9559);
/* harmony import */ var _components_admin_products_admin_products_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/admin/products/admin-products.component */ 5549);
/* harmony import */ var _components_admin_add_product_add_product_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/admin/add-product/add-product.component */ 6765);
/* harmony import */ var _components_admin_edit_product_edit_product_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/admin/edit-product/edit-product.component */ 187);
/* harmony import */ var _components_admin_orders_admin_orders_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/admin/orders/admin-orders.component */ 9283);
/* harmony import */ var _components_admin_users_admin_users_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/admin/users/admin-users.component */ 5383);
/* harmony import */ var _guards_admin_guard__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./guards/admin.guard */ 9153);
/* harmony import */ var _components_auth_oauth2_redirect_oauth2_redirect_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/auth/oauth2-redirect/oauth2-redirect.component */ 1668);
/* harmony import */ var _components_orders_track_order_track_order_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/orders/track-order/track-order.component */ 1787);
/* harmony import */ var _components_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/forgot-password/forgot-password.component */ 9673);

















const routes = [{
  path: '',
  component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent
}, {
  path: 'login',
  component: _components_auth_login_login_component__WEBPACK_IMPORTED_MODULE_1__.LoginComponent
}, {
  path: 'signup',
  component: _components_auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_2__.SignupComponent
}, {
  path: 'forgot-password',
  component: _components_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_16__.ForgotPasswordComponent
}, {
  path: 'products',
  component: _components_products_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_3__.ProductListComponent
}, {
  path: 'cart',
  component: _components_cart_cart_component__WEBPACK_IMPORTED_MODULE_4__.CartComponent
}, {
  path: 'checkout',
  component: _components_checkout_checkout_component__WEBPACK_IMPORTED_MODULE_5__.CheckoutComponent
}, {
  path: 'order-success',
  component: _components_order_success_order_success_component__WEBPACK_IMPORTED_MODULE_6__.OrderSuccessComponent
}, {
  path: 'oauth2/redirect',
  component: _components_auth_oauth2_redirect_oauth2_redirect_component__WEBPACK_IMPORTED_MODULE_14__.OAuth2RedirectComponent
}, {
  path: 'track-order/:id',
  component: _components_orders_track_order_track_order_component__WEBPACK_IMPORTED_MODULE_15__.TrackOrderComponent
}, {
  path: 'admin',
  canActivate: [_guards_admin_guard__WEBPACK_IMPORTED_MODULE_13__.AdminGuard],
  children: [{
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  }, {
    path: 'dashboard',
    component: _components_admin_dashboard_admin_dashboard_component__WEBPACK_IMPORTED_MODULE_7__.AdminDashboardComponent
  }, {
    path: 'products',
    component: _components_admin_products_admin_products_component__WEBPACK_IMPORTED_MODULE_8__.AdminProductsComponent
  }, {
    path: 'products/add',
    component: _components_admin_add_product_add_product_component__WEBPACK_IMPORTED_MODULE_9__.AddProductComponent
  }, {
    path: 'products/edit/:id',
    component: _components_admin_edit_product_edit_product_component__WEBPACK_IMPORTED_MODULE_10__.EditProductComponent
  }, {
    path: 'orders',
    component: _components_admin_orders_admin_orders_component__WEBPACK_IMPORTED_MODULE_11__.AdminOrdersComponent
  }, {
    path: 'users',
    component: _components_admin_users_admin_users_component__WEBPACK_IMPORTED_MODULE_12__.AdminUsersComponent
  }]
}, {
  path: '**',
  redirectTo: ''
}];

/***/ }),

/***/ 6765:
/*!***********************************************************************!*\
  !*** ./src/app/components/admin/add-product/add-product.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AddProductComponent: () => (/* binding */ AddProductComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../services/product.service */ 6241);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5072);







function AddProductComponent_option_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const category_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", category_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 2, category_r2), " ");
  }
}
class AddProductComponent {
  constructor(productService, router) {
    this.productService = productService;
    this.router = router;
    this.categories = [];
    this.product = {
      name: '',
      description: '',
      price: 0,
      discountPrice: 0,
      initialStock: 0,
      currentStock: 0,
      stock: 0,
      imageUrl: '',
      category: '',
      rating: 4.5,
      active: true
    };
    this.categories = this.productService.getCategories();
  }
  onSubmit() {
    this.product.currentStock = this.product.initialStock;
    this.product.stock = this.product.initialStock;
    this.productService.createProduct(this.product).subscribe({
      next: () => {
        alert('Product added successfully!');
        this.router.navigate(['/admin/products']);
      },
      error: error => {
        console.error('Error creating product:', error);
        alert('Failed to create product. Please try again.');
      }
    });
  }
  cancel() {
    this.router.navigate(['/admin/products']);
  }
  static {
    this.ɵfac = function AddProductComponent_Factory(t) {
      return new (t || AddProductComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_product_service__WEBPACK_IMPORTED_MODULE_0__.ProductService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: AddProductComponent,
      selectors: [["app-add-product"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
      decls: 62,
      vars: 10,
      consts: [["productForm", "ngForm"], [1, "add-product-container"], [1, "form-header"], [1, "form-title"], [1, "fas", "fa-plus-circle"], [1, "neon-text"], [1, "back-btn", 3, "click"], [1, "fas", "fa-arrow-left"], [1, "product-form", "glass-card", 3, "ngSubmit"], [1, "form-section"], [1, "form-row"], [1, "form-group"], ["for", "name"], ["type", "text", "id", "name", "name", "name", "placeholder", "Enter product name", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "category"], ["id", "category", "name", "category", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["for", "description"], ["id", "description", "name", "description", "rows", "3", "placeholder", "Enter product description", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "imageUrl"], ["type", "url", "id", "imageUrl", "name", "imageUrl", "placeholder", "https://example.com/image.jpg", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "price"], ["type", "number", "id", "price", "name", "price", "placeholder", "0.00", "min", "0", "step", "0.01", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "discountPrice"], ["type", "number", "id", "discountPrice", "name", "discountPrice", "placeholder", "0.00", "min", "0", "step", "0.01", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "initialStock"], ["type", "number", "id", "initialStock", "name", "initialStock", "placeholder", "0", "min", "0", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "rating"], ["type", "number", "id", "rating", "name", "rating", "min", "0", "max", "5", "step", "0.1", "placeholder", "4.5", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "form-actions"], ["type", "button", 1, "btn-cancel", 3, "click"], ["type", "submit", 1, "btn-submit", 3, "disabled"], [1, "fas", "fa-plus"], [3, "value"]],
      template: function AddProductComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1)(1, "div", 2)(2, "h1", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "i", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " Add New ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Product");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "button", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddProductComponent_Template_button_click_7_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx.cancel());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "i", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, " Back to Products ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "form", 8, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function AddProductComponent_Template_form_ngSubmit_10_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx.onSubmit());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 9)(13, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Basic Information");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 10)(16, "div", 11)(17, "label", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Product Name *");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "input", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function AddProductComponent_Template_input_ngModelChange_19_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx.product.name, $event) || (ctx.product.name = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 11)(21, "label", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Category *");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "select", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function AddProductComponent_Template_select_ngModelChange_23_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx.product.category, $event) || (ctx.product.category = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "option", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Select Category");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](26, AddProductComponent_option_26_Template, 3, 4, "option", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 11)(28, "label", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Description");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "textarea", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function AddProductComponent_Template_textarea_ngModelChange_30_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx.product.description, $event) || (ctx.product.description = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 11)(32, "label", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "Image URL");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "input", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function AddProductComponent_Template_input_ngModelChange_34_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx.product.imageUrl, $event) || (ctx.product.imageUrl = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 9)(36, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "Pricing & Stock");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 10)(39, "div", 11)(40, "label", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "Price (\u20B9) *");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "input", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function AddProductComponent_Template_input_ngModelChange_42_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx.product.price, $event) || (ctx.product.price = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "div", 11)(44, "label", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, "Discount Price (\u20B9)");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "input", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function AddProductComponent_Template_input_ngModelChange_46_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx.product.discountPrice, $event) || (ctx.product.discountPrice = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "div", 10)(48, "div", 11)(49, "label", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, "Initial Stock *");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "input", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function AddProductComponent_Template_input_ngModelChange_51_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx.product.initialStock, $event) || (ctx.product.initialStock = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "div", 11)(53, "label", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, "Rating");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "input", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function AddProductComponent_Template_input_ngModelChange_55_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx.product.rating, $event) || (ctx.product.rating = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "div", 30)(57, "button", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddProductComponent_Template_button_click_57_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx.cancel());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, " Cancel ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "button", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](60, "i", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61, " Add Product ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        }
        if (rf & 2) {
          const productForm_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](19);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx.product.name);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx.product.category);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.categories);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx.product.description);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx.product.imageUrl);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx.product.price);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx.product.discountPrice);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx.product.initialStock);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx.product.rating);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !productForm_r3.valid);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.TitleCasePipe, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.MinValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.MaxValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgForm],
      styles: [".add-product-container[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  padding: 120px 20px 60px;\n  background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);\n  max-width: 800px;\n  margin: 0 auto;\n}\n\n.form-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 30px;\n}\n\n.form-title[_ngcontent-%COMP%] {\n  font-size: 2.2rem;\n  font-weight: 700;\n  color: var(--text-white);\n  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n\n.back-btn[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.1);\n  border: 1px solid rgba(255, 255, 255, 0.2);\n  color: var(--text-white);\n  padding: 10px 16px;\n  border-radius: 8px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-weight: 500;\n  transition: all 0.3s ease;\n}\n\n.back-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.15);\n  transform: translateY(-2px);\n}\n\n.product-form[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.1);\n  backdrop-filter: blur(20px);\n  border: 1px solid rgba(255, 255, 255, 0.2);\n  border-radius: 16px;\n  padding: 30px;\n}\n\n.form-section[_ngcontent-%COMP%] {\n  margin-bottom: 30px;\n}\n\n.form-section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: var(--text-white);\n  font-size: 1.3rem;\n  font-weight: 600;\n  margin-bottom: 20px;\n  padding-bottom: 8px;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.1);\n}\n\n.form-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 20px;\n}\n\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  color: var(--text-white);\n  font-weight: 500;\n  margin-bottom: 8px;\n  font-size: 0.9rem;\n}\n\n.form-control[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 12px 16px;\n  border: 1px solid rgba(255, 255, 255, 0.2);\n  border-radius: 8px;\n  background: rgba(255, 255, 255, 0.1);\n  color: var(--text-white);\n  font-size: 0.9rem;\n  transition: all 0.3s ease;\n}\n\n.form-control[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--neon-blue);\n  box-shadow: 0 0 0 2px rgba(0, 212, 255, 0.2);\n  background: rgba(255, 255, 255, 0.15);\n}\n\n.form-control[_ngcontent-%COMP%]::placeholder {\n  color: var(--text-muted);\n}\n\ntextarea.form-control[_ngcontent-%COMP%] {\n  resize: vertical;\n  min-height: 80px;\n}\n\nselect.form-control[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  justify-content: flex-end;\n  margin-top: 30px;\n  padding-top: 20px;\n  border-top: 1px solid rgba(255, 255, 255, 0.1);\n}\n\n.btn-cancel[_ngcontent-%COMP%], \n.btn-submit[_ngcontent-%COMP%] {\n  padding: 12px 24px;\n  border: none;\n  border-radius: 8px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n\n.btn-cancel[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.1);\n  color: var(--text-white);\n  border: 1px solid rgba(255, 255, 255, 0.2);\n}\n\n.btn-cancel[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.15);\n}\n\n.btn-submit[_ngcontent-%COMP%] {\n  background: var(--primary-gradient);\n  color: white;\n  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);\n}\n\n.btn-submit[_ngcontent-%COMP%]:hover:not(:disabled) {\n  transform: translateY(-2px);\n  box-shadow: 0 6px 20px rgba(102, 126, 234, 0.6);\n}\n\n.btn-submit[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n  transform: none;\n  box-shadow: none;\n}\n\n\n\n@media (max-width: 768px) {\n  .add-product-container[_ngcontent-%COMP%] {\n    padding: 100px 15px 40px;\n  }\n  \n  .form-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 15px;\n  }\n  \n  .form-title[_ngcontent-%COMP%] {\n    font-size: 1.8rem;\n  }\n  \n  .form-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 15px;\n  }\n  \n  .product-form[_ngcontent-%COMP%] {\n    padding: 20px;\n  }\n  \n  .form-actions[_ngcontent-%COMP%] {\n    flex-direction: column-reverse;\n  }\n  \n  .btn-cancel[_ngcontent-%COMP%], \n   .btn-submit[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: center;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9hZG1pbi9hZGQtcHJvZHVjdC9hZGQtcHJvZHVjdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWlCO0VBQ2pCLHdCQUF3QjtFQUN4QiwwRUFBMEU7RUFDMUUsZ0JBQWdCO0VBQ2hCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLHdCQUF3QjtFQUN4QiwyQ0FBMkM7RUFDM0MsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxvQ0FBb0M7RUFDcEMsMENBQTBDO0VBQzFDLHdCQUF3QjtFQUN4QixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFFBQVE7RUFDUixnQkFBZ0I7RUFDaEIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UscUNBQXFDO0VBQ3JDLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLG9DQUFvQztFQUNwQywyQkFBMkI7RUFDM0IsMENBQTBDO0VBQzFDLG1CQUFtQjtFQUNuQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLGlEQUFpRDtBQUNuRDs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsU0FBUztBQUNYOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsY0FBYztFQUNkLHdCQUF3QjtFQUN4QixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsMENBQTBDO0VBQzFDLGtCQUFrQjtFQUNsQixvQ0FBb0M7RUFDcEMsd0JBQXdCO0VBQ3hCLGlCQUFpQjtFQUNqQix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLDRDQUE0QztFQUM1QyxxQ0FBcUM7QUFDdkM7O0FBRUE7RUFDRSx3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixTQUFTO0VBQ1QseUJBQXlCO0VBQ3pCLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsOENBQThDO0FBQ2hEOztBQUVBOztFQUVFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YseUJBQXlCO0VBQ3pCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsUUFBUTtBQUNWOztBQUVBO0VBQ0Usb0NBQW9DO0VBQ3BDLHdCQUF3QjtFQUN4QiwwQ0FBMEM7QUFDNUM7O0FBRUE7RUFDRSxxQ0FBcUM7QUFDdkM7O0FBRUE7RUFDRSxtQ0FBbUM7RUFDbkMsWUFBWTtFQUNaLCtDQUErQztBQUNqRDs7QUFFQTtFQUNFLDJCQUEyQjtFQUMzQiwrQ0FBK0M7QUFDakQ7O0FBRUE7RUFDRSxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7O0FBRUEsc0JBQXNCO0FBQ3RCO0VBQ0U7SUFDRSx3QkFBd0I7RUFDMUI7O0VBRUE7SUFDRSxzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLFNBQVM7RUFDWDs7RUFFQTtJQUNFLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLDBCQUEwQjtJQUMxQixTQUFTO0VBQ1g7O0VBRUE7SUFDRSxhQUFhO0VBQ2Y7O0VBRUE7SUFDRSw4QkFBOEI7RUFDaEM7O0VBRUE7O0lBRUUsV0FBVztJQUNYLHVCQUF1QjtFQUN6QjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLmFkZC1wcm9kdWN0LWNvbnRhaW5lciB7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICBwYWRkaW5nOiAxMjBweCAyMHB4IDYwcHg7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICM2NjdlZWEgMCUsICM3NjRiYTIgNTAlLCAjZjA5M2ZiIDEwMCUpO1xuICBtYXgtd2lkdGg6IDgwMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbn1cblxuLmZvcm0taGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuXG4uZm9ybS10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMi4ycmVtO1xuICBmb250LXdlaWdodDogNzAwO1xuICBjb2xvcjogdmFyKC0tdGV4dC13aGl0ZSk7XG4gIHRleHQtc2hhZG93OiAycHggMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTJweDtcbn1cblxuLmJhY2stYnRuIHtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LXdoaXRlKTtcbiAgcGFkZGluZzogMTBweCAxNnB4O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA4cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG59XG5cbi5iYWNrLWJ0bjpob3ZlciB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcbn1cblxuLnByb2R1Y3QtZm9ybSB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDIwcHgpO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XG4gIHBhZGRpbmc6IDMwcHg7XG59XG5cbi5mb3JtLXNlY3Rpb24ge1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuXG4uZm9ybS1zZWN0aW9uIGgzIHtcbiAgY29sb3I6IHZhcigtLXRleHQtd2hpdGUpO1xuICBmb250LXNpemU6IDEuM3JlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgcGFkZGluZy1ib3R0b206IDhweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcbn1cblxuLmZvcm0tcm93IHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuICBnYXA6IDIwcHg7XG59XG5cbi5mb3JtLWdyb3VwIHtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLmZvcm0tZ3JvdXAgbGFiZWwge1xuICBkaXNwbGF5OiBibG9jaztcbiAgY29sb3I6IHZhcigtLXRleHQtd2hpdGUpO1xuICBmb250LXdlaWdodDogNTAwO1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xufVxuXG4uZm9ybS1jb250cm9sIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDEycHggMTZweDtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcbiAgY29sb3I6IHZhcigtLXRleHQtd2hpdGUpO1xuICBmb250LXNpemU6IDAuOXJlbTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbn1cblxuLmZvcm0tY29udHJvbDpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tbmVvbi1ibHVlKTtcbiAgYm94LXNoYWRvdzogMCAwIDAgMnB4IHJnYmEoMCwgMjEyLCAyNTUsIDAuMik7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNSk7XG59XG5cbi5mb3JtLWNvbnRyb2w6OnBsYWNlaG9sZGVyIHtcbiAgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpO1xufVxuXG50ZXh0YXJlYS5mb3JtLWNvbnRyb2wge1xuICByZXNpemU6IHZlcnRpY2FsO1xuICBtaW4taGVpZ2h0OiA4MHB4O1xufVxuXG5zZWxlY3QuZm9ybS1jb250cm9sIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uZm9ybS1hY3Rpb25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAxNnB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBtYXJnaW4tdG9wOiAzMHB4O1xuICBwYWRkaW5nLXRvcDogMjBweDtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcbn1cblxuLmJ0bi1jYW5jZWwsXG4uYnRuLXN1Ym1pdCB7XG4gIHBhZGRpbmc6IDEycHggMjRweDtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA4cHg7XG59XG5cbi5idG4tY2FuY2VsIHtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xuICBjb2xvcjogdmFyKC0tdGV4dC13aGl0ZSk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcbn1cblxuLmJ0bi1jYW5jZWw6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTUpO1xufVxuXG4uYnRuLXN1Ym1pdCB7XG4gIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnktZ3JhZGllbnQpO1xuICBjb2xvcjogd2hpdGU7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDE1cHggcmdiYSgxMDIsIDEyNiwgMjM0LCAwLjQpO1xufVxuXG4uYnRuLXN1Ym1pdDpob3Zlcjpub3QoOmRpc2FibGVkKSB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcbiAgYm94LXNoYWRvdzogMCA2cHggMjBweCByZ2JhKDEwMiwgMTI2LCAyMzQsIDAuNik7XG59XG5cbi5idG4tc3VibWl0OmRpc2FibGVkIHtcbiAgb3BhY2l0eTogMC41O1xuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICB0cmFuc2Zvcm06IG5vbmU7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG5cbi8qIFJlc3BvbnNpdmUgRGVzaWduICovXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmFkZC1wcm9kdWN0LWNvbnRhaW5lciB7XG4gICAgcGFkZGluZzogMTAwcHggMTVweCA0MHB4O1xuICB9XG4gIFxuICAuZm9ybS1oZWFkZXIge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgZ2FwOiAxNXB4O1xuICB9XG4gIFxuICAuZm9ybS10aXRsZSB7XG4gICAgZm9udC1zaXplOiAxLjhyZW07XG4gIH1cbiAgXG4gIC5mb3JtLXJvdyB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gICAgZ2FwOiAxNXB4O1xuICB9XG4gIFxuICAucHJvZHVjdC1mb3JtIHtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICB9XG4gIFxuICAuZm9ybS1hY3Rpb25zIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XG4gIH1cbiAgXG4gIC5idG4tY2FuY2VsLFxuICAuYnRuLXN1Ym1pdCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 9559:
/*!*************************************************************************!*\
  !*** ./src/app/components/admin/dashboard/admin-dashboard.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdminDashboardComponent: () => (/* binding */ AdminDashboardComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _services_admin_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../services/admin.service */ 7945);
/* harmony import */ var _services_order_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/order.service */ 8674);







function AdminDashboardComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Loading dashboard data...");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}
function AdminDashboardComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 12)(1, "div", 13)(2, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 16)(5, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Total Products");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 13)(10, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "i", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 16)(13, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "Total Orders");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 13)(18, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](19, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 16)(21, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "Total Users");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "div", 13)(26, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](27, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "div", 16)(29, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](31, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33, "Total Revenue");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.totalProducts);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.totalOrders);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.totalUsers);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](31, 4, ctx_r0.totalRevenue, "INR"));
  }
}
function AdminDashboardComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 23)(1, "h2", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Quick Actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 25)(4, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "i", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Add Product");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "i", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "View Orders");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "i", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Manage Users");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](17, "i", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "Product Management");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
  }
}
function AdminDashboardComponent_div_12_tr_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](7, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "td")(9, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](13, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const order_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](order_r2.orderId);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](order_r2.customerName);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](7, 6, order_r2.amount, "INR"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", order_r2.status.toLowerCase());
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", order_r2.status, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](13, 9, order_r2.createdAt, "short"));
  }
}
function AdminDashboardComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 33)(1, "h2", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Recent Orders");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 34)(4, "table")(5, "thead")(6, "tr")(7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Order ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Customer");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](18, AdminDashboardComponent_div_12_tr_18_Template, 14, 12, "tr", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r0.recentOrders);
  }
}
class AdminDashboardComponent {
  constructor(adminService, orderService) {
    this.adminService = adminService;
    this.orderService = orderService;
    this.totalProducts = 0;
    this.totalOrders = 0;
    this.totalUsers = 0;
    this.totalRevenue = 0;
    this.loading = true;
    this.recentOrders = [];
  }
  ngOnInit() {
    this.loadDashboardData();
    this.loadRecentOrders();
  }
  loadDashboardData() {
    this.adminService.getDashboardStats().subscribe({
      next: stats => {
        this.totalProducts = stats.totalProducts;
        this.totalOrders = stats.totalOrders;
        this.totalUsers = stats.totalUsers;
        this.totalRevenue = stats.totalRevenue;
        this.loading = false;
      },
      error: error => {
        console.error('Error loading dashboard stats:', error);
        this.loading = false;
        // Fallback to mock data
        this.totalProducts = 22;
        this.totalOrders = 156;
        this.totalUsers = 89;
        this.totalRevenue = 45680;
      }
    });
  }
  loadRecentOrders() {
    this.adminService.getRecentOrders().subscribe({
      next: orders => {
        this.recentOrders = orders.slice(0, 5); // Show only 5 recent orders
      },
      error: error => {
        console.error('Error loading recent orders:', error);
        // Fallback to mock data
        this.recentOrders = [{
          orderId: '#RC001234',
          customerName: 'John Doe',
          amount: 450,
          status: 'PROCESSING',
          createdAt: new Date().toISOString()
        }, {
          orderId: '#RC001235',
          customerName: 'Jane Smith',
          amount: 320,
          status: 'DELIVERED',
          createdAt: new Date(Date.now() - 86400000).toISOString()
        }];
      }
    });
  }
  exportData() {
    // Implement data export functionality
    alert('Export functionality will be implemented soon!');
  }
  static {
    this.ɵfac = function AdminDashboardComponent_Factory(t) {
      return new (t || AdminDashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_admin_service__WEBPACK_IMPORTED_MODULE_0__.AdminService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_order_service__WEBPACK_IMPORTED_MODULE_1__.OrderService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: AdminDashboardComponent,
      selectors: [["app-admin-dashboard"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
      decls: 13,
      vars: 4,
      consts: [[1, "admin-container"], [1, "admin-header"], [1, "admin-title"], [1, "fas", "fa-tachometer-alt"], [1, "neon-text"], [1, "admin-subtitle"], ["class", "loading-container", 4, "ngIf"], ["class", "stats-grid", 4, "ngIf"], ["class", "quick-actions", 4, "ngIf"], ["class", "recent-section", 4, "ngIf"], [1, "loading-container"], [1, "spinner"], [1, "stats-grid"], [1, "stat-card", "glass-card"], [1, "stat-icon", "products"], [1, "fas", "fa-box"], [1, "stat-info"], [1, "stat-icon", "orders"], [1, "fas", "fa-shopping-cart"], [1, "stat-icon", "users"], [1, "fas", "fa-users"], [1, "stat-icon", "revenue"], [1, "fas", "fa-rupee-sign"], [1, "quick-actions"], [1, "section-title"], [1, "actions-grid"], ["routerLink", "/admin/products", 1, "action-btn", "glass-card"], [1, "fas", "fa-plus-circle"], ["routerLink", "/admin/orders", 1, "action-btn", "glass-card"], [1, "fas", "fa-list-alt"], ["routerLink", "/admin/users", 1, "action-btn", "glass-card"], [1, "fas", "fa-user-plus"], [1, "fas", "fa-boxes"], [1, "recent-section"], [1, "orders-table", "glass-card"], [4, "ngFor", "ngForOf"], [1, "status-badge", 3, "ngClass"]],
      template: function AdminDashboardComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h1", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "i", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, " Admin ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "span", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Dashboard");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "p", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Manage your RevCart store");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, AdminDashboardComponent_div_9_Template, 4, 0, "div", 6)(10, AdminDashboardComponent_div_10_Template, 34, 7, "div", 7)(11, AdminDashboardComponent_div_11_Template, 20, 0, "div", 8)(12, AdminDashboardComponent_div_12_Template, 19, 1, "div", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.loading);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.CurrencyPipe, _angular_common__WEBPACK_IMPORTED_MODULE_3__.DatePipe, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink],
      styles: [".admin-container[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  padding: 120px 20px 60px;\n  background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);\n}\n\n.admin-header[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 50px;\n}\n\n.admin-title[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  font-weight: 700;\n  color: var(--text-white);\n  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);\n  margin-bottom: 16px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 16px;\n}\n\n.admin-subtitle[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  color: var(--text-muted);\n  font-weight: 500;\n}\n\n\n\n.stats-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 25px;\n  margin-bottom: 50px;\n}\n\n.stat-card[_ngcontent-%COMP%] {\n  padding: 30px;\n  display: flex;\n  align-items: center;\n  gap: 20px;\n  background: rgba(255, 255, 255, 0.12);\n  backdrop-filter: blur(20px);\n  border: 1px solid rgba(255, 255, 255, 0.25);\n  transition: var(--transition);\n}\n\n.stat-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-5px);\n  box-shadow: var(--shadow-hover);\n}\n\n.stat-icon[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 60px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.5rem;\n  color: white;\n}\n\n.stat-icon.products[_ngcontent-%COMP%] { background: var(--success-gradient); }\n.stat-icon.orders[_ngcontent-%COMP%] { background: var(--primary-gradient); }\n.stat-icon.users[_ngcontent-%COMP%] { background: var(--secondary-gradient); }\n.stat-icon.revenue[_ngcontent-%COMP%] { background: var(--warning-gradient); }\n\n.stat-info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  font-weight: 700;\n  color: var(--text-white);\n  margin-bottom: 4px;\n}\n\n.stat-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  font-weight: 500;\n}\n\n\n\n.quick-actions[_ngcontent-%COMP%] {\n  margin-bottom: 50px;\n}\n\n.section-title[_ngcontent-%COMP%] {\n  font-size: 1.8rem;\n  font-weight: 600;\n  color: var(--text-white);\n  margin-bottom: 25px;\n  text-align: center;\n}\n\n.actions-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  gap: 20px;\n}\n\n.action-btn[_ngcontent-%COMP%] {\n  padding: 25px;\n  background: rgba(255, 255, 255, 0.1);\n  border: 1px solid rgba(255, 255, 255, 0.2);\n  border-radius: var(--border-radius);\n  color: var(--text-white);\n  cursor: pointer;\n  transition: var(--transition);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 12px;\n  text-decoration: none;\n}\n\n.action-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.15);\n  transform: translateY(-3px);\n  box-shadow: var(--shadow-light);\n}\n\n.action-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  color: var(--neon-blue);\n}\n\n.action-btn[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 1rem;\n}\n\n\n\n.recent-section[_ngcontent-%COMP%] {\n  margin-bottom: 50px;\n}\n\n.orders-table[_ngcontent-%COMP%] {\n  padding: 30px;\n  background: rgba(255, 255, 255, 0.1);\n  backdrop-filter: blur(20px);\n  border: 1px solid rgba(255, 255, 255, 0.2);\n  overflow-x: auto;\n}\n\n.orders-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n\n.orders-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n.orders-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 15px;\n  text-align: left;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.1);\n}\n\n.orders-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  color: var(--text-white);\n  font-weight: 600;\n  background: rgba(255, 255, 255, 0.05);\n}\n\n.orders-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n}\n\n.status-badge[_ngcontent-%COMP%] {\n  padding: 4px 12px;\n  border-radius: 20px;\n  font-size: 0.8rem;\n  font-weight: 600;\n  text-transform: uppercase;\n}\n\n.status-badge.pending[_ngcontent-%COMP%] {\n  background: rgba(255, 193, 7, 0.2);\n  color: #ffc107;\n}\n\n.status-badge.processing[_ngcontent-%COMP%] {\n  background: rgba(0, 123, 255, 0.2);\n  color: #007bff;\n}\n\n.status-badge.delivered[_ngcontent-%COMP%] {\n  background: rgba(40, 167, 69, 0.2);\n  color: #28a745;\n}\n\n.status-badge.cancelled[_ngcontent-%COMP%] {\n  background: rgba(220, 53, 69, 0.2);\n  color: #dc3545;\n}\n\n.status-badge.placed[_ngcontent-%COMP%] {\n  background: rgba(23, 162, 184, 0.2);\n  color: #17a2b8;\n}\n\n.status-badge.packed[_ngcontent-%COMP%] {\n  background: rgba(255, 193, 7, 0.2);\n  color: #ffc107;\n}\n\n.status-badge.out_for_delivery[_ngcontent-%COMP%] {\n  background: rgba(102, 16, 242, 0.2);\n  color: #6610f2;\n}\n\n\n\n.loading-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 60px 20px;\n  color: var(--text-white);\n}\n\n.spinner[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  border: 4px solid rgba(255, 255, 255, 0.3);\n  border-top: 4px solid var(--neon-blue);\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n  margin-bottom: 20px;\n}\n\n@keyframes _ngcontent-%COMP%_spin {\n  0% { transform: rotate(0deg); }\n  100% { transform: rotate(360deg); }\n}\n\n\n\n@media (max-width: 768px) {\n  .admin-container[_ngcontent-%COMP%] {\n    padding: 100px 15px 40px;\n  }\n  \n  .admin-title[_ngcontent-%COMP%] {\n    font-size: 2rem;\n    flex-direction: column;\n    gap: 8px;\n  }\n  \n  .stats-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 20px;\n  }\n  \n  .actions-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  \n  .orders-table[_ngcontent-%COMP%] {\n    padding: 20px;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9hZG1pbi9kYXNoYm9hcmQvYWRtaW4tZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBaUI7RUFDakIsd0JBQXdCO0VBQ3hCLDBFQUEwRTtBQUM1RTs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLHdCQUF3QjtFQUN4QiwyQ0FBMkM7RUFDM0MsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQix3QkFBd0I7RUFDeEIsZ0JBQWdCO0FBQ2xCOztBQUVBLGVBQWU7QUFDZjtFQUNFLGFBQWE7RUFDYiwyREFBMkQ7RUFDM0QsU0FBUztFQUNULG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFNBQVM7RUFDVCxxQ0FBcUM7RUFDckMsMkJBQTJCO0VBQzNCLDJDQUEyQztFQUMzQyw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSwyQkFBMkI7RUFDM0IsK0JBQStCO0FBQ2pDOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsaUJBQWlCO0VBQ2pCLFlBQVk7QUFDZDs7QUFFQSxzQkFBc0IsbUNBQW1DLEVBQUU7QUFDM0Qsb0JBQW9CLG1DQUFtQyxFQUFFO0FBQ3pELG1CQUFtQixxQ0FBcUMsRUFBRTtBQUMxRCxxQkFBcUIsbUNBQW1DLEVBQUU7O0FBRTFEO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQix3QkFBd0I7RUFDeEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLGdCQUFnQjtBQUNsQjs7QUFFQSxrQkFBa0I7QUFDbEI7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLHdCQUF3QjtFQUN4QixtQkFBbUI7RUFDbkIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDJEQUEyRDtFQUMzRCxTQUFTO0FBQ1g7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isb0NBQW9DO0VBQ3BDLDBDQUEwQztFQUMxQyxtQ0FBbUM7RUFDbkMsd0JBQXdCO0VBQ3hCLGVBQWU7RUFDZiw2QkFBNkI7RUFDN0IsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsU0FBUztFQUNULHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLHFDQUFxQztFQUNyQywyQkFBMkI7RUFDM0IsK0JBQStCO0FBQ2pDOztBQUVBO0VBQ0UsZUFBZTtFQUNmLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixlQUFlO0FBQ2pCOztBQUVBLGtCQUFrQjtBQUNsQjtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixvQ0FBb0M7RUFDcEMsMkJBQTJCO0VBQzNCLDBDQUEwQztFQUMxQyxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gseUJBQXlCO0FBQzNCOztBQUVBOztFQUVFLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsaURBQWlEO0FBQ25EOztBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLGdCQUFnQjtFQUNoQixxQ0FBcUM7QUFDdkM7O0FBRUE7RUFDRSx3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0Usa0NBQWtDO0VBQ2xDLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxrQ0FBa0M7RUFDbEMsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGtDQUFrQztFQUNsQyxjQUFjO0FBQ2hCOztBQUVBO0VBQ0Usa0NBQWtDO0VBQ2xDLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxtQ0FBbUM7RUFDbkMsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGtDQUFrQztFQUNsQyxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsbUNBQW1DO0VBQ25DLGNBQWM7QUFDaEI7O0FBRUEsa0JBQWtCO0FBQ2xCO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQix3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLDBDQUEwQztFQUMxQyxzQ0FBc0M7RUFDdEMsa0JBQWtCO0VBQ2xCLGtDQUFrQztFQUNsQyxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxLQUFLLHVCQUF1QixFQUFFO0VBQzlCLE9BQU8seUJBQXlCLEVBQUU7QUFDcEM7O0FBRUEsc0JBQXNCO0FBQ3RCO0VBQ0U7SUFDRSx3QkFBd0I7RUFDMUI7O0VBRUE7SUFDRSxlQUFlO0lBQ2Ysc0JBQXNCO0lBQ3RCLFFBQVE7RUFDVjs7RUFFQTtJQUNFLDBCQUEwQjtJQUMxQixTQUFTO0VBQ1g7O0VBRUE7SUFDRSxxQ0FBcUM7RUFDdkM7O0VBRUE7SUFDRSxhQUFhO0VBQ2Y7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi5hZG1pbi1jb250YWluZXIge1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgcGFkZGluZzogMTIwcHggMjBweCA2MHB4O1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjNjY3ZWVhIDAlLCAjNzY0YmEyIDUwJSwgI2YwOTNmYiAxMDAlKTtcbn1cblxuLmFkbWluLWhlYWRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcbn1cblxuLmFkbWluLXRpdGxlIHtcbiAgZm9udC1zaXplOiAzcmVtO1xuICBmb250LXdlaWdodDogNzAwO1xuICBjb2xvcjogdmFyKC0tdGV4dC13aGl0ZSk7XG4gIHRleHQtc2hhZG93OiAycHggMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBnYXA6IDE2cHg7XG59XG5cbi5hZG1pbi1zdWJ0aXRsZSB7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xuICBjb2xvcjogdmFyKC0tdGV4dC1tdXRlZCk7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi8qIFN0YXRzIEdyaWQgKi9cbi5zdGF0cy1ncmlkIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgyNTBweCwgMWZyKSk7XG4gIGdhcDogMjVweDtcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcbn1cblxuLnN0YXQtY2FyZCB7XG4gIHBhZGRpbmc6IDMwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMjBweDtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEyKTtcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDIwcHgpO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjUpO1xuICB0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uKTtcbn1cblxuLnN0YXQtY2FyZDpob3ZlciB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNXB4KTtcbiAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LWhvdmVyKTtcbn1cblxuLnN0YXQtaWNvbiB7XG4gIHdpZHRoOiA2MHB4O1xuICBoZWlnaHQ6IDYwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5zdGF0LWljb24ucHJvZHVjdHMgeyBiYWNrZ3JvdW5kOiB2YXIoLS1zdWNjZXNzLWdyYWRpZW50KTsgfVxuLnN0YXQtaWNvbi5vcmRlcnMgeyBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5LWdyYWRpZW50KTsgfVxuLnN0YXQtaWNvbi51c2VycyB7IGJhY2tncm91bmQ6IHZhcigtLXNlY29uZGFyeS1ncmFkaWVudCk7IH1cbi5zdGF0LWljb24ucmV2ZW51ZSB7IGJhY2tncm91bmQ6IHZhcigtLXdhcm5pbmctZ3JhZGllbnQpOyB9XG5cbi5zdGF0LWluZm8gaDMge1xuICBmb250LXNpemU6IDJyZW07XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LXdoaXRlKTtcbiAgbWFyZ2luLWJvdHRvbTogNHB4O1xufVxuXG4uc3RhdC1pbmZvIHAge1xuICBjb2xvcjogdmFyKC0tdGV4dC1tdXRlZCk7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi8qIFF1aWNrIEFjdGlvbnMgKi9cbi5xdWljay1hY3Rpb25zIHtcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcbn1cblxuLnNlY3Rpb24tdGl0bGUge1xuICBmb250LXNpemU6IDEuOHJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6IHZhcigtLXRleHQtd2hpdGUpO1xuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5hY3Rpb25zLWdyaWQge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDIwMHB4LCAxZnIpKTtcbiAgZ2FwOiAyMHB4O1xufVxuXG4uYWN0aW9uLWJ0biB7XG4gIHBhZGRpbmc6IDI1cHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcbiAgY29sb3I6IHZhcigtLXRleHQtd2hpdGUpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXRpb24pO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDEycHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLmFjdGlvbi1idG46aG92ZXIge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTUpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTNweCk7XG4gIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdy1saWdodCk7XG59XG5cbi5hY3Rpb24tYnRuIGkge1xuICBmb250LXNpemU6IDJyZW07XG4gIGNvbG9yOiB2YXIoLS1uZW9uLWJsdWUpO1xufVxuXG4uYWN0aW9uLWJ0biBzcGFuIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAxcmVtO1xufVxuXG4vKiBSZWNlbnQgT3JkZXJzICovXG4ucmVjZW50LXNlY3Rpb24ge1xuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xufVxuXG4ub3JkZXJzLXRhYmxlIHtcbiAgcGFkZGluZzogMzBweDtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMjBweCk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcbiAgb3ZlcmZsb3cteDogYXV0bztcbn1cblxuLm9yZGVycy10YWJsZSB0YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xufVxuXG4ub3JkZXJzLXRhYmxlIHRoLFxuLm9yZGVycy10YWJsZSB0ZCB7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XG59XG5cbi5vcmRlcnMtdGFibGUgdGgge1xuICBjb2xvcjogdmFyKC0tdGV4dC13aGl0ZSk7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNSk7XG59XG5cbi5vcmRlcnMtdGFibGUgdGQge1xuICBjb2xvcjogdmFyKC0tdGV4dC1tdXRlZCk7XG59XG5cbi5zdGF0dXMtYmFkZ2Uge1xuICBwYWRkaW5nOiA0cHggMTJweDtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgZm9udC1zaXplOiAwLjhyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbi5zdGF0dXMtYmFkZ2UucGVuZGluZyB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAxOTMsIDcsIDAuMik7XG4gIGNvbG9yOiAjZmZjMTA3O1xufVxuXG4uc3RhdHVzLWJhZGdlLnByb2Nlc3Npbmcge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDEyMywgMjU1LCAwLjIpO1xuICBjb2xvcjogIzAwN2JmZjtcbn1cblxuLnN0YXR1cy1iYWRnZS5kZWxpdmVyZWQge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDQwLCAxNjcsIDY5LCAwLjIpO1xuICBjb2xvcjogIzI4YTc0NTtcbn1cblxuLnN0YXR1cy1iYWRnZS5jYW5jZWxsZWQge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDIyMCwgNTMsIDY5LCAwLjIpO1xuICBjb2xvcjogI2RjMzU0NTtcbn1cblxuLnN0YXR1cy1iYWRnZS5wbGFjZWQge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDIzLCAxNjIsIDE4NCwgMC4yKTtcbiAgY29sb3I6ICMxN2EyYjg7XG59XG5cbi5zdGF0dXMtYmFkZ2UucGFja2VkIHtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDE5MywgNywgMC4yKTtcbiAgY29sb3I6ICNmZmMxMDc7XG59XG5cbi5zdGF0dXMtYmFkZ2Uub3V0X2Zvcl9kZWxpdmVyeSB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMTAyLCAxNiwgMjQyLCAwLjIpO1xuICBjb2xvcjogIzY2MTBmMjtcbn1cblxuLyogTG9hZGluZyBTdGF0ZSAqL1xuLmxvYWRpbmctY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmc6IDYwcHggMjBweDtcbiAgY29sb3I6IHZhcigtLXRleHQtd2hpdGUpO1xufVxuXG4uc3Bpbm5lciB7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIGJvcmRlcjogNHB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcbiAgYm9yZGVyLXRvcDogNHB4IHNvbGlkIHZhcigtLW5lb24tYmx1ZSk7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYW5pbWF0aW9uOiBzcGluIDFzIGxpbmVhciBpbmZpbml0ZTtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuQGtleWZyYW1lcyBzcGluIHtcbiAgMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTsgfVxuICAxMDAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgfVxufVxuXG4vKiBSZXNwb25zaXZlIERlc2lnbiAqL1xuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5hZG1pbi1jb250YWluZXIge1xuICAgIHBhZGRpbmc6IDEwMHB4IDE1cHggNDBweDtcbiAgfVxuICBcbiAgLmFkbWluLXRpdGxlIHtcbiAgICBmb250LXNpemU6IDJyZW07XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDhweDtcbiAgfVxuICBcbiAgLnN0YXRzLWdyaWQge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICAgIGdhcDogMjBweDtcbiAgfVxuICBcbiAgLmFjdGlvbnMtZ3JpZCB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcbiAgfVxuICBcbiAgLm9yZGVycy10YWJsZSB7XG4gICAgcGFkZGluZzogMjBweDtcbiAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 187:
/*!*************************************************************************!*\
  !*** ./src/app/components/admin/edit-product/edit-product.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EditProductComponent: () => (/* binding */ EditProductComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../services/product.service */ 6241);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5072);







function EditProductComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Loading product...");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
function EditProductComponent_form_11_option_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const category_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", category_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 2, category_r3), " ");
  }
}
function EditProductComponent_form_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "form", 12, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function EditProductComponent_form_11_Template_form_ngSubmit_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.onSubmit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 13)(3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Basic Information");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 14)(6, "div", 15)(7, "label", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Product Name *");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function EditProductComponent_form_11_Template_input_ngModelChange_9_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx_r1.product.name, $event) || (ctx_r1.product.name = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 15)(11, "label", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Category *");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "select", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function EditProductComponent_form_11_Template_select_ngModelChange_13_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx_r1.product.category, $event) || (ctx_r1.product.category = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "option", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Select Category");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, EditProductComponent_form_11_option_16_Template, 3, 4, "option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 15)(18, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "textarea", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function EditProductComponent_form_11_Template_textarea_ngModelChange_20_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx_r1.product.description, $event) || (ctx_r1.product.description = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 15)(22, "label", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Image URL");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "input", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function EditProductComponent_form_11_Template_input_ngModelChange_24_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx_r1.product.imageUrl, $event) || (ctx_r1.product.imageUrl = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 13)(26, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Pricing & Stock");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 14)(29, "div", 15)(30, "label", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Price (\u20B9) *");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "input", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function EditProductComponent_form_11_Template_input_ngModelChange_32_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx_r1.product.price, $event) || (ctx_r1.product.price = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 15)(34, "label", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "Discount Price (\u20B9)");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "input", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function EditProductComponent_form_11_Template_input_ngModelChange_36_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx_r1.product.discountPrice, $event) || (ctx_r1.product.discountPrice = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 14)(38, "div", 15)(39, "label", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "Initial Stock *");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "input", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function EditProductComponent_form_11_Template_input_ngModelChange_41_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx_r1.product.initialStock, $event) || (ctx_r1.product.initialStock = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "div", 15)(43, "label", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "Current Stock *");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "input", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function EditProductComponent_form_11_Template_input_ngModelChange_45_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx_r1.product.currentStock, $event) || (ctx_r1.product.currentStock = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "div", 14)(47, "div", 15)(48, "label", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, "Rating");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "input", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function EditProductComponent_form_11_Template_input_ngModelChange_50_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx_r1.product.rating, $event) || (ctx_r1.product.rating = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "div", 15)(52, "label", 36)(53, "input", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function EditProductComponent_form_11_Template_input_ngModelChange_53_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx_r1.product.active, $event) || (ctx_r1.product.active = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](54, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, " Product Active ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "div", 39)(57, "button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EditProductComponent_form_11_Template_button_click_57_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.cancel());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, " Cancel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](60, "i", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61, " Update Product ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const productForm_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](1);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.product.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.product.category);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.categories);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.product.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.product.imageUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.product.price);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.product.discountPrice);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.product.initialStock);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.product.currentStock);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.product.rating);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.product.active);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !productForm_r4.valid);
  }
}
class EditProductComponent {
  constructor(productService, router, route) {
    this.productService = productService;
    this.router = router;
    this.route = route;
    this.categories = [];
    this.productId = 0;
    this.loading = true;
    this.product = {
      name: '',
      description: '',
      price: 0,
      discountPrice: 0,
      initialStock: 0,
      currentStock: 0,
      stock: 0,
      imageUrl: '',
      category: '',
      rating: 4.5,
      active: true
    };
    this.categories = this.productService.getCategories();
  }
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.productId = +params['id'];
      this.loadProduct();
    });
  }
  loadProduct() {
    this.productService.getProductById(this.productId).subscribe({
      next: product => {
        this.product = {
          name: product.name,
          description: product.description,
          price: product.price,
          discountPrice: product.originalPrice || 0,
          initialStock: product.initialStock,
          currentStock: product.currentStock,
          stock: product.currentStock,
          imageUrl: product.imageUrl,
          category: product.category,
          rating: product.rating,
          active: product.inStock
        };
        this.loading = false;
      },
      error: error => {
        console.error('Error loading product:', error);
        alert('Product not found');
        this.router.navigate(['/admin/products']);
      }
    });
  }
  onSubmit() {
    this.product.stock = this.product.currentStock;
    this.productService.updateProduct(this.productId, this.product).subscribe({
      next: () => {
        alert('Product updated successfully!');
        this.router.navigate(['/admin/products']);
      },
      error: error => {
        console.error('Error updating product:', error);
        alert('Failed to update product. Please try again.');
      }
    });
  }
  cancel() {
    this.router.navigate(['/admin/products']);
  }
  static {
    this.ɵfac = function EditProductComponent_Factory(t) {
      return new (t || EditProductComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_product_service__WEBPACK_IMPORTED_MODULE_0__.ProductService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: EditProductComponent,
      selectors: [["app-edit-product"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
      decls: 12,
      vars: 2,
      consts: [["productForm", "ngForm"], [1, "edit-product-container"], [1, "form-header"], [1, "form-title"], [1, "fas", "fa-edit"], [1, "neon-text"], [1, "back-btn", 3, "click"], [1, "fas", "fa-arrow-left"], ["class", "loading-state", 4, "ngIf"], ["class", "product-form glass-card", 3, "ngSubmit", 4, "ngIf"], [1, "loading-state"], [1, "fas", "fa-spinner", "fa-spin"], [1, "product-form", "glass-card", 3, "ngSubmit"], [1, "form-section"], [1, "form-row"], [1, "form-group"], ["for", "name"], ["type", "text", "id", "name", "name", "name", "placeholder", "Enter product name", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "category"], ["id", "category", "name", "category", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["for", "description"], ["id", "description", "name", "description", "rows", "3", "placeholder", "Enter product description", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "imageUrl"], ["type", "url", "id", "imageUrl", "name", "imageUrl", "placeholder", "https://example.com/image.jpg", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "price"], ["type", "number", "id", "price", "name", "price", "placeholder", "0.00", "min", "0", "step", "0.01", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "discountPrice"], ["type", "number", "id", "discountPrice", "name", "discountPrice", "placeholder", "0.00", "min", "0", "step", "0.01", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "initialStock"], ["type", "number", "id", "initialStock", "name", "initialStock", "placeholder", "0", "min", "0", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "currentStock"], ["type", "number", "id", "currentStock", "name", "currentStock", "placeholder", "0", "min", "0", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "rating"], ["type", "number", "id", "rating", "name", "rating", "min", "0", "max", "5", "step", "0.1", "placeholder", "4.5", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "checkbox-label"], ["type", "checkbox", "name", "active", 3, "ngModelChange", "ngModel"], [1, "checkmark"], [1, "form-actions"], ["type", "button", 1, "btn-cancel", 3, "click"], ["type", "submit", 1, "btn-submit", 3, "disabled"], [1, "fas", "fa-save"], [3, "value"]],
      template: function EditProductComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1)(1, "div", 2)(2, "h1", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "i", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " Edit ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Product");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "button", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EditProductComponent_Template_button_click_7_listener() {
            return ctx.cancel();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "i", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, " Back to Products ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, EditProductComponent_div_10_Template, 4, 0, "div", 8)(11, EditProductComponent_form_11_Template, 62, 12, "form", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.loading);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.TitleCasePipe, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.MinValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.MaxValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgForm],
      styles: [".edit-product-container[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  padding: 120px 20px 60px;\n  background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);\n  max-width: 800px;\n  margin: 0 auto;\n}\n\n.form-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 30px;\n}\n\n.form-title[_ngcontent-%COMP%] {\n  font-size: 2.2rem;\n  font-weight: 700;\n  color: var(--text-white);\n  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n\n.back-btn[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.1);\n  border: 1px solid rgba(255, 255, 255, 0.2);\n  color: var(--text-white);\n  padding: 10px 16px;\n  border-radius: 8px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-weight: 500;\n  transition: all 0.3s ease;\n}\n\n.back-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.15);\n  transform: translateY(-2px);\n}\n\n.loading-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 60px 20px;\n  color: var(--text-white);\n}\n\n.loading-state[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  margin-bottom: 20px;\n  color: var(--neon-blue);\n}\n\n.loading-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  font-weight: 500;\n}\n\n.product-form[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.1);\n  backdrop-filter: blur(20px);\n  border: 1px solid rgba(255, 255, 255, 0.2);\n  border-radius: 16px;\n  padding: 30px;\n}\n\n.form-section[_ngcontent-%COMP%] {\n  margin-bottom: 30px;\n}\n\n.form-section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: var(--text-white);\n  font-size: 1.3rem;\n  font-weight: 600;\n  margin-bottom: 20px;\n  padding-bottom: 8px;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.1);\n}\n\n.form-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 20px;\n}\n\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  color: var(--text-white);\n  font-weight: 500;\n  margin-bottom: 8px;\n  font-size: 0.9rem;\n}\n\n.form-control[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 12px 16px;\n  border: 1px solid rgba(255, 255, 255, 0.2);\n  border-radius: 8px;\n  background: rgba(255, 255, 255, 0.1);\n  color: var(--text-white);\n  font-size: 0.9rem;\n  transition: all 0.3s ease;\n}\n\n.form-control[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--neon-blue);\n  box-shadow: 0 0 0 2px rgba(0, 212, 255, 0.2);\n  background: rgba(255, 255, 255, 0.15);\n}\n\n.form-control[_ngcontent-%COMP%]::placeholder {\n  color: var(--text-muted);\n}\n\ntextarea.form-control[_ngcontent-%COMP%] {\n  resize: vertical;\n  min-height: 80px;\n}\n\nselect.form-control[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.checkbox-label[_ngcontent-%COMP%] {\n  display: flex !important;\n  align-items: center;\n  gap: 12px;\n  cursor: pointer;\n  margin-top: 20px;\n}\n\n.checkbox-label[_ngcontent-%COMP%]   input[type=\"checkbox\"][_ngcontent-%COMP%] {\n  width: auto;\n  margin: 0;\n}\n\n.checkmark[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n\n.form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  justify-content: flex-end;\n  margin-top: 30px;\n  padding-top: 20px;\n  border-top: 1px solid rgba(255, 255, 255, 0.1);\n}\n\n.btn-cancel[_ngcontent-%COMP%], \n.btn-submit[_ngcontent-%COMP%] {\n  padding: 12px 24px;\n  border: none;\n  border-radius: 8px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n\n.btn-cancel[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.1);\n  color: var(--text-white);\n  border: 1px solid rgba(255, 255, 255, 0.2);\n}\n\n.btn-cancel[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.15);\n}\n\n.btn-submit[_ngcontent-%COMP%] {\n  background: var(--primary-gradient);\n  color: white;\n  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);\n}\n\n.btn-submit[_ngcontent-%COMP%]:hover:not(:disabled) {\n  transform: translateY(-2px);\n  box-shadow: 0 6px 20px rgba(102, 126, 234, 0.6);\n}\n\n.btn-submit[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n  transform: none;\n  box-shadow: none;\n}\n\n\n\n@media (max-width: 768px) {\n  .edit-product-container[_ngcontent-%COMP%] {\n    padding: 100px 15px 40px;\n  }\n  \n  .form-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 15px;\n  }\n  \n  .form-title[_ngcontent-%COMP%] {\n    font-size: 1.8rem;\n  }\n  \n  .form-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 15px;\n  }\n  \n  .product-form[_ngcontent-%COMP%] {\n    padding: 20px;\n  }\n  \n  .form-actions[_ngcontent-%COMP%] {\n    flex-direction: column-reverse;\n  }\n  \n  .btn-cancel[_ngcontent-%COMP%], \n   .btn-submit[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: center;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9hZG1pbi9lZGl0LXByb2R1Y3QvZWRpdC1wcm9kdWN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBaUI7RUFDakIsd0JBQXdCO0VBQ3hCLDBFQUEwRTtFQUMxRSxnQkFBZ0I7RUFDaEIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsd0JBQXdCO0VBQ3hCLDJDQUEyQztFQUMzQyxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFNBQVM7QUFDWDs7QUFFQTtFQUNFLG9DQUFvQztFQUNwQywwQ0FBMEM7RUFDMUMsd0JBQXdCO0VBQ3hCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsUUFBUTtFQUNSLGdCQUFnQjtFQUNoQix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxxQ0FBcUM7RUFDckMsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQix3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxvQ0FBb0M7RUFDcEMsMkJBQTJCO0VBQzNCLDBDQUEwQztFQUMxQyxtQkFBbUI7RUFDbkIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixpREFBaUQ7QUFDbkQ7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLFNBQVM7QUFDWDs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCx3QkFBd0I7RUFDeEIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLDBDQUEwQztFQUMxQyxrQkFBa0I7RUFDbEIsb0NBQW9DO0VBQ3BDLHdCQUF3QjtFQUN4QixpQkFBaUI7RUFDakIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5Qiw0Q0FBNEM7RUFDNUMscUNBQXFDO0FBQ3ZDOztBQUVBO0VBQ0Usd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIsbUJBQW1CO0VBQ25CLFNBQVM7RUFDVCxlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixTQUFTO0VBQ1QseUJBQXlCO0VBQ3pCLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsOENBQThDO0FBQ2hEOztBQUVBOztFQUVFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YseUJBQXlCO0VBQ3pCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsUUFBUTtBQUNWOztBQUVBO0VBQ0Usb0NBQW9DO0VBQ3BDLHdCQUF3QjtFQUN4QiwwQ0FBMEM7QUFDNUM7O0FBRUE7RUFDRSxxQ0FBcUM7QUFDdkM7O0FBRUE7RUFDRSxtQ0FBbUM7RUFDbkMsWUFBWTtFQUNaLCtDQUErQztBQUNqRDs7QUFFQTtFQUNFLDJCQUEyQjtFQUMzQiwrQ0FBK0M7QUFDakQ7O0FBRUE7RUFDRSxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7O0FBRUEsc0JBQXNCO0FBQ3RCO0VBQ0U7SUFDRSx3QkFBd0I7RUFDMUI7O0VBRUE7SUFDRSxzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLFNBQVM7RUFDWDs7RUFFQTtJQUNFLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLDBCQUEwQjtJQUMxQixTQUFTO0VBQ1g7O0VBRUE7SUFDRSxhQUFhO0VBQ2Y7O0VBRUE7SUFDRSw4QkFBOEI7RUFDaEM7O0VBRUE7O0lBRUUsV0FBVztJQUNYLHVCQUF1QjtFQUN6QjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLmVkaXQtcHJvZHVjdC1jb250YWluZXIge1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgcGFkZGluZzogMTIwcHggMjBweCA2MHB4O1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjNjY3ZWVhIDAlLCAjNzY0YmEyIDUwJSwgI2YwOTNmYiAxMDAlKTtcbiAgbWF4LXdpZHRoOiA4MDBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5cbi5mb3JtLWhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cblxuLmZvcm0tdGl0bGUge1xuICBmb250LXNpemU6IDIuMnJlbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgY29sb3I6IHZhcigtLXRleHQtd2hpdGUpO1xuICB0ZXh0LXNoYWRvdzogMnB4IDJweCA0cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDEycHg7XG59XG5cbi5iYWNrLWJ0biB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xuICBjb2xvcjogdmFyKC0tdGV4dC13aGl0ZSk7XG4gIHBhZGRpbmc6IDEwcHggMTZweDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogOHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xufVxuXG4uYmFjay1idG46aG92ZXIge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTUpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XG59XG5cbi5sb2FkaW5nLXN0YXRlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiA2MHB4IDIwcHg7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LXdoaXRlKTtcbn1cblxuLmxvYWRpbmctc3RhdGUgaSB7XG4gIGZvbnQtc2l6ZTogM3JlbTtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgY29sb3I6IHZhcigtLW5lb24tYmx1ZSk7XG59XG5cbi5sb2FkaW5nLXN0YXRlIHAge1xuICBmb250LXNpemU6IDEuMnJlbTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLnByb2R1Y3QtZm9ybSB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDIwcHgpO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XG4gIHBhZGRpbmc6IDMwcHg7XG59XG5cbi5mb3JtLXNlY3Rpb24ge1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuXG4uZm9ybS1zZWN0aW9uIGgzIHtcbiAgY29sb3I6IHZhcigtLXRleHQtd2hpdGUpO1xuICBmb250LXNpemU6IDEuM3JlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgcGFkZGluZy1ib3R0b206IDhweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcbn1cblxuLmZvcm0tcm93IHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuICBnYXA6IDIwcHg7XG59XG5cbi5mb3JtLWdyb3VwIHtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLmZvcm0tZ3JvdXAgbGFiZWwge1xuICBkaXNwbGF5OiBibG9jaztcbiAgY29sb3I6IHZhcigtLXRleHQtd2hpdGUpO1xuICBmb250LXdlaWdodDogNTAwO1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xufVxuXG4uZm9ybS1jb250cm9sIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDEycHggMTZweDtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcbiAgY29sb3I6IHZhcigtLXRleHQtd2hpdGUpO1xuICBmb250LXNpemU6IDAuOXJlbTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbn1cblxuLmZvcm0tY29udHJvbDpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tbmVvbi1ibHVlKTtcbiAgYm94LXNoYWRvdzogMCAwIDAgMnB4IHJnYmEoMCwgMjEyLCAyNTUsIDAuMik7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNSk7XG59XG5cbi5mb3JtLWNvbnRyb2w6OnBsYWNlaG9sZGVyIHtcbiAgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpO1xufVxuXG50ZXh0YXJlYS5mb3JtLWNvbnRyb2wge1xuICByZXNpemU6IHZlcnRpY2FsO1xuICBtaW4taGVpZ2h0OiA4MHB4O1xufVxuXG5zZWxlY3QuZm9ybS1jb250cm9sIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uY2hlY2tib3gtbGFiZWwge1xuICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTJweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG4uY2hlY2tib3gtbGFiZWwgaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdIHtcbiAgd2lkdGg6IGF1dG87XG4gIG1hcmdpbjogMDtcbn1cblxuLmNoZWNrbWFyayB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5mb3JtLWFjdGlvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDE2cHg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xuICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xufVxuXG4uYnRuLWNhbmNlbCxcbi5idG4tc3VibWl0IHtcbiAgcGFkZGluZzogMTJweCAyNHB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDhweDtcbn1cblxuLmJ0bi1jYW5jZWwge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LXdoaXRlKTtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xufVxuXG4uYnRuLWNhbmNlbDpob3ZlciB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNSk7XG59XG5cbi5idG4tc3VibWl0IHtcbiAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeS1ncmFkaWVudCk7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm94LXNoYWRvdzogMCA0cHggMTVweCByZ2JhKDEwMiwgMTI2LCAyMzQsIDAuNCk7XG59XG5cbi5idG4tc3VibWl0OmhvdmVyOm5vdCg6ZGlzYWJsZWQpIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xuICBib3gtc2hhZG93OiAwIDZweCAyMHB4IHJnYmEoMTAyLCAxMjYsIDIzNCwgMC42KTtcbn1cblxuLmJ0bi1zdWJtaXQ6ZGlzYWJsZWQge1xuICBvcGFjaXR5OiAwLjU7XG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4gIHRyYW5zZm9ybTogbm9uZTtcbiAgYm94LXNoYWRvdzogbm9uZTtcbn1cblxuLyogUmVzcG9uc2l2ZSBEZXNpZ24gKi9cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuZWRpdC1wcm9kdWN0LWNvbnRhaW5lciB7XG4gICAgcGFkZGluZzogMTAwcHggMTVweCA0MHB4O1xuICB9XG4gIFxuICAuZm9ybS1oZWFkZXIge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgZ2FwOiAxNXB4O1xuICB9XG4gIFxuICAuZm9ybS10aXRsZSB7XG4gICAgZm9udC1zaXplOiAxLjhyZW07XG4gIH1cbiAgXG4gIC5mb3JtLXJvdyB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gICAgZ2FwOiAxNXB4O1xuICB9XG4gIFxuICAucHJvZHVjdC1mb3JtIHtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICB9XG4gIFxuICAuZm9ybS1hY3Rpb25zIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XG4gIH1cbiAgXG4gIC5idG4tY2FuY2VsLFxuICAuYnRuLXN1Ym1pdCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 9283:
/*!*******************************************************************!*\
  !*** ./src/app/components/admin/orders/admin-orders.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdminOrdersComponent: () => (/* binding */ AdminOrdersComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _services_checkout_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../services/checkout.service */ 5214);
/* harmony import */ var _services_order_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/order.service */ 8674);







function AdminOrdersComponent_tr_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr")(1, "td")(2, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "td")(5, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "td")(8, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](10, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "td")(12, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "td")(15, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](17, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const order_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](order_r1.orderId);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](order_r1.customerName);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](10, 6, order_r1.amount, "INR"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", order_r1.status.toLowerCase());
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", order_r1.status, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](17, 9, order_r1.createdAt, "short"));
  }
}
function AdminOrdersComponent_tr_63_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr")(1, "td")(2, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "td")(5, "div", 20)(6, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "td")(13, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "td")(16, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "td")(19, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "td")(22, "select", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function AdminOrdersComponent_tr_63_Template_select_change_22_listener($event) {
      const order_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r2).$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r3.updateOrderStatus(order_r3, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "option", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "Pending");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "option", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "Processing");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "option", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "Shipped");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "option", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, "Delivered");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "option", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32, "Cancelled");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "td")(34, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](36, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "td")(38, "div", 29)(39, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AdminOrdersComponent_tr_63_Template_button_click_39_listener() {
      const order_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r2).$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r3.viewOrder(order_r3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](40, "i", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AdminOrdersComponent_tr_63_Template_button_click_41_listener() {
      const order_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r2).$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r3.deleteOrder(order_r3.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](42, "i", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const order_r3 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("#", order_r3.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](order_r3.customerName);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](order_r3.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](order_r3.phone);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", order_r3.itemCount, " items");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("\u20B9", order_r3.amount, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", order_r3.paymentMethod);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r3.getPaymentMethodName(order_r3.paymentMethod), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", order_r3.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](36, 10, order_r3.date, "short"));
  }
}
function AdminOrdersComponent_div_64_div_7_div_60_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "img", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 49)(3, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", item_r6.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"])("alt", item_r6.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r6.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Quantity: ", item_r6.quantity, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Price: \u20B9", item_r6.price, " each");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" \u20B9", item_r6.price * item_r6.quantity, " ");
  }
}
function AdminOrdersComponent_div_64_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 40)(1, "div", 41)(2, "div", 42)(3, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Customer Information");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "p")(6, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Name:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "p")(10, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Email:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "p")(14, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Phone:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 42)(18, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "Order Information");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "p")(21, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "Order ID:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "p")(25, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "Date:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](28, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "p")(30, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, "Status:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](34, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "div", 42)(36, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37, "Delivery Address");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "div", 42)(41, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](42, "Payment Information");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "p")(44, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](45, "Method:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](46);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "p")(48, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](49, "Amount:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](50);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "p")(52, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](53, "Status:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](55);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "div", 44)(57, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](58, "Order Items");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](59, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](60, AdminOrdersComponent_div_64_div_7_div_60_Template, 11, 6, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r3.selectedOrder.customerName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r3.selectedOrder.email, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r3.selectedOrder.phone, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" #", ctx_r3.selectedOrder.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](28, 12, ctx_r3.selectedOrder.date, "full"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx_r3.selectedOrder.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](34, 15, ctx_r3.selectedOrder.status), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r3.selectedOrder.address);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r3.getPaymentMethodName(ctx_r3.selectedOrder.paymentMethod), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" \u20B9", ctx_r3.selectedOrder.amount, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r3.selectedOrder.paymentStatus);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r3.selectedOrder.items);
  }
}
function AdminOrdersComponent_div_64_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AdminOrdersComponent_div_64_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r3.closeModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AdminOrdersComponent_div_64_Template_div_click_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"]($event.stopPropagation());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 36)(3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AdminOrdersComponent_div_64_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r3.closeModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "i", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, AdminOrdersComponent_div_64_div_7_Template, 61, 17, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Order Details - #", ctx_r3.selectedOrder == null ? null : ctx_r3.selectedOrder.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r3.selectedOrder);
  }
}
class AdminOrdersComponent {
  constructor(checkoutService, orderService) {
    this.checkoutService = checkoutService;
    this.orderService = orderService;
    this.orders = [];
    this.filteredOrders = [];
    this.recentOrders = [];
    this.searchQuery = '';
    this.selectedStatus = 'all';
    this.showModal = false;
    this.selectedOrder = null;
  }
  ngOnInit() {
    this.loadOrders();
    this.loadRecentOrders();
  }
  loadOrders() {
    this.checkoutService.getAllOrders().subscribe({
      next: orders => {
        this.orders = orders.map(order => ({
          id: order.id.toString(),
          customerName: order.user?.name || 'Customer',
          email: order.user?.email || 'N/A',
          phone: order.user?.phone || 'N/A',
          itemCount: 0,
          amount: order.totalAmount,
          paymentMethod: 'card',
          paymentStatus: order.paymentStatus,
          status: order.orderStatus.toLowerCase(),
          date: new Date(order.createdAt),
          address: 'N/A',
          items: []
        }));
        this.filteredOrders = this.orders;
      },
      error: error => {
        console.error('Error loading orders:', error);
        this.loadMockOrders();
      }
    });
  }
  loadMockOrders() {
    // Mock orders data
    this.orders = [{
      id: 'RC001234',
      customerName: 'John Doe',
      email: 'john.doe@email.com',
      phone: '+91 9876543210',
      itemCount: 5,
      amount: 450,
      paymentMethod: 'card',
      paymentStatus: 'Paid',
      status: 'processing',
      date: new Date('2024-01-15T10:30:00'),
      address: '123 Main St, Mumbai, Maharashtra 400001',
      items: [{
        name: 'Organic Bananas',
        quantity: 2,
        price: 45,
        imageUrl: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=300&h=300&fit=crop'
      }, {
        name: 'Fresh Apples',
        quantity: 1,
        price: 120,
        imageUrl: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=300&h=300&fit=crop'
      }, {
        name: 'Premium Milk',
        quantity: 2,
        price: 65,
        imageUrl: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?w=300&h=300&fit=crop'
      }]
    }, {
      id: 'RC001235',
      customerName: 'Jane Smith',
      email: 'jane.smith@email.com',
      phone: '+91 9876543211',
      itemCount: 3,
      amount: 320,
      paymentMethod: 'upi',
      paymentStatus: 'Paid',
      status: 'delivered',
      date: new Date('2024-01-15T09:15:00'),
      address: '456 Park Ave, Delhi, Delhi 110001',
      items: [{
        name: 'Greek Yogurt',
        quantity: 2,
        price: 85,
        imageUrl: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=300&h=300&fit=crop'
      }, {
        name: 'Whole Wheat Bread',
        quantity: 1,
        price: 40,
        imageUrl: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=300&h=300&fit=crop'
      }]
    }, {
      id: 'RC001236',
      customerName: 'Mike Johnson',
      email: 'mike.johnson@email.com',
      phone: '+91 9876543212',
      itemCount: 8,
      amount: 680,
      paymentMethod: 'cod',
      paymentStatus: 'Pending',
      status: 'pending',
      date: new Date('2024-01-15T08:45:00'),
      address: '789 Oak St, Bangalore, Karnataka 560001',
      items: [{
        name: 'Fresh Salmon',
        quantity: 1,
        price: 450,
        imageUrl: 'https://images.unsplash.com/photo-1544943910-4c1dc44aab44?w=300&h=300&fit=crop'
      }, {
        name: 'Chicken Breast',
        quantity: 1,
        price: 250,
        imageUrl: 'https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=300&h=300&fit=crop'
      }]
    }, {
      id: 'RC001237',
      customerName: 'Sarah Wilson',
      email: 'sarah.wilson@email.com',
      phone: '+91 9876543213',
      itemCount: 4,
      amount: 290,
      paymentMethod: 'card',
      paymentStatus: 'Paid',
      status: 'shipped',
      date: new Date('2024-01-14T16:20:00'),
      address: '321 Pine St, Chennai, Tamil Nadu 600001',
      items: [{
        name: 'Orange Juice',
        quantity: 2,
        price: 90,
        imageUrl: 'https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=300&h=300&fit=crop'
      }, {
        name: 'Farm Eggs',
        quantity: 1,
        price: 80,
        imageUrl: 'https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?w=300&h=300&fit=crop'
      }]
    }, {
      id: 'RC001238',
      customerName: 'David Brown',
      email: 'david.brown@email.com',
      phone: '+91 9876543214',
      itemCount: 6,
      amount: 520,
      paymentMethod: 'upi',
      paymentStatus: 'Refunded',
      status: 'cancelled',
      date: new Date('2024-01-14T14:10:00'),
      address: '654 Elm St, Pune, Maharashtra 411001',
      items: [{
        name: 'Fresh Prawns',
        quantity: 1,
        price: 380,
        imageUrl: 'https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?w=300&h=300&fit=crop'
      }, {
        name: 'Cheddar Cheese',
        quantity: 1,
        price: 200,
        imageUrl: 'https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?w=300&h=300&fit=crop'
      }]
    }];
    this.filteredOrders = this.orders;
  }
  loadRecentOrders() {
    this.orderService.getRecentOrders().subscribe({
      next: orders => {
        this.recentOrders = orders;
      },
      error: error => {
        console.error('Error loading recent orders:', error);
        // Fallback to mock data
        this.recentOrders = [{
          orderId: '#RC001234',
          customerName: 'John Doe',
          amount: 450,
          status: 'PROCESSING',
          createdAt: new Date().toISOString()
        }, {
          orderId: '#RC001235',
          customerName: 'Jane Smith',
          amount: 320,
          status: 'DELIVERED',
          createdAt: new Date(Date.now() - 86400000).toISOString()
        }];
      }
    });
  }
  filterOrders() {
    let filtered = this.orders;
    // Filter by status
    if (this.selectedStatus !== 'all') {
      filtered = filtered.filter(order => order.status === this.selectedStatus);
    }
    // Filter by search query
    if (this.searchQuery.trim()) {
      filtered = filtered.filter(order => order.id.toLowerCase().includes(this.searchQuery.toLowerCase()) || order.customerName.toLowerCase().includes(this.searchQuery.toLowerCase()) || order.email.toLowerCase().includes(this.searchQuery.toLowerCase()));
    }
    this.filteredOrders = filtered;
  }
  filterByStatus(status) {
    this.selectedStatus = status;
    this.filterOrders();
  }
  updateOrderStatus(order, event) {
    const newStatus = event.target.value;
    order.status = newStatus;
    // Update payment status based on order status
    if (newStatus === 'delivered') {
      order.paymentStatus = 'Paid';
    } else if (newStatus === 'cancelled') {
      order.paymentStatus = 'Refunded';
    }
    alert(`Order #${order.id} status updated to ${newStatus}`);
  }
  viewOrder(order) {
    this.selectedOrder = order;
    this.showModal = true;
  }
  deleteOrder(orderId) {
    if (confirm('Are you sure you want to delete this order?')) {
      this.orders = this.orders.filter(order => order.id !== orderId);
      this.filterOrders();
      alert('Order deleted successfully!');
    }
  }
  closeModal() {
    this.showModal = false;
    this.selectedOrder = null;
  }
  getPaymentMethodName(method) {
    switch (method) {
      case 'card':
        return 'Credit/Debit Card';
      case 'upi':
        return 'UPI Payment';
      case 'cod':
        return 'Cash on Delivery';
      default:
        return method;
    }
  }
  static {
    this.ɵfac = function AdminOrdersComponent_Factory(t) {
      return new (t || AdminOrdersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_checkout_service__WEBPACK_IMPORTED_MODULE_0__.CheckoutService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_order_service__WEBPACK_IMPORTED_MODULE_1__.OrderService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: AdminOrdersComponent,
      selectors: [["app-admin-orders"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
      decls: 65,
      vars: 13,
      consts: [[1, "admin-container"], [1, "admin-header"], [1, "admin-title"], [1, "fas", "fa-shopping-cart"], [1, "neon-text"], [1, "filter-buttons"], [1, "filter-btn", 3, "click"], [1, "recent-orders", "glass-card"], [1, "table-header"], [1, "table-container"], [4, "ngFor", "ngForOf"], [1, "orders-table", "glass-card"], [1, "search-bar"], ["type", "text", "placeholder", "Search orders...", 1, "search-input", 3, "ngModelChange", "input", "ngModel"], ["class", "modal-overlay", 3, "click", 4, "ngIf"], [1, "order-id"], [1, "customer-name"], [1, "amount"], [1, "status-badge", 3, "ngClass"], [1, "order-date"], [1, "customer-info"], [1, "items-count"], [1, "payment-method", 3, "ngClass"], [1, "status-select", 3, "change", "value"], ["value", "pending"], ["value", "processing"], ["value", "shipped"], ["value", "delivered"], ["value", "cancelled"], [1, "action-buttons"], [1, "btn-icon", "view", 3, "click"], [1, "fas", "fa-eye"], [1, "btn-icon", "delete", 3, "click"], [1, "fas", "fa-trash"], [1, "modal-overlay", 3, "click"], [1, "modal-content", "glass-card", 3, "click"], [1, "modal-header"], [1, "close-btn", 3, "click"], [1, "fas", "fa-times"], ["class", "order-details", 4, "ngIf"], [1, "order-details"], [1, "details-grid"], [1, "detail-section"], [1, "payment-status"], [1, "order-items"], [1, "items-list"], ["class", "order-item", 4, "ngFor", "ngForOf"], [1, "order-item"], [1, "item-image", 3, "src", "alt"], [1, "item-info"], [1, "item-total"]],
      template: function AdminOrdersComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h1", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "i", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, " Order ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "span", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Management");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 5)(8, "button", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AdminOrdersComponent_Template_button_click_8_listener() {
            return ctx.filterByStatus("all");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, " All Orders ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "button", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AdminOrdersComponent_Template_button_click_10_listener() {
            return ctx.filterByStatus("pending");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, " Pending ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "button", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AdminOrdersComponent_Template_button_click_12_listener() {
            return ctx.filterByStatus("processing");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, " Processing ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "button", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AdminOrdersComponent_Template_button_click_14_listener() {
            return ctx.filterByStatus("delivered");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, " Delivered ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 7)(17, "div", 8)(18, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "Recent Orders");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 9)(21, "table")(22, "thead")(23, "tr")(24, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "Order ID");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, "Customer");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "Amount");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, "Status");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33, "Date");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "tbody");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](35, AdminOrdersComponent_tr_35_Template, 18, 12, "tr", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "div", 11)(37, "div", 8)(38, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](39);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "div", 12)(41, "input", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("ngModelChange", function AdminOrdersComponent_Template_input_ngModelChange_41_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx.searchQuery, $event) || (ctx.searchQuery = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("input", function AdminOrdersComponent_Template_input_input_41_listener() {
            return ctx.filterOrders();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "div", 9)(43, "table")(44, "thead")(45, "tr")(46, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](47, "Order ID");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](49, "Customer");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](51, "Items");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](53, "Amount");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](55, "Payment");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](57, "Status");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](58, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](59, "Date");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](60, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](61, "Actions");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](62, "tbody");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](63, AdminOrdersComponent_tr_63_Template, 43, 13, "tr", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](64, AdminOrdersComponent_div_64_Template, 8, 2, "div", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("active", ctx.selectedStatus === "all");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("active", ctx.selectedStatus === "pending");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("active", ctx.selectedStatus === "processing");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("active", ctx.selectedStatus === "delivered");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](21);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.recentOrders);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Orders (", ctx.filteredOrders.length, ")");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("ngModel", ctx.searchQuery);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](22);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.filteredOrders);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.showModal);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.TitleCasePipe, _angular_common__WEBPACK_IMPORTED_MODULE_3__.CurrencyPipe, _angular_common__WEBPACK_IMPORTED_MODULE_3__.DatePipe, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel],
      styles: [".admin-container[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  padding: 120px 20px 60px;\n  background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);\n}\n\n.admin-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 40px;\n  flex-wrap: wrap;\n  gap: 20px;\n}\n\n.admin-title[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n  font-weight: 700;\n  color: var(--text-white);\n  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);\n  display: flex;\n  align-items: center;\n  gap: 16px;\n}\n\n.filter-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  flex-wrap: wrap;\n}\n\n.filter-btn[_ngcontent-%COMP%] {\n  padding: 10px 20px;\n  border: 2px solid rgba(255, 255, 255, 0.3);\n  background: transparent;\n  color: var(--text-white);\n  border-radius: var(--border-radius);\n  cursor: pointer;\n  transition: var(--transition);\n  font-weight: 500;\n}\n\n.filter-btn[_ngcontent-%COMP%]:hover, \n.filter-btn.active[_ngcontent-%COMP%] {\n  background: var(--neon-blue);\n  border-color: var(--neon-blue);\n  box-shadow: 0 0 15px rgba(0, 212, 255, 0.4);\n}\n\n\n\n.orders-table[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.1);\n  backdrop-filter: blur(20px);\n  border: 1px solid rgba(255, 255, 255, 0.2);\n  border-radius: var(--border-radius-lg);\n  overflow: hidden;\n}\n\n.table-header[_ngcontent-%COMP%] {\n  padding: 25px;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.1);\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.table-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: var(--text-white);\n  font-size: 1.3rem;\n  font-weight: 600;\n}\n\n.search-input[_ngcontent-%COMP%] {\n  padding: 10px 16px;\n  border: 2px solid rgba(255, 255, 255, 0.3);\n  border-radius: var(--border-radius);\n  background: rgba(255, 255, 255, 0.1);\n  color: var(--text-white);\n  width: 250px;\n}\n\n.table-container[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\n\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  min-width: 1000px;\n}\n\nth[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {\n  padding: 15px;\n  text-align: left;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.1);\n  color: #ffffff !important;\n}\n\n.orders-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  color: #ffffff !important;\n}\n\nth[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.05);\n  color: var(--text-white);\n  font-weight: 600;\n  font-size: 0.9rem;\n  text-transform: uppercase;\n}\n\n.order-id[_ngcontent-%COMP%] {\n  color: var(--neon-blue);\n  font-weight: 600;\n  font-family: monospace;\n}\n\n.customer-info[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  color: var(--text-white);\n  font-size: 1rem;\n  font-weight: 600;\n  margin-bottom: 4px;\n}\n\n.customer-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: var(--text-muted);\n  margin-bottom: 2px;\n}\n\n.items-count[_ngcontent-%COMP%] {\n  background: var(--primary-gradient);\n  color: white;\n  padding: 4px 12px;\n  border-radius: 20px;\n  font-size: 0.8rem;\n  font-weight: 600;\n}\n\n.amount[_ngcontent-%COMP%] {\n  color: var(--neon-green);\n  font-weight: 700;\n  font-size: 1.1rem;\n}\n\n.payment-method[_ngcontent-%COMP%] {\n  padding: 4px 12px;\n  border-radius: 20px;\n  font-size: 0.8rem;\n  font-weight: 600;\n}\n\n.payment-method.card[_ngcontent-%COMP%] {\n  background: rgba(0, 123, 255, 0.2);\n  color: #007bff;\n}\n\n.payment-method.upi[_ngcontent-%COMP%] {\n  background: rgba(40, 167, 69, 0.2);\n  color: #28a745;\n}\n\n.payment-method.cod[_ngcontent-%COMP%] {\n  background: rgba(255, 193, 7, 0.2);\n  color: #ffc107;\n}\n\n.status-select[_ngcontent-%COMP%] {\n  padding: 6px 12px;\n  border: 1px solid rgba(255, 255, 255, 0.3);\n  border-radius: var(--border-radius);\n  background: rgba(255, 255, 255, 0.1);\n  color: var(--text-white);\n  font-size: 0.9rem;\n}\n\n.order-date[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  font-size: 0.9rem;\n}\n\n.action-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n}\n\n.btn-icon[_ngcontent-%COMP%] {\n  width: 35px;\n  height: 35px;\n  border: none;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  transition: var(--transition);\n}\n\n.btn-icon.view[_ngcontent-%COMP%] {\n  background: rgba(0, 212, 255, 0.2);\n  color: var(--neon-blue);\n}\n\n.btn-icon.delete[_ngcontent-%COMP%] {\n  background: rgba(255, 71, 87, 0.2);\n  color: #ff4757;\n}\n\n.btn-icon[_ngcontent-%COMP%]:hover {\n  transform: scale(1.1);\n}\n\n\n\n.modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.7);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n}\n\n.modal-content[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.15);\n  backdrop-filter: blur(20px);\n  border: 1px solid rgba(255, 255, 255, 0.3);\n  border-radius: var(--border-radius-lg);\n  width: 90%;\n  max-width: 800px;\n  max-height: 90vh;\n  overflow-y: auto;\n}\n\n.modal-header[_ngcontent-%COMP%] {\n  padding: 25px;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.1);\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.modal-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: var(--text-white);\n  font-size: 1.3rem;\n  font-weight: 600;\n}\n\n.close-btn[_ngcontent-%COMP%] {\n  background: transparent;\n  border: none;\n  color: var(--text-white);\n  font-size: 1.2rem;\n  cursor: pointer;\n  padding: 5px;\n}\n\n.order-details[_ngcontent-%COMP%] {\n  padding: 25px;\n}\n\n.details-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 25px;\n  margin-bottom: 30px;\n}\n\n.detail-section[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  color: var(--text-white);\n  font-size: 1.1rem;\n  font-weight: 600;\n  margin-bottom: 15px;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.2);\n  padding-bottom: 8px;\n}\n\n.detail-section[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  margin-bottom: 8px;\n  line-height: 1.5;\n}\n\n.status-badge[_ngcontent-%COMP%] {\n  padding: 4px 12px;\n  border-radius: 20px;\n  font-size: 0.8rem;\n  font-weight: 600;\n  text-transform: uppercase;\n}\n\n.status-badge.pending[_ngcontent-%COMP%] {\n  background: rgba(255, 193, 7, 0.2);\n  color: #ffc107;\n}\n\n.status-badge.processing[_ngcontent-%COMP%] {\n  background: rgba(0, 123, 255, 0.2);\n  color: #007bff;\n}\n\n.status-badge.delivered[_ngcontent-%COMP%] {\n  background: rgba(40, 167, 69, 0.2);\n  color: #28a745;\n}\n\n.status-badge.shipped[_ngcontent-%COMP%] {\n  background: rgba(108, 117, 125, 0.2);\n  color: #6c757d;\n}\n\n.status-badge.cancelled[_ngcontent-%COMP%] {\n  background: rgba(220, 53, 69, 0.2);\n  color: #dc3545;\n}\n\n.status-badge.placed[_ngcontent-%COMP%] {\n  background: rgba(23, 162, 184, 0.2);\n  color: #17a2b8;\n}\n\n.status-badge.packed[_ngcontent-%COMP%] {\n  background: rgba(255, 193, 7, 0.2);\n  color: #ffc107;\n}\n\n.status-badge.out_for_delivery[_ngcontent-%COMP%] {\n  background: rgba(102, 16, 242, 0.2);\n  color: #6610f2;\n}\n\n\n\n.recent-orders[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.1);\n  backdrop-filter: blur(20px);\n  border: 1px solid rgba(255, 255, 255, 0.2);\n  border-radius: var(--border-radius-lg);\n  overflow: hidden;\n  margin-bottom: 30px;\n}\n\n.recent-orders[_ngcontent-%COMP%]   .customer-name[_ngcontent-%COMP%] {\n  color: var(--text-white);\n  font-weight: 500;\n}\n\n.order-items[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  color: var(--text-white);\n  font-size: 1.1rem;\n  font-weight: 600;\n  margin-bottom: 20px;\n}\n\n.items-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 15px;\n}\n\n.order-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 15px;\n  padding: 15px;\n  background: rgba(255, 255, 255, 0.05);\n  border-radius: var(--border-radius);\n}\n\n.item-image[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 60px;\n  border-radius: 8px;\n  object-fit: cover;\n}\n\n.item-info[_ngcontent-%COMP%] {\n  flex: 1;\n}\n\n.item-info[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  color: var(--text-white);\n  font-size: 1rem;\n  font-weight: 600;\n  margin-bottom: 4px;\n}\n\n.item-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  font-size: 0.9rem;\n  margin-bottom: 2px;\n}\n\n.item-total[_ngcontent-%COMP%] {\n  color: var(--neon-blue);\n  font-weight: 600;\n  font-size: 1.1rem;\n}\n\n\n\n@media (max-width: 768px) {\n  .admin-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n  }\n  \n  .admin-title[_ngcontent-%COMP%] {\n    font-size: 2rem;\n    justify-content: center;\n  }\n  \n  .filter-buttons[_ngcontent-%COMP%] {\n    justify-content: center;\n  }\n  \n  .table-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 15px;\n  }\n  \n  .search-input[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  \n  .details-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  \n  .order-item[_ngcontent-%COMP%] {\n    flex-direction: column;\n    text-align: center;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9hZG1pbi9vcmRlcnMvYWRtaW4tb3JkZXJzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBaUI7RUFDakIsd0JBQXdCO0VBQ3hCLDBFQUEwRTtBQUM1RTs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsU0FBUztBQUNYOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQix3QkFBd0I7RUFDeEIsMkNBQTJDO0VBQzNDLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsU0FBUztBQUNYOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFNBQVM7RUFDVCxlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLDBDQUEwQztFQUMxQyx1QkFBdUI7RUFDdkIsd0JBQXdCO0VBQ3hCLG1DQUFtQztFQUNuQyxlQUFlO0VBQ2YsNkJBQTZCO0VBQzdCLGdCQUFnQjtBQUNsQjs7QUFFQTs7RUFFRSw0QkFBNEI7RUFDNUIsOEJBQThCO0VBQzlCLDJDQUEyQztBQUM3Qzs7QUFFQSxpQkFBaUI7QUFDakI7RUFDRSxvQ0FBb0M7RUFDcEMsMkJBQTJCO0VBQzNCLDBDQUEwQztFQUMxQyxzQ0FBc0M7RUFDdEMsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGlEQUFpRDtFQUNqRCxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHdCQUF3QjtFQUN4QixpQkFBaUI7RUFDakIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLDBDQUEwQztFQUMxQyxtQ0FBbUM7RUFDbkMsb0NBQW9DO0VBQ3BDLHdCQUF3QjtFQUN4QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsaURBQWlEO0VBQ2pELHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHFDQUFxQztFQUNyQyx3QkFBd0I7RUFDeEIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLHdCQUF3QjtFQUN4QixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQix3QkFBd0I7RUFDeEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsbUNBQW1DO0VBQ25DLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGtDQUFrQztFQUNsQyxjQUFjO0FBQ2hCOztBQUVBO0VBQ0Usa0NBQWtDO0VBQ2xDLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxrQ0FBa0M7RUFDbEMsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQiwwQ0FBMEM7RUFDMUMsbUNBQW1DO0VBQ25DLG9DQUFvQztFQUNwQyx3QkFBd0I7RUFDeEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixRQUFRO0FBQ1Y7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsZUFBZTtFQUNmLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLGtDQUFrQztFQUNsQyx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxrQ0FBa0M7RUFDbEMsY0FBYztBQUNoQjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQSxpQkFBaUI7QUFDakI7RUFDRSxlQUFlO0VBQ2YsTUFBTTtFQUNOLE9BQU87RUFDUCxRQUFRO0VBQ1IsU0FBUztFQUNULDhCQUE4QjtFQUM5QixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxxQ0FBcUM7RUFDckMsMkJBQTJCO0VBQzNCLDBDQUEwQztFQUMxQyxzQ0FBc0M7RUFDdEMsVUFBVTtFQUNWLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGlEQUFpRDtFQUNqRCxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHdCQUF3QjtFQUN4QixpQkFBaUI7RUFDakIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWix3QkFBd0I7RUFDeEIsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsMkRBQTJEO0VBQzNELFNBQVM7RUFDVCxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsaURBQWlEO0VBQ2pELG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHdCQUF3QjtFQUN4QixrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGtDQUFrQztFQUNsQyxjQUFjO0FBQ2hCOztBQUVBO0VBQ0Usa0NBQWtDO0VBQ2xDLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxrQ0FBa0M7RUFDbEMsY0FBYztBQUNoQjs7QUFFQTtFQUNFLG9DQUFvQztFQUNwQyxjQUFjO0FBQ2hCOztBQUVBO0VBQ0Usa0NBQWtDO0VBQ2xDLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxtQ0FBbUM7RUFDbkMsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGtDQUFrQztFQUNsQyxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsbUNBQW1DO0VBQ25DLGNBQWM7QUFDaEI7O0FBRUEsMEJBQTBCO0FBQzFCO0VBQ0Usb0NBQW9DO0VBQ3BDLDJCQUEyQjtFQUMzQiwwQ0FBMEM7RUFDMUMsc0NBQXNDO0VBQ3RDLGdCQUFnQjtFQUNoQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFNBQVM7RUFDVCxhQUFhO0VBQ2IscUNBQXFDO0VBQ3JDLG1DQUFtQztBQUNyQzs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLE9BQU87QUFDVDs7QUFFQTtFQUNFLHdCQUF3QjtFQUN4QixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHdCQUF3QjtFQUN4QixpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGdCQUFnQjtFQUNoQixpQkFBaUI7QUFDbkI7O0FBRUEsc0JBQXNCO0FBQ3RCO0VBQ0U7SUFDRSxzQkFBc0I7SUFDdEIsb0JBQW9CO0VBQ3RCOztFQUVBO0lBQ0UsZUFBZTtJQUNmLHVCQUF1QjtFQUN6Qjs7RUFFQTtJQUNFLHVCQUF1QjtFQUN6Qjs7RUFFQTtJQUNFLHNCQUFzQjtJQUN0QixTQUFTO0VBQ1g7O0VBRUE7SUFDRSxXQUFXO0VBQ2I7O0VBRUE7SUFDRSwwQkFBMEI7RUFDNUI7O0VBRUE7SUFDRSxzQkFBc0I7SUFDdEIsa0JBQWtCO0VBQ3BCO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIuYWRtaW4tY29udGFpbmVyIHtcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIHBhZGRpbmc6IDEyMHB4IDIwcHggNjBweDtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzY2N2VlYSAwJSwgIzc2NGJhMiA1MCUsICNmMDkzZmIgMTAwJSk7XG59XG5cbi5hZG1pbi1oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgZ2FwOiAyMHB4O1xufVxuXG4uYWRtaW4tdGl0bGUge1xuICBmb250LXNpemU6IDIuNXJlbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgY29sb3I6IHZhcigtLXRleHQtd2hpdGUpO1xuICB0ZXh0LXNoYWRvdzogMnB4IDJweCA0cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDE2cHg7XG59XG5cbi5maWx0ZXItYnV0dG9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMTBweDtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuXG4uZmlsdGVyLWJ0biB7XG4gIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgYm9yZGVyOiAycHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6IHZhcigtLXRleHQtd2hpdGUpO1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uKTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLmZpbHRlci1idG46aG92ZXIsXG4uZmlsdGVyLWJ0bi5hY3RpdmUge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1uZW9uLWJsdWUpO1xuICBib3JkZXItY29sb3I6IHZhcigtLW5lb24tYmx1ZSk7XG4gIGJveC1zaGFkb3c6IDAgMCAxNXB4IHJnYmEoMCwgMjEyLCAyNTUsIDAuNCk7XG59XG5cbi8qIE9yZGVycyBUYWJsZSAqL1xuLm9yZGVycy10YWJsZSB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDIwcHgpO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMtbGcpO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4udGFibGUtaGVhZGVyIHtcbiAgcGFkZGluZzogMjVweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4udGFibGUtaGVhZGVyIGgzIHtcbiAgY29sb3I6IHZhcigtLXRleHQtd2hpdGUpO1xuICBmb250LXNpemU6IDEuM3JlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLnNlYXJjaC1pbnB1dCB7XG4gIHBhZGRpbmc6IDEwcHggMTZweDtcbiAgYm9yZGVyOiAycHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xuICBjb2xvcjogdmFyKC0tdGV4dC13aGl0ZSk7XG4gIHdpZHRoOiAyNTBweDtcbn1cblxuLnRhYmxlLWNvbnRhaW5lciB7XG4gIG92ZXJmbG93LXg6IGF1dG87XG59XG5cbnRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gIG1pbi13aWR0aDogMTAwMHB4O1xufVxuXG50aCwgdGQge1xuICBwYWRkaW5nOiAxNXB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xuICBjb2xvcjogI2ZmZmZmZiAhaW1wb3J0YW50O1xufVxuXG4ub3JkZXJzLXRhYmxlIHRkIHtcbiAgY29sb3I6ICNmZmZmZmYgIWltcG9ydGFudDtcbn1cblxudGgge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpO1xuICBjb2xvcjogdmFyKC0tdGV4dC13aGl0ZSk7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4ub3JkZXItaWQge1xuICBjb2xvcjogdmFyKC0tbmVvbi1ibHVlKTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcbn1cblxuLmN1c3RvbWVyLWluZm8gaDQge1xuICBjb2xvcjogdmFyKC0tdGV4dC13aGl0ZSk7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbWFyZ2luLWJvdHRvbTogNHB4O1xufVxuXG4uY3VzdG9tZXItaW5mbyBwIHtcbiAgZm9udC1zaXplOiAwLjg1cmVtO1xuICBjb2xvcjogdmFyKC0tdGV4dC1tdXRlZCk7XG4gIG1hcmdpbi1ib3R0b206IDJweDtcbn1cblxuLml0ZW1zLWNvdW50IHtcbiAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeS1ncmFkaWVudCk7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogNHB4IDEycHg7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG4uYW1vdW50IHtcbiAgY29sb3I6IHZhcigtLW5lb24tZ3JlZW4pO1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LXNpemU6IDEuMXJlbTtcbn1cblxuLnBheW1lbnQtbWV0aG9kIHtcbiAgcGFkZGluZzogNHB4IDEycHg7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG4ucGF5bWVudC1tZXRob2QuY2FyZCB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMTIzLCAyNTUsIDAuMik7XG4gIGNvbG9yOiAjMDA3YmZmO1xufVxuXG4ucGF5bWVudC1tZXRob2QudXBpIHtcbiAgYmFja2dyb3VuZDogcmdiYSg0MCwgMTY3LCA2OSwgMC4yKTtcbiAgY29sb3I6ICMyOGE3NDU7XG59XG5cbi5wYXltZW50LW1ldGhvZC5jb2Qge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMTkzLCA3LCAwLjIpO1xuICBjb2xvcjogI2ZmYzEwNztcbn1cblxuLnN0YXR1cy1zZWxlY3Qge1xuICBwYWRkaW5nOiA2cHggMTJweDtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xuICBjb2xvcjogdmFyKC0tdGV4dC13aGl0ZSk7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xufVxuXG4ub3JkZXItZGF0ZSB7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LW11dGVkKTtcbiAgZm9udC1zaXplOiAwLjlyZW07XG59XG5cbi5hY3Rpb24tYnV0dG9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogOHB4O1xufVxuXG4uYnRuLWljb24ge1xuICB3aWR0aDogMzVweDtcbiAgaGVpZ2h0OiAzNXB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogdmFyKC0tdHJhbnNpdGlvbik7XG59XG5cbi5idG4taWNvbi52aWV3IHtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAyMTIsIDI1NSwgMC4yKTtcbiAgY29sb3I6IHZhcigtLW5lb24tYmx1ZSk7XG59XG5cbi5idG4taWNvbi5kZWxldGUge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgNzEsIDg3LCAwLjIpO1xuICBjb2xvcjogI2ZmNDc1Nztcbn1cblxuLmJ0bi1pY29uOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xufVxuXG4vKiBNb2RhbCBTdHlsZXMgKi9cbi5tb2RhbC1vdmVybGF5IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC43KTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHotaW5kZXg6IDEwMDA7XG59XG5cbi5tb2RhbC1jb250ZW50IHtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE1KTtcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDIwcHgpO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMtbGcpO1xuICB3aWR0aDogOTAlO1xuICBtYXgtd2lkdGg6IDgwMHB4O1xuICBtYXgtaGVpZ2h0OiA5MHZoO1xuICBvdmVyZmxvdy15OiBhdXRvO1xufVxuXG4ubW9kYWwtaGVhZGVyIHtcbiAgcGFkZGluZzogMjVweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ubW9kYWwtaGVhZGVyIGgzIHtcbiAgY29sb3I6IHZhcigtLXRleHQtd2hpdGUpO1xuICBmb250LXNpemU6IDEuM3JlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLmNsb3NlLWJ0biB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IG5vbmU7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LXdoaXRlKTtcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcGFkZGluZzogNXB4O1xufVxuXG4ub3JkZXItZGV0YWlscyB7XG4gIHBhZGRpbmc6IDI1cHg7XG59XG5cbi5kZXRhaWxzLWdyaWQge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDI1MHB4LCAxZnIpKTtcbiAgZ2FwOiAyNXB4O1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuXG4uZGV0YWlsLXNlY3Rpb24gaDQge1xuICBjb2xvcjogdmFyKC0tdGV4dC13aGl0ZSk7XG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xuICBwYWRkaW5nLWJvdHRvbTogOHB4O1xufVxuXG4uZGV0YWlsLXNlY3Rpb24gcCB7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LW11dGVkKTtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICBsaW5lLWhlaWdodDogMS41O1xufVxuXG4uc3RhdHVzLWJhZGdlIHtcbiAgcGFkZGluZzogNHB4IDEycHg7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4uc3RhdHVzLWJhZGdlLnBlbmRpbmcge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMTkzLCA3LCAwLjIpO1xuICBjb2xvcjogI2ZmYzEwNztcbn1cblxuLnN0YXR1cy1iYWRnZS5wcm9jZXNzaW5nIHtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAxMjMsIDI1NSwgMC4yKTtcbiAgY29sb3I6ICMwMDdiZmY7XG59XG5cbi5zdGF0dXMtYmFkZ2UuZGVsaXZlcmVkIHtcbiAgYmFja2dyb3VuZDogcmdiYSg0MCwgMTY3LCA2OSwgMC4yKTtcbiAgY29sb3I6ICMyOGE3NDU7XG59XG5cbi5zdGF0dXMtYmFkZ2Uuc2hpcHBlZCB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMTA4LCAxMTcsIDEyNSwgMC4yKTtcbiAgY29sb3I6ICM2Yzc1N2Q7XG59XG5cbi5zdGF0dXMtYmFkZ2UuY2FuY2VsbGVkIHtcbiAgYmFja2dyb3VuZDogcmdiYSgyMjAsIDUzLCA2OSwgMC4yKTtcbiAgY29sb3I6ICNkYzM1NDU7XG59XG5cbi5zdGF0dXMtYmFkZ2UucGxhY2VkIHtcbiAgYmFja2dyb3VuZDogcmdiYSgyMywgMTYyLCAxODQsIDAuMik7XG4gIGNvbG9yOiAjMTdhMmI4O1xufVxuXG4uc3RhdHVzLWJhZGdlLnBhY2tlZCB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAxOTMsIDcsIDAuMik7XG4gIGNvbG9yOiAjZmZjMTA3O1xufVxuXG4uc3RhdHVzLWJhZGdlLm91dF9mb3JfZGVsaXZlcnkge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDEwMiwgMTYsIDI0MiwgMC4yKTtcbiAgY29sb3I6ICM2NjEwZjI7XG59XG5cbi8qIFJlY2VudCBPcmRlcnMgU2VjdGlvbiAqL1xuLnJlY2VudC1vcmRlcnMge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigyMHB4KTtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzLWxnKTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cblxuLnJlY2VudC1vcmRlcnMgLmN1c3RvbWVyLW5hbWUge1xuICBjb2xvcjogdmFyKC0tdGV4dC13aGl0ZSk7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5vcmRlci1pdGVtcyBoNCB7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LXdoaXRlKTtcbiAgZm9udC1zaXplOiAxLjFyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi5pdGVtcy1saXN0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAxNXB4O1xufVxuXG4ub3JkZXItaXRlbSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTVweDtcbiAgcGFkZGluZzogMTVweDtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA1KTtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XG59XG5cbi5pdGVtLWltYWdlIHtcbiAgd2lkdGg6IDYwcHg7XG4gIGhlaWdodDogNjBweDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBvYmplY3QtZml0OiBjb3Zlcjtcbn1cblxuLml0ZW0taW5mbyB7XG4gIGZsZXg6IDE7XG59XG5cbi5pdGVtLWluZm8gaDUge1xuICBjb2xvcjogdmFyKC0tdGV4dC13aGl0ZSk7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbWFyZ2luLWJvdHRvbTogNHB4O1xufVxuXG4uaXRlbS1pbmZvIHAge1xuICBjb2xvcjogdmFyKC0tdGV4dC1tdXRlZCk7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xuICBtYXJnaW4tYm90dG9tOiAycHg7XG59XG5cbi5pdGVtLXRvdGFsIHtcbiAgY29sb3I6IHZhcigtLW5lb24tYmx1ZSk7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xufVxuXG4vKiBSZXNwb25zaXZlIERlc2lnbiAqL1xuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5hZG1pbi1oZWFkZXIge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gIH1cbiAgXG4gIC5hZG1pbi10aXRsZSB7XG4gICAgZm9udC1zaXplOiAycmVtO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB9XG4gIFxuICAuZmlsdGVyLWJ1dHRvbnMge1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB9XG4gIFxuICAudGFibGUtaGVhZGVyIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogMTVweDtcbiAgfVxuICBcbiAgLnNlYXJjaC1pbnB1dCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgXG4gIC5kZXRhaWxzLWdyaWQge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICB9XG4gIFxuICAub3JkZXItaXRlbSB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 5549:
/*!***********************************************************************!*\
  !*** ./src/app/components/admin/products/admin-products.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdminProductsComponent: () => (/* binding */ AdminProductsComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../services/product.service */ 6241);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5072);







function AdminProductsComponent_option_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const category_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", category_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 2, category_r1));
  }
}
function AdminProductsComponent_div_50_div_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const product_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("\u20B9", product_r3.originalPrice, "");
  }
}
function AdminProductsComponent_div_50_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 37)(1, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 40)(4, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 43)(9, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 45)(12, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, AdminProductsComponent_div_50_div_14_Template, 2, 1, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 48)(16, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "i", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 51)(21, "div", 52)(22, "span", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "span", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "/");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "span", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 56)(29, "label", 57)(30, "input", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function AdminProductsComponent_div_50_Template_input_change_30_listener() {
      const product_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2).$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r3.toggleStatus(product_r3.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](31, "span", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 60)(33, "button", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminProductsComponent_div_50_Template_button_click_33_listener() {
      const product_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2).$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r3.editProduct(product_r3.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](34, "i", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "button", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminProductsComponent_div_50_Template_button_click_35_listener() {
      const product_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2).$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r3.deleteProduct(product_r3.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](36, "i", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const product_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", product_r3.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"])("alt", product_r3.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](product_r3.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](product_r3.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](product_r3.category);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("\u20B9", product_r3.price, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", product_r3.originalPrice);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](product_r3.rating);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](product_r3.currentStock);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](product_r3.initialStock);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("checked", product_r3.inStock);
  }
}
function AdminProductsComponent_div_51_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "No products found");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Try adjusting your search or filters");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
function AdminProductsComponent_div_52_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminProductsComponent_div_52_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r3.cancelDelete());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminProductsComponent_div_52_Template_div_click_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"]($event.stopPropagation());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 70)(3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Confirm Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminProductsComponent_div_52_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r3.cancelDelete());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "i", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 73)(8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Are you sure you want to delete this product? This action cannot be undone.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 74)(11, "button", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminProductsComponent_div_52_Template_button_click_11_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r3.cancelDelete());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "button", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminProductsComponent_div_52_Template_button_click_13_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r3.confirmDelete());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
  }
}
class AdminProductsComponent {
  constructor(productService, router) {
    this.productService = productService;
    this.router = router;
    this.products = [];
    this.filteredProducts = [];
    this.categories = [];
    this.searchTerm = '';
    this.selectedCategory = '';
    this.sortBy = 'name';
    this.showDeleteModal = false;
    this.productToDelete = null;
  }
  ngOnInit() {
    this.loadProducts();
    this.categories = this.productService.getCategories();
  }
  loadProducts() {
    this.productService.getAllProducts().subscribe({
      next: products => {
        this.products = products;
        this.filteredProducts = [...products];
        this.sortProducts();
      },
      error: error => {
        console.error('Error loading products:', error);
      }
    });
  }
  filterProducts() {
    let filtered = [...this.products];
    // Filter by search term
    if (this.searchTerm) {
      filtered = filtered.filter(product => product.name.toLowerCase().includes(this.searchTerm.toLowerCase()) || product.description.toLowerCase().includes(this.searchTerm.toLowerCase()));
    }
    // Filter by category
    if (this.selectedCategory) {
      filtered = filtered.filter(product => product.category === this.selectedCategory);
    }
    this.filteredProducts = filtered;
    this.sortProducts();
  }
  sortProducts() {
    this.filteredProducts.sort((a, b) => {
      switch (this.sortBy) {
        case 'name':
          return a.name.localeCompare(b.name);
        case 'price':
          return a.price - b.price;
        case 'rating':
          return b.rating - a.rating;
        case 'stock':
          return b.currentStock - a.currentStock;
        default:
          return 0;
      }
    });
  }
  addProduct() {
    this.router.navigate(['/admin/products/add']);
  }
  editProduct(productId) {
    this.router.navigate(['/admin/products/edit', productId]);
  }
  deleteProduct(productId) {
    this.productToDelete = productId;
    this.showDeleteModal = true;
  }
  confirmDelete() {
    if (this.productToDelete) {
      this.productService.deleteProduct(this.productToDelete).subscribe({
        next: () => {
          console.log('Product deleted successfully');
          this.loadProducts();
          this.cancelDelete();
        },
        error: error => {
          console.error('Error deleting product:', error);
          alert('Failed to delete product. Please try again.');
          this.cancelDelete();
        }
      });
    }
  }
  cancelDelete() {
    this.showDeleteModal = false;
    this.productToDelete = null;
  }
  toggleStatus(productId) {
    this.productService.toggleProductStatus(productId).subscribe({
      next: () => {
        this.loadProducts();
      },
      error: error => {
        console.error('Error toggling product status:', error);
      }
    });
  }
  static {
    this.ɵfac = function AdminProductsComponent_Factory(t) {
      return new (t || AdminProductsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_product_service__WEBPACK_IMPORTED_MODULE_0__.ProductService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: AdminProductsComponent,
      selectors: [["app-admin-products"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
      decls: 53,
      vars: 7,
      consts: [[1, "admin-products-container"], [1, "admin-header"], [1, "header-left"], [1, "admin-title"], [1, "fas", "fa-boxes"], [1, "neon-text"], [1, "admin-subtitle"], [1, "header-actions"], [1, "add-product-btn", 3, "click"], [1, "fas", "fa-plus"], [1, "filters-section", "glass-card"], [1, "search-box"], [1, "fas", "fa-search"], ["type", "text", "placeholder", "Search products...", 3, "ngModelChange", "input", "ngModel"], [1, "filter-controls"], [1, "category-filter", 3, "ngModelChange", "change", "ngModel"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], [1, "sort-filter", 3, "ngModelChange", "change", "ngModel"], ["value", "name"], ["value", "price"], ["value", "rating"], ["value", "stock"], [1, "products-table", "glass-card"], [1, "table-header"], [1, "header-cell", "image"], [1, "header-cell", "name"], [1, "header-cell", "category"], [1, "header-cell", "price"], [1, "header-cell", "rating"], [1, "header-cell", "stock"], [1, "header-cell", "status"], [1, "header-cell", "actions"], ["class", "product-row", 4, "ngFor", "ngForOf"], ["class", "empty-state", 4, "ngIf"], ["class", "modal-overlay", 3, "click", 4, "ngIf"], [3, "value"], [1, "product-row"], [1, "cell", "image"], [1, "product-image", 3, "src", "alt"], [1, "cell", "name"], [1, "product-name"], [1, "product-description"], [1, "cell", "category"], [1, "category-pill"], [1, "cell", "price"], [1, "current-price"], ["class", "original-price", 4, "ngIf"], [1, "cell", "rating"], [1, "rating-display"], [1, "fas", "fa-star"], [1, "cell", "stock"], [1, "stock-info"], [1, "current-stock"], [1, "stock-separator"], [1, "initial-stock"], [1, "cell", "status"], [1, "toggle-switch"], ["type", "checkbox", 3, "change", "checked"], [1, "slider"], [1, "cell", "actions"], ["title", "Edit Product", 1, "action-btn", "edit", 3, "click"], [1, "fas", "fa-edit"], ["title", "Delete Product", 1, "action-btn", "delete", 3, "click"], [1, "fas", "fa-trash"], [1, "original-price"], [1, "empty-state"], [1, "fas", "fa-box-open"], [1, "modal-overlay", 3, "click"], [1, "modal-content", 3, "click"], [1, "modal-header"], [1, "close-btn", 3, "click"], [1, "fas", "fa-times"], [1, "modal-body"], [1, "modal-footer"], [1, "btn-cancel", 3, "click"], [1, "btn-delete", 3, "click"]],
      template: function AdminProductsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h1", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "i", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, " Product ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Management");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "p", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Manage your store inventory");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 7)(11, "button", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminProductsComponent_Template_button_click_11_listener() {
            return ctx.addProduct();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "i", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, " Add Product ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 10)(15, "div", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "i", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "input", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function AdminProductsComponent_Template_input_ngModelChange_17_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx.searchTerm, $event) || (ctx.searchTerm = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("input", function AdminProductsComponent_Template_input_input_17_listener() {
            return ctx.filterProducts();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 14)(19, "select", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function AdminProductsComponent_Template_select_ngModelChange_19_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx.selectedCategory, $event) || (ctx.selectedCategory = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function AdminProductsComponent_Template_select_change_19_listener() {
            return ctx.filterProducts();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "option", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "All Categories");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, AdminProductsComponent_option_22_Template, 3, 4, "option", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "select", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function AdminProductsComponent_Template_select_ngModelChange_23_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx.sortBy, $event) || (ctx.sortBy = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function AdminProductsComponent_Template_select_change_23_listener() {
            return ctx.sortProducts();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "option", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Sort by Name");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "option", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Sort by Price");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "option", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Sort by Rating");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "option", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Sort by Stock");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 23)(33, "div", 24)(34, "div", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "Image");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "Product Name");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "Category");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "Price");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "div", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "Rating");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "div", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, "Stock");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "div", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, "Status");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "div", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, "Actions");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](50, AdminProductsComponent_div_50_Template, 37, 11, "div", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](51, AdminProductsComponent_div_51_Template, 6, 0, "div", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](52, AdminProductsComponent_div_52_Template, 15, 0, "div", 35);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx.searchTerm);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx.selectedCategory);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.categories);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx.sortBy);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](27);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.filteredProducts);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.filteredProducts.length === 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showDeleteModal);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.TitleCasePipe, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel],
      styles: [".admin-products-container[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  padding: 120px 20px 60px;\n  background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);\n}\n\n.admin-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 30px;\n}\n\n.header-left[_ngcontent-%COMP%] {\n  flex: 1;\n}\n\n.admin-title[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n  font-weight: 700;\n  color: var(--text-white);\n  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);\n  margin-bottom: 8px;\n  display: flex;\n  align-items: center;\n  gap: 16px;\n}\n\n.admin-subtitle[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  color: var(--text-muted);\n  font-weight: 500;\n}\n\n.add-product-btn[_ngcontent-%COMP%] {\n  background: var(--primary-gradient);\n  color: white;\n  border: none;\n  padding: 12px 24px;\n  border-radius: 8px;\n  font-weight: 600;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  transition: all 0.3s ease;\n  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);\n}\n\n.add-product-btn[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 6px 20px rgba(102, 126, 234, 0.6);\n}\n\n.filters-section[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.1);\n  backdrop-filter: blur(20px);\n  border: 1px solid rgba(255, 255, 255, 0.2);\n  border-radius: 12px;\n  padding: 20px;\n  margin-bottom: 20px;\n  display: flex;\n  gap: 20px;\n  align-items: center;\n  flex-wrap: wrap;\n}\n\n.search-box[_ngcontent-%COMP%] {\n  position: relative;\n  flex: 1;\n  min-width: 250px;\n}\n\n.search-box[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 12px;\n  top: 50%;\n  transform: translateY(-50%);\n  color: var(--text-muted);\n}\n\n.search-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px 12px 10px 40px;\n  border: 1px solid rgba(255, 255, 255, 0.2);\n  border-radius: 8px;\n  background: rgba(255, 255, 255, 0.1);\n  color: var(--text-white);\n  font-size: 0.9rem;\n}\n\n.search-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  color: var(--text-muted);\n}\n\n.filter-controls[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n}\n\n.category-filter[_ngcontent-%COMP%], \n.sort-filter[_ngcontent-%COMP%] {\n  padding: 10px 12px;\n  border: 1px solid rgba(255, 255, 255, 0.2);\n  border-radius: 8px;\n  background: rgba(255, 255, 255, 0.1);\n  color: var(--text-white);\n  font-size: 0.9rem;\n  cursor: pointer;\n}\n\n.products-table[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.1);\n  backdrop-filter: blur(20px);\n  border: 1px solid rgba(255, 255, 255, 0.2);\n  border-radius: 16px;\n  padding: 0;\n  overflow: hidden;\n}\n\n.table-header[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 70px 2fr 120px 100px 100px 80px 80px 100px;\n  background: rgba(255, 255, 255, 0.1);\n  padding: 20px;\n  font-weight: 600;\n  color: var(--text-white);\n  border-bottom: 1px solid rgba(255, 255, 255, 0.1);\n}\n\n.header-cell[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  font-size: 0.85rem;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n\n.product-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 70px 2fr 120px 100px 100px 80px 80px 100px;\n  padding: 15px 20px;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.05);\n  transition: all 0.3s ease;\n  min-height: 60px;\n  align-items: center;\n}\n\n.product-row[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.05);\n}\n\n.product-row[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n\n.cell[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n.product-image[_ngcontent-%COMP%] {\n  width: 45px;\n  height: 45px;\n  border-radius: 6px;\n  object-fit: cover;\n  border: 1px solid rgba(255, 255, 255, 0.1);\n}\n\n.product-name[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: var(--text-white);\n  font-size: 0.9rem;\n  margin-bottom: 3px;\n  line-height: 1.2;\n}\n\n.product-description[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  font-size: 0.75rem;\n  line-height: 1.2;\n  display: -webkit-box;\n  -webkit-line-clamp: 1;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n\n.category-pill[_ngcontent-%COMP%] {\n  background: rgba(0, 212, 255, 0.15);\n  color: var(--neon-blue);\n  padding: 4px 8px;\n  border-radius: 12px;\n  font-size: 0.75rem;\n  font-weight: 500;\n  text-transform: capitalize;\n  border: 1px solid rgba(0, 212, 255, 0.2);\n}\n\n.current-price[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: var(--text-white);\n  font-size: 0.9rem;\n}\n\n.original-price[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  font-size: 0.75rem;\n  text-decoration: line-through;\n  margin-top: 2px;\n}\n\n.rating-display[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  color: #ffc107;\n  font-weight: 600;\n  font-size: 0.8rem;\n}\n\n.rating-display[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n}\n\n.stock-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 3px;\n  font-weight: 600;\n  font-size: 0.8rem;\n}\n\n.current-stock[_ngcontent-%COMP%] {\n  color: var(--text-white);\n}\n\n.stock-separator[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n}\n\n.initial-stock[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n}\n\n.toggle-switch[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n  width: 40px;\n  height: 20px;\n}\n\n.toggle-switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n\n.slider[_ngcontent-%COMP%] {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(220, 53, 69, 0.3);\n  transition: 0.3s;\n  border-radius: 20px;\n  border: 1px solid rgba(220, 53, 69, 0.5);\n}\n\n.slider[_ngcontent-%COMP%]:before {\n  position: absolute;\n  content: \"\";\n  height: 14px;\n  width: 14px;\n  left: 2px;\n  bottom: 2px;\n  background-color: #dc3545;\n  transition: 0.3s;\n  border-radius: 50%;\n}\n\ninput[_ngcontent-%COMP%]:checked    + .slider[_ngcontent-%COMP%] {\n  background-color: rgba(40, 167, 69, 0.3);\n  border-color: rgba(40, 167, 69, 0.5);\n}\n\ninput[_ngcontent-%COMP%]:checked    + .slider[_ngcontent-%COMP%]:before {\n  transform: translateX(18px);\n  background-color: #28a745;\n}\n\n.actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 6px;\n}\n\n.action-btn[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.3s ease;\n  font-size: 0.75rem;\n}\n\n.action-btn.edit[_ngcontent-%COMP%] {\n  background: rgba(0, 123, 255, 0.2);\n  color: #007bff;\n  border: 1px solid rgba(0, 123, 255, 0.3);\n}\n\n.action-btn.edit[_ngcontent-%COMP%]:hover {\n  background: rgba(0, 123, 255, 0.3);\n  transform: scale(1.1);\n}\n\n.action-btn.delete[_ngcontent-%COMP%] {\n  background: rgba(220, 53, 69, 0.2);\n  color: #dc3545;\n  border: 1px solid rgba(220, 53, 69, 0.3);\n}\n\n.action-btn.delete[_ngcontent-%COMP%]:hover {\n  background: rgba(220, 53, 69, 0.3);\n  transform: scale(1.1);\n}\n\n.empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 60px 20px;\n  color: var(--text-muted);\n}\n\n.empty-state[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 4rem;\n  margin-bottom: 20px;\n  opacity: 0.5;\n}\n\n.empty-state[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  margin-bottom: 10px;\n  color: var(--text-white);\n}\n\n\n\n.modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.7);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n}\n\n.modal-content[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.1);\n  backdrop-filter: blur(20px);\n  border: 1px solid rgba(255, 255, 255, 0.2);\n  border-radius: 16px;\n  width: 90%;\n  max-width: 400px;\n  overflow: hidden;\n}\n\n.modal-header[_ngcontent-%COMP%] {\n  padding: 20px;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.1);\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.modal-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: var(--text-white);\n  font-size: 1.2rem;\n  font-weight: 600;\n}\n\n.close-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: var(--text-muted);\n  font-size: 1.2rem;\n  cursor: pointer;\n  padding: 4px;\n}\n\n.modal-body[_ngcontent-%COMP%] {\n  padding: 20px;\n  color: var(--text-muted);\n  line-height: 1.5;\n}\n\n.modal-footer[_ngcontent-%COMP%] {\n  padding: 20px;\n  display: flex;\n  gap: 12px;\n  justify-content: flex-end;\n}\n\n.btn-cancel[_ngcontent-%COMP%], \n.btn-delete[_ngcontent-%COMP%] {\n  padding: 8px 16px;\n  border: none;\n  border-radius: 6px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\n\n.btn-cancel[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.1);\n  color: var(--text-white);\n  border: 1px solid rgba(255, 255, 255, 0.2);\n}\n\n.btn-delete[_ngcontent-%COMP%] {\n  background: rgba(220, 53, 69, 0.8);\n  color: white;\n}\n\n.btn-cancel[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.15);\n}\n\n.btn-delete[_ngcontent-%COMP%]:hover {\n  background: rgba(220, 53, 69, 1);\n}\n\n\n\n@media (max-width: 1024px) {\n  .table-header[_ngcontent-%COMP%], \n   .product-row[_ngcontent-%COMP%] {\n    grid-template-columns: 60px 2fr 100px 80px 80px 70px 90px;\n  }\n  \n  .header-cell.category[_ngcontent-%COMP%], \n   .cell.category[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n\n@media (max-width: 768px) {\n  .admin-products-container[_ngcontent-%COMP%] {\n    padding: 100px 15px 40px;\n  }\n  \n  .admin-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 20px;\n  }\n  \n  .filters-section[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n  }\n  \n  .search-box[_ngcontent-%COMP%] {\n    min-width: auto;\n  }\n  \n  .filter-controls[_ngcontent-%COMP%] {\n    justify-content: space-between;\n  }\n  \n  .table-header[_ngcontent-%COMP%] {\n    display: none;\n  }\n  \n  .product-row[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    padding: 20px;\n    gap: 15px;\n    border-radius: 12px;\n    margin-bottom: 15px;\n    background: rgba(255, 255, 255, 0.05);\n  }\n  \n  .cell[_ngcontent-%COMP%] {\n    justify-content: space-between;\n    width: 100%;\n  }\n  \n  .cell.image[_ngcontent-%COMP%] {\n    justify-content: center;\n  }\n  \n  .product-image[_ngcontent-%COMP%] {\n    width: 60px;\n    height: 60px;\n  }\n  \n  .cell.name[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    text-align: center;\n  }\n  \n  .cell.actions[_ngcontent-%COMP%] {\n    justify-content: center;\n    gap: 15px;\n  }\n  \n  .action-btn[_ngcontent-%COMP%] {\n    width: 36px;\n    height: 36px;\n    font-size: 0.9rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9hZG1pbi9wcm9kdWN0cy9hZG1pbi1wcm9kdWN0cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWlCO0VBQ2pCLHdCQUF3QjtFQUN4QiwwRUFBMEU7QUFDNUU7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxPQUFPO0FBQ1Q7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLHdCQUF3QjtFQUN4QiwyQ0FBMkM7RUFDM0Msa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsU0FBUztBQUNYOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLHdCQUF3QjtFQUN4QixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxtQ0FBbUM7RUFDbkMsWUFBWTtFQUNaLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixRQUFRO0VBQ1IseUJBQXlCO0VBQ3pCLCtDQUErQztBQUNqRDs7QUFFQTtFQUNFLDJCQUEyQjtFQUMzQiwrQ0FBK0M7QUFDakQ7O0FBRUE7RUFDRSxvQ0FBb0M7RUFDcEMsMkJBQTJCO0VBQzNCLDBDQUEwQztFQUMxQyxtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsU0FBUztFQUNULG1CQUFtQjtFQUNuQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLE9BQU87RUFDUCxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFFBQVE7RUFDUiwyQkFBMkI7RUFDM0Isd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UsV0FBVztFQUNYLDRCQUE0QjtFQUM1QiwwQ0FBMEM7RUFDMUMsa0JBQWtCO0VBQ2xCLG9DQUFvQztFQUNwQyx3QkFBd0I7RUFDeEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFNBQVM7QUFDWDs7QUFFQTs7RUFFRSxrQkFBa0I7RUFDbEIsMENBQTBDO0VBQzFDLGtCQUFrQjtFQUNsQixvQ0FBb0M7RUFDcEMsd0JBQXdCO0VBQ3hCLGlCQUFpQjtFQUNqQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usb0NBQW9DO0VBQ3BDLDJCQUEyQjtFQUMzQiwwQ0FBMEM7RUFDMUMsbUJBQW1CO0VBQ25CLFVBQVU7RUFDVixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsaUVBQWlFO0VBQ2pFLG9DQUFvQztFQUNwQyxhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLHdCQUF3QjtFQUN4QixpREFBaUQ7QUFDbkQ7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGlFQUFpRTtFQUNqRSxrQkFBa0I7RUFDbEIsa0RBQWtEO0VBQ2xELHlCQUF5QjtFQUN6QixnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UscUNBQXFDO0FBQ3ZDOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQiwwQ0FBMEM7QUFDNUM7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsd0JBQXdCO0VBQ3hCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsb0JBQW9CO0VBQ3BCLHFCQUFxQjtFQUNyQiw0QkFBNEI7RUFDNUIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsbUNBQW1DO0VBQ25DLHVCQUF1QjtFQUN2QixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsMEJBQTBCO0VBQzFCLHdDQUF3QztBQUMxQzs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQix3QkFBd0I7RUFDeEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLGtCQUFrQjtFQUNsQiw2QkFBNkI7RUFDN0IsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsUUFBUTtFQUNSLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixRQUFRO0VBQ1IsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFVBQVU7RUFDVixRQUFRO0VBQ1IsU0FBUztBQUNYOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixNQUFNO0VBQ04sT0FBTztFQUNQLFFBQVE7RUFDUixTQUFTO0VBQ1Qsd0NBQXdDO0VBQ3hDLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsd0NBQXdDO0FBQzFDOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1osV0FBVztFQUNYLFNBQVM7RUFDVCxXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSx3Q0FBd0M7RUFDeEMsb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0UsMkJBQTJCO0VBQzNCLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixRQUFRO0FBQ1Y7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLHlCQUF5QjtFQUN6QixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQ0FBa0M7RUFDbEMsY0FBYztFQUNkLHdDQUF3QztBQUMxQzs7QUFFQTtFQUNFLGtDQUFrQztFQUNsQyxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxrQ0FBa0M7RUFDbEMsY0FBYztFQUNkLHdDQUF3QztBQUMxQzs7QUFFQTtFQUNFLGtDQUFrQztFQUNsQyxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQix3QkFBd0I7QUFDMUI7O0FBRUEsaUJBQWlCO0FBQ2pCO0VBQ0UsZUFBZTtFQUNmLE1BQU07RUFDTixPQUFPO0VBQ1AsV0FBVztFQUNYLFlBQVk7RUFDWiw4QkFBOEI7RUFDOUIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsYUFBYTtBQUNmOztBQUVBO0VBQ0Usb0NBQW9DO0VBQ3BDLDJCQUEyQjtFQUMzQiwwQ0FBMEM7RUFDMUMsbUJBQW1CO0VBQ25CLFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGlEQUFpRDtFQUNqRCxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHdCQUF3QjtFQUN4QixpQkFBaUI7RUFDakIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWix3QkFBd0I7RUFDeEIsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isd0JBQXdCO0VBQ3hCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixhQUFhO0VBQ2IsU0FBUztFQUNULHlCQUF5QjtBQUMzQjs7QUFFQTs7RUFFRSxpQkFBaUI7RUFDakIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLG9DQUFvQztFQUNwQyx3QkFBd0I7RUFDeEIsMENBQTBDO0FBQzVDOztBQUVBO0VBQ0Usa0NBQWtDO0VBQ2xDLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHFDQUFxQztBQUN2Qzs7QUFFQTtFQUNFLGdDQUFnQztBQUNsQzs7QUFFQSxzQkFBc0I7QUFDdEI7RUFDRTs7SUFFRSx5REFBeUQ7RUFDM0Q7O0VBRUE7O0lBRUUsYUFBYTtFQUNmO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLHdCQUF3QjtFQUMxQjs7RUFFQTtJQUNFLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsU0FBUztFQUNYOztFQUVBO0lBQ0Usc0JBQXNCO0lBQ3RCLG9CQUFvQjtFQUN0Qjs7RUFFQTtJQUNFLGVBQWU7RUFDakI7O0VBRUE7SUFDRSw4QkFBOEI7RUFDaEM7O0VBRUE7SUFDRSxhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGFBQWE7SUFDYixTQUFTO0lBQ1QsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixxQ0FBcUM7RUFDdkM7O0VBRUE7SUFDRSw4QkFBOEI7SUFDOUIsV0FBVztFQUNiOztFQUVBO0lBQ0UsdUJBQXVCO0VBQ3pCOztFQUVBO0lBQ0UsV0FBVztJQUNYLFlBQVk7RUFDZDs7RUFFQTtJQUNFLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0UsdUJBQXVCO0lBQ3ZCLFNBQVM7RUFDWDs7RUFFQTtJQUNFLFdBQVc7SUFDWCxZQUFZO0lBQ1osaUJBQWlCO0VBQ25CO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIuYWRtaW4tcHJvZHVjdHMtY29udGFpbmVyIHtcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIHBhZGRpbmc6IDEyMHB4IDIwcHggNjBweDtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzY2N2VlYSAwJSwgIzc2NGJhMiA1MCUsICNmMDkzZmIgMTAwJSk7XG59XG5cbi5hZG1pbi1oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG59XG5cbi5oZWFkZXItbGVmdCB7XG4gIGZsZXg6IDE7XG59XG5cbi5hZG1pbi10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMi41cmVtO1xuICBmb250LXdlaWdodDogNzAwO1xuICBjb2xvcjogdmFyKC0tdGV4dC13aGl0ZSk7XG4gIHRleHQtc2hhZG93OiAycHggMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxNnB4O1xufVxuXG4uYWRtaW4tc3VidGl0bGUge1xuICBmb250LXNpemU6IDEuMXJlbTtcbiAgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpO1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4uYWRkLXByb2R1Y3QtYnRuIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeS1ncmFkaWVudCk7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyOiBub25lO1xuICBwYWRkaW5nOiAxMnB4IDI0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDhweDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbiAgYm94LXNoYWRvdzogMCA0cHggMTVweCByZ2JhKDEwMiwgMTI2LCAyMzQsIDAuNCk7XG59XG5cbi5hZGQtcHJvZHVjdC1idG46aG92ZXIge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XG4gIGJveC1zaGFkb3c6IDAgNnB4IDIwcHggcmdiYSgxMDIsIDEyNiwgMjM0LCAwLjYpO1xufVxuXG4uZmlsdGVycy1zZWN0aW9uIHtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMjBweCk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgcGFkZGluZzogMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAyMHB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG5cbi5zZWFyY2gtYm94IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmbGV4OiAxO1xuICBtaW4td2lkdGg6IDI1MHB4O1xufVxuXG4uc2VhcmNoLWJveCBpIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAxMnB4O1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICBjb2xvcjogdmFyKC0tdGV4dC1tdXRlZCk7XG59XG5cbi5zZWFyY2gtYm94IGlucHV0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDEwcHggMTJweCAxMHB4IDQwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LXdoaXRlKTtcbiAgZm9udC1zaXplOiAwLjlyZW07XG59XG5cbi5zZWFyY2gtYm94IGlucHV0OjpwbGFjZWhvbGRlciB7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LW11dGVkKTtcbn1cblxuLmZpbHRlci1jb250cm9scyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMTJweDtcbn1cblxuLmNhdGVnb3J5LWZpbHRlcixcbi5zb3J0LWZpbHRlciB7XG4gIHBhZGRpbmc6IDEwcHggMTJweDtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcbiAgY29sb3I6IHZhcigtLXRleHQtd2hpdGUpO1xuICBmb250LXNpemU6IDAuOXJlbTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ucHJvZHVjdHMtdGFibGUge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigyMHB4KTtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xuICBib3JkZXItcmFkaXVzOiAxNnB4O1xuICBwYWRkaW5nOiAwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4udGFibGUtaGVhZGVyIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA3MHB4IDJmciAxMjBweCAxMDBweCAxMDBweCA4MHB4IDgwcHggMTAwcHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcbiAgcGFkZGluZzogMjBweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6IHZhcigtLXRleHQtd2hpdGUpO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xufVxuXG4uaGVhZGVyLWNlbGwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmb250LXNpemU6IDAuODVyZW07XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGxldHRlci1zcGFjaW5nOiAwLjVweDtcbn1cblxuLnByb2R1Y3Qtcm93IHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA3MHB4IDJmciAxMjBweCAxMDBweCAxMDBweCA4MHB4IDgwcHggMTAwcHg7XG4gIHBhZGRpbmc6IDE1cHggMjBweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNSk7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG4gIG1pbi1oZWlnaHQ6IDYwcHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5wcm9kdWN0LXJvdzpob3ZlciB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNSk7XG59XG5cbi5wcm9kdWN0LXJvdzpsYXN0LWNoaWxkIHtcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbn1cblxuLmNlbGwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ucHJvZHVjdC1pbWFnZSB7XG4gIHdpZHRoOiA0NXB4O1xuICBoZWlnaHQ6IDQ1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcbn1cblxuLnByb2R1Y3QtbmFtZSB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LXdoaXRlKTtcbiAgZm9udC1zaXplOiAwLjlyZW07XG4gIG1hcmdpbi1ib3R0b206IDNweDtcbiAgbGluZS1oZWlnaHQ6IDEuMjtcbn1cblxuLnByb2R1Y3QtZGVzY3JpcHRpb24ge1xuICBjb2xvcjogdmFyKC0tdGV4dC1tdXRlZCk7XG4gIGZvbnQtc2l6ZTogMC43NXJlbTtcbiAgbGluZS1oZWlnaHQ6IDEuMjtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIC13ZWJraXQtbGluZS1jbGFtcDogMTtcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmNhdGVnb3J5LXBpbGwge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDIxMiwgMjU1LCAwLjE1KTtcbiAgY29sb3I6IHZhcigtLW5lb24tYmx1ZSk7XG4gIHBhZGRpbmc6IDRweCA4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIGZvbnQtc2l6ZTogMC43NXJlbTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMjEyLCAyNTUsIDAuMik7XG59XG5cbi5jdXJyZW50LXByaWNlIHtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgY29sb3I6IHZhcigtLXRleHQtd2hpdGUpO1xuICBmb250LXNpemU6IDAuOXJlbTtcbn1cblxuLm9yaWdpbmFsLXByaWNlIHtcbiAgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpO1xuICBmb250LXNpemU6IDAuNzVyZW07XG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xuICBtYXJnaW4tdG9wOiAycHg7XG59XG5cbi5yYXRpbmctZGlzcGxheSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogNHB4O1xuICBjb2xvcjogI2ZmYzEwNztcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAwLjhyZW07XG59XG5cbi5yYXRpbmctZGlzcGxheSBpIHtcbiAgZm9udC1zaXplOiAwLjdyZW07XG59XG5cbi5zdG9jay1pbmZvIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAzcHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xufVxuXG4uY3VycmVudC1zdG9jayB7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LXdoaXRlKTtcbn1cblxuLnN0b2NrLXNlcGFyYXRvciB7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LW11dGVkKTtcbn1cblxuLmluaXRpYWwtc3RvY2sge1xuICBjb2xvcjogdmFyKC0tdGV4dC1tdXRlZCk7XG59XG5cbi50b2dnbGUtc3dpdGNoIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDIwcHg7XG59XG5cbi50b2dnbGUtc3dpdGNoIGlucHV0IHtcbiAgb3BhY2l0eTogMDtcbiAgd2lkdGg6IDA7XG4gIGhlaWdodDogMDtcbn1cblxuLnNsaWRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjIwLCA1MywgNjksIDAuMyk7XG4gIHRyYW5zaXRpb246IDAuM3M7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjIwLCA1MywgNjksIDAuNSk7XG59XG5cbi5zbGlkZXI6YmVmb3JlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjb250ZW50OiBcIlwiO1xuICBoZWlnaHQ6IDE0cHg7XG4gIHdpZHRoOiAxNHB4O1xuICBsZWZ0OiAycHg7XG4gIGJvdHRvbTogMnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGMzNTQ1O1xuICB0cmFuc2l0aW9uOiAwLjNzO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbmlucHV0OmNoZWNrZWQgKyAuc2xpZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg0MCwgMTY3LCA2OSwgMC4zKTtcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDQwLCAxNjcsIDY5LCAwLjUpO1xufVxuXG5pbnB1dDpjaGVja2VkICsgLnNsaWRlcjpiZWZvcmUge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMThweCk7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyOGE3NDU7XG59XG5cbi5hY3Rpb25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiA2cHg7XG59XG5cbi5hY3Rpb24tYnRuIHtcbiAgd2lkdGg6IDI4cHg7XG4gIGhlaWdodDogMjhweDtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG4gIGZvbnQtc2l6ZTogMC43NXJlbTtcbn1cblxuLmFjdGlvbi1idG4uZWRpdCB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMTIzLCAyNTUsIDAuMik7XG4gIGNvbG9yOiAjMDA3YmZmO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDEyMywgMjU1LCAwLjMpO1xufVxuXG4uYWN0aW9uLWJ0bi5lZGl0OmhvdmVyIHtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAxMjMsIDI1NSwgMC4zKTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xufVxuXG4uYWN0aW9uLWJ0bi5kZWxldGUge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDIyMCwgNTMsIDY5LCAwLjIpO1xuICBjb2xvcjogI2RjMzU0NTtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyMjAsIDUzLCA2OSwgMC4zKTtcbn1cblxuLmFjdGlvbi1idG4uZGVsZXRlOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogcmdiYSgyMjAsIDUzLCA2OSwgMC4zKTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xufVxuXG4uZW1wdHktc3RhdGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDYwcHggMjBweDtcbiAgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpO1xufVxuXG4uZW1wdHktc3RhdGUgaSB7XG4gIGZvbnQtc2l6ZTogNHJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgb3BhY2l0eTogMC41O1xufVxuXG4uZW1wdHktc3RhdGUgaDMge1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgY29sb3I6IHZhcigtLXRleHQtd2hpdGUpO1xufVxuXG4vKiBNb2RhbCBTdHlsZXMgKi9cbi5tb2RhbC1vdmVybGF5IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC43KTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHotaW5kZXg6IDEwMDA7XG59XG5cbi5tb2RhbC1jb250ZW50IHtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMjBweCk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcbiAgd2lkdGg6IDkwJTtcbiAgbWF4LXdpZHRoOiA0MDBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLm1vZGFsLWhlYWRlciB7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLm1vZGFsLWhlYWRlciBoMyB7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LXdoaXRlKTtcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5jbG9zZS1idG4ge1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LW11dGVkKTtcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcGFkZGluZzogNHB4O1xufVxuXG4ubW9kYWwtYm9keSB7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LW11dGVkKTtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbn1cblxuLm1vZGFsLWZvb3RlciB7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMTJweDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cblxuLmJ0bi1jYW5jZWwsXG4uYnRuLWRlbGV0ZSB7XG4gIHBhZGRpbmc6IDhweCAxNnB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xufVxuXG4uYnRuLWNhbmNlbCB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcbiAgY29sb3I6IHZhcigtLXRleHQtd2hpdGUpO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XG59XG5cbi5idG4tZGVsZXRlIHtcbiAgYmFja2dyb3VuZDogcmdiYSgyMjAsIDUzLCA2OSwgMC44KTtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uYnRuLWNhbmNlbDpob3ZlciB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNSk7XG59XG5cbi5idG4tZGVsZXRlOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogcmdiYSgyMjAsIDUzLCA2OSwgMSk7XG59XG5cbi8qIFJlc3BvbnNpdmUgRGVzaWduICovXG5AbWVkaWEgKG1heC13aWR0aDogMTAyNHB4KSB7XG4gIC50YWJsZS1oZWFkZXIsXG4gIC5wcm9kdWN0LXJvdyB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA2MHB4IDJmciAxMDBweCA4MHB4IDgwcHggNzBweCA5MHB4O1xuICB9XG4gIFxuICAuaGVhZGVyLWNlbGwuY2F0ZWdvcnksXG4gIC5jZWxsLmNhdGVnb3J5IHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuYWRtaW4tcHJvZHVjdHMtY29udGFpbmVyIHtcbiAgICBwYWRkaW5nOiAxMDBweCAxNXB4IDQwcHg7XG4gIH1cbiAgXG4gIC5hZG1pbi1oZWFkZXIge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgZ2FwOiAyMHB4O1xuICB9XG4gIFxuICAuZmlsdGVycy1zZWN0aW9uIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuICB9XG4gIFxuICAuc2VhcmNoLWJveCB7XG4gICAgbWluLXdpZHRoOiBhdXRvO1xuICB9XG4gIFxuICAuZmlsdGVyLWNvbnRyb2xzIHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIH1cbiAgXG4gIC50YWJsZS1oZWFkZXIge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgXG4gIC5wcm9kdWN0LXJvdyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgZ2FwOiAxNXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpO1xuICB9XG4gIFxuICAuY2VsbCB7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIFxuICAuY2VsbC5pbWFnZSB7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cbiAgXG4gIC5wcm9kdWN0LWltYWdlIHtcbiAgICB3aWR0aDogNjBweDtcbiAgICBoZWlnaHQ6IDYwcHg7XG4gIH1cbiAgXG4gIC5jZWxsLm5hbWUge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIFxuICAuY2VsbC5hY3Rpb25zIHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBnYXA6IDE1cHg7XG4gIH1cbiAgXG4gIC5hY3Rpb24tYnRuIHtcbiAgICB3aWR0aDogMzZweDtcbiAgICBoZWlnaHQ6IDM2cHg7XG4gICAgZm9udC1zaXplOiAwLjlyZW07XG4gIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 5383:
/*!*****************************************************************!*\
  !*** ./src/app/components/admin/users/admin-users.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdminUsersComponent: () => (/* binding */ AdminUsersComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);





function AdminUsersComponent_tr_43_button_43_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminUsersComponent_tr_43_button_43_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);
      const user_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.deleteUser(user_r2.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function AdminUsersComponent_tr_43_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr")(1, "td")(2, "div", 13)(3, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 16)(6, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "td")(13, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td")(16, "select", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AdminUsersComponent_tr_43_Template_select_change_16_listener($event) {
      const user_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.updateUserStatus(user_r2, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Active");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "option", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Inactive");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Blocked");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "td")(24, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "td")(27, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "td")(30, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](32, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "td")(34, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](36, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "td")(38, "div", 26)(39, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminUsersComponent_tr_43_Template_button_click_39_listener() {
      const user_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.viewUser(user_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "i", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminUsersComponent_tr_43_Template_button_click_41_listener() {
      const user_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.editUser(user_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "i", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](43, AdminUsersComponent_tr_43_button_43_Template, 2, 0, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const user_r2 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r2.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r2.phone);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", user_r2.role.toLowerCase());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r2.getRoleName(user_r2.role), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", user_r2.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r2.totalOrders);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u20B9", user_r2.totalSpent, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](32, 11, user_r2.joinDate, "short"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](36, 14, user_r2.lastLogin, "short"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", user_r2.role !== "ADMIN");
  }
}
class AdminUsersComponent {
  constructor() {
    this.users = [];
    this.filteredUsers = [];
    this.searchQuery = '';
    this.selectedRole = 'all';
  }
  ngOnInit() {
    this.loadUsers();
  }
  loadUsers() {
    // Mock users data
    this.users = [{
      id: 1,
      name: 'John Doe',
      email: 'john.doe@email.com',
      phone: '+91 9876543210',
      role: 'CUSTOMER',
      status: 'active',
      joinDate: new Date('2023-06-15'),
      lastLogin: new Date('2024-01-15T10:30:00'),
      totalOrders: 25,
      totalSpent: 12500
    }, {
      id: 2,
      name: 'Admin User',
      email: 'admin@demo.com',
      phone: '+91 9876543211',
      role: 'ADMIN',
      status: 'active',
      joinDate: new Date('2023-01-01'),
      lastLogin: new Date('2024-01-15T11:00:00'),
      totalOrders: 0,
      totalSpent: 0
    }, {
      id: 3,
      name: 'Jane Smith',
      email: 'jane.smith@email.com',
      phone: '+91 9876543212',
      role: 'CUSTOMER',
      status: 'active',
      joinDate: new Date('2023-08-20'),
      lastLogin: new Date('2024-01-14T16:45:00'),
      totalOrders: 18,
      totalSpent: 8900
    }, {
      id: 4,
      name: 'Mike Delivery',
      email: 'delivery@demo.com',
      phone: '+91 9876543213',
      role: 'DELIVERY_AGENT',
      status: 'active',
      joinDate: new Date('2023-03-10'),
      lastLogin: new Date('2024-01-15T09:15:00'),
      totalOrders: 0,
      totalSpent: 0
    }, {
      id: 5,
      name: 'Sarah Wilson',
      email: 'sarah.wilson@email.com',
      phone: '+91 9876543214',
      role: 'CUSTOMER',
      status: 'inactive',
      joinDate: new Date('2023-11-05'),
      lastLogin: new Date('2024-01-10T14:20:00'),
      totalOrders: 5,
      totalSpent: 2300
    }];
    this.filteredUsers = this.users;
  }
  filterUsers() {
    let filtered = this.users;
    // Filter by role
    if (this.selectedRole !== 'all') {
      filtered = filtered.filter(user => user.role === this.selectedRole);
    }
    // Filter by search query
    if (this.searchQuery.trim()) {
      filtered = filtered.filter(user => user.name.toLowerCase().includes(this.searchQuery.toLowerCase()) || user.email.toLowerCase().includes(this.searchQuery.toLowerCase()) || user.phone.includes(this.searchQuery));
    }
    this.filteredUsers = filtered;
  }
  filterByRole(role) {
    this.selectedRole = role;
    this.filterUsers();
  }
  updateUserStatus(user, event) {
    const newStatus = event.target.value;
    user.status = newStatus;
    alert(`User ${user.name} status updated to ${newStatus}`);
  }
  viewUser(user) {
    alert(`Viewing user: ${user.name}\nEmail: ${user.email}\nRole: ${user.role}`);
  }
  editUser(user) {
    alert(`Edit user functionality for ${user.name} will be implemented soon!`);
  }
  deleteUser(userId) {
    if (confirm('Are you sure you want to delete this user?')) {
      this.users = this.users.filter(user => user.id !== userId);
      this.filterUsers();
      alert('User deleted successfully!');
    }
  }
  getRoleName(role) {
    switch (role) {
      case 'CUSTOMER':
        return 'Customer';
      case 'ADMIN':
        return 'Admin';
      case 'DELIVERY_AGENT':
        return 'Delivery Agent';
      default:
        return role;
    }
  }
  static {
    this.ɵfac = function AdminUsersComponent_Factory(t) {
      return new (t || AdminUsersComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AdminUsersComponent,
      selectors: [["app-admin-users"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
      decls: 44,
      vars: 11,
      consts: [[1, "admin-container"], [1, "admin-header"], [1, "admin-title"], [1, "fas", "fa-users"], [1, "neon-text"], [1, "filter-buttons"], [1, "filter-btn", 3, "click"], [1, "users-table", "glass-card"], [1, "table-header"], [1, "search-bar"], ["type", "text", "placeholder", "Search users...", 1, "search-input", 3, "ngModelChange", "input", "ngModel"], [1, "table-container"], [4, "ngFor", "ngForOf"], [1, "user-info"], [1, "user-avatar"], [1, "fas", "fa-user"], [1, "user-details"], [1, "role-badge", 3, "ngClass"], [1, "status-select", 3, "change", "value"], ["value", "active"], ["value", "inactive"], ["value", "blocked"], [1, "orders-count"], [1, "total-spent"], [1, "join-date"], [1, "last-login"], [1, "action-buttons"], [1, "btn-icon", "view", 3, "click"], [1, "fas", "fa-eye"], [1, "btn-icon", "edit", 3, "click"], [1, "fas", "fa-edit"], ["class", "btn-icon delete", 3, "click", 4, "ngIf"], [1, "btn-icon", "delete", 3, "click"], [1, "fas", "fa-trash"]],
      template: function AdminUsersComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h1", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " User ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Management");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5)(8, "button", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminUsersComponent_Template_button_click_8_listener() {
            return ctx.filterByRole("all");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " All Users ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminUsersComponent_Template_button_click_10_listener() {
            return ctx.filterByRole("CUSTOMER");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Customers ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminUsersComponent_Template_button_click_12_listener() {
            return ctx.filterByRole("DELIVERY_AGENT");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Delivery Agents ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminUsersComponent_Template_button_click_14_listener() {
            return ctx.filterByRole("ADMIN");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Admins ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 7)(17, "div", 8)(18, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 9)(21, "input", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayListener"]("ngModelChange", function AdminUsersComponent_Template_input_ngModelChange_21_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayBindingSet"](ctx.searchQuery, $event) || (ctx.searchQuery = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function AdminUsersComponent_Template_input_input_21_listener() {
            return ctx.filterUsers();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 11)(23, "table")(24, "thead")(25, "tr")(26, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "User");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Role");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Status");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Orders");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Total Spent");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Join Date");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Last Login");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Actions");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "tbody");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](43, AdminUsersComponent_tr_43_Template, 44, 17, "tr", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.selectedRole === "all");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.selectedRole === "CUSTOMER");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.selectedRole === "DELIVERY_AGENT");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.selectedRole === "ADMIN");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Users (", ctx.filteredUsers.length, ")");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayProperty"]("ngModel", ctx.searchQuery);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](22);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.filteredUsers);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.DatePipe, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel],
      styles: [".admin-container[_ngcontent-%COMP%] {\n      min-height: 100vh;\n      padding: 120px 20px 60px;\n      background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);\n    }\n\n    .admin-header[_ngcontent-%COMP%] {\n      display: flex;\n      justify-content: space-between;\n      align-items: center;\n      margin-bottom: 40px;\n      flex-wrap: wrap;\n      gap: 20px;\n    }\n\n    .admin-title[_ngcontent-%COMP%] {\n      font-size: 2.5rem;\n      font-weight: 700;\n      color: var(--text-white);\n      text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);\n      display: flex;\n      align-items: center;\n      gap: 16px;\n    }\n\n    .filter-buttons[_ngcontent-%COMP%] {\n      display: flex;\n      gap: 10px;\n      flex-wrap: wrap;\n    }\n\n    .filter-btn[_ngcontent-%COMP%] {\n      padding: 10px 20px;\n      border: 2px solid rgba(255, 255, 255, 0.3);\n      background: transparent;\n      color: var(--text-white);\n      border-radius: var(--border-radius);\n      cursor: pointer;\n      transition: var(--transition);\n      font-weight: 500;\n    }\n\n    .filter-btn[_ngcontent-%COMP%]:hover, \n   .filter-btn.active[_ngcontent-%COMP%] {\n      background: var(--neon-blue);\n      border-color: var(--neon-blue);\n      box-shadow: 0 0 15px rgba(0, 212, 255, 0.4);\n    }\n\n    .users-table[_ngcontent-%COMP%] {\n      background: rgba(255, 255, 255, 0.1);\n      backdrop-filter: blur(20px);\n      border: 1px solid rgba(255, 255, 255, 0.2);\n      border-radius: var(--border-radius-lg);\n      overflow: hidden;\n    }\n\n    .table-header[_ngcontent-%COMP%] {\n      padding: 25px;\n      border-bottom: 1px solid rgba(255, 255, 255, 0.1);\n      display: flex;\n      justify-content: space-between;\n      align-items: center;\n    }\n\n    .table-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n      color: var(--text-white);\n      font-size: 1.3rem;\n      font-weight: 600;\n    }\n\n    .search-input[_ngcontent-%COMP%] {\n      padding: 10px 16px;\n      border: 2px solid rgba(255, 255, 255, 0.3);\n      border-radius: var(--border-radius);\n      background: rgba(255, 255, 255, 0.1);\n      color: var(--text-white);\n      width: 250px;\n    }\n\n    .table-container[_ngcontent-%COMP%] {\n      overflow-x: auto;\n    }\n\n    table[_ngcontent-%COMP%] {\n      width: 100%;\n      border-collapse: collapse;\n      min-width: 1000px;\n    }\n\n    th[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {\n      padding: 15px;\n      text-align: left;\n      border-bottom: 1px solid rgba(255, 255, 255, 0.1);\n    }\n\n    th[_ngcontent-%COMP%] {\n      background: rgba(255, 255, 255, 0.05);\n      color: var(--text-white);\n      font-weight: 600;\n      font-size: 0.9rem;\n      text-transform: uppercase;\n    }\n\n    .user-info[_ngcontent-%COMP%] {\n      display: flex;\n      align-items: center;\n      gap: 15px;\n    }\n\n    .user-avatar[_ngcontent-%COMP%] {\n      width: 50px;\n      height: 50px;\n      background: var(--primary-gradient);\n      border-radius: 50%;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      color: white;\n      font-size: 1.2rem;\n    }\n\n    .user-details[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n      color: var(--text-white);\n      font-size: 1rem;\n      font-weight: 600;\n      margin-bottom: 4px;\n    }\n\n    .user-details[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n      font-size: 0.85rem;\n      color: var(--text-muted);\n      margin-bottom: 2px;\n    }\n\n    .role-badge[_ngcontent-%COMP%] {\n      padding: 4px 12px;\n      border-radius: 20px;\n      font-size: 0.8rem;\n      font-weight: 600;\n      text-transform: uppercase;\n    }\n\n    .role-badge.customer[_ngcontent-%COMP%] {\n      background: rgba(40, 167, 69, 0.2);\n      color: #28a745;\n    }\n\n    .role-badge.admin[_ngcontent-%COMP%] {\n      background: rgba(220, 53, 69, 0.2);\n      color: #dc3545;\n    }\n\n    .role-badge.delivery_agent[_ngcontent-%COMP%] {\n      background: rgba(0, 123, 255, 0.2);\n      color: #007bff;\n    }\n\n    .status-select[_ngcontent-%COMP%] {\n      padding: 6px 12px;\n      border: 1px solid rgba(255, 255, 255, 0.3);\n      border-radius: var(--border-radius);\n      background: rgba(255, 255, 255, 0.1);\n      color: var(--text-white);\n      font-size: 0.9rem;\n    }\n\n    .orders-count[_ngcontent-%COMP%] {\n      background: var(--primary-gradient);\n      color: white;\n      padding: 4px 12px;\n      border-radius: 20px;\n      font-size: 0.8rem;\n      font-weight: 600;\n    }\n\n    .total-spent[_ngcontent-%COMP%] {\n      color: var(--neon-green);\n      font-weight: 700;\n      font-size: 1rem;\n    }\n\n    .join-date[_ngcontent-%COMP%], .last-login[_ngcontent-%COMP%] {\n      color: var(--text-muted);\n      font-size: 0.9rem;\n    }\n\n    .action-buttons[_ngcontent-%COMP%] {\n      display: flex;\n      gap: 8px;\n    }\n\n    .btn-icon[_ngcontent-%COMP%] {\n      width: 35px;\n      height: 35px;\n      border: none;\n      border-radius: 50%;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      cursor: pointer;\n      transition: var(--transition);\n    }\n\n    .btn-icon.view[_ngcontent-%COMP%] {\n      background: rgba(0, 212, 255, 0.2);\n      color: var(--neon-blue);\n    }\n\n    .btn-icon.edit[_ngcontent-%COMP%] {\n      background: rgba(255, 193, 7, 0.2);\n      color: #ffc107;\n    }\n\n    .btn-icon.delete[_ngcontent-%COMP%] {\n      background: rgba(255, 71, 87, 0.2);\n      color: #ff4757;\n    }\n\n    .btn-icon[_ngcontent-%COMP%]:hover {\n      transform: scale(1.1);\n    }\n\n    @media (max-width: 768px) {\n      .admin-header[_ngcontent-%COMP%] {\n        flex-direction: column;\n        align-items: stretch;\n      }\n      \n      .admin-title[_ngcontent-%COMP%] {\n        font-size: 2rem;\n        justify-content: center;\n      }\n      \n      .filter-buttons[_ngcontent-%COMP%] {\n        justify-content: center;\n      }\n      \n      .table-header[_ngcontent-%COMP%] {\n        flex-direction: column;\n        gap: 15px;\n      }\n      \n      .search-input[_ngcontent-%COMP%] {\n        width: 100%;\n      }\n    }\n  \n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9hZG1pbi91c2Vycy9hZG1pbi11c2Vycy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtJQUNJO01BQ0UsaUJBQWlCO01BQ2pCLHdCQUF3QjtNQUN4QiwwRUFBMEU7SUFDNUU7O0lBRUE7TUFDRSxhQUFhO01BQ2IsOEJBQThCO01BQzlCLG1CQUFtQjtNQUNuQixtQkFBbUI7TUFDbkIsZUFBZTtNQUNmLFNBQVM7SUFDWDs7SUFFQTtNQUNFLGlCQUFpQjtNQUNqQixnQkFBZ0I7TUFDaEIsd0JBQXdCO01BQ3hCLDJDQUEyQztNQUMzQyxhQUFhO01BQ2IsbUJBQW1CO01BQ25CLFNBQVM7SUFDWDs7SUFFQTtNQUNFLGFBQWE7TUFDYixTQUFTO01BQ1QsZUFBZTtJQUNqQjs7SUFFQTtNQUNFLGtCQUFrQjtNQUNsQiwwQ0FBMEM7TUFDMUMsdUJBQXVCO01BQ3ZCLHdCQUF3QjtNQUN4QixtQ0FBbUM7TUFDbkMsZUFBZTtNQUNmLDZCQUE2QjtNQUM3QixnQkFBZ0I7SUFDbEI7O0lBRUE7O01BRUUsNEJBQTRCO01BQzVCLDhCQUE4QjtNQUM5QiwyQ0FBMkM7SUFDN0M7O0lBRUE7TUFDRSxvQ0FBb0M7TUFDcEMsMkJBQTJCO01BQzNCLDBDQUEwQztNQUMxQyxzQ0FBc0M7TUFDdEMsZ0JBQWdCO0lBQ2xCOztJQUVBO01BQ0UsYUFBYTtNQUNiLGlEQUFpRDtNQUNqRCxhQUFhO01BQ2IsOEJBQThCO01BQzlCLG1CQUFtQjtJQUNyQjs7SUFFQTtNQUNFLHdCQUF3QjtNQUN4QixpQkFBaUI7TUFDakIsZ0JBQWdCO0lBQ2xCOztJQUVBO01BQ0Usa0JBQWtCO01BQ2xCLDBDQUEwQztNQUMxQyxtQ0FBbUM7TUFDbkMsb0NBQW9DO01BQ3BDLHdCQUF3QjtNQUN4QixZQUFZO0lBQ2Q7O0lBRUE7TUFDRSxnQkFBZ0I7SUFDbEI7O0lBRUE7TUFDRSxXQUFXO01BQ1gseUJBQXlCO01BQ3pCLGlCQUFpQjtJQUNuQjs7SUFFQTtNQUNFLGFBQWE7TUFDYixnQkFBZ0I7TUFDaEIsaURBQWlEO0lBQ25EOztJQUVBO01BQ0UscUNBQXFDO01BQ3JDLHdCQUF3QjtNQUN4QixnQkFBZ0I7TUFDaEIsaUJBQWlCO01BQ2pCLHlCQUF5QjtJQUMzQjs7SUFFQTtNQUNFLGFBQWE7TUFDYixtQkFBbUI7TUFDbkIsU0FBUztJQUNYOztJQUVBO01BQ0UsV0FBVztNQUNYLFlBQVk7TUFDWixtQ0FBbUM7TUFDbkMsa0JBQWtCO01BQ2xCLGFBQWE7TUFDYixtQkFBbUI7TUFDbkIsdUJBQXVCO01BQ3ZCLFlBQVk7TUFDWixpQkFBaUI7SUFDbkI7O0lBRUE7TUFDRSx3QkFBd0I7TUFDeEIsZUFBZTtNQUNmLGdCQUFnQjtNQUNoQixrQkFBa0I7SUFDcEI7O0lBRUE7TUFDRSxrQkFBa0I7TUFDbEIsd0JBQXdCO01BQ3hCLGtCQUFrQjtJQUNwQjs7SUFFQTtNQUNFLGlCQUFpQjtNQUNqQixtQkFBbUI7TUFDbkIsaUJBQWlCO01BQ2pCLGdCQUFnQjtNQUNoQix5QkFBeUI7SUFDM0I7O0lBRUE7TUFDRSxrQ0FBa0M7TUFDbEMsY0FBYztJQUNoQjs7SUFFQTtNQUNFLGtDQUFrQztNQUNsQyxjQUFjO0lBQ2hCOztJQUVBO01BQ0Usa0NBQWtDO01BQ2xDLGNBQWM7SUFDaEI7O0lBRUE7TUFDRSxpQkFBaUI7TUFDakIsMENBQTBDO01BQzFDLG1DQUFtQztNQUNuQyxvQ0FBb0M7TUFDcEMsd0JBQXdCO01BQ3hCLGlCQUFpQjtJQUNuQjs7SUFFQTtNQUNFLG1DQUFtQztNQUNuQyxZQUFZO01BQ1osaUJBQWlCO01BQ2pCLG1CQUFtQjtNQUNuQixpQkFBaUI7TUFDakIsZ0JBQWdCO0lBQ2xCOztJQUVBO01BQ0Usd0JBQXdCO01BQ3hCLGdCQUFnQjtNQUNoQixlQUFlO0lBQ2pCOztJQUVBO01BQ0Usd0JBQXdCO01BQ3hCLGlCQUFpQjtJQUNuQjs7SUFFQTtNQUNFLGFBQWE7TUFDYixRQUFRO0lBQ1Y7O0lBRUE7TUFDRSxXQUFXO01BQ1gsWUFBWTtNQUNaLFlBQVk7TUFDWixrQkFBa0I7TUFDbEIsYUFBYTtNQUNiLG1CQUFtQjtNQUNuQix1QkFBdUI7TUFDdkIsZUFBZTtNQUNmLDZCQUE2QjtJQUMvQjs7SUFFQTtNQUNFLGtDQUFrQztNQUNsQyx1QkFBdUI7SUFDekI7O0lBRUE7TUFDRSxrQ0FBa0M7TUFDbEMsY0FBYztJQUNoQjs7SUFFQTtNQUNFLGtDQUFrQztNQUNsQyxjQUFjO0lBQ2hCOztJQUVBO01BQ0UscUJBQXFCO0lBQ3ZCOztJQUVBO01BQ0U7UUFDRSxzQkFBc0I7UUFDdEIsb0JBQW9CO01BQ3RCOztNQUVBO1FBQ0UsZUFBZTtRQUNmLHVCQUF1QjtNQUN6Qjs7TUFFQTtRQUNFLHVCQUF1QjtNQUN6Qjs7TUFFQTtRQUNFLHNCQUFzQjtRQUN0QixTQUFTO01BQ1g7O01BRUE7UUFDRSxXQUFXO01BQ2I7SUFDRiIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgIC5hZG1pbi1jb250YWluZXIge1xuICAgICAgbWluLWhlaWdodDogMTAwdmg7XG4gICAgICBwYWRkaW5nOiAxMjBweCAyMHB4IDYwcHg7XG4gICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjNjY3ZWVhIDAlLCAjNzY0YmEyIDUwJSwgI2YwOTNmYiAxMDAlKTtcbiAgICB9XG5cbiAgICAuYWRtaW4taGVhZGVyIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgbWFyZ2luLWJvdHRvbTogNDBweDtcbiAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgIGdhcDogMjBweDtcbiAgICB9XG5cbiAgICAuYWRtaW4tdGl0bGUge1xuICAgICAgZm9udC1zaXplOiAyLjVyZW07XG4gICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgY29sb3I6IHZhcigtLXRleHQtd2hpdGUpO1xuICAgICAgdGV4dC1zaGFkb3c6IDJweCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgZ2FwOiAxNnB4O1xuICAgIH1cblxuICAgIC5maWx0ZXItYnV0dG9ucyB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZ2FwOiAxMHB4O1xuICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgIH1cblxuICAgIC5maWx0ZXItYnRuIHtcbiAgICAgIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcbiAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgY29sb3I6IHZhcigtLXRleHQtd2hpdGUpO1xuICAgICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICB0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uKTtcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgfVxuXG4gICAgLmZpbHRlci1idG46aG92ZXIsXG4gICAgLmZpbHRlci1idG4uYWN0aXZlIHtcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLW5lb24tYmx1ZSk7XG4gICAgICBib3JkZXItY29sb3I6IHZhcigtLW5lb24tYmx1ZSk7XG4gICAgICBib3gtc2hhZG93OiAwIDAgMTVweCByZ2JhKDAsIDIxMiwgMjU1LCAwLjQpO1xuICAgIH1cblxuICAgIC51c2Vycy10YWJsZSB7XG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XG4gICAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMjBweCk7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XG4gICAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzLWxnKTtcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgfVxuXG4gICAgLnRhYmxlLWhlYWRlciB7XG4gICAgICBwYWRkaW5nOiAyNXB4O1xuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIH1cblxuICAgIC50YWJsZS1oZWFkZXIgaDMge1xuICAgICAgY29sb3I6IHZhcigtLXRleHQtd2hpdGUpO1xuICAgICAgZm9udC1zaXplOiAxLjNyZW07XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgIH1cblxuICAgIC5zZWFyY2gtaW5wdXQge1xuICAgICAgcGFkZGluZzogMTBweCAxNnB4O1xuICAgICAgYm9yZGVyOiAycHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xuICAgICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XG4gICAgICBjb2xvcjogdmFyKC0tdGV4dC13aGl0ZSk7XG4gICAgICB3aWR0aDogMjUwcHg7XG4gICAgfVxuXG4gICAgLnRhYmxlLWNvbnRhaW5lciB7XG4gICAgICBvdmVyZmxvdy14OiBhdXRvO1xuICAgIH1cblxuICAgIHRhYmxlIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgICAgIG1pbi13aWR0aDogMTAwMHB4O1xuICAgIH1cblxuICAgIHRoLCB0ZCB7XG4gICAgICBwYWRkaW5nOiAxNXB4O1xuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XG4gICAgfVxuXG4gICAgdGgge1xuICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA1KTtcbiAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LXdoaXRlKTtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICBmb250LXNpemU6IDAuOXJlbTtcbiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgfVxuXG4gICAgLnVzZXItaW5mbyB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGdhcDogMTVweDtcbiAgICB9XG5cbiAgICAudXNlci1hdmF0YXIge1xuICAgICAgd2lkdGg6IDUwcHg7XG4gICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5LWdyYWRpZW50KTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICB9XG5cbiAgICAudXNlci1kZXRhaWxzIGg0IHtcbiAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LXdoaXRlKTtcbiAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICBtYXJnaW4tYm90dG9tOiA0cHg7XG4gICAgfVxuXG4gICAgLnVzZXItZGV0YWlscyBwIHtcbiAgICAgIGZvbnQtc2l6ZTogMC44NXJlbTtcbiAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LW11dGVkKTtcbiAgICAgIG1hcmdpbi1ib3R0b206IDJweDtcbiAgICB9XG5cbiAgICAucm9sZS1iYWRnZSB7XG4gICAgICBwYWRkaW5nOiA0cHggMTJweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIH1cblxuICAgIC5yb2xlLWJhZGdlLmN1c3RvbWVyIHtcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoNDAsIDE2NywgNjksIDAuMik7XG4gICAgICBjb2xvcjogIzI4YTc0NTtcbiAgICB9XG5cbiAgICAucm9sZS1iYWRnZS5hZG1pbiB7XG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDIyMCwgNTMsIDY5LCAwLjIpO1xuICAgICAgY29sb3I6ICNkYzM1NDU7XG4gICAgfVxuXG4gICAgLnJvbGUtYmFkZ2UuZGVsaXZlcnlfYWdlbnQge1xuICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAxMjMsIDI1NSwgMC4yKTtcbiAgICAgIGNvbG9yOiAjMDA3YmZmO1xuICAgIH1cblxuICAgIC5zdGF0dXMtc2VsZWN0IHtcbiAgICAgIHBhZGRpbmc6IDZweCAxMnB4O1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xuICAgICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XG4gICAgICBjb2xvcjogdmFyKC0tdGV4dC13aGl0ZSk7XG4gICAgICBmb250LXNpemU6IDAuOXJlbTtcbiAgICB9XG5cbiAgICAub3JkZXJzLWNvdW50IHtcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnktZ3JhZGllbnQpO1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgcGFkZGluZzogNHB4IDEycHg7XG4gICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgICAgZm9udC1zaXplOiAwLjhyZW07XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgIH1cblxuICAgIC50b3RhbC1zcGVudCB7XG4gICAgICBjb2xvcjogdmFyKC0tbmVvbi1ncmVlbik7XG4gICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgIH1cblxuICAgIC5qb2luLWRhdGUsIC5sYXN0LWxvZ2luIHtcbiAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LW11dGVkKTtcbiAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xuICAgIH1cblxuICAgIC5hY3Rpb24tYnV0dG9ucyB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZ2FwOiA4cHg7XG4gICAgfVxuXG4gICAgLmJ0bi1pY29uIHtcbiAgICAgIHdpZHRoOiAzNXB4O1xuICAgICAgaGVpZ2h0OiAzNXB4O1xuICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXRpb24pO1xuICAgIH1cblxuICAgIC5idG4taWNvbi52aWV3IHtcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMjEyLCAyNTUsIDAuMik7XG4gICAgICBjb2xvcjogdmFyKC0tbmVvbi1ibHVlKTtcbiAgICB9XG5cbiAgICAuYnRuLWljb24uZWRpdCB7XG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMTkzLCA3LCAwLjIpO1xuICAgICAgY29sb3I6ICNmZmMxMDc7XG4gICAgfVxuXG4gICAgLmJ0bi1pY29uLmRlbGV0ZSB7XG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgNzEsIDg3LCAwLjIpO1xuICAgICAgY29sb3I6ICNmZjQ3NTc7XG4gICAgfVxuXG4gICAgLmJ0bi1pY29uOmhvdmVyIHtcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbiAgICB9XG5cbiAgICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAgIC5hZG1pbi1oZWFkZXIge1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgLmFkbWluLXRpdGxlIHtcbiAgICAgICAgZm9udC1zaXplOiAycmVtO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgLmZpbHRlci1idXR0b25zIHtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICB9XG4gICAgICBcbiAgICAgIC50YWJsZS1oZWFkZXIge1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBnYXA6IDE1cHg7XG4gICAgICB9XG4gICAgICBcbiAgICAgIC5zZWFyY2gtaW5wdXQge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgIH1cbiAgICB9XG4gICJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 4860:
/*!**********************************************************!*\
  !*** ./src/app/components/auth/login/login.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoginComponent: () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../services/auth.service */ 4796);








function LoginComponent_i_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "i", 22);
  }
}
function LoginComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 23);
  }
}
class LoginComponent {
  constructor(authService, router) {
    this.authService = authService;
    this.router = router;
    this.loginData = {
      email: '',
      password: ''
    };
    this.loading = false;
  }
  onLogin() {
    if (!this.loginData.email || !this.loginData.password) {
      return;
    }
    this.loading = true;
    this.authService.login(this.loginData).subscribe({
      next: response => {
        this.loading = false;
        this.router.navigate(['/']);
      },
      error: error => {
        this.loading = false;
        console.error('Login failed:', error);
      }
    });
  }
  static {
    this.ɵfac = function LoginComponent_Factory(t) {
      return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: LoginComponent,
      selectors: [["app-login"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
      decls: 52,
      vars: 6,
      consts: [[1, "auth-container"], [1, "auth-card"], [1, "auth-header"], [1, "auth-title"], [1, "auth-subtitle"], [1, "auth-form", 3, "ngSubmit"], [1, "form-group"], [1, "form-label"], ["type", "email", "name", "email", "placeholder", "Enter your email address", "required", "", 1, "form-control", "focus-ring", 3, "ngModelChange", "ngModel"], ["type", "password", "name", "password", "placeholder", "Enter your password", "required", "", 1, "form-control", "focus-ring", 3, "ngModelChange", "ngModel"], ["type", "submit", 1, "btn", "btn-primary", "w-full", 3, "disabled"], ["class", "fas fa-sign-in-alt", 4, "ngIf"], ["class", "spinner", 4, "ngIf"], [1, "oauth-divider"], ["href", "http://localhost:8080/api/oauth2/authorization/google", 1, "btn", "btn-outline", "w-full", "oauth-btn"], [1, "fab", "fa-google"], [1, "demo-accounts"], [1, "demo-account"], [1, "demo-email"], [1, "auth-footer"], ["routerLink", "/forgot-password"], ["routerLink", "/signup"], [1, "fas", "fa-sign-in-alt"], [1, "spinner"]],
      template: function LoginComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h1", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Welcome Back");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Sign in to your RevCart account");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "form", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_7_listener() {
            return ctx.onLogin();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 6)(9, "label", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Email Address");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "input", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_11_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx.loginData.email, $event) || (ctx.loginData.email = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 6)(13, "label", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Password");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "input", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_15_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx.loginData.password, $event) || (ctx.loginData.password = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "button", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, LoginComponent_i_17_Template, 1, 0, "i", 11)(18, LoginComponent_div_18_Template, 1, 0, "div", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 13)(21, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "or");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "a", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "i", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, " Continue with Google ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 16)(27, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Demo Accounts");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 17)(30, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Customer:");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "span", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "customer@demo.com");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 17)(35, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "Admin:");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "span", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "admin@demo.com");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 17)(40, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "Password:");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "span", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "password123");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "div", 19)(45, "p")(46, "a", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, "Forgot Password?");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, " Don't have an account? ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "a", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, "Sign up here");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx.loginData.email);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx.loginData.password);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.loading ? "Signing In..." : "Sign In", " ");
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgForm, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink],
      styles: [".auth-container[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 20px;\n}\n\n.auth-card[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 400px;\n  padding: 40px;\n}\n\n.auth-header[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 30px;\n}\n\n.auth-title[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  font-weight: 700;\n  margin-bottom: 8px;\n}\n\n.auth-subtitle[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n\n.form-label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 8px;\n  font-weight: 500;\n}\n\n.w-full[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.auth-footer[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 30px;\n}\n\n.auth-footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  font-weight: 600;\n}\n\n.auth-footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n\n.oauth-divider[_ngcontent-%COMP%] {\n  text-align: center;\n  margin: 30px 0;\n  position: relative;\n}\n\n.oauth-divider[_ngcontent-%COMP%]::before {\n  content: '';\n  position: absolute;\n  top: 50%;\n  left: 0;\n  right: 0;\n  height: 1px;\n  background: #e5e7eb;\n}\n\n.oauth-divider[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  background: white;\n  padding: 0 16px;\n  color: #ffffff;\n  font-size: 14px;\n}\n\n.oauth-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 12px;\n  border-color: #db4437;\n  color: #db4437;\n}\n\n.oauth-btn[_ngcontent-%COMP%]:hover {\n  background: #db4437;\n  border-color: #db4437;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9hdXRoL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBaUI7RUFDakIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2Qsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsT0FBTztFQUNQLFFBQVE7RUFDUixXQUFXO0VBQ1gsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixjQUFjO0VBQ2QsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLFNBQVM7RUFDVCxxQkFBcUI7RUFDckIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixxQkFBcUI7RUFDckIsWUFBWTtBQUNkIiwic291cmNlc0NvbnRlbnQiOlsiLmF1dGgtY29udGFpbmVyIHtcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwYWRkaW5nOiAyMHB4O1xufVxuXG4uYXV0aC1jYXJkIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogNDAwcHg7XG4gIHBhZGRpbmc6IDQwcHg7XG59XG5cbi5hdXRoLWhlYWRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cblxuLmF1dGgtdGl0bGUge1xuICBmb250LXNpemU6IDJyZW07XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbn1cblxuLmF1dGgtc3VidGl0bGUge1xuICBmb250LXNpemU6IDFyZW07XG59XG5cbi5mb3JtLWdyb3VwIHtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLmZvcm0tbGFiZWwge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4udy1mdWxsIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5hdXRoLWZvb3RlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMzBweDtcbn1cblxuLmF1dGgtZm9vdGVyIGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5hdXRoLWZvb3RlciBhOmhvdmVyIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG5cbi5vYXV0aC1kaXZpZGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IDMwcHggMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4ub2F1dGgtZGl2aWRlcjo6YmVmb3JlIHtcbiAgY29udGVudDogJyc7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBoZWlnaHQ6IDFweDtcbiAgYmFja2dyb3VuZDogI2U1ZTdlYjtcbn1cblxuLm9hdXRoLWRpdmlkZXIgc3BhbiB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBwYWRkaW5nOiAwIDE2cHg7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5vYXV0aC1idG4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZ2FwOiAxMnB4O1xuICBib3JkZXItY29sb3I6ICNkYjQ0Mzc7XG4gIGNvbG9yOiAjZGI0NDM3O1xufVxuXG4ub2F1dGgtYnRuOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogI2RiNDQzNztcbiAgYm9yZGVyLWNvbG9yOiAjZGI0NDM3O1xuICBjb2xvcjogd2hpdGU7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 1668:
/*!******************************************************************************!*\
  !*** ./src/app/components/auth/oauth2-redirect/oauth2-redirect.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OAuth2RedirectComponent: () => (/* binding */ OAuth2RedirectComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../services/auth.service */ 4796);




class OAuth2RedirectComponent {
  constructor(route, router, authService) {
    this.route = route;
    this.router = router;
    this.authService = authService;
  }
  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      const token = params['token'];
      if (token) {
        localStorage.setItem('token', token);
        // Decode JWT to get user info
        try {
          const payload = JSON.parse(atob(token.split('.')[1]));
          const user = {
            id: 0,
            name: '',
            email: payload.sub,
            role: 'CUSTOMER'
          };
          localStorage.setItem('user', JSON.stringify(user));
          this.authService['currentUserSubject'].next(user);
        } catch (e) {
          console.error('Error parsing token:', e);
        }
        this.router.navigate(['/']);
      } else {
        this.router.navigate(['/login']);
      }
    });
  }
  static {
    this.ɵfac = function OAuth2RedirectComponent_Factory(t) {
      return new (t || OAuth2RedirectComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: OAuth2RedirectComponent,
      selectors: [["app-oauth2-redirect"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
      decls: 4,
      vars: 0,
      consts: [[1, "oauth2-redirect"], [1, "loading-spinner"]],
      template: function OAuth2RedirectComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Processing authentication...");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule],
      styles: [".oauth2-redirect[_ngcontent-%COMP%] {\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n      justify-content: center;\n      height: 100vh;\n      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\n      color: white;\n    }\n    .loading-spinner[_ngcontent-%COMP%] {\n      width: 40px;\n      height: 40px;\n      border: 3px solid rgba(255, 255, 255, 0.3);\n      border-top: 3px solid white;\n      border-radius: 50%;\n      animation: _ngcontent-%COMP%_spin 1s linear infinite;\n      margin-bottom: 20px;\n    }\n    @keyframes _ngcontent-%COMP%_spin {\n      0% { transform: rotate(0deg); }\n      100% { transform: rotate(360deg); }\n    }\n  \n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9hdXRoL29hdXRoMi1yZWRpcmVjdC9vYXV0aDItcmVkaXJlY3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7SUFDSTtNQUNFLGFBQWE7TUFDYixzQkFBc0I7TUFDdEIsbUJBQW1CO01BQ25CLHVCQUF1QjtNQUN2QixhQUFhO01BQ2IsNkRBQTZEO01BQzdELFlBQVk7SUFDZDtJQUNBO01BQ0UsV0FBVztNQUNYLFlBQVk7TUFDWiwwQ0FBMEM7TUFDMUMsMkJBQTJCO01BQzNCLGtCQUFrQjtNQUNsQixrQ0FBa0M7TUFDbEMsbUJBQW1CO0lBQ3JCO0lBQ0E7TUFDRSxLQUFLLHVCQUF1QixFQUFFO01BQzlCLE9BQU8seUJBQXlCLEVBQUU7SUFDcEMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAub2F1dGgyLXJlZGlyZWN0IHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgaGVpZ2h0OiAxMDB2aDtcbiAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICM2NjdlZWEgMCUsICM3NjRiYTIgMTAwJSk7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgfVxuICAgIC5sb2FkaW5nLXNwaW5uZXIge1xuICAgICAgd2lkdGg6IDQwcHg7XG4gICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICBib3JkZXI6IDNweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XG4gICAgICBib3JkZXItdG9wOiAzcHggc29saWQgd2hpdGU7XG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICBhbmltYXRpb246IHNwaW4gMXMgbGluZWFyIGluZmluaXRlO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICB9XG4gICAgQGtleWZyYW1lcyBzcGluIHtcbiAgICAgIDAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7IH1cbiAgICAgIDEwMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB9XG4gICAgfVxuICAiXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 5170:
/*!************************************************************!*\
  !*** ./src/app/components/auth/signup/signup.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SignupComponent: () => (/* binding */ SignupComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../services/auth.service */ 4796);








function SignupComponent_i_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "i", 18);
  }
}
function SignupComponent_i_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "i", 19);
  }
}
class SignupComponent {
  constructor(authService, router) {
    this.authService = authService;
    this.router = router;
    this.signupData = {
      name: '',
      email: '',
      password: '',
      phone: '',
      role: 'CUSTOMER'
    };
    this.loading = false;
  }
  onSignup() {
    if (!this.signupData.name || !this.signupData.email || !this.signupData.password) {
      alert('Please fill in all required fields');
      return;
    }
    console.log('Signup data:', this.signupData);
    this.loading = true;
    this.authService.signup(this.signupData).subscribe({
      next: response => {
        console.log('Signup successful:', response);
        this.loading = false;
        this.router.navigate(['/']);
      },
      error: error => {
        console.error('Signup failed:', error);
        this.loading = false;
        if (error.error && typeof error.error === 'string') {
          alert('Signup failed: ' + error.error);
        } else {
          alert('Signup failed. Please try again.');
        }
      }
    });
  }
  static {
    this.ɵfac = function SignupComponent_Factory(t) {
      return new (t || SignupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: SignupComponent,
      selectors: [["app-signup"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
      decls: 33,
      vars: 8,
      consts: [[1, "auth-container"], [1, "auth-card", "glass-card"], [1, "auth-header"], [1, "auth-title", "gradient-text"], [1, "auth-subtitle", "text-muted"], [1, "auth-form", 3, "ngSubmit"], [1, "form-group"], [1, "form-label", "text-white"], ["type", "text", "name", "name", "placeholder", "Enter your full name", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "email", "name", "email", "placeholder", "Enter your email", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "password", "name", "password", "placeholder", "Create a password", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "tel", "name", "phone", "placeholder", "Enter your phone number", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "submit", 1, "btn", "btn-neon", "w-full", 3, "disabled"], ["class", "fas fa-user-plus", 4, "ngIf"], ["class", "fas fa-spinner fa-spin", 4, "ngIf"], [1, "auth-footer"], [1, "text-muted"], ["routerLink", "/login", 1, "neon-text"], [1, "fas", "fa-user-plus"], [1, "fas", "fa-spinner", "fa-spin"]],
      template: function SignupComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h1", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Join RevCart");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Create your account to get started");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "form", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function SignupComponent_Template_form_ngSubmit_7_listener() {
            return ctx.onSignup();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 6)(9, "label", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Full Name");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "input", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function SignupComponent_Template_input_ngModelChange_11_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx.signupData.name, $event) || (ctx.signupData.name = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 6)(13, "label", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Email");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "input", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function SignupComponent_Template_input_ngModelChange_15_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx.signupData.email, $event) || (ctx.signupData.email = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 6)(17, "label", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Password");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "input", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function SignupComponent_Template_input_ngModelChange_19_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx.signupData.password, $event) || (ctx.signupData.password = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 6)(21, "label", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Phone (Optional)");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "input", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function SignupComponent_Template_input_ngModelChange_23_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx.signupData.phone, $event) || (ctx.signupData.phone = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "button", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, SignupComponent_i_25_Template, 1, 0, "i", 13)(26, SignupComponent_i_26_Template, 1, 0, "i", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 15)(29, "p", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, " Already have an account? ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "a", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "Sign in here");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx.signupData.name);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx.signupData.email);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx.signupData.password);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx.signupData.phone);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.loading ? "Creating Account..." : "Create Account", " ");
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgForm, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink],
      styles: [".auth-container[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: var(--space-6);\n  background: linear-gradient(135deg, var(--bg-secondary) 0%, var(--bg-tertiary) 100%);\n}\n\n.auth-card[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 420px;\n  padding: var(--space-10);\n  background: var(--bg-primary);\n  border-radius: var(--radius-2xl);\n  box-shadow: var(--shadow-xl);\n  border: 1px solid var(--border-color);\n}\n\n.auth-header[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: var(--space-8);\n}\n\n.auth-title[_ngcontent-%COMP%] {\n  font-size: var(--font-size-3xl);\n  font-weight: var(--font-weight-bold);\n  margin-bottom: var(--space-2);\n  color: var(--text-primary);\n}\n\n.auth-subtitle[_ngcontent-%COMP%] {\n  font-size: var(--font-size-base);\n  color: var(--text-secondary);\n  font-weight: var(--font-weight-normal);\n}\n\n.auth-form[_ngcontent-%COMP%] {\n  margin-bottom: var(--space-6);\n}\n\n.form-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: var(--space-4);\n}\n\n.auth-footer[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: var(--space-8);\n  padding-top: var(--space-6);\n  border-top: 1px solid var(--border-color);\n}\n\n.auth-footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--text-secondary);\n  font-size: var(--font-size-sm);\n  margin: 0;\n}\n\n.auth-footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: var(--primary);\n  text-decoration: none;\n  font-weight: var(--font-weight-semibold);\n  transition: var(--transition-normal);\n}\n\n.auth-footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: var(--primary-dark);\n  text-decoration: underline;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9hdXRoL3NpZ251cC9zaWdudXAuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2Qix1QkFBdUI7RUFDdkIsb0ZBQW9GO0FBQ3RGOztBQUVBO0VBQ0UsV0FBVztFQUNYLGdCQUFnQjtFQUNoQix3QkFBd0I7RUFDeEIsNkJBQTZCO0VBQzdCLGdDQUFnQztFQUNoQyw0QkFBNEI7RUFDNUIscUNBQXFDO0FBQ3ZDOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLCtCQUErQjtFQUMvQixvQ0FBb0M7RUFDcEMsNkJBQTZCO0VBQzdCLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLGdDQUFnQztFQUNoQyw0QkFBNEI7RUFDNUIsc0NBQXNDO0FBQ3hDOztBQUVBO0VBQ0UsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsMEJBQTBCO0VBQzFCLDJCQUEyQjtFQUMzQix5Q0FBeUM7QUFDM0M7O0FBRUE7RUFDRSw0QkFBNEI7RUFDNUIsOEJBQThCO0VBQzlCLFNBQVM7QUFDWDs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixxQkFBcUI7RUFDckIsd0NBQXdDO0VBQ3hDLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLDBCQUEwQjtFQUMxQiwwQkFBMEI7QUFDNUIiLCJzb3VyY2VzQ29udGVudCI6WyIuYXV0aC1jb250YWluZXIge1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmc6IHZhcigtLXNwYWNlLTYpO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCB2YXIoLS1iZy1zZWNvbmRhcnkpIDAlLCB2YXIoLS1iZy10ZXJ0aWFyeSkgMTAwJSk7XG59XG5cbi5hdXRoLWNhcmQge1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiA0MjBweDtcbiAgcGFkZGluZzogdmFyKC0tc3BhY2UtMTApO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1wcmltYXJ5KTtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzLTJ4bCk7XG4gIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdy14bCk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XG59XG5cbi5hdXRoLWhlYWRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogdmFyKC0tc3BhY2UtOCk7XG59XG5cbi5hdXRoLXRpdGxlIHtcbiAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtM3hsKTtcbiAgZm9udC13ZWlnaHQ6IHZhcigtLWZvbnQtd2VpZ2h0LWJvbGQpO1xuICBtYXJnaW4tYm90dG9tOiB2YXIoLS1zcGFjZS0yKTtcbiAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7XG59XG5cbi5hdXRoLXN1YnRpdGxlIHtcbiAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtYmFzZSk7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LXNlY29uZGFyeSk7XG4gIGZvbnQtd2VpZ2h0OiB2YXIoLS1mb250LXdlaWdodC1ub3JtYWwpO1xufVxuXG4uYXV0aC1mb3JtIHtcbiAgbWFyZ2luLWJvdHRvbTogdmFyKC0tc3BhY2UtNik7XG59XG5cbi5mb3JtLXJvdyB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcbiAgZ2FwOiB2YXIoLS1zcGFjZS00KTtcbn1cblxuLmF1dGgtZm9vdGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiB2YXIoLS1zcGFjZS04KTtcbiAgcGFkZGluZy10b3A6IHZhcigtLXNwYWNlLTYpO1xuICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTtcbn1cblxuLmF1dGgtZm9vdGVyIHAge1xuICBjb2xvcjogdmFyKC0tdGV4dC1zZWNvbmRhcnkpO1xuICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1zbSk7XG4gIG1hcmdpbjogMDtcbn1cblxuLmF1dGgtZm9vdGVyIGEge1xuICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgZm9udC13ZWlnaHQ6IHZhcigtLWZvbnQtd2VpZ2h0LXNlbWlib2xkKTtcbiAgdHJhbnNpdGlvbjogdmFyKC0tdHJhbnNpdGlvbi1ub3JtYWwpO1xufVxuXG4uYXV0aC1mb290ZXIgYTpob3ZlciB7XG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWRhcmspO1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 2727:
/*!***************************************************!*\
  !*** ./src/app/components/cart/cart.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CartComponent: () => (/* binding */ CartComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 2510);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/cart.service */ 6868);









function CartComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 8)(1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Your cart is empty");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Looks like you haven't added any delicious items to your cart yet. Start shopping to fill it up!");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, " Start Shopping ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
}
function CartComponent_div_8_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 28)(1, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 31)(4, "h4", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "p", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 35)(11, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CartComponent_div_8_div_2_Template_button_click_11_listener() {
      const item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2).$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r3.decreaseQuantity(item_r3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "i", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CartComponent_div_8_div_2_Template_button_click_15_listener() {
      const item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2).$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r3.increaseQuantity(item_r3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "i", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 41)(18, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "button", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CartComponent_div_8_div_2_Template_button_click_20_listener() {
      const item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2).$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r3.removeItem(item_r3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "i", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, " Remove ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", item_r3.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"])("alt", item_r3.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r3.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r3.category);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("\u20B9", item_r3.price, " each");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", item_r3.quantity <= 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r3.quantity);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("\u20B9", item_r3.price * item_r3.quantity, "");
  }
}
function CartComponent_div_8_div_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 18)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Discount");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("-\u20B9", ctx_r3.discount, "");
  }
}
function CartComponent_div_8_p_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("color", ctx_r3.couponApplied ? "#39ff14" : "#ff4757");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r3.couponMessage, " ");
  }
}
function CartComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 13)(1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, CartComponent_div_8_div_2_Template, 23, 8, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 16)(4, "h3", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Order Summary");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 18)(7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 18)(12, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Delivery Fee");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, CartComponent_div_8_div_16_Template, 5, 1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 18)(18, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Taxes & Fees");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 20)(23, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Total");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 21)(28, "div", 22)(29, "input", 23, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function CartComponent_div_8_Template_input_ngModelChange_29_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx_r3.couponCode, $event) || (ctx_r3.couponCode = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CartComponent_div_8_Template_button_click_31_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
      const couponInput_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](30);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r3.applyCoupon(couponInput_r5.value));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, " Apply ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](33, CartComponent_div_8_p_33_Template, 2, 3, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](35, "i", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, " Proceed to Checkout ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r3.cartItems)("ngForTrackBy", ctx_r3.trackByItemId);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Items (", ctx_r3.getTotalItems(), ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("\u20B9", ctx_r3.getSubtotal(), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("\u20B9", ctx_r3.deliveryFee, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.discount > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("\u20B9", ctx_r3.getTaxes(), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("\u20B9", ctx_r3.getTotal(), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx_r3.couponCode);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.couponMessage);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r3.cartItems.length === 0);
  }
}
class CartComponent {
  constructor(cartService) {
    this.cartService = cartService;
    this.cartItems = [];
    this.deliveryFee = 30;
    this.discount = 0;
    this.couponCode = '';
    this.couponMessage = '';
    this.couponApplied = false;
    this.cartSubscription = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subscription();
    // Available coupons
    this.availableCoupons = [{
      code: 'SAVE10',
      discount: 10,
      minAmount: 200
    }, {
      code: 'FRESH20',
      discount: 20,
      minAmount: 500
    }, {
      code: 'WELCOME15',
      discount: 15,
      minAmount: 300
    }];
  }
  ngOnInit() {
    this.cartSubscription = this.cartService.getCartItems().subscribe(items => {
      this.cartItems = items;
      // Recalculate discount if coupon was applied
      if (this.couponApplied) {
        this.applyCoupon(this.couponCode);
      }
    });
  }
  ngOnDestroy() {
    this.cartSubscription.unsubscribe();
  }
  increaseQuantity(item) {
    const result = this.cartService.increaseQuantity(item.id);
    if (!result.success && result.message) {
      alert(result.message);
    }
  }
  decreaseQuantity(item) {
    this.cartService.decreaseQuantity(item.id);
  }
  removeItem(item) {
    this.cartService.removeItem(item.id);
  }
  getTotalItems() {
    return this.cartItems.reduce((total, item) => total + item.quantity, 0);
  }
  getSubtotal() {
    return this.cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  }
  getTaxes() {
    return Math.round(this.getSubtotal() * 0.05); // 5% tax
  }
  getTotal() {
    return this.getSubtotal() + this.deliveryFee + this.getTaxes() - this.discount;
  }
  applyCoupon(code) {
    if (!code.trim()) {
      this.couponMessage = 'Please enter a coupon code';
      this.couponApplied = false;
      this.discount = 0;
      return;
    }
    const coupon = this.availableCoupons.find(c => c.code.toLowerCase() === code.toLowerCase());
    if (!coupon) {
      this.couponMessage = 'Invalid coupon code';
      this.couponApplied = false;
      this.discount = 0;
      return;
    }
    const subtotal = this.getSubtotal();
    if (subtotal < coupon.minAmount) {
      this.couponMessage = `Minimum order amount ₹${coupon.minAmount} required for this coupon`;
      this.couponApplied = false;
      this.discount = 0;
      return;
    }
    this.discount = Math.round(subtotal * (coupon.discount / 100));
    this.couponMessage = `Coupon applied! You saved ₹${this.discount}`;
    this.couponApplied = true;
    this.couponCode = code;
  }
  trackByItemId(index, item) {
    return item.id;
  }
  static {
    this.ɵfac = function CartComponent_Factory(t) {
      return new (t || CartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_cart_service__WEBPACK_IMPORTED_MODULE_0__.CartService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: CartComponent,
      selectors: [["app-cart"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
      decls: 9,
      vars: 2,
      consts: [["couponInput", ""], [1, "cart-container"], [1, "container"], [1, "cart-header"], [1, "page-title"], [1, "neon-text"], ["class", "empty-cart", 4, "ngIf"], ["class", "cart-content", 4, "ngIf"], [1, "empty-cart"], [1, "empty-cart-content", "glass-card"], [1, "fas", "fa-shopping-cart", "empty-icon"], ["routerLink", "/products", 1, "btn", "btn-neon", "scale-on-hover"], [1, "fas", "fa-shopping-bag"], [1, "cart-content"], [1, "cart-items"], ["class", "cart-item glass-card", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "cart-summary", "glass-card"], [1, "summary-title"], [1, "summary-row"], ["class", "summary-row", 4, "ngIf"], [1, "summary-row", "total-row"], [1, "coupon-section"], [1, "coupon-input"], ["type", "text", "placeholder", "Enter coupon code", 3, "ngModelChange", "ngModel"], [3, "click"], ["style", "font-size: 0.9rem; margin: 0;", 3, "color", 4, "ngIf"], ["routerLink", "/checkout", 1, "checkout-btn", 3, "disabled"], [1, "fas", "fa-credit-card"], [1, "cart-item", "glass-card"], [1, "item-image"], ["loading", "lazy", 3, "src", "alt"], [1, "item-details"], [1, "item-name"], [1, "item-category"], [1, "item-price"], [1, "item-quantity"], [1, "quantity-btn", "decrease-btn", 3, "click", "disabled"], [1, "fas", "fa-minus"], [1, "quantity"], [1, "quantity-btn", "increase-btn", 3, "click"], [1, "fas", "fa-plus"], [1, "item-total"], [1, "total-price"], [1, "remove-btn", 3, "click"], [1, "fas", "fa-trash"], [2, "color", "#39ff14"], [2, "font-size", "0.9rem", "margin", "0"]],
      template: function CartComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "h1", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " Shopping ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Cart");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, CartComponent_div_7_Template, 10, 0, "div", 6)(8, CartComponent_div_8_Template, 37, 11, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.cartItems.length === 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.cartItems.length > 0);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel],
      styles: [".cart-container[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  padding: var(--space-20) 0 var(--space-16);\n  background: var(--bg-secondary);\n}\n\n.cart-header[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: var(--space-16);\n}\n\n.page-title[_ngcontent-%COMP%] {\n  font-size: var(--font-size-4xl);\n  font-weight: var(--font-weight-bold);\n  color: var(--text-primary);\n  margin-bottom: var(--space-2);\n}\n\n.page-subtitle[_ngcontent-%COMP%] {\n  font-size: var(--font-size-lg);\n  color: var(--text-secondary);\n  font-weight: var(--font-weight-normal);\n}\n\n\n\n.empty-cart[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 500px;\n}\n\n.empty-cart-content[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: var(--space-20) var(--space-12);\n  max-width: 500px;\n  background: var(--bg-primary);\n  border: 1px solid var(--border-color);\n  border-radius: var(--radius-2xl);\n  box-shadow: var(--shadow-lg);\n}\n\n.empty-icon[_ngcontent-%COMP%] {\n  font-size: 5rem;\n  margin-bottom: var(--space-8);\n  color: var(--gray-400);\n}\n\n.empty-cart-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: var(--font-size-2xl);\n  margin-bottom: var(--space-4);\n  color: var(--text-primary);\n  font-weight: var(--font-weight-semibold);\n}\n\n.empty-cart-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-bottom: var(--space-10);\n  color: var(--text-secondary);\n  font-size: var(--font-size-base);\n  line-height: var(--line-height-relaxed);\n}\n\n\n\n.cart-content[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 400px;\n  gap: var(--space-12);\n  align-items: start;\n}\n\n.cart-items[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: var(--space-6);\n}\n\n.cart-item[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 100px 1fr auto auto;\n  gap: var(--space-6);\n  padding: var(--space-6);\n  align-items: center;\n  background: var(--bg-primary);\n  border: 1px solid var(--border-color);\n  border-radius: var(--radius-xl);\n  transition: var(--transition-normal);\n  box-shadow: var(--shadow-sm);\n}\n\n.cart-item[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: var(--shadow-md);\n  border-color: var(--gray-300);\n}\n\n.item-image[_ngcontent-%COMP%] {\n  width: 100px;\n  height: 100px;\n  border-radius: var(--radius-lg);\n  overflow: hidden;\n  background: var(--bg-tertiary);\n}\n\n.item-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  transition: var(--transition-normal);\n}\n\n.cart-item[_ngcontent-%COMP%]:hover   .item-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  transform: scale(1.03);\n}\n\n.item-details[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: var(--space-2);\n}\n\n.item-name[_ngcontent-%COMP%] {\n  font-size: var(--font-size-lg);\n  font-weight: var(--font-weight-semibold);\n  margin-bottom: var(--space-1);\n  color: var(--text-primary);\n  line-height: var(--line-height-tight);\n}\n\n.item-price[_ngcontent-%COMP%] {\n  font-weight: var(--font-weight-semibold);\n  font-size: var(--font-size-base);\n  color: var(--primary);\n}\n\n.item-category[_ngcontent-%COMP%] {\n  font-size: var(--font-size-sm);\n  color: var(--text-tertiary);\n  font-weight: var(--font-weight-normal);\n}\n\n\n\n.item-quantity[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--space-3);\n  background: var(--bg-secondary);\n  padding: var(--space-2) var(--space-3);\n  border-radius: var(--radius-full);\n  border: 1px solid var(--border-color);\n}\n\n.quantity-btn[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border: 1px solid var(--border-color);\n  background: var(--bg-primary);\n  color: var(--text-primary);\n  border-radius: var(--radius-full);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  transition: var(--transition-normal);\n  font-weight: var(--font-weight-medium);\n  font-size: var(--font-size-sm);\n}\n\n.quantity-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: var(--primary);\n  color: var(--text-inverse);\n  border-color: var(--primary);\n  transform: scale(1.05);\n}\n\n.quantity-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n  transform: none;\n}\n\n.decrease-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: var(--error);\n  border-color: var(--error);\n}\n\n.increase-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: var(--secondary);\n  border-color: var(--secondary);\n}\n\n.quantity[_ngcontent-%COMP%] {\n  font-weight: var(--font-weight-semibold);\n  min-width: 32px;\n  text-align: center;\n  color: var(--text-primary);\n  font-size: var(--font-size-sm);\n}\n\n.item-total[_ngcontent-%COMP%] {\n  text-align: right;\n  display: flex;\n  flex-direction: column;\n  gap: var(--space-3);\n  align-items: flex-end;\n}\n\n.total-price[_ngcontent-%COMP%] {\n  font-size: var(--font-size-lg);\n  font-weight: var(--font-weight-bold);\n  color: var(--text-primary);\n  margin-bottom: var(--space-2);\n}\n\n.remove-btn[_ngcontent-%COMP%] {\n  background: transparent;\n  border: 1px solid var(--error);\n  color: var(--error);\n  cursor: pointer;\n  padding: var(--space-2) var(--space-3);\n  border-radius: var(--radius-md);\n  transition: var(--transition-normal);\n  font-weight: var(--font-weight-medium);\n  font-size: var(--font-size-xs);\n}\n\n.remove-btn[_ngcontent-%COMP%]:hover {\n  background: var(--error);\n  color: var(--text-inverse);\n  transform: translateY(-1px);\n  box-shadow: var(--shadow-sm);\n}\n\n\n\n.cart-summary[_ngcontent-%COMP%] {\n  padding: var(--space-8);\n  height: -moz-fit-content;\n  height: fit-content;\n  position: sticky;\n  top: 120px;\n  background: var(--bg-primary);\n  border: 1px solid var(--border-color);\n  border-radius: var(--radius-2xl);\n  box-shadow: var(--shadow-lg);\n}\n\n.summary-title[_ngcontent-%COMP%] {\n  font-size: var(--font-size-xl);\n  font-weight: var(--font-weight-semibold);\n  margin-bottom: var(--space-8);\n  color: var(--text-primary);\n  text-align: center;\n}\n\n.summary-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: var(--space-4);\n  padding: var(--space-2) 0;\n  font-size: var(--font-size-sm);\n}\n\n.summary-row[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-child {\n  color: var(--text-secondary);\n  font-weight: var(--font-weight-medium);\n}\n\n.summary-row[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:last-child {\n  color: var(--text-primary);\n  font-weight: var(--font-weight-semibold);\n}\n\n.total-row[_ngcontent-%COMP%] {\n  border-top: 1px solid var(--border-color);\n  padding-top: var(--space-5);\n  margin-top: var(--space-6);\n  font-size: var(--font-size-lg);\n}\n\n.total-row[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-weight: var(--font-weight-bold);\n}\n\n.total-row[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:last-child {\n  color: var(--primary);\n}\n\n.checkout-btn[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-top: var(--space-8);\n  padding: var(--space-4);\n  font-size: var(--font-size-base);\n  font-weight: var(--font-weight-semibold);\n  background: var(--primary);\n  border: none;\n  border-radius: var(--radius-lg);\n  color: var(--text-inverse);\n  cursor: pointer;\n  transition: var(--transition-normal);\n  box-shadow: var(--shadow-sm);\n}\n\n.checkout-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  transform: translateY(-2px);\n  background: var(--primary-dark);\n  box-shadow: var(--shadow-md);\n}\n\n.checkout-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n  transform: none;\n}\n\n\n\n.coupon-section[_ngcontent-%COMP%] {\n  margin-top: var(--space-6);\n  padding-top: var(--space-5);\n  border-top: 1px solid var(--border-color);\n}\n\n.coupon-input[_ngcontent-%COMP%] {\n  display: flex;\n  gap: var(--space-2);\n  margin-bottom: var(--space-4);\n}\n\n.coupon-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: var(--space-3) var(--space-4);\n  border: 1px solid var(--border-color);\n  border-radius: var(--radius-md);\n  background: var(--bg-primary);\n  color: var(--text-primary);\n  font-size: var(--font-size-sm);\n}\n\n.coupon-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  color: var(--text-tertiary);\n}\n\n.coupon-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--primary);\n  box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);\n}\n\n.coupon-input[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: var(--space-3) var(--space-5);\n  background: var(--secondary);\n  border: none;\n  border-radius: var(--radius-md);\n  color: var(--text-inverse);\n  font-weight: var(--font-weight-semibold);\n  cursor: pointer;\n  transition: var(--transition-normal);\n  font-size: var(--font-size-sm);\n}\n\n.coupon-input[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background: var(--secondary-dark);\n  transform: translateY(-1px);\n  box-shadow: var(--shadow-sm);\n}\n\n\n\n@media (max-width: 1024px) {\n  .cart-content[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 350px;\n    gap: 40px;\n  }\n}\n\n@media (max-width: 768px) {\n  .cart-container[_ngcontent-%COMP%] {\n    padding: 100px 0 40px;\n  }\n  \n  .page-title[_ngcontent-%COMP%] {\n    font-size: 2.5rem;\n  }\n  \n  .cart-content[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 40px;\n  }\n  \n  .cart-item[_ngcontent-%COMP%] {\n    grid-template-columns: 80px 1fr;\n    gap: 20px;\n  }\n  \n  .item-quantity[_ngcontent-%COMP%], \n   .item-total[_ngcontent-%COMP%] {\n    grid-column: 1 / -1;\n    justify-self: start;\n    margin-top: 15px;\n  }\n  \n  .item-total[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    width: 100%;\n    flex-direction: row;\n  }\n  \n  .cart-summary[_ngcontent-%COMP%] {\n    position: static;\n  }\n}\n\n@media (max-width: 480px) {\n  .empty-cart-content[_ngcontent-%COMP%] {\n    padding: 60px 30px;\n  }\n  \n  .empty-icon[_ngcontent-%COMP%] {\n    font-size: 4rem;\n  }\n  \n  .empty-cart-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 1.6rem;\n  }\n  \n  .cart-item[_ngcontent-%COMP%] {\n    padding: 20px;\n  }\n  \n  .item-image[_ngcontent-%COMP%] {\n    width: 70px;\n    height: 70px;\n  }\n  \n  .cart-summary[_ngcontent-%COMP%] {\n    padding: 25px;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9jYXJ0L2NhcnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFpQjtFQUNqQiwwQ0FBMEM7RUFDMUMsK0JBQStCO0FBQ2pDOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLCtCQUErQjtFQUMvQixvQ0FBb0M7RUFDcEMsMEJBQTBCO0VBQzFCLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLDhCQUE4QjtFQUM5Qiw0QkFBNEI7RUFDNUIsc0NBQXNDO0FBQ3hDOztBQUVBLHNCQUFzQjtBQUN0QjtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQix3Q0FBd0M7RUFDeEMsZ0JBQWdCO0VBQ2hCLDZCQUE2QjtFQUM3QixxQ0FBcUM7RUFDckMsZ0NBQWdDO0VBQ2hDLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLGVBQWU7RUFDZiw2QkFBNkI7RUFDN0Isc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsK0JBQStCO0VBQy9CLDZCQUE2QjtFQUM3QiwwQkFBMEI7RUFDMUIsd0NBQXdDO0FBQzFDOztBQUVBO0VBQ0UsOEJBQThCO0VBQzlCLDRCQUE0QjtFQUM1QixnQ0FBZ0M7RUFDaEMsdUNBQXVDO0FBQ3pDOztBQUVBLHdCQUF3QjtBQUN4QjtFQUNFLGFBQWE7RUFDYixnQ0FBZ0M7RUFDaEMsb0JBQW9CO0VBQ3BCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDBDQUEwQztFQUMxQyxtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQiw2QkFBNkI7RUFDN0IscUNBQXFDO0VBQ3JDLCtCQUErQjtFQUMvQixvQ0FBb0M7RUFDcEMsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UsMkJBQTJCO0VBQzNCLDRCQUE0QjtFQUM1Qiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLCtCQUErQjtFQUMvQixnQkFBZ0I7RUFDaEIsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSw4QkFBOEI7RUFDOUIsd0NBQXdDO0VBQ3hDLDZCQUE2QjtFQUM3QiwwQkFBMEI7RUFDMUIscUNBQXFDO0FBQ3ZDOztBQUVBO0VBQ0Usd0NBQXdDO0VBQ3hDLGdDQUFnQztFQUNoQyxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSw4QkFBOEI7RUFDOUIsMkJBQTJCO0VBQzNCLHNDQUFzQztBQUN4Qzs7QUFFQSw2QkFBNkI7QUFDN0I7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQiwrQkFBK0I7RUFDL0Isc0NBQXNDO0VBQ3RDLGlDQUFpQztFQUNqQyxxQ0FBcUM7QUFDdkM7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLHFDQUFxQztFQUNyQyw2QkFBNkI7RUFDN0IsMEJBQTBCO0VBQzFCLGlDQUFpQztFQUNqQyxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixlQUFlO0VBQ2Ysb0NBQW9DO0VBQ3BDLHNDQUFzQztFQUN0Qyw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSwwQkFBMEI7RUFDMUIsMEJBQTBCO0VBQzFCLDRCQUE0QjtFQUM1QixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGVBQWU7QUFDakI7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsNEJBQTRCO0VBQzVCLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLHdDQUF3QztFQUN4QyxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLDBCQUEwQjtFQUMxQiw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsOEJBQThCO0VBQzlCLG9DQUFvQztFQUNwQywwQkFBMEI7RUFDMUIsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLDhCQUE4QjtFQUM5QixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLHNDQUFzQztFQUN0QywrQkFBK0I7RUFDL0Isb0NBQW9DO0VBQ3BDLHNDQUFzQztFQUN0Qyw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIsMEJBQTBCO0VBQzFCLDJCQUEyQjtFQUMzQiw0QkFBNEI7QUFDOUI7O0FBRUEsd0JBQXdCO0FBQ3hCO0VBQ0UsdUJBQXVCO0VBQ3ZCLHdCQUFtQjtFQUFuQixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLFVBQVU7RUFDViw2QkFBNkI7RUFDN0IscUNBQXFDO0VBQ3JDLGdDQUFnQztFQUNoQyw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSw4QkFBOEI7RUFDOUIsd0NBQXdDO0VBQ3hDLDZCQUE2QjtFQUM3QiwwQkFBMEI7RUFDMUIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5Qiw2QkFBNkI7RUFDN0IseUJBQXlCO0VBQ3pCLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLDRCQUE0QjtFQUM1QixzQ0FBc0M7QUFDeEM7O0FBRUE7RUFDRSwwQkFBMEI7RUFDMUIsd0NBQXdDO0FBQzFDOztBQUVBO0VBQ0UseUNBQXlDO0VBQ3pDLDJCQUEyQjtFQUMzQiwwQkFBMEI7RUFDMUIsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0Usb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsV0FBVztFQUNYLDBCQUEwQjtFQUMxQix1QkFBdUI7RUFDdkIsZ0NBQWdDO0VBQ2hDLHdDQUF3QztFQUN4QywwQkFBMEI7RUFDMUIsWUFBWTtFQUNaLCtCQUErQjtFQUMvQiwwQkFBMEI7RUFDMUIsZUFBZTtFQUNmLG9DQUFvQztFQUNwQyw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSwyQkFBMkI7RUFDM0IsK0JBQStCO0VBQy9CLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsZUFBZTtBQUNqQjs7QUFFQSxtQkFBbUI7QUFDbkI7RUFDRSwwQkFBMEI7RUFDMUIsMkJBQTJCO0VBQzNCLHlDQUF5QztBQUMzQzs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsT0FBTztFQUNQLHNDQUFzQztFQUN0QyxxQ0FBcUM7RUFDckMsK0JBQStCO0VBQy9CLDZCQUE2QjtFQUM3QiwwQkFBMEI7RUFDMUIsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDRCQUE0QjtFQUM1Qiw2Q0FBNkM7QUFDL0M7O0FBRUE7RUFDRSxzQ0FBc0M7RUFDdEMsNEJBQTRCO0VBQzVCLFlBQVk7RUFDWiwrQkFBK0I7RUFDL0IsMEJBQTBCO0VBQzFCLHdDQUF3QztFQUN4QyxlQUFlO0VBQ2Ysb0NBQW9DO0VBQ3BDLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLGlDQUFpQztFQUNqQywyQkFBMkI7RUFDM0IsNEJBQTRCO0FBQzlCOztBQUVBLHNCQUFzQjtBQUN0QjtFQUNFO0lBQ0UsZ0NBQWdDO0lBQ2hDLFNBQVM7RUFDWDtBQUNGOztBQUVBO0VBQ0U7SUFDRSxxQkFBcUI7RUFDdkI7O0VBRUE7SUFDRSxpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSwwQkFBMEI7SUFDMUIsU0FBUztFQUNYOztFQUVBO0lBQ0UsK0JBQStCO0lBQy9CLFNBQVM7RUFDWDs7RUFFQTs7SUFFRSxtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxnQkFBZ0I7RUFDbEI7QUFDRjs7QUFFQTtFQUNFO0lBQ0Usa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0UsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLGFBQWE7RUFDZjs7RUFFQTtJQUNFLFdBQVc7SUFDWCxZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxhQUFhO0VBQ2Y7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJ0LWNvbnRhaW5lciB7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICBwYWRkaW5nOiB2YXIoLS1zcGFjZS0yMCkgMCB2YXIoLS1zcGFjZS0xNik7XG4gIGJhY2tncm91bmQ6IHZhcigtLWJnLXNlY29uZGFyeSk7XG59XG5cbi5jYXJ0LWhlYWRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogdmFyKC0tc3BhY2UtMTYpO1xufVxuXG4ucGFnZS10aXRsZSB7XG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLTR4bCk7XG4gIGZvbnQtd2VpZ2h0OiB2YXIoLS1mb250LXdlaWdodC1ib2xkKTtcbiAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7XG4gIG1hcmdpbi1ib3R0b206IHZhcigtLXNwYWNlLTIpO1xufVxuXG4ucGFnZS1zdWJ0aXRsZSB7XG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLWxnKTtcbiAgY29sb3I6IHZhcigtLXRleHQtc2Vjb25kYXJ5KTtcbiAgZm9udC13ZWlnaHQ6IHZhcigtLWZvbnQtd2VpZ2h0LW5vcm1hbCk7XG59XG5cbi8qIE1vZGVybiBFbXB0eSBDYXJ0ICovXG4uZW1wdHktY2FydCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtaW4taGVpZ2h0OiA1MDBweDtcbn1cblxuLmVtcHR5LWNhcnQtY29udGVudCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogdmFyKC0tc3BhY2UtMjApIHZhcigtLXNwYWNlLTEyKTtcbiAgbWF4LXdpZHRoOiA1MDBweDtcbiAgYmFja2dyb3VuZDogdmFyKC0tYmctcHJpbWFyeSk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cy0yeGwpO1xuICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3ctbGcpO1xufVxuXG4uZW1wdHktaWNvbiB7XG4gIGZvbnQtc2l6ZTogNXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogdmFyKC0tc3BhY2UtOCk7XG4gIGNvbG9yOiB2YXIoLS1ncmF5LTQwMCk7XG59XG5cbi5lbXB0eS1jYXJ0LWNvbnRlbnQgaDMge1xuICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS0yeGwpO1xuICBtYXJnaW4tYm90dG9tOiB2YXIoLS1zcGFjZS00KTtcbiAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7XG4gIGZvbnQtd2VpZ2h0OiB2YXIoLS1mb250LXdlaWdodC1zZW1pYm9sZCk7XG59XG5cbi5lbXB0eS1jYXJ0LWNvbnRlbnQgcCB7XG4gIG1hcmdpbi1ib3R0b206IHZhcigtLXNwYWNlLTEwKTtcbiAgY29sb3I6IHZhcigtLXRleHQtc2Vjb25kYXJ5KTtcbiAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtYmFzZSk7XG4gIGxpbmUtaGVpZ2h0OiB2YXIoLS1saW5lLWhlaWdodC1yZWxheGVkKTtcbn1cblxuLyogTW9kZXJuIENhcnQgQ29udGVudCAqL1xuLmNhcnQtY29udGVudCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDQwMHB4O1xuICBnYXA6IHZhcigtLXNwYWNlLTEyKTtcbiAgYWxpZ24taXRlbXM6IHN0YXJ0O1xufVxuXG4uY2FydC1pdGVtcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogdmFyKC0tc3BhY2UtNik7XG59XG5cbi5jYXJ0LWl0ZW0ge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEwMHB4IDFmciBhdXRvIGF1dG87XG4gIGdhcDogdmFyKC0tc3BhY2UtNik7XG4gIHBhZGRpbmc6IHZhcigtLXNwYWNlLTYpO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1wcmltYXJ5KTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzLXhsKTtcbiAgdHJhbnNpdGlvbjogdmFyKC0tdHJhbnNpdGlvbi1ub3JtYWwpO1xuICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3ctc20pO1xufVxuXG4uY2FydC1pdGVtOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xuICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3ctbWQpO1xuICBib3JkZXItY29sb3I6IHZhcigtLWdyYXktMzAwKTtcbn1cblxuLml0ZW0taW1hZ2Uge1xuICB3aWR0aDogMTAwcHg7XG4gIGhlaWdodDogMTAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cy1sZyk7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJhY2tncm91bmQ6IHZhcigtLWJnLXRlcnRpYXJ5KTtcbn1cblxuLml0ZW0taW1hZ2UgaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXRpb24tbm9ybWFsKTtcbn1cblxuLmNhcnQtaXRlbTpob3ZlciAuaXRlbS1pbWFnZSBpbWcge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDMpO1xufVxuXG4uaXRlbS1kZXRhaWxzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiB2YXIoLS1zcGFjZS0yKTtcbn1cblxuLml0ZW0tbmFtZSB7XG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLWxnKTtcbiAgZm9udC13ZWlnaHQ6IHZhcigtLWZvbnQtd2VpZ2h0LXNlbWlib2xkKTtcbiAgbWFyZ2luLWJvdHRvbTogdmFyKC0tc3BhY2UtMSk7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnkpO1xuICBsaW5lLWhlaWdodDogdmFyKC0tbGluZS1oZWlnaHQtdGlnaHQpO1xufVxuXG4uaXRlbS1wcmljZSB7XG4gIGZvbnQtd2VpZ2h0OiB2YXIoLS1mb250LXdlaWdodC1zZW1pYm9sZCk7XG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLWJhc2UpO1xuICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XG59XG5cbi5pdGVtLWNhdGVnb3J5IHtcbiAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtc20pO1xuICBjb2xvcjogdmFyKC0tdGV4dC10ZXJ0aWFyeSk7XG4gIGZvbnQtd2VpZ2h0OiB2YXIoLS1mb250LXdlaWdodC1ub3JtYWwpO1xufVxuXG4vKiBNb2Rlcm4gUXVhbnRpdHkgQ29udHJvbHMgKi9cbi5pdGVtLXF1YW50aXR5IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiB2YXIoLS1zcGFjZS0zKTtcbiAgYmFja2dyb3VuZDogdmFyKC0tYmctc2Vjb25kYXJ5KTtcbiAgcGFkZGluZzogdmFyKC0tc3BhY2UtMikgdmFyKC0tc3BhY2UtMyk7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cy1mdWxsKTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTtcbn1cblxuLnF1YW50aXR5LWJ0biB7XG4gIHdpZHRoOiAzMnB4O1xuICBoZWlnaHQ6IDMycHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XG4gIGJhY2tncm91bmQ6IHZhcigtLWJnLXByaW1hcnkpO1xuICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5KTtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzLWZ1bGwpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uLW5vcm1hbCk7XG4gIGZvbnQtd2VpZ2h0OiB2YXIoLS1mb250LXdlaWdodC1tZWRpdW0pO1xuICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1zbSk7XG59XG5cbi5xdWFudGl0eS1idG46aG92ZXI6bm90KDpkaXNhYmxlZCkge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5KTtcbiAgY29sb3I6IHZhcigtLXRleHQtaW52ZXJzZSk7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tcHJpbWFyeSk7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XG59XG5cbi5xdWFudGl0eS1idG46ZGlzYWJsZWQge1xuICBvcGFjaXR5OiAwLjU7XG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4gIHRyYW5zZm9ybTogbm9uZTtcbn1cblxuLmRlY3JlYXNlLWJ0bjpob3Zlcjpub3QoOmRpc2FibGVkKSB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWVycm9yKTtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1lcnJvcik7XG59XG5cbi5pbmNyZWFzZS1idG46aG92ZXI6bm90KDpkaXNhYmxlZCkge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1zZWNvbmRhcnkpO1xuICBib3JkZXItY29sb3I6IHZhcigtLXNlY29uZGFyeSk7XG59XG5cbi5xdWFudGl0eSB7XG4gIGZvbnQtd2VpZ2h0OiB2YXIoLS1mb250LXdlaWdodC1zZW1pYm9sZCk7XG4gIG1pbi13aWR0aDogMzJweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5KTtcbiAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtc20pO1xufVxuXG4uaXRlbS10b3RhbCB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IHZhcigtLXNwYWNlLTMpO1xuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG59XG5cbi50b3RhbC1wcmljZSB7XG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLWxnKTtcbiAgZm9udC13ZWlnaHQ6IHZhcigtLWZvbnQtd2VpZ2h0LWJvbGQpO1xuICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5KTtcbiAgbWFyZ2luLWJvdHRvbTogdmFyKC0tc3BhY2UtMik7XG59XG5cbi5yZW1vdmUtYnRuIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWVycm9yKTtcbiAgY29sb3I6IHZhcigtLWVycm9yKTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwYWRkaW5nOiB2YXIoLS1zcGFjZS0yKSB2YXIoLS1zcGFjZS0zKTtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzLW1kKTtcbiAgdHJhbnNpdGlvbjogdmFyKC0tdHJhbnNpdGlvbi1ub3JtYWwpO1xuICBmb250LXdlaWdodDogdmFyKC0tZm9udC13ZWlnaHQtbWVkaXVtKTtcbiAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUteHMpO1xufVxuXG4ucmVtb3ZlLWJ0bjpob3ZlciB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWVycm9yKTtcbiAgY29sb3I6IHZhcigtLXRleHQtaW52ZXJzZSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXB4KTtcbiAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LXNtKTtcbn1cblxuLyogTW9kZXJuIENhcnQgU3VtbWFyeSAqL1xuLmNhcnQtc3VtbWFyeSB7XG4gIHBhZGRpbmc6IHZhcigtLXNwYWNlLTgpO1xuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICB0b3A6IDEyMHB4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1wcmltYXJ5KTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzLTJ4bCk7XG4gIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdy1sZyk7XG59XG5cbi5zdW1tYXJ5LXRpdGxlIHtcbiAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUteGwpO1xuICBmb250LXdlaWdodDogdmFyKC0tZm9udC13ZWlnaHQtc2VtaWJvbGQpO1xuICBtYXJnaW4tYm90dG9tOiB2YXIoLS1zcGFjZS04KTtcbiAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnN1bW1hcnktcm93IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBtYXJnaW4tYm90dG9tOiB2YXIoLS1zcGFjZS00KTtcbiAgcGFkZGluZzogdmFyKC0tc3BhY2UtMikgMDtcbiAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtc20pO1xufVxuXG4uc3VtbWFyeS1yb3cgc3BhbjpmaXJzdC1jaGlsZCB7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LXNlY29uZGFyeSk7XG4gIGZvbnQtd2VpZ2h0OiB2YXIoLS1mb250LXdlaWdodC1tZWRpdW0pO1xufVxuXG4uc3VtbWFyeS1yb3cgc3BhbjpsYXN0LWNoaWxkIHtcbiAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7XG4gIGZvbnQtd2VpZ2h0OiB2YXIoLS1mb250LXdlaWdodC1zZW1pYm9sZCk7XG59XG5cbi50b3RhbC1yb3cge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTtcbiAgcGFkZGluZy10b3A6IHZhcigtLXNwYWNlLTUpO1xuICBtYXJnaW4tdG9wOiB2YXIoLS1zcGFjZS02KTtcbiAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtbGcpO1xufVxuXG4udG90YWwtcm93IHNwYW4ge1xuICBmb250LXdlaWdodDogdmFyKC0tZm9udC13ZWlnaHQtYm9sZCk7XG59XG5cbi50b3RhbC1yb3cgc3BhbjpsYXN0LWNoaWxkIHtcbiAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xufVxuXG4uY2hlY2tvdXQtYnRuIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi10b3A6IHZhcigtLXNwYWNlLTgpO1xuICBwYWRkaW5nOiB2YXIoLS1zcGFjZS00KTtcbiAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtYmFzZSk7XG4gIGZvbnQtd2VpZ2h0OiB2YXIoLS1mb250LXdlaWdodC1zZW1pYm9sZCk7XG4gIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnkpO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cy1sZyk7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWludmVyc2UpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXRpb24tbm9ybWFsKTtcbiAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LXNtKTtcbn1cblxuLmNoZWNrb3V0LWJ0bjpob3Zlcjpub3QoOmRpc2FibGVkKSB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcbiAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeS1kYXJrKTtcbiAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LW1kKTtcbn1cblxuLmNoZWNrb3V0LWJ0bjpkaXNhYmxlZCB7XG4gIG9wYWNpdHk6IDAuNjtcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbiAgdHJhbnNmb3JtOiBub25lO1xufVxuXG4vKiBDb3Vwb24gU2VjdGlvbiAqL1xuLmNvdXBvbi1zZWN0aW9uIHtcbiAgbWFyZ2luLXRvcDogdmFyKC0tc3BhY2UtNik7XG4gIHBhZGRpbmctdG9wOiB2YXIoLS1zcGFjZS01KTtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XG59XG5cbi5jb3Vwb24taW5wdXQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IHZhcigtLXNwYWNlLTIpO1xuICBtYXJnaW4tYm90dG9tOiB2YXIoLS1zcGFjZS00KTtcbn1cblxuLmNvdXBvbi1pbnB1dCBpbnB1dCB7XG4gIGZsZXg6IDE7XG4gIHBhZGRpbmc6IHZhcigtLXNwYWNlLTMpIHZhcigtLXNwYWNlLTQpO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpdXMtbWQpO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1wcmltYXJ5KTtcbiAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7XG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLXNtKTtcbn1cblxuLmNvdXBvbi1pbnB1dCBpbnB1dDo6cGxhY2Vob2xkZXIge1xuICBjb2xvcjogdmFyKC0tdGV4dC10ZXJ0aWFyeSk7XG59XG5cbi5jb3Vwb24taW5wdXQgaW5wdXQ6Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXItY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICBib3gtc2hhZG93OiAwIDAgMCAzcHggcmdiYSg5OSwgMTAyLCAyNDEsIDAuMSk7XG59XG5cbi5jb3Vwb24taW5wdXQgYnV0dG9uIHtcbiAgcGFkZGluZzogdmFyKC0tc3BhY2UtMykgdmFyKC0tc3BhY2UtNSk7XG4gIGJhY2tncm91bmQ6IHZhcigtLXNlY29uZGFyeSk7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzLW1kKTtcbiAgY29sb3I6IHZhcigtLXRleHQtaW52ZXJzZSk7XG4gIGZvbnQtd2VpZ2h0OiB2YXIoLS1mb250LXdlaWdodC1zZW1pYm9sZCk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogdmFyKC0tdHJhbnNpdGlvbi1ub3JtYWwpO1xuICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1zbSk7XG59XG5cbi5jb3Vwb24taW5wdXQgYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tc2Vjb25kYXJ5LWRhcmspO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFweCk7XG4gIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdy1zbSk7XG59XG5cbi8qIFJlc3BvbnNpdmUgRGVzaWduICovXG5AbWVkaWEgKG1heC13aWR0aDogMTAyNHB4KSB7XG4gIC5jYXJ0LWNvbnRlbnQge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDM1MHB4O1xuICAgIGdhcDogNDBweDtcbiAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmNhcnQtY29udGFpbmVyIHtcbiAgICBwYWRkaW5nOiAxMDBweCAwIDQwcHg7XG4gIH1cbiAgXG4gIC5wYWdlLXRpdGxlIHtcbiAgICBmb250LXNpemU6IDIuNXJlbTtcbiAgfVxuICBcbiAgLmNhcnQtY29udGVudCB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gICAgZ2FwOiA0MHB4O1xuICB9XG4gIFxuICAuY2FydC1pdGVtIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDgwcHggMWZyO1xuICAgIGdhcDogMjBweDtcbiAgfVxuICBcbiAgLml0ZW0tcXVhbnRpdHksXG4gIC5pdGVtLXRvdGFsIHtcbiAgICBncmlkLWNvbHVtbjogMSAvIC0xO1xuICAgIGp1c3RpZnktc2VsZjogc3RhcnQ7XG4gICAgbWFyZ2luLXRvcDogMTVweDtcbiAgfVxuICBcbiAgLml0ZW0tdG90YWwge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgfVxuICBcbiAgLmNhcnQtc3VtbWFyeSB7XG4gICAgcG9zaXRpb246IHN0YXRpYztcbiAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgLmVtcHR5LWNhcnQtY29udGVudCB7XG4gICAgcGFkZGluZzogNjBweCAzMHB4O1xuICB9XG4gIFxuICAuZW1wdHktaWNvbiB7XG4gICAgZm9udC1zaXplOiA0cmVtO1xuICB9XG4gIFxuICAuZW1wdHktY2FydC1jb250ZW50IGgzIHtcbiAgICBmb250LXNpemU6IDEuNnJlbTtcbiAgfVxuICBcbiAgLmNhcnQtaXRlbSB7XG4gICAgcGFkZGluZzogMjBweDtcbiAgfVxuICBcbiAgLml0ZW0taW1hZ2Uge1xuICAgIHdpZHRoOiA3MHB4O1xuICAgIGhlaWdodDogNzBweDtcbiAgfVxuICBcbiAgLmNhcnQtc3VtbWFyeSB7XG4gICAgcGFkZGluZzogMjVweDtcbiAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 9215:
/*!***********************************************************!*\
  !*** ./src/app/components/checkout/checkout.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CheckoutComponent: () => (/* binding */ CheckoutComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/cart.service */ 6868);
/* harmony import */ var _services_checkout_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/checkout.service */ 5214);









const _c0 = ["invoiceContent"];
function CheckoutComponent_i_90_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "i", 60);
  }
}
function CheckoutComponent_i_91_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "i", 61);
  }
}
function CheckoutComponent_div_98_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 62)(1, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "img", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 65)(4, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", item_r2.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"])("alt", item_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Qty: ", item_r2.quantity, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" \u20B9", item_r2.price * item_r2.quantity, " ");
  }
}
function CheckoutComponent_span_108_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("\u20B9", ctx_r2.getDeliveryFee(), "");
  }
}
function CheckoutComponent_span_109_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "FREE");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function CheckoutComponent_div_130_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 68)(1, "div", 69)(2, "div", 70)(3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "UPI Payment");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "button", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CheckoutComponent_div_130_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r2.closeUpiModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "i", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 73)(8, "div", 74)(9, "div", 75)(10, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Scan QR code to pay");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 76)(15, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "i", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "QR Code");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "Scan with any UPI app");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 79)(22, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "1. Open any UPI app (GPay, PhonePe, Paytm, etc.)");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "2. Scan the QR code above");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, "3. Enter your UPI PIN to complete payment");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "4. Click 'Done' after successful payment");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "button", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CheckoutComponent_div_130_Template_button_click_30_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r2.completeUpiPayment());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](31, "i", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32, " Done - Payment Completed ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("\u20B9", ctx_r2.getTotal(), "");
  }
}
function CheckoutComponent_div_131_tr_44_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r6.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r6.quantity);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("\u20B9", item_r6.price, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("\u20B9", item_r6.price * item_r6.quantity, "");
  }
}
function CheckoutComponent_div_131_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 68)(1, "div", 81)(2, "div", 70)(3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Invoice");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "button", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CheckoutComponent_div_131_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r2.closeInvoice());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "i", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 73)(8, "div", 82, 1)(10, "div", 83)(11, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "RevCart");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "Premium Grocery Delivery");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 84)(16, "div", 85)(17, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](21, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div", 86)(23, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "Bill To:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "div", 87)(32, "table")(33, "thead")(34, "tr")(35, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36, "Item");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](38, "Qty");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](40, "Price");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](42, "Total");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](44, CheckoutComponent_div_131_tr_44_Template, 9, 4, "tr", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "div", 89)(46, "div", 90)(47, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](48, "Subtotal:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](50);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "div", 90)(52, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](53, "Delivery Fee:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](55);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "div", 90)(57, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](58, "GST (18%):");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](59, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](60);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](61, "div", 91)(62, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](63, "Total:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](64, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](65);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](66, "div", 92)(67, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](68);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](69, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](70, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](71, "Thank you for shopping with RevCart!");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](72, "div", 93)(73, "button", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CheckoutComponent_div_131_Template_button_click_73_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r2.downloadInvoice());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](74, "i", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](75, " Download PDF ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](76, "button", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CheckoutComponent_div_131_Template_button_click_76_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r2.closeInvoice());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](77, "i", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](78, " Done ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Invoice #", ctx_r2.invoiceData == null ? null : ctx_r2.invoiceData.orderId, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Date: ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](21, 11, ctx_r2.invoiceData == null ? null : ctx_r2.invoiceData.orderDate, "medium"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r2.invoiceData == null ? null : ctx_r2.invoiceData.customerName);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r2.invoiceData == null ? null : ctx_r2.invoiceData.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r2.invoiceData == null ? null : ctx_r2.invoiceData.phone);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r2.invoiceData == null ? null : ctx_r2.invoiceData.items);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("\u20B9", ctx_r2.invoiceData == null ? null : ctx_r2.invoiceData.subtotal, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("\u20B9", ctx_r2.invoiceData == null ? null : ctx_r2.invoiceData.deliveryFee, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("\u20B9", ctx_r2.invoiceData == null ? null : ctx_r2.invoiceData.gst, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("\u20B9", ctx_r2.invoiceData == null ? null : ctx_r2.invoiceData.total, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Payment Method: ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](69, 14, ctx_r2.invoiceData == null ? null : ctx_r2.invoiceData.paymentMethod), "");
  }
}
class CheckoutComponent {
  constructor(router, cartService, checkoutService) {
    this.router = router;
    this.cartService = cartService;
    this.checkoutService = checkoutService;
    this.orderData = {
      customerName: '',
      email: '',
      phone: '',
      address: {
        street: '',
        city: '',
        postalCode: ''
      },
      deliveryInstructions: '',
      paymentMethod: 'card'
    };
    this.cartItems = [];
    this.baseDeliveryFee = 30;
    this.isProcessing = false;
    this.showUpiModal = false;
    this.showInvoice = false;
    this.invoiceData = null;
  }
  ngOnInit() {
    this.cartService.getCartItems().subscribe(items => {
      this.cartItems = items;
    });
  }
  selectPaymentMethod(method) {
    this.orderData.paymentMethod = method;
  }
  closeUpiModal() {
    this.showUpiModal = false;
  }
  completeUpiPayment() {
    this.showUpiModal = false;
    this.generateInvoice();
  }
  closeInvoice() {
    this.showInvoice = false;
    this.router.navigate(['/order-success']);
  }
  downloadInvoice() {
    window.print();
  }
  getSubtotal() {
    return this.cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  }
  getGST() {
    return Math.round(this.getSubtotal() * 0.18); // 18% GST
  }
  getDeliveryFee() {
    return this.getSubtotal() > 199 ? 0 : this.baseDeliveryFee;
  }
  getTotal() {
    return this.getSubtotal() + this.getDeliveryFee() + this.getGST();
  }
  getItemCount() {
    return this.cartItems.reduce((total, item) => total + item.quantity, 0);
  }
  onSubmit() {
    if (this.isProcessing) return;
    if (this.orderData.paymentMethod === 'upi') {
      this.showUpiModal = true;
      return;
    }
    this.isProcessing = true;
    // Process order with stock validation
    this.checkoutService.processOrder(this.cartItems).subscribe(result => {
      if (!result.success) {
        alert(result.message);
        this.isProcessing = false;
        return;
      }
      // Simulate order processing
      setTimeout(() => {
        this.generateInvoice();
        this.isProcessing = false;
      }, 2000);
    });
  }
  generateInvoice() {
    const orderId = this.generateOrderId();
    this.invoiceData = {
      orderId: orderId,
      customerName: this.orderData.customerName,
      email: this.orderData.email,
      phone: this.orderData.phone,
      address: this.orderData.address,
      paymentMethod: this.orderData.paymentMethod,
      items: this.cartItems,
      subtotal: this.getSubtotal(),
      deliveryFee: this.getDeliveryFee(),
      gst: this.getGST(),
      total: this.getTotal(),
      orderDate: new Date(),
      estimatedDelivery: new Date(Date.now() + 45 * 60 * 1000)
    };
    // Save order to backend
    this.checkoutService.saveOrder(this.invoiceData).subscribe({
      next: response => {
        console.log('Order saved successfully:', response);
      },
      error: error => {
        console.error('Error saving order:', error);
      }
    });
    // Clear cart after successful order
    this.cartService.clearCart();
    // Store in session storage for success page
    sessionStorage.setItem('orderSummary', JSON.stringify(this.invoiceData));
    this.showInvoice = true;
  }
  generateOrderId() {
    const timestamp = Date.now().toString();
    const random = Math.random().toString(36).substr(2, 5).toUpperCase();
    return `RC${timestamp.slice(-6)}${random}`;
  }
  static {
    this.ɵfac = function CheckoutComponent_Factory(t) {
      return new (t || CheckoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_cart_service__WEBPACK_IMPORTED_MODULE_0__.CartService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_checkout_service__WEBPACK_IMPORTED_MODULE_1__.CheckoutService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: CheckoutComponent,
      selectors: [["app-checkout"]],
      viewQuery: function CheckoutComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.invoiceContent = _t.first);
        }
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
      decls: 132,
      vars: 29,
      consts: [["checkoutForm", "ngForm"], ["invoiceContent", ""], [1, "checkout-container"], [1, "container"], [1, "checkout-header"], [1, "page-title"], [1, "neon-text"], [1, "page-subtitle"], [1, "checkout-content"], [1, "checkout-form"], [3, "ngSubmit"], [1, "form-section", "glass-card"], [1, "section-title"], [1, "fas", "fa-user"], [1, "form-row"], [1, "form-group"], [1, "form-label"], ["type", "text", "name", "customerName", "placeholder", "Enter your full name", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "email", "name", "email", "placeholder", "Enter your email", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "tel", "name", "phone", "placeholder", "Enter your phone number", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "fas", "fa-map-marker-alt"], ["type", "text", "name", "street", "placeholder", "House/Flat number, Street name", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "text", "name", "city", "placeholder", "Enter city", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "text", "name", "postalCode", "placeholder", "Enter postal code", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"], ["name", "deliveryInstructions", "placeholder", "Any special delivery instructions...", "rows", "3", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "fas", "fa-credit-card"], [1, "payment-methods"], [1, "payment-option", 3, "click"], [1, "payment-icon"], [1, "payment-details"], [1, "payment-radio"], ["type", "radio", "name", "paymentMethod", "value", "card", 3, "ngModelChange", "ngModel"], [1, "fas", "fa-mobile-alt"], ["type", "radio", "name", "paymentMethod", "value", "upi", 3, "ngModelChange", "ngModel"], [1, "fas", "fa-money-bill-wave"], ["type", "radio", "name", "paymentMethod", "value", "cod", 3, "ngModelChange", "ngModel"], [1, "form-actions"], ["type", "button", "routerLink", "/cart", 1, "btn", "btn-ghost"], [1, "fas", "fa-arrow-left"], ["type", "submit", 1, "btn", "btn-success", 3, "disabled"], ["class", "fas fa-spinner fa-spin", 4, "ngIf"], ["class", "fas fa-check", 4, "ngIf"], [1, "order-summary", "glass-card"], [1, "summary-title"], [1, "fas", "fa-receipt"], [1, "summary-items"], ["class", "summary-item", 4, "ngFor", "ngForOf"], [1, "summary-totals"], [1, "summary-row"], [4, "ngIf"], ["class", "free-delivery", 4, "ngIf"], [1, "delivery-info-text"], [1, "free-delivery-message"], [1, "fas", "fa-info-circle"], [1, "summary-divider"], [1, "summary-row", "total-row"], [1, "delivery-info"], [1, "delivery-time"], [1, "fas", "fa-clock"], ["class", "modal-overlay", 4, "ngIf"], [1, "fas", "fa-spinner", "fa-spin"], [1, "fas", "fa-check"], [1, "summary-item"], [1, "item-image"], [3, "src", "alt"], [1, "item-info"], [1, "item-price"], [1, "free-delivery"], [1, "modal-overlay"], [1, "modal-content", "upi-modal"], [1, "modal-header"], [1, "close-btn", 3, "click"], [1, "fas", "fa-times"], [1, "modal-body"], [1, "upi-content"], [1, "payment-amount"], [1, "qr-code"], [1, "qr-placeholder"], [1, "fas", "fa-qrcode"], [1, "upi-instructions"], [1, "btn", "btn-success", "w-full", 3, "click"], [1, "modal-content", "invoice-modal"], [1, "invoice"], [1, "invoice-header"], [1, "invoice-details"], [1, "invoice-info"], [1, "customer-info"], [1, "invoice-items"], [4, "ngFor", "ngForOf"], [1, "invoice-totals"], [1, "total-row"], [1, "total-row", "final-total"], [1, "invoice-footer"], [1, "invoice-actions"], [1, "btn", "btn-outline", 3, "click"], [1, "fas", "fa-download"], [1, "btn", "btn-primary", 3, "click"]],
      template: function CheckoutComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 2)(1, "div", 3)(2, "div", 4)(3, "h1", 5)(4, "span", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Checkout");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "p", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Complete your order in just a few steps");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 8)(9, "div", 9)(10, "form", 10, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function CheckoutComponent_Template_form_ngSubmit_10_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx.onSubmit());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 11)(13, "h3", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "i", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, " Personal Information ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 14)(17, "div", 15)(18, "label", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "Full Name *");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "input", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("ngModelChange", function CheckoutComponent_Template_input_ngModelChange_20_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx.orderData.customerName, $event) || (ctx.orderData.customerName = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 15)(22, "label", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "Email Address *");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "input", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("ngModelChange", function CheckoutComponent_Template_input_ngModelChange_24_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx.orderData.email, $event) || (ctx.orderData.email = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "div", 15)(26, "label", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, "Phone Number *");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "input", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("ngModelChange", function CheckoutComponent_Template_input_ngModelChange_28_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx.orderData.phone, $event) || (ctx.orderData.phone = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "div", 11)(30, "h3", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](31, "i", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32, " Delivery Address ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "div", 15)(34, "label", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35, "Street Address *");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "input", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("ngModelChange", function CheckoutComponent_Template_input_ngModelChange_36_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx.orderData.address.street, $event) || (ctx.orderData.address.street = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "div", 14)(38, "div", 15)(39, "label", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](40, "City *");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "input", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("ngModelChange", function CheckoutComponent_Template_input_ngModelChange_41_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx.orderData.address.city, $event) || (ctx.orderData.address.city = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "div", 15)(43, "label", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](44, "Postal Code *");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "input", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("ngModelChange", function CheckoutComponent_Template_input_ngModelChange_45_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx.orderData.address.postalCode, $event) || (ctx.orderData.address.postalCode = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "div", 15)(47, "label", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](48, "Delivery Instructions (Optional)");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "textarea", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("ngModelChange", function CheckoutComponent_Template_textarea_ngModelChange_49_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx.orderData.deliveryInstructions, $event) || (ctx.orderData.deliveryInstructions = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "div", 11)(51, "h3", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](52, "i", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](53, " Payment Method ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "div", 26)(55, "div", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CheckoutComponent_Template_div_click_55_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx.selectPaymentMethod("card"));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "div", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](57, "i", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](58, "div", 29)(59, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](60, "Credit/Debit Card");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](61, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](62, "Pay securely with your card");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](63, "div", 30)(64, "input", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("ngModelChange", function CheckoutComponent_Template_input_ngModelChange_64_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx.orderData.paymentMethod, $event) || (ctx.orderData.paymentMethod = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](65, "div", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CheckoutComponent_Template_div_click_65_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx.selectPaymentMethod("upi"));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](66, "div", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](67, "i", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](68, "div", 29)(69, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](70, "UPI Payment");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](71, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](72, "Pay using UPI apps");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](73, "div", 30)(74, "input", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("ngModelChange", function CheckoutComponent_Template_input_ngModelChange_74_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx.orderData.paymentMethod, $event) || (ctx.orderData.paymentMethod = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](75, "div", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CheckoutComponent_Template_div_click_75_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx.selectPaymentMethod("cod"));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](76, "div", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](77, "i", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](78, "div", 29)(79, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](80, "Cash on Delivery");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](81, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](82, "Pay when you receive your order");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](83, "div", 30)(84, "input", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("ngModelChange", function CheckoutComponent_Template_input_ngModelChange_84_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx.orderData.paymentMethod, $event) || (ctx.orderData.paymentMethod = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](85, "div", 36)(86, "button", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](87, "i", 38);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](88, " Back to Cart ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](89, "button", 39);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](90, CheckoutComponent_i_90_Template, 1, 0, "i", 40)(91, CheckoutComponent_i_91_Template, 1, 0, "i", 41);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](92);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](93, "div", 42)(94, "h3", 43);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](95, "i", 44);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](96, " Order Summary ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](97, "div", 45);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](98, CheckoutComponent_div_98_Template, 10, 5, "div", 46);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](99, "div", 47)(100, "div", 48)(101, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](102);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](103, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](104);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](105, "div", 48)(106, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](107, "Delivery Fee");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](108, CheckoutComponent_span_108_Template, 2, 1, "span", 49)(109, CheckoutComponent_span_109_Template, 2, 0, "span", 50);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](110, "div", 51)(111, "small", 52);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](112, "i", 53);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](113, " Delivery free if order is above \u20B9199 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](114, "div", 48)(115, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](116, "GST (18%)");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](117, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](118);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](119, "div", 54);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](120, "div", 55)(121, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](122, "Total");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](123, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](124);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](125, "div", 56)(126, "div", 57);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](127, "i", 58);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](128, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](129, "Estimated delivery: 30-45 minutes");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](130, CheckoutComponent_div_130_Template, 33, 1, "div", 59)(131, CheckoutComponent_div_131_Template, 79, 16, "div", 59);
        }
        if (rf & 2) {
          const checkoutForm_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](20);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("ngModel", ctx.orderData.customerName);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("ngModel", ctx.orderData.email);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("ngModel", ctx.orderData.phone);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("ngModel", ctx.orderData.address.street);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("ngModel", ctx.orderData.address.city);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("ngModel", ctx.orderData.address.postalCode);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("ngModel", ctx.orderData.deliveryInstructions);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("selected", ctx.orderData.paymentMethod === "card");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("ngModel", ctx.orderData.paymentMethod);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("selected", ctx.orderData.paymentMethod === "upi");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("ngModel", ctx.orderData.paymentMethod);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("selected", ctx.orderData.paymentMethod === "cod");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("ngModel", ctx.orderData.paymentMethod);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !checkoutForm_r7.valid || ctx.isProcessing);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isProcessing);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.isProcessing);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.isProcessing ? "Processing..." : "Place Order", " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.cartItems);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Items (", ctx.getItemCount(), ")");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("\u20B9", ctx.getSubtotal(), "");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.getDeliveryFee() > 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.getDeliveryFee() === 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("\u20B9", ctx.getGST(), "");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("\u20B9", ctx.getTotal(), "");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.showUpiModal);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.showInvoice);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.UpperCasePipe, _angular_common__WEBPACK_IMPORTED_MODULE_4__.DatePipe, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.RadioControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgForm],
      styles: [".checkout-container[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  padding: 120px 0 60px;\n  background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);\n}\n\n.checkout-header[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 60px;\n}\n\n.page-title[_ngcontent-%COMP%] {\n  font-size: 3.5rem;\n  font-weight: 700;\n  color: var(--text-white);\n  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);\n  margin-bottom: 16px;\n}\n\n.page-subtitle[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  color: var(--text-muted);\n  font-weight: 500;\n}\n\n.checkout-content[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 400px;\n  gap: 50px;\n  align-items: start;\n}\n\n\n\n.checkout-form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 30px;\n}\n\n.form-section[_ngcontent-%COMP%] {\n  padding: 35px;\n  background: rgba(255, 255, 255, 0.12);\n  backdrop-filter: blur(20px);\n  border: 1px solid rgba(255, 255, 255, 0.25);\n  border-radius: var(--border-radius-lg);\n}\n\n.section-title[_ngcontent-%COMP%] {\n  font-size: 1.4rem;\n  font-weight: 600;\n  color: var(--text-white);\n  margin-bottom: 25px;\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n\n.section-title[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: var(--neon-blue);\n  font-size: 1.2rem;\n}\n\n.form-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 20px;\n}\n\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n\n.form-label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 8px;\n  font-weight: 500;\n  color: var(--text-white);\n  font-size: 0.95rem;\n}\n\n.form-control[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 16px 20px;\n  border: 2px solid rgba(255, 255, 255, 0.3);\n  border-radius: var(--border-radius);\n  background: rgba(255, 255, 255, 0.1);\n  backdrop-filter: blur(10px);\n  color: var(--text-white);\n  font-size: 16px;\n  transition: var(--transition);\n  resize: vertical;\n}\n\n.form-control[_ngcontent-%COMP%]::placeholder {\n  color: rgba(255, 255, 255, 0.6);\n}\n\n.form-control[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--neon-blue);\n  box-shadow: 0 0 20px rgba(0, 212, 255, 0.3);\n  background: rgba(255, 255, 255, 0.15);\n}\n\n\n\n.payment-methods[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 15px;\n}\n\n.payment-option[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 20px;\n  padding: 20px;\n  border: 2px solid rgba(255, 255, 255, 0.3);\n  border-radius: var(--border-radius);\n  background: rgba(255, 255, 255, 0.05);\n  cursor: pointer;\n  transition: var(--transition);\n}\n\n.payment-option[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.1);\n  border-color: rgba(255, 255, 255, 0.5);\n}\n\n.payment-option.selected[_ngcontent-%COMP%] {\n  border-color: var(--neon-blue);\n  background: rgba(0, 212, 255, 0.1);\n  box-shadow: 0 0 15px rgba(0, 212, 255, 0.2);\n}\n\n.payment-icon[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: var(--success-gradient);\n  border-radius: 12px;\n  color: var(--text-white);\n  font-size: 1.5rem;\n}\n\n.payment-details[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  font-weight: 600;\n  color: var(--text-white);\n  margin-bottom: 4px;\n}\n\n.payment-details[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  color: var(--text-muted);\n  margin: 0;\n}\n\n.payment-radio[_ngcontent-%COMP%] {\n  margin-left: auto;\n}\n\n.payment-radio[_ngcontent-%COMP%]   input[type=\"radio\"][_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  accent-color: var(--neon-blue);\n}\n\n\n\n.form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 20px;\n  margin-top: 30px;\n}\n\n.form-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  padding: 16px 32px;\n  font-size: 1.1rem;\n  font-weight: 600;\n}\n\n\n\n.order-summary[_ngcontent-%COMP%] {\n  padding: 35px;\n  height: -moz-fit-content;\n  height: fit-content;\n  position: sticky;\n  top: 120px;\n  background: rgba(255, 255, 255, 0.15);\n  backdrop-filter: blur(20px);\n  border: 1px solid rgba(255, 255, 255, 0.3);\n  border-radius: var(--border-radius-lg);\n}\n\n.summary-title[_ngcontent-%COMP%] {\n  font-size: 1.4rem;\n  font-weight: 600;\n  color: var(--text-white);\n  margin-bottom: 25px;\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n\n.summary-title[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: var(--neon-blue);\n}\n\n.summary-items[_ngcontent-%COMP%] {\n  margin-bottom: 25px;\n}\n\n.summary-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 15px;\n  padding: 15px 0;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.1);\n}\n\n.summary-item[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n\n.summary-item[_ngcontent-%COMP%]   .item-image[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  border-radius: 8px;\n  overflow: hidden;\n}\n\n.summary-item[_ngcontent-%COMP%]   .item-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n\n.summary-item[_ngcontent-%COMP%]   .item-info[_ngcontent-%COMP%] {\n  flex: 1;\n}\n\n.summary-item[_ngcontent-%COMP%]   .item-info[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  font-weight: 600;\n  color: var(--text-white);\n  margin-bottom: 4px;\n}\n\n.summary-item[_ngcontent-%COMP%]   .item-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: var(--text-muted);\n  margin: 0;\n}\n\n.summary-item[_ngcontent-%COMP%]   .item-price[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: var(--neon-blue);\n  font-size: 0.95rem;\n}\n\n.summary-totals[_ngcontent-%COMP%] {\n  border-top: 2px solid rgba(255, 255, 255, 0.2);\n  padding-top: 20px;\n  margin-bottom: 25px;\n}\n\n.summary-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 12px;\n  font-size: 0.95rem;\n}\n\n.summary-row[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-child {\n  color: var(--text-muted);\n  font-weight: 500;\n}\n\n.summary-row[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:last-child {\n  color: var(--text-white);\n  font-weight: 600;\n}\n\n.total-row[_ngcontent-%COMP%] {\n  border-top: 1px solid rgba(255, 255, 255, 0.2);\n  padding-top: 15px;\n  margin-top: 15px;\n  font-size: 1.1rem;\n}\n\n.total-row[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-weight: 700;\n}\n\n.total-row[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:last-child {\n  color: var(--neon-blue);\n  text-shadow: 0 0 10px rgba(0, 212, 255, 0.3);\n}\n\n.delivery-info[_ngcontent-%COMP%] {\n  border-top: 1px solid rgba(255, 255, 255, 0.2);\n  padding-top: 20px;\n}\n\n.delivery-time[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  color: var(--text-muted);\n  font-size: 0.9rem;\n}\n\n.delivery-time[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: var(--neon-green);\n}\n\n\n\n@media (max-width: 1024px) {\n  .checkout-content[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 350px;\n    gap: 40px;\n  }\n}\n\n@media (max-width: 768px) {\n  .checkout-container[_ngcontent-%COMP%] {\n    padding: 100px 0 40px;\n  }\n  \n  .page-title[_ngcontent-%COMP%] {\n    font-size: 2.5rem;\n  }\n  \n  .checkout-content[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 40px;\n  }\n  \n  .form-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 0;\n  }\n  \n  .form-section[_ngcontent-%COMP%] {\n    padding: 25px;\n  }\n  \n  .order-summary[_ngcontent-%COMP%] {\n    position: static;\n    padding: 25px;\n  }\n  \n  .form-actions[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 15px;\n  }\n  \n  .form-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n\n@media (max-width: 480px) {\n  .page-title[_ngcontent-%COMP%] {\n    font-size: 2rem;\n  }\n  \n  .form-section[_ngcontent-%COMP%] {\n    padding: 20px;\n  }\n  \n  .payment-option[_ngcontent-%COMP%] {\n    padding: 15px;\n  }\n  \n  .payment-icon[_ngcontent-%COMP%] {\n    width: 40px;\n    height: 40px;\n    font-size: 1.2rem;\n  }\n  \n  .order-summary[_ngcontent-%COMP%] {\n    padding: 20px;\n  }\n}\n\n\n\n.upi-modal[_ngcontent-%COMP%] {\n  max-width: 400px;\n  text-align: center;\n}\n\n.payment-amount[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n  color: var(--primary);\n  margin-bottom: 8px;\n}\n\n.qr-code[_ngcontent-%COMP%] {\n  margin: 30px 0;\n}\n\n.qr-placeholder[_ngcontent-%COMP%] {\n  width: 200px;\n  height: 200px;\n  border: 2px dashed #ccc;\n  border-radius: 12px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  margin: 0 auto;\n  background: #f8f9fa;\n}\n\n.qr-placeholder[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 4rem;\n  color: #ffffff;\n  margin-bottom: 12px;\n}\n\n.upi-instructions[_ngcontent-%COMP%] {\n  text-align: left;\n  margin: 20px 0;\n  padding: 20px;\n  background: rgba(255, 255, 255, 0.1);\n  border-radius: 8px;\n}\n\n.upi-instructions[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-bottom: 8px;\n  font-size: 0.9rem;\n  color: var(--text-white);\n}\n\n\n\n.invoice-modal[_ngcontent-%COMP%] {\n  max-width: 600px;\n  max-height: 90vh;\n  overflow-y: auto;\n}\n\n.invoice[_ngcontent-%COMP%] {\n  background: white;\n  padding: 40px;\n  color: black;\n}\n\n.invoice-header[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 30px;\n  border-bottom: 2px solid var(--primary);\n  padding-bottom: 20px;\n}\n\n.invoice-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: var(--primary);\n  font-size: 2.5rem;\n  margin-bottom: 8px;\n}\n\n.invoice-details[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 30px;\n}\n\n.invoice-items[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  margin-bottom: 30px;\n}\n\n.invoice-items[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n.invoice-items[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 12px;\n  text-align: left;\n  border-bottom: 1px solid #ddd;\n}\n\n.invoice-items[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background: #f8f9fa;\n  font-weight: 600;\n}\n\n.invoice-totals[_ngcontent-%COMP%] {\n  margin-left: auto;\n  width: 300px;\n}\n\n.total-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  padding: 8px 0;\n}\n\n.final-total[_ngcontent-%COMP%] {\n  border-top: 2px solid var(--primary);\n  font-weight: 700;\n  font-size: 1.2rem;\n  color: var(--primary);\n}\n\n.invoice-footer[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 30px;\n  padding-top: 20px;\n  border-top: 1px solid #ddd;\n}\n\n.invoice-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  justify-content: center;\n  padding: 20px;\n}\n\n\n\n.free-delivery[_ngcontent-%COMP%] {\n  color: var(--neon-green) !important;\n  font-weight: 700 !important;\n  text-shadow: 0 0 10px rgba(46, 204, 113, 0.3);\n}\n\n.delivery-info-text[_ngcontent-%COMP%] {\n  margin: 8px 0 15px 0;\n  padding: 8px 12px;\n  background: rgba(46, 204, 113, 0.1);\n  border-radius: 6px;\n  border-left: 3px solid var(--neon-green);\n}\n\n.free-delivery-message[_ngcontent-%COMP%] {\n  color: var(--neon-green);\n  font-size: 0.85rem;\n  font-weight: 500;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n\n.free-delivery-message[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n}\n\n.summary-divider[_ngcontent-%COMP%] {\n  height: 1px;\n  background: rgba(255, 255, 255, 0.2);\n  margin: 15px 0;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9jaGVja291dC9jaGVja291dC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWlCO0VBQ2pCLHFCQUFxQjtFQUNyQiwwRUFBMEU7QUFDNUU7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQix3QkFBd0I7RUFDeEIsMkNBQTJDO0VBQzNDLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQix3QkFBd0I7RUFDeEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGdDQUFnQztFQUNoQyxTQUFTO0VBQ1Qsa0JBQWtCO0FBQ3BCOztBQUVBLGtCQUFrQjtBQUNsQjtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsU0FBUztBQUNYOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHFDQUFxQztFQUNyQywyQkFBMkI7RUFDM0IsMkNBQTJDO0VBQzNDLHNDQUFzQztBQUN4Qzs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsd0JBQXdCO0VBQ3hCLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFNBQVM7QUFDWDs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLFNBQVM7QUFDWDs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLHdCQUF3QjtFQUN4QixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLDBDQUEwQztFQUMxQyxtQ0FBbUM7RUFDbkMsb0NBQW9DO0VBQ3BDLDJCQUEyQjtFQUMzQix3QkFBd0I7RUFDeEIsZUFBZTtFQUNmLDZCQUE2QjtFQUM3QixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSwrQkFBK0I7QUFDakM7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLDJDQUEyQztFQUMzQyxxQ0FBcUM7QUFDdkM7O0FBRUEsb0JBQW9CO0FBQ3BCO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFNBQVM7RUFDVCxhQUFhO0VBQ2IsMENBQTBDO0VBQzFDLG1DQUFtQztFQUNuQyxxQ0FBcUM7RUFDckMsZUFBZTtFQUNmLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLG9DQUFvQztFQUNwQyxzQ0FBc0M7QUFDeEM7O0FBRUE7RUFDRSw4QkFBOEI7RUFDOUIsa0NBQWtDO0VBQ2xDLDJDQUEyQztBQUM3Qzs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsbUNBQW1DO0VBQ25DLG1CQUFtQjtFQUNuQix3QkFBd0I7RUFDeEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQix3QkFBd0I7RUFDeEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLHdCQUF3QjtFQUN4QixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLDhCQUE4QjtBQUNoQzs7QUFFQSxpQkFBaUI7QUFDakI7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQixTQUFTO0VBQ1QsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixnQkFBZ0I7QUFDbEI7O0FBRUEsa0JBQWtCO0FBQ2xCO0VBQ0UsYUFBYTtFQUNiLHdCQUFtQjtFQUFuQixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLFVBQVU7RUFDVixxQ0FBcUM7RUFDckMsMkJBQTJCO0VBQzNCLDBDQUEwQztFQUMxQyxzQ0FBc0M7QUFDeEM7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLHdCQUF3QjtFQUN4QixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixTQUFTO0FBQ1g7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFNBQVM7RUFDVCxlQUFlO0VBQ2YsaURBQWlEO0FBQ25EOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxPQUFPO0FBQ1Q7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLHdCQUF3QjtFQUN4QixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsd0JBQXdCO0VBQ3hCLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQix1QkFBdUI7RUFDdkIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsOENBQThDO0VBQzlDLGlCQUFpQjtFQUNqQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLDhDQUE4QztFQUM5QyxpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2Qiw0Q0FBNEM7QUFDOUM7O0FBRUE7RUFDRSw4Q0FBOEM7RUFDOUMsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixTQUFTO0VBQ1Qsd0JBQXdCO0VBQ3hCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLHdCQUF3QjtBQUMxQjs7QUFFQSxzQkFBc0I7QUFDdEI7RUFDRTtJQUNFLGdDQUFnQztJQUNoQyxTQUFTO0VBQ1g7QUFDRjs7QUFFQTtFQUNFO0lBQ0UscUJBQXFCO0VBQ3ZCOztFQUVBO0lBQ0UsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsMEJBQTBCO0lBQzFCLFNBQVM7RUFDWDs7RUFFQTtJQUNFLDBCQUEwQjtJQUMxQixNQUFNO0VBQ1I7O0VBRUE7SUFDRSxhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxnQkFBZ0I7SUFDaEIsYUFBYTtFQUNmOztFQUVBO0lBQ0Usc0JBQXNCO0lBQ3RCLFNBQVM7RUFDWDs7RUFFQTtJQUNFLFdBQVc7RUFDYjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsYUFBYTtFQUNmOztFQUVBO0lBQ0UsYUFBYTtFQUNmOztFQUVBO0lBQ0UsV0FBVztJQUNYLFlBQVk7SUFDWixpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxhQUFhO0VBQ2Y7QUFDRjs7QUFFQSxxQkFBcUI7QUFDckI7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLHFCQUFxQjtFQUNyQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixjQUFjO0VBQ2QsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGNBQWM7RUFDZCxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLGFBQWE7RUFDYixvQ0FBb0M7RUFDcEMsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQix3QkFBd0I7QUFDMUI7O0FBRUEseUJBQXlCO0FBQ3pCO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsYUFBYTtFQUNiLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsdUNBQXVDO0VBQ3ZDLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLG1CQUFtQjtBQUNyQjs7QUFFQTs7RUFFRSxhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixjQUFjO0FBQ2hCOztBQUVBO0VBQ0Usb0NBQW9DO0VBQ3BDLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFNBQVM7RUFDVCx1QkFBdUI7RUFDdkIsYUFBYTtBQUNmOztBQUVBLHlCQUF5QjtBQUN6QjtFQUNFLG1DQUFtQztFQUNuQywyQkFBMkI7RUFDM0IsNkNBQTZDO0FBQy9DOztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLGlCQUFpQjtFQUNqQixtQ0FBbUM7RUFDbkMsa0JBQWtCO0VBQ2xCLHdDQUF3QztBQUMxQzs7QUFFQTtFQUNFLHdCQUF3QjtFQUN4QixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsUUFBUTtBQUNWOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsV0FBVztFQUNYLG9DQUFvQztFQUNwQyxjQUFjO0FBQ2hCIiwic291cmNlc0NvbnRlbnQiOlsiLmNoZWNrb3V0LWNvbnRhaW5lciB7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICBwYWRkaW5nOiAxMjBweCAwIDYwcHg7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICM2NjdlZWEgMCUsICM3NjRiYTIgNTAlLCAjZjA5M2ZiIDEwMCUpO1xufVxuXG4uY2hlY2tvdXQtaGVhZGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiA2MHB4O1xufVxuXG4ucGFnZS10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMy41cmVtO1xuICBmb250LXdlaWdodDogNzAwO1xuICBjb2xvcjogdmFyKC0tdGV4dC13aGl0ZSk7XG4gIHRleHQtc2hhZG93OiAycHggMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XG59XG5cbi5wYWdlLXN1YnRpdGxlIHtcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIGNvbG9yOiB2YXIoLS10ZXh0LW11dGVkKTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLmNoZWNrb3V0LWNvbnRlbnQge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA0MDBweDtcbiAgZ2FwOiA1MHB4O1xuICBhbGlnbi1pdGVtczogc3RhcnQ7XG59XG5cbi8qIEZvcm0gU2VjdGlvbnMgKi9cbi5jaGVja291dC1mb3JtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAzMHB4O1xufVxuXG4uZm9ybS1zZWN0aW9uIHtcbiAgcGFkZGluZzogMzVweDtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEyKTtcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDIwcHgpO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjUpO1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzLWxnKTtcbn1cblxuLnNlY3Rpb24tdGl0bGUge1xuICBmb250LXNpemU6IDEuNHJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6IHZhcigtLXRleHQtd2hpdGUpO1xuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDEycHg7XG59XG5cbi5zZWN0aW9uLXRpdGxlIGkge1xuICBjb2xvcjogdmFyKC0tbmVvbi1ibHVlKTtcbiAgZm9udC1zaXplOiAxLjJyZW07XG59XG5cbi5mb3JtLXJvdyB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcbiAgZ2FwOiAyMHB4O1xufVxuXG4uZm9ybS1ncm91cCB7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi5mb3JtLWxhYmVsIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6IHZhcigtLXRleHQtd2hpdGUpO1xuICBmb250LXNpemU6IDAuOTVyZW07XG59XG5cbi5mb3JtLWNvbnRyb2wge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMTZweCAyMHB4O1xuICBib3JkZXI6IDJweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KTtcbiAgY29sb3I6IHZhcigtLXRleHQtd2hpdGUpO1xuICBmb250LXNpemU6IDE2cHg7XG4gIHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXRpb24pO1xuICByZXNpemU6IHZlcnRpY2FsO1xufVxuXG4uZm9ybS1jb250cm9sOjpwbGFjZWhvbGRlciB7XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNik7XG59XG5cbi5mb3JtLWNvbnRyb2w6Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXItY29sb3I6IHZhcigtLW5lb24tYmx1ZSk7XG4gIGJveC1zaGFkb3c6IDAgMCAyMHB4IHJnYmEoMCwgMjEyLCAyNTUsIDAuMyk7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNSk7XG59XG5cbi8qIFBheW1lbnQgTWV0aG9kcyAqL1xuLnBheW1lbnQtbWV0aG9kcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMTVweDtcbn1cblxuLnBheW1lbnQtb3B0aW9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAyMHB4O1xuICBwYWRkaW5nOiAyMHB4O1xuICBib3JkZXI6IDJweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXRpb24pO1xufVxuXG4ucGF5bWVudC1vcHRpb246aG92ZXIge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XG4gIGJvcmRlci1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xufVxuXG4ucGF5bWVudC1vcHRpb24uc2VsZWN0ZWQge1xuICBib3JkZXItY29sb3I6IHZhcigtLW5lb24tYmx1ZSk7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMjEyLCAyNTUsIDAuMSk7XG4gIGJveC1zaGFkb3c6IDAgMCAxNXB4IHJnYmEoMCwgMjEyLCAyNTUsIDAuMik7XG59XG5cbi5wYXltZW50LWljb24ge1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogdmFyKC0tc3VjY2Vzcy1ncmFkaWVudCk7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LXdoaXRlKTtcbiAgZm9udC1zaXplOiAxLjVyZW07XG59XG5cbi5wYXltZW50LWRldGFpbHMgaDQge1xuICBmb250LXNpemU6IDEuMXJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6IHZhcigtLXRleHQtd2hpdGUpO1xuICBtYXJnaW4tYm90dG9tOiA0cHg7XG59XG5cbi5wYXltZW50LWRldGFpbHMgcCB7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xuICBjb2xvcjogdmFyKC0tdGV4dC1tdXRlZCk7XG4gIG1hcmdpbjogMDtcbn1cblxuLnBheW1lbnQtcmFkaW8ge1xuICBtYXJnaW4tbGVmdDogYXV0bztcbn1cblxuLnBheW1lbnQtcmFkaW8gaW5wdXRbdHlwZT1cInJhZGlvXCJdIHtcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMjBweDtcbiAgYWNjZW50LWNvbG9yOiB2YXIoLS1uZW9uLWJsdWUpO1xufVxuXG4vKiBGb3JtIEFjdGlvbnMgKi9cbi5mb3JtLWFjdGlvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMjBweDtcbiAgbWFyZ2luLXRvcDogMzBweDtcbn1cblxuLmZvcm0tYWN0aW9ucyAuYnRuIHtcbiAgcGFkZGluZzogMTZweCAzMnB4O1xuICBmb250LXNpemU6IDEuMXJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLyogT3JkZXIgU3VtbWFyeSAqL1xuLm9yZGVyLXN1bW1hcnkge1xuICBwYWRkaW5nOiAzNXB4O1xuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICB0b3A6IDEyMHB4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTUpO1xuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMjBweCk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cy1sZyk7XG59XG5cbi5zdW1tYXJ5LXRpdGxlIHtcbiAgZm9udC1zaXplOiAxLjRyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LXdoaXRlKTtcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxMnB4O1xufVxuXG4uc3VtbWFyeS10aXRsZSBpIHtcbiAgY29sb3I6IHZhcigtLW5lb24tYmx1ZSk7XG59XG5cbi5zdW1tYXJ5LWl0ZW1zIHtcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcbn1cblxuLnN1bW1hcnktaXRlbSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTVweDtcbiAgcGFkZGluZzogMTVweCAwO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xufVxuXG4uc3VtbWFyeS1pdGVtOmxhc3QtY2hpbGQge1xuICBib3JkZXItYm90dG9tOiBub25lO1xufVxuXG4uc3VtbWFyeS1pdGVtIC5pdGVtLWltYWdlIHtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uc3VtbWFyeS1pdGVtIC5pdGVtLWltYWdlIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xufVxuXG4uc3VtbWFyeS1pdGVtIC5pdGVtLWluZm8ge1xuICBmbGV4OiAxO1xufVxuXG4uc3VtbWFyeS1pdGVtIC5pdGVtLWluZm8gaDQge1xuICBmb250LXNpemU6IDAuOTVyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LXdoaXRlKTtcbiAgbWFyZ2luLWJvdHRvbTogNHB4O1xufVxuXG4uc3VtbWFyeS1pdGVtIC5pdGVtLWluZm8gcCB7XG4gIGZvbnQtc2l6ZTogMC44NXJlbTtcbiAgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpO1xuICBtYXJnaW46IDA7XG59XG5cbi5zdW1tYXJ5LWl0ZW0gLml0ZW0tcHJpY2Uge1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogdmFyKC0tbmVvbi1ibHVlKTtcbiAgZm9udC1zaXplOiAwLjk1cmVtO1xufVxuXG4uc3VtbWFyeS10b3RhbHMge1xuICBib3JkZXItdG9wOiAycHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xuICBwYWRkaW5nLXRvcDogMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcbn1cblxuLnN1bW1hcnktcm93IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xuICBmb250LXNpemU6IDAuOTVyZW07XG59XG5cbi5zdW1tYXJ5LXJvdyBzcGFuOmZpcnN0LWNoaWxkIHtcbiAgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpO1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4uc3VtbWFyeS1yb3cgc3BhbjpsYXN0LWNoaWxkIHtcbiAgY29sb3I6IHZhcigtLXRleHQtd2hpdGUpO1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG4udG90YWwtcm93IHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcbiAgcGFkZGluZy10b3A6IDE1cHg7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xufVxuXG4udG90YWwtcm93IHNwYW4ge1xuICBmb250LXdlaWdodDogNzAwO1xufVxuXG4udG90YWwtcm93IHNwYW46bGFzdC1jaGlsZCB7XG4gIGNvbG9yOiB2YXIoLS1uZW9uLWJsdWUpO1xuICB0ZXh0LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAyMTIsIDI1NSwgMC4zKTtcbn1cblxuLmRlbGl2ZXJ5LWluZm8ge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xuICBwYWRkaW5nLXRvcDogMjBweDtcbn1cblxuLmRlbGl2ZXJ5LXRpbWUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDEwcHg7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LW11dGVkKTtcbiAgZm9udC1zaXplOiAwLjlyZW07XG59XG5cbi5kZWxpdmVyeS10aW1lIGkge1xuICBjb2xvcjogdmFyKC0tbmVvbi1ncmVlbik7XG59XG5cbi8qIFJlc3BvbnNpdmUgRGVzaWduICovXG5AbWVkaWEgKG1heC13aWR0aDogMTAyNHB4KSB7XG4gIC5jaGVja291dC1jb250ZW50IHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAzNTBweDtcbiAgICBnYXA6IDQwcHg7XG4gIH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5jaGVja291dC1jb250YWluZXIge1xuICAgIHBhZGRpbmc6IDEwMHB4IDAgNDBweDtcbiAgfVxuICBcbiAgLnBhZ2UtdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xuICB9XG4gIFxuICAuY2hlY2tvdXQtY29udGVudCB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gICAgZ2FwOiA0MHB4O1xuICB9XG4gIFxuICAuZm9ybS1yb3cge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICAgIGdhcDogMDtcbiAgfVxuICBcbiAgLmZvcm0tc2VjdGlvbiB7XG4gICAgcGFkZGluZzogMjVweDtcbiAgfVxuICBcbiAgLm9yZGVyLXN1bW1hcnkge1xuICAgIHBvc2l0aW9uOiBzdGF0aWM7XG4gICAgcGFkZGluZzogMjVweDtcbiAgfVxuICBcbiAgLmZvcm0tYWN0aW9ucyB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDE1cHg7XG4gIH1cbiAgXG4gIC5mb3JtLWFjdGlvbnMgLmJ0biB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gIC5wYWdlLXRpdGxlIHtcbiAgICBmb250LXNpemU6IDJyZW07XG4gIH1cbiAgXG4gIC5mb3JtLXNlY3Rpb24ge1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gIH1cbiAgXG4gIC5wYXltZW50LW9wdGlvbiB7XG4gICAgcGFkZGluZzogMTVweDtcbiAgfVxuICBcbiAgLnBheW1lbnQtaWNvbiB7XG4gICAgd2lkdGg6IDQwcHg7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICB9XG4gIFxuICAub3JkZXItc3VtbWFyeSB7XG4gICAgcGFkZGluZzogMjBweDtcbiAgfVxufVxuXG4vKiBVUEkgTW9kYWwgU3R5bGVzICovXG4udXBpLW1vZGFsIHtcbiAgbWF4LXdpZHRoOiA0MDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ucGF5bWVudC1hbW91bnQgaDIge1xuICBmb250LXNpemU6IDIuNXJlbTtcbiAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG59XG5cbi5xci1jb2RlIHtcbiAgbWFyZ2luOiAzMHB4IDA7XG59XG5cbi5xci1wbGFjZWhvbGRlciB7XG4gIHdpZHRoOiAyMDBweDtcbiAgaGVpZ2h0OiAyMDBweDtcbiAgYm9yZGVyOiAycHggZGFzaGVkICNjY2M7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXJnaW46IDAgYXV0bztcbiAgYmFja2dyb3VuZDogI2Y4ZjlmYTtcbn1cblxuLnFyLXBsYWNlaG9sZGVyIGkge1xuICBmb250LXNpemU6IDRyZW07XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xufVxuXG4udXBpLWluc3RydWN0aW9ucyB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIG1hcmdpbjogMjBweCAwO1xuICBwYWRkaW5nOiAyMHB4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbn1cblxuLnVwaS1pbnN0cnVjdGlvbnMgcCB7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbiAgZm9udC1zaXplOiAwLjlyZW07XG4gIGNvbG9yOiB2YXIoLS10ZXh0LXdoaXRlKTtcbn1cblxuLyogSW52b2ljZSBNb2RhbCBTdHlsZXMgKi9cbi5pbnZvaWNlLW1vZGFsIHtcbiAgbWF4LXdpZHRoOiA2MDBweDtcbiAgbWF4LWhlaWdodDogOTB2aDtcbiAgb3ZlcmZsb3cteTogYXV0bztcbn1cblxuLmludm9pY2Uge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgcGFkZGluZzogNDBweDtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4uaW52b2ljZS1oZWFkZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB2YXIoLS1wcmltYXJ5KTtcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XG59XG5cbi5pbnZvaWNlLWhlYWRlciBoMSB7XG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbiAgZm9udC1zaXplOiAyLjVyZW07XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbn1cblxuLmludm9pY2UtZGV0YWlscyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cblxuLmludm9pY2UtaXRlbXMgdGFibGUge1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cblxuLmludm9pY2UtaXRlbXMgdGgsXG4uaW52b2ljZS1pdGVtcyB0ZCB7XG4gIHBhZGRpbmc6IDEycHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkO1xufVxuXG4uaW52b2ljZS1pdGVtcyB0aCB7XG4gIGJhY2tncm91bmQ6ICNmOGY5ZmE7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5pbnZvaWNlLXRvdGFscyB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICB3aWR0aDogMzAwcHg7XG59XG5cbi50b3RhbC1yb3cge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBhZGRpbmc6IDhweCAwO1xufVxuXG4uZmluYWwtdG90YWwge1xuICBib3JkZXItdG9wOiAycHggc29saWQgdmFyKC0tcHJpbWFyeSk7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xuICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XG59XG5cbi5pbnZvaWNlLWZvb3RlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMzBweDtcbiAgcGFkZGluZy10b3A6IDIwcHg7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZGRkO1xufVxuXG4uaW52b2ljZS1hY3Rpb25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAxNnB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcGFkZGluZzogMjBweDtcbn1cblxuLyogRnJlZSBEZWxpdmVyeSBTdHlsZXMgKi9cbi5mcmVlLWRlbGl2ZXJ5IHtcbiAgY29sb3I6IHZhcigtLW5lb24tZ3JlZW4pICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiA3MDAgIWltcG9ydGFudDtcbiAgdGV4dC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoNDYsIDIwNCwgMTEzLCAwLjMpO1xufVxuXG4uZGVsaXZlcnktaW5mby10ZXh0IHtcbiAgbWFyZ2luOiA4cHggMCAxNXB4IDA7XG4gIHBhZGRpbmc6IDhweCAxMnB4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDQ2LCAyMDQsIDExMywgMC4xKTtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBib3JkZXItbGVmdDogM3B4IHNvbGlkIHZhcigtLW5lb24tZ3JlZW4pO1xufVxuXG4uZnJlZS1kZWxpdmVyeS1tZXNzYWdlIHtcbiAgY29sb3I6IHZhcigtLW5lb24tZ3JlZW4pO1xuICBmb250LXNpemU6IDAuODVyZW07XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogNnB4O1xufVxuXG4uZnJlZS1kZWxpdmVyeS1tZXNzYWdlIGkge1xuICBmb250LXNpemU6IDAuOHJlbTtcbn1cblxuLnN1bW1hcnktZGl2aWRlciB7XG4gIGhlaWdodDogMXB4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XG4gIG1hcmdpbjogMTVweCAwO1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 9673:
/*!*************************************************************************!*\
  !*** ./src/app/components/forgot-password/forgot-password.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ForgotPasswordComponent: () => (/* binding */ ForgotPasswordComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/auth.service */ 4796);








function ForgotPasswordComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 6)(1, "div")(2, "label", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "input", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function ForgotPasswordComponent_div_5_Template_input_ngModelChange_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx_r1.email, $event) || (ctx_r1.email = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ForgotPasswordComponent_div_5_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.sendOTP());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r1.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r1.loading ? "Sending..." : "Send OTP", " ");
  }
}
function ForgotPasswordComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 6)(1, "div")(2, "label", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "OTP");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function ForgotPasswordComponent_div_6_Template_input_ngModelChange_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx_r1.otp, $event) || (ctx_r1.otp = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div")(6, "label", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "New Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function ForgotPasswordComponent_div_6_Template_input_ngModelChange_8_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx_r1.newPassword, $event) || (ctx_r1.newPassword = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ForgotPasswordComponent_div_6_Template_button_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.resetPassword());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.otp);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.newPassword);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r1.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r1.loading ? "Resetting..." : "Reset Password", " ");
  }
}
class ForgotPasswordComponent {
  constructor(authService, router) {
    this.authService = authService;
    this.router = router;
    this.step = 1;
    this.email = '';
    this.otp = '';
    this.newPassword = '';
    this.loading = false;
  }
  sendOTP() {
    if (!this.email) return;
    this.loading = true;
    this.authService.forgotPassword(this.email).subscribe({
      next: response => {
        this.loading = false;
        this.step = 2;
        alert('OTP sent successfully!');
      },
      error: error => {
        this.loading = false;
        alert('Error sending OTP: ' + error.error);
      }
    });
  }
  resetPassword() {
    if (!this.otp || !this.newPassword) return;
    this.loading = true;
    this.authService.resetPassword(this.email, this.otp, this.newPassword).subscribe({
      next: response => {
        this.loading = false;
        alert('Password reset successfully!');
        this.router.navigate(['/login']);
      },
      error: error => {
        this.loading = false;
        alert('Error resetting password: ' + error.error);
      }
    });
  }
  static {
    this.ɵfac = function ForgotPasswordComponent_Factory(t) {
      return new (t || ForgotPasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: ForgotPasswordComponent,
      selectors: [["app-forgot-password"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
      decls: 10,
      vars: 2,
      consts: [[1, "min-h-screen", "flex", "items-center", "justify-center", "bg-gray-50"], [1, "max-w-md", "w-full", "space-y-8"], [1, "mt-6", "text-center", "text-3xl", "font-extrabold", "text-gray-900"], ["class", "mt-8 space-y-6", 4, "ngIf"], [1, "text-center"], ["routerLink", "/login", 1, "text-blue-600", "hover:text-blue-500"], [1, "mt-8", "space-y-6"], [1, "block", "text-sm", "font-medium", "text-gray-700"], ["type", "email", "placeholder", "Enter your email", 1, "mt-1", "block", "w-full", "px-3", "py-2", "border", "border-gray-300", "rounded-md", 3, "ngModelChange", "ngModel"], [1, "w-full", "bg-blue-600", "text-white", "py-2", "px-4", "rounded-md", "hover:bg-blue-700", 3, "click", "disabled"], ["type", "text", "placeholder", "Enter 6-digit OTP", 1, "mt-1", "block", "w-full", "px-3", "py-2", "border", "border-gray-300", "rounded-md", 3, "ngModelChange", "ngModel"], ["type", "password", "placeholder", "Enter new password", 1, "mt-1", "block", "w-full", "px-3", "py-2", "border", "border-gray-300", "rounded-md", 3, "ngModelChange", "ngModel"], [1, "w-full", "bg-green-600", "text-white", "py-2", "px-4", "rounded-md", "hover:bg-green-700", 3, "click", "disabled"]],
      template: function ForgotPasswordComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div")(3, "h2", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " Reset Password ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, ForgotPasswordComponent_div_5_Template, 7, 3, "div", 3)(6, ForgotPasswordComponent_div_6_Template, 11, 4, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 4)(8, "a", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, " Back to Login ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.step === 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.step === 2);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink],
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 2865:
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HomeComponent: () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _shared_category_slider_category_slider_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/category-slider/category-slider.component */ 4507);
/* harmony import */ var _shared_product_card_product_card_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/product-card/product-card.component */ 2961);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/product.service */ 6241);
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/cart.service */ 6868);









function HomeComponent_app_product_card_42_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-product-card", 31);
  }
  if (rf & 2) {
    const product_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("product", product_r1);
  }
}
function HomeComponent_div_43_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Loading more products...");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
}
function HomeComponent_div_44_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 34)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "You've seen all our amazing products!");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
}
class HomeComponent {
  constructor(productService, cartService) {
    this.productService = productService;
    this.cartService = cartService;
    this.trendingProducts = [];
    this.loading = false;
    this.currentPage = 0;
    this.pageSize = 8;
    this.hasMoreProducts = true;
  }
  ngOnInit() {
    this.loadProducts();
  }
  loadProducts() {
    if (this.loading || !this.hasMoreProducts) return;
    this.loading = true;
    this.productService.getProducts(this.currentPage, this.pageSize).subscribe({
      next: response => {
        const newProducts = response.content || [];
        this.trendingProducts = [...this.trendingProducts, ...newProducts];
        this.hasMoreProducts = !response.last;
        this.currentPage++;
        this.loading = false;
      },
      error: error => {
        console.error('Error loading products:', error);
        this.loading = false;
      }
    });
  }
  onScroll() {
    const threshold = 200;
    const position = window.pageYOffset + window.innerHeight;
    const height = document.documentElement.scrollHeight;
    if (position > height - threshold) {
      this.loadProducts();
    }
  }
  trackByProductId(index, product) {
    return product.id;
  }
  static {
    this.ɵfac = function HomeComponent_Factory(t) {
      return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_product_service__WEBPACK_IMPORTED_MODULE_2__.ProductService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_cart_service__WEBPACK_IMPORTED_MODULE_3__.CartService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
      type: HomeComponent,
      selectors: [["app-home"]],
      hostBindings: function HomeComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("scroll", function HomeComponent_scroll_HostBindingHandler($event) {
            return ctx.onScroll($event);
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresolveWindow"]);
        }
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵStandaloneFeature"]],
      decls: 72,
      vars: 4,
      consts: [[1, "home-container"], [1, "hero-section"], [1, "hero-container"], [1, "hero-content"], [1, "hero-title"], [1, "hero-subtitle"], ["routerLink", "/products", 1, "hero-btn"], [1, "feature-badges"], [1, "badge"], [1, "badge-icon"], [1, "section-wrapper", "categories-section"], [1, "section-wrapper", "trending-section"], [1, "container"], [1, "section-header"], [1, "section-header-content"], [1, "section-heading", "trending-title"], [1, "gradient-text"], [1, "section-subtitle"], ["routerLink", "/products", 1, "btn", "btn-outline"], [1, "fas", "fa-arrow-right"], [1, "product-grid"], [3, "product", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["class", "loading-container", 4, "ngIf"], ["class", "no-more-products", 4, "ngIf"], [1, "section-wrapper", "features-section"], [1, "section-heading"], [1, "features-grid"], [1, "feature-card"], [1, "fas", "fa-shipping-fast", "feature-icon"], [1, "fas", "fa-leaf", "feature-icon"], [1, "fas", "fa-shield-alt", "feature-icon"], [3, "product"], [1, "loading-container"], [1, "loading-spinner"], [1, "no-more-products"]],
      template: function HomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "section", 1)(2, "div", 2)(3, "div", 3)(4, "h1", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "Fresh Groceries Delivered");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "p", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "Premium quality groceries delivered to your doorstep in 30 minutes");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "button", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "Start Shopping");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 7)(11, "div", 8)(12, "div", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, "\uD83C\uDF3F");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "100% Organic");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "div", 8)(17, "div", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18, "\u23F0");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20, "30 Min Delivery");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "div", 8)(22, "div", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23, "\uD83D\uDEE1\uFE0F");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25, "Quality Assured");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "section", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](27, "app-category-slider");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "section", 11)(29, "div", 12)(30, "div", 13)(31, "div", 14)(32, "h2", 15)(33, "span", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](34, "Trending");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](35, " Products ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "p", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](37, "Discover the most popular items in your area");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](38, "button", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](39, " View All ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](40, "i", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](41, "div", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](42, HomeComponent_app_product_card_42_Template, 1, 1, "app-product-card", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](43, HomeComponent_div_43_Template, 4, 0, "div", 22)(44, HomeComponent_div_44_Template, 3, 0, "div", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](45, "section", 24)(46, "div", 12)(47, "div", 13)(48, "div", 14)(49, "h2", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](50, "Why Choose RevCart?");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](51, "p", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](52, "Experience the best grocery delivery service with premium quality and convenience");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](53, "div", 26)(54, "div", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](55, "i", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](56, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](57, "Lightning Fast Delivery");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](58, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](59, "Get your groceries delivered in just 30 minutes with our express delivery service");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](60, "div", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](61, "i", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](62, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](63, "100% Fresh & Organic");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](64, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](65, "Handpicked fresh produce from trusted farmers ensuring quality and freshness");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](66, "div", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](67, "i", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](68, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](69, "Quality Guaranteed");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](70, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](71, "Money back guarantee if you're not satisfied with our products and services");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](42);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.trendingProducts)("ngForTrackBy", ctx.trackByProductId);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.hasMoreProducts && ctx.trendingProducts.length > 0);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLink, _shared_category_slider_category_slider_component__WEBPACK_IMPORTED_MODULE_0__.CategorySliderComponent, _shared_product_card_product_card_component__WEBPACK_IMPORTED_MODULE_1__.ProductCardComponent],
      styles: [".home-container[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  background: var(--bg-primary);\n}\n\n.hero-section[_ngcontent-%COMP%] {\n  height: 100vh;\n  min-height: 600px;\n  background-image: url('https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80');\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.hero-section[_ngcontent-%COMP%]::before {\n  content: '';\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.3);\n  z-index: 1;\n}\n\n.hero-container[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 2;\n  max-width: 1200px;\n  width: 100%;\n  padding: 0 20px;\n  text-align: center;\n}\n\n.hero-content[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.2);\n  backdrop-filter: blur(10px);\n  border-radius: 20px;\n  padding: 60px 40px;\n  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.10);\n  width: 100%;\n  margin: 0 auto;\n}\n\n.hero-title[_ngcontent-%COMP%] {\n  font-size: 3.5rem;\n  font-weight: 800;\n  color: #e3e8ef;\n  margin-bottom: 20px;\n  line-height: 1.2;\n  opacity: 1;\n}\n\n.hero-subtitle[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  color: #e3e8ef;\n  margin-bottom: 40px;\n  line-height: 1.6;\n  font-weight: 400;\n  opacity: 1;\n}\n\n.hero-btn[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\n  color: white;\n  border: none;\n  padding: 18px 40px;\n  font-size: 1.1rem;\n  font-weight: 600;\n  border-radius: 50px;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  box-shadow: 0 10px 30px rgba(102, 126, 234, 0.3);\n  margin-bottom: 40px;\n  opacity: 1;\n}\n\n.hero-btn[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 15px 40px rgba(102, 126, 234, 0.4);\n}\n\n.feature-badges[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  gap: 30px;\n  flex-wrap: wrap;\n}\n\n.badge[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  background: rgba(255, 255, 255, 0.9);\n  padding: 12px 20px;\n  border-radius: 25px;\n  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);\n  font-weight: 500;\n  color: #2d3748;\n  font-size: 0.9rem;\n  opacity: 1;\n}\n\n.badge-icon[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  opacity: 1;\n}\n\n\n\n.section-wrapper[_ngcontent-%COMP%] {\n  padding: var(--space-16) 0;\n  background: var(--bg-primary);\n}\n\n.section-wrapper[_ngcontent-%COMP%]:nth-child(even) {\n  background: var(--bg-secondary);\n}\n\n.trending-section[_ngcontent-%COMP%] {\n  padding: var(--space-16) 0;\n  background: var(--bg-primary);\n}\n\n.categories-section[_ngcontent-%COMP%] {\n  padding: var(--space-16) 0;\n  background: var(--bg-secondary);\n}\n\n.features-section[_ngcontent-%COMP%] {\n  padding: var(--space-16) 0;\n  background: var(--bg-primary);\n}\n\n.section-heading[_ngcontent-%COMP%] {\n  font-size: var(--font-size-3xl);\n  font-weight: var(--font-weight-bold);\n  color: var(--text-primary);\n  margin: 0 0 var(--space-2) 0;\n  line-height: var(--line-height-tight);\n}\n\n.section-title[_ngcontent-%COMP%] {\n  font-size: var(--font-size-3xl);\n  font-weight: var(--font-weight-bold);\n  color: var(--text-primary);\n  margin: 0 0 var(--space-2) 0;\n  line-height: var(--line-height-tight);\n}\n\n.trending-title[_ngcontent-%COMP%] {\n  font-size: var(--font-size-3xl);\n  font-weight: var(--font-weight-bold);\n  color: var(--text-primary);\n  margin: 0 0 var(--space-2) 0;\n  line-height: var(--line-height-tight);\n}\n\n.section-subtitle[_ngcontent-%COMP%] {\n  font-size: var(--font-size-base);\n  color: var(--text-secondary);\n  font-weight: var(--font-weight-normal);\n  margin-bottom: var(--space-10);\n  line-height: var(--line-height-relaxed);\n}\n\n.gradient-text[_ngcontent-%COMP%] {\n  color: var(--primary);\n  font-weight: var(--font-weight-bold);\n}\n\n.categories-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));\n  gap: var(--space-4);\n  margin-top: var(--space-8);\n  max-width: 800px;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.category-button[_ngcontent-%COMP%] {\n  padding: var(--space-4) var(--space-3);\n  text-align: center;\n  cursor: pointer;\n  text-decoration: none;\n  transition: var(--transition-normal);\n  background: var(--bg-primary);\n  border-radius: var(--radius-lg);\n  border: 1px solid var(--border-color);\n  box-shadow: var(--shadow-sm);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: var(--space-2);\n}\n\n.category-button[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: var(--shadow-md);\n  text-decoration: none;\n  border-color: var(--primary);\n}\n\n.category-card[_ngcontent-%COMP%] {\n  padding: var(--space-4) var(--space-3);\n  text-align: center;\n  cursor: pointer;\n  text-decoration: none;\n  transition: var(--transition-normal);\n  background: var(--bg-primary);\n  border-radius: var(--radius-lg);\n  border: 1px solid var(--border-color);\n  box-shadow: var(--shadow-sm);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: var(--space-2);\n}\n\n.category-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: var(--shadow-md);\n  text-decoration: none;\n  border-color: var(--primary);\n}\n\n.category-icon[_ngcontent-%COMP%] {\n  font-size: var(--font-size-2xl);\n  margin-bottom: var(--space-1);\n  transition: var(--transition-normal);\n  color: var(--primary);\n}\n\n.category-card[_ngcontent-%COMP%]:hover   .category-icon[_ngcontent-%COMP%] {\n  transform: scale(1.1);\n  color: var(--primary-dark);\n}\n\n.category-name[_ngcontent-%COMP%] {\n  font-size: var(--font-size-sm);\n  font-weight: var(--font-weight-medium);\n  color: var(--text-primary);\n  margin: 0;\n  line-height: var(--line-height-tight);\n}\n\n.category-count[_ngcontent-%COMP%] {\n  font-size: var(--font-size-xs);\n  color: var(--text-tertiary);\n  font-weight: var(--font-weight-normal);\n  margin: 0;\n}\n\n\n\n.product-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(5, minmax(0, 1fr));\n  gap: 20px;\n  align-items: stretch;\n  margin-top: var(--space-8);\n}\n\n\n\n.products-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));\n  gap: var(--space-6);\n  margin-top: var(--space-8);\n}\n\n\n\n.features-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n  gap: var(--space-6);\n  margin-top: var(--space-10);\n}\n\n.feature-card[_ngcontent-%COMP%] {\n  padding: var(--space-8) var(--space-6);\n  text-align: center;\n  background: var(--bg-primary);\n  border-radius: var(--radius-xl);\n  border: 1px solid var(--border-color);\n  transition: var(--transition-normal);\n  box-shadow: var(--shadow-sm);\n}\n\n.feature-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-4px);\n  box-shadow: var(--shadow-lg);\n  border-color: var(--primary);\n}\n\n.feature-icon[_ngcontent-%COMP%] {\n  font-size: var(--font-size-4xl);\n  margin-bottom: var(--space-5);\n  color: var(--primary);\n  display: block;\n}\n\n.feature-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: var(--font-size-xl);\n  font-weight: var(--font-weight-semibold);\n  margin-bottom: var(--space-3);\n  color: var(--text-primary);\n  line-height: var(--line-height-tight);\n}\n\n.feature-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--text-secondary);\n  line-height: var(--line-height-relaxed);\n  font-size: var(--font-size-sm);\n  font-weight: var(--font-weight-normal);\n  margin: 0;\n}\n\n\n\n.section-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: var(--space-8);\n}\n\n.section-header-content[_ngcontent-%COMP%] {\n  flex: 1;\n}\n\n.section-header[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  margin-top: var(--space-2);\n}\n\n\n\n@media (max-width: 768px) {\n  .hero-content[_ngcontent-%COMP%] {\n    padding: 40px 30px;\n    margin: 0;\n    background: rgba(255, 255, 255, 0.2);\n    backdrop-filter: blur(10px);\n    border-radius: 20px;\n    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.10);\n    width: 100%;\n  }\n  \n  .hero-title[_ngcontent-%COMP%] {\n    font-size: 2.5rem;\n  }\n  \n  .hero-subtitle[_ngcontent-%COMP%] {\n    font-size: 1.1rem;\n  }\n  \n  .feature-badges[_ngcontent-%COMP%] {\n    gap: 15px;\n  }\n  \n  .badge[_ngcontent-%COMP%] {\n    padding: 10px 16px;\n    font-size: 0.85rem;\n  }\n}\n\n@media (max-width: 480px) {\n  .hero-title[_ngcontent-%COMP%] {\n    font-size: 2rem;\n  }\n  \n  .hero-subtitle[_ngcontent-%COMP%] {\n    font-size: 1rem;\n  }\n  \n  .hero-btn[_ngcontent-%COMP%] {\n    padding: 16px 32px;\n    font-size: 1rem;\n  }\n  \n  .feature-badges[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: center;\n  }\n}\n\n\n\n@media (min-width: 1200px) {\n  .product-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(5, minmax(0, 1fr));\n  }\n}\n\n@media (max-width: 1199px) and (min-width: 992px) {\n  .product-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(4, minmax(0, 1fr));\n  }\n}\n\n@media (max-width: 991px) and (min-width: 768px) {\n  .product-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(3, minmax(0, 1fr));\n  }\n}\n\n@media (max-width: 767px) {\n  .product-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n}\n\n@media (max-width: 480px) {\n  .product-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n\n@media (max-width: 1024px) {\n  \n  .products-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));\n    gap: 16px;\n  }\n  \n  .categories-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));\n    gap: 12px;\n  }\n}\n\n@media (max-width: 768px) {\n  .section-wrapper[_ngcontent-%COMP%] {\n    padding: 40px 0;\n  }\n  \n  .home-title[_ngcontent-%COMP%] {\n    font-size: 2.5rem;\n  }\n  \n  .hero-subtitle[_ngcontent-%COMP%] {\n    font-size: 1.1rem;\n  }\n  \n  .section-heading[_ngcontent-%COMP%], \n   .section-title[_ngcontent-%COMP%], \n   .trending-title[_ngcontent-%COMP%] {\n    font-size: 1.75rem;\n  }\n  \n  .section-subtitle[_ngcontent-%COMP%] {\n    font-size: 0.9rem;\n  }\n  \n  .products-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n    gap: 16px;\n  }\n  \n  .features-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 20px;\n  }\n  \n  .hero-buttons[_ngcontent-%COMP%] {\n    justify-content: center;\n  }\n  \n  .section-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 16px;\n  }\n  \n  .section-header[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    align-self: flex-start;\n  }\n}\n\n@media (max-width: 480px) {\n  .hero-section[_ngcontent-%COMP%] {\n    padding: 60px 0 40px;\n  }\n  \n  .section-wrapper[_ngcontent-%COMP%] {\n    padding: 32px 0;\n  }\n  \n  .home-title[_ngcontent-%COMP%] {\n    font-size: 2rem;\n  }\n  \n  .section-heading[_ngcontent-%COMP%], \n   .section-title[_ngcontent-%COMP%], \n   .trending-title[_ngcontent-%COMP%] {\n    font-size: 1.5rem;\n  }\n  \n  .products-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));\n    gap: 12px;\n  }\n  \n  .categories-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n    gap: 8px;\n  }\n  \n  .category-card[_ngcontent-%COMP%] {\n    height: 44px;\n  }\n  \n  .category-name[_ngcontent-%COMP%] {\n    font-size: 0.8rem;\n  }\n  \n  .feature-card[_ngcontent-%COMP%] {\n    padding: 24px 20px;\n  }\n  \n  .container[_ngcontent-%COMP%] {\n    padding: 0 16px;\n  }\n}\n\n\n\n.loading-container[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: var(--space-10) var(--space-5);\n  color: var(--text-secondary);\n  background: var(--bg-secondary);\n  border-radius: var(--radius-lg);\n  border: 1px solid var(--border-color);\n  margin: var(--space-6) 0;\n}\n\n.loading-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-top: var(--space-4);\n  font-size: var(--font-size-base);\n  font-weight: var(--font-weight-medium);\n}\n\n.no-more-products[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: var(--space-10) var(--space-5);\n  color: var(--text-secondary);\n  font-size: var(--font-size-base);\n  font-weight: var(--font-weight-medium);\n  background: var(--bg-secondary);\n  border-radius: var(--radius-lg);\n  border: 1px solid var(--border-color);\n  margin: var(--space-6) 0;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFpQjtFQUNqQiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLDRMQUE0TDtFQUM1TCxzQkFBc0I7RUFDdEIsMkJBQTJCO0VBQzNCLDRCQUE0QjtFQUM1QixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixPQUFPO0VBQ1AsUUFBUTtFQUNSLFNBQVM7RUFDVCw4QkFBOEI7RUFDOUIsVUFBVTtBQUNaOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixpQkFBaUI7RUFDakIsV0FBVztFQUNYLGVBQWU7RUFDZixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxvQ0FBb0M7RUFDcEMsMkJBQTJCO0VBQzNCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsMENBQTBDO0VBQzFDLFdBQVc7RUFDWCxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsY0FBYztFQUNkLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLFVBQVU7QUFDWjs7QUFFQTtFQUNFLDZEQUE2RDtFQUM3RCxZQUFZO0VBQ1osWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YseUJBQXlCO0VBQ3pCLGdEQUFnRDtFQUNoRCxtQkFBbUI7RUFDbkIsVUFBVTtBQUNaOztBQUVBO0VBQ0UsMkJBQTJCO0VBQzNCLGdEQUFnRDtBQUNsRDs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsU0FBUztFQUNULGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFFBQVE7RUFDUixvQ0FBb0M7RUFDcEMsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQix5Q0FBeUM7RUFDekMsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsVUFBVTtBQUNaOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLFVBQVU7QUFDWjs7QUFFQSwyQkFBMkI7QUFDM0I7RUFDRSwwQkFBMEI7RUFDMUIsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsK0JBQStCO0FBQ2pDOztBQUVBO0VBQ0UsMEJBQTBCO0VBQzFCLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLDBCQUEwQjtFQUMxQiwrQkFBK0I7QUFDakM7O0FBRUE7RUFDRSwwQkFBMEI7RUFDMUIsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsK0JBQStCO0VBQy9CLG9DQUFvQztFQUNwQywwQkFBMEI7RUFDMUIsNEJBQTRCO0VBQzVCLHFDQUFxQztBQUN2Qzs7QUFFQTtFQUNFLCtCQUErQjtFQUMvQixvQ0FBb0M7RUFDcEMsMEJBQTBCO0VBQzFCLDRCQUE0QjtFQUM1QixxQ0FBcUM7QUFDdkM7O0FBRUE7RUFDRSwrQkFBK0I7RUFDL0Isb0NBQW9DO0VBQ3BDLDBCQUEwQjtFQUMxQiw0QkFBNEI7RUFDNUIscUNBQXFDO0FBQ3ZDOztBQUVBO0VBQ0UsZ0NBQWdDO0VBQ2hDLDRCQUE0QjtFQUM1QixzQ0FBc0M7RUFDdEMsOEJBQThCO0VBQzlCLHVDQUF1QztBQUN6Qzs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsMkRBQTJEO0VBQzNELG1CQUFtQjtFQUNuQiwwQkFBMEI7RUFDMUIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxzQ0FBc0M7RUFDdEMsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixxQkFBcUI7RUFDckIsb0NBQW9DO0VBQ3BDLDZCQUE2QjtFQUM3QiwrQkFBK0I7RUFDL0IscUNBQXFDO0VBQ3JDLDRCQUE0QjtFQUM1QixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSwyQkFBMkI7RUFDM0IsNEJBQTRCO0VBQzVCLHFCQUFxQjtFQUNyQiw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSxzQ0FBc0M7RUFDdEMsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixxQkFBcUI7RUFDckIsb0NBQW9DO0VBQ3BDLDZCQUE2QjtFQUM3QiwrQkFBK0I7RUFDL0IscUNBQXFDO0VBQ3JDLDRCQUE0QjtFQUM1QixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSwyQkFBMkI7RUFDM0IsNEJBQTRCO0VBQzVCLHFCQUFxQjtFQUNyQiw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSwrQkFBK0I7RUFDL0IsNkJBQTZCO0VBQzdCLG9DQUFvQztFQUNwQyxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsOEJBQThCO0VBQzlCLHNDQUFzQztFQUN0QywwQkFBMEI7RUFDMUIsU0FBUztFQUNULHFDQUFxQztBQUN2Qzs7QUFFQTtFQUNFLDhCQUE4QjtFQUM5QiwyQkFBMkI7RUFDM0Isc0NBQXNDO0VBQ3RDLFNBQVM7QUFDWDs7QUFFQSxpQkFBaUI7QUFDakI7RUFDRSxhQUFhO0VBQ2IsZ0RBQWdEO0VBQ2hELFNBQVM7RUFDVCxvQkFBb0I7RUFDcEIsMEJBQTBCO0FBQzVCOztBQUVBLGtCQUFrQjtBQUNsQjtFQUNFLGFBQWE7RUFDYiw0REFBNEQ7RUFDNUQsbUJBQW1CO0VBQ25CLDBCQUEwQjtBQUM1Qjs7QUFFQSw0QkFBNEI7QUFDNUI7RUFDRSxhQUFhO0VBQ2IsMkRBQTJEO0VBQzNELG1CQUFtQjtFQUNuQiwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxzQ0FBc0M7RUFDdEMsa0JBQWtCO0VBQ2xCLDZCQUE2QjtFQUM3QiwrQkFBK0I7RUFDL0IscUNBQXFDO0VBQ3JDLG9DQUFvQztFQUNwQyw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSwyQkFBMkI7RUFDM0IsNEJBQTRCO0VBQzVCLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLCtCQUErQjtFQUMvQiw2QkFBNkI7RUFDN0IscUJBQXFCO0VBQ3JCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSw4QkFBOEI7RUFDOUIsd0NBQXdDO0VBQ3hDLDZCQUE2QjtFQUM3QiwwQkFBMEI7RUFDMUIscUNBQXFDO0FBQ3ZDOztBQUVBO0VBQ0UsNEJBQTRCO0VBQzVCLHVDQUF1QztFQUN2Qyw4QkFBOEI7RUFDOUIsc0NBQXNDO0VBQ3RDLFNBQVM7QUFDWDs7QUFFQSxtQkFBbUI7QUFDbkI7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLHVCQUF1QjtFQUN2Qiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxPQUFPO0FBQ1Q7O0FBRUE7RUFDRSwwQkFBMEI7QUFDNUI7O0FBRUEsc0JBQXNCO0FBQ3RCO0VBQ0U7SUFDRSxrQkFBa0I7SUFDbEIsU0FBUztJQUNULG9DQUFvQztJQUNwQywyQkFBMkI7SUFDM0IsbUJBQW1CO0lBQ25CLDBDQUEwQztJQUMxQyxXQUFXO0VBQ2I7O0VBRUE7SUFDRSxpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxTQUFTO0VBQ1g7O0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsa0JBQWtCO0VBQ3BCO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxlQUFlO0VBQ2pCOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxzQkFBc0I7SUFDdEIsbUJBQW1CO0VBQ3JCO0FBQ0Y7O0FBRUEsNEJBQTRCO0FBQzVCO0VBQ0U7SUFDRSxnREFBZ0Q7RUFDbEQ7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsZ0RBQWdEO0VBQ2xEO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLGdEQUFnRDtFQUNsRDtBQUNGOztBQUVBO0VBQ0U7SUFDRSxnREFBZ0Q7RUFDbEQ7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsMEJBQTBCO0VBQzVCO0FBQ0Y7O0FBRUE7O0VBRUU7SUFDRSw0REFBNEQ7SUFDNUQsU0FBUztFQUNYOztFQUVBO0lBQ0UsMkRBQTJEO0lBQzNELFNBQVM7RUFDWDtBQUNGOztBQUVBO0VBQ0U7SUFDRSxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsaUJBQWlCO0VBQ25COztFQUVBOzs7SUFHRSxrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSw0REFBNEQ7SUFDNUQsU0FBUztFQUNYOztFQUVBO0lBQ0UsMEJBQTBCO0lBQzFCLFNBQVM7RUFDWDs7RUFFQTtJQUNFLHVCQUF1QjtFQUN6Qjs7RUFFQTtJQUNFLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsU0FBUztFQUNYOztFQUVBO0lBQ0Usc0JBQXNCO0VBQ3hCO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLG9CQUFvQjtFQUN0Qjs7RUFFQTtJQUNFLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxlQUFlO0VBQ2pCOztFQUVBOzs7SUFHRSxpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSw0REFBNEQ7SUFDNUQsU0FBUztFQUNYOztFQUVBO0lBQ0UscUNBQXFDO0lBQ3JDLFFBQVE7RUFDVjs7RUFFQTtJQUNFLFlBQVk7RUFDZDs7RUFFQTtJQUNFLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLGVBQWU7RUFDakI7QUFDRjs7QUFFQSxtQkFBbUI7QUFDbkI7RUFDRSxrQkFBa0I7RUFDbEIsdUNBQXVDO0VBQ3ZDLDRCQUE0QjtFQUM1QiwrQkFBK0I7RUFDL0IsK0JBQStCO0VBQy9CLHFDQUFxQztFQUNyQyx3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSwwQkFBMEI7RUFDMUIsZ0NBQWdDO0VBQ2hDLHNDQUFzQztBQUN4Qzs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQix1Q0FBdUM7RUFDdkMsNEJBQTRCO0VBQzVCLGdDQUFnQztFQUNoQyxzQ0FBc0M7RUFDdEMsK0JBQStCO0VBQy9CLCtCQUErQjtFQUMvQixxQ0FBcUM7RUFDckMsd0JBQXdCO0FBQzFCIiwic291cmNlc0NvbnRlbnQiOlsiLmhvbWUtY29udGFpbmVyIHtcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIGJhY2tncm91bmQ6IHZhcigtLWJnLXByaW1hcnkpO1xufVxuXG4uaGVyby1zZWN0aW9uIHtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgbWluLWhlaWdodDogNjAwcHg7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE1NDI4MzgxMzItOTJjNTMzMDA0OTFlP2l4bGliPXJiLTQuMC4zJml4aWQ9TTN3eE1qQTNmREI4TUh4d2FHOTBieTF3WVdkbGZIeDhmR1Z1ZkRCOGZIeDhmQSUzRCUzRCZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCZ3PTIwNzQmcT04MCcpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5oZXJvLXNlY3Rpb246OmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICcnO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjMpO1xuICB6LWluZGV4OiAxO1xufVxuXG4uaGVyby1jb250YWluZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDI7XG4gIG1heC13aWR0aDogMTIwMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMCAyMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5oZXJvLWNvbnRlbnQge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KTtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgcGFkZGluZzogNjBweCA0MHB4O1xuICBib3gtc2hhZG93OiAwIDhweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4xMCk7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDAgYXV0bztcbn1cblxuLmhlcm8tdGl0bGUge1xuICBmb250LXNpemU6IDMuNXJlbTtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgY29sb3I6ICNlM2U4ZWY7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjI7XG4gIG9wYWNpdHk6IDE7XG59XG5cbi5oZXJvLXN1YnRpdGxlIHtcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xuICBjb2xvcjogI2UzZThlZjtcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcbiAgbGluZS1oZWlnaHQ6IDEuNjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgb3BhY2l0eTogMTtcbn1cblxuLmhlcm8tYnRuIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzY2N2VlYSAwJSwgIzc2NGJhMiAxMDAlKTtcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXI6IG5vbmU7XG4gIHBhZGRpbmc6IDE4cHggNDBweDtcbiAgZm9udC1zaXplOiAxLjFyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbiAgYm94LXNoYWRvdzogMCAxMHB4IDMwcHggcmdiYSgxMDIsIDEyNiwgMjM0LCAwLjMpO1xuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xuICBvcGFjaXR5OiAxO1xufVxuXG4uaGVyby1idG46aG92ZXIge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XG4gIGJveC1zaGFkb3c6IDAgMTVweCA0MHB4IHJnYmEoMTAyLCAxMjYsIDIzNCwgMC40KTtcbn1cblxuLmZlYXR1cmUtYmFkZ2VzIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGdhcDogMzBweDtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuXG4uYmFkZ2Uge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDhweDtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkpO1xuICBwYWRkaW5nOiAxMnB4IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gIGJveC1zaGFkb3c6IDAgNXB4IDE1cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogIzJkMzc0ODtcbiAgZm9udC1zaXplOiAwLjlyZW07XG4gIG9wYWNpdHk6IDE7XG59XG5cbi5iYWRnZS1pY29uIHtcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIG9wYWNpdHk6IDE7XG59XG5cbi8qIE1vZGVybiBTZWN0aW9uIFN0eWxpbmcgKi9cbi5zZWN0aW9uLXdyYXBwZXIge1xuICBwYWRkaW5nOiB2YXIoLS1zcGFjZS0xNikgMDtcbiAgYmFja2dyb3VuZDogdmFyKC0tYmctcHJpbWFyeSk7XG59XG5cbi5zZWN0aW9uLXdyYXBwZXI6bnRoLWNoaWxkKGV2ZW4pIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tYmctc2Vjb25kYXJ5KTtcbn1cblxuLnRyZW5kaW5nLXNlY3Rpb24ge1xuICBwYWRkaW5nOiB2YXIoLS1zcGFjZS0xNikgMDtcbiAgYmFja2dyb3VuZDogdmFyKC0tYmctcHJpbWFyeSk7XG59XG5cbi5jYXRlZ29yaWVzLXNlY3Rpb24ge1xuICBwYWRkaW5nOiB2YXIoLS1zcGFjZS0xNikgMDtcbiAgYmFja2dyb3VuZDogdmFyKC0tYmctc2Vjb25kYXJ5KTtcbn1cblxuLmZlYXR1cmVzLXNlY3Rpb24ge1xuICBwYWRkaW5nOiB2YXIoLS1zcGFjZS0xNikgMDtcbiAgYmFja2dyb3VuZDogdmFyKC0tYmctcHJpbWFyeSk7XG59XG5cbi5zZWN0aW9uLWhlYWRpbmcge1xuICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS0zeGwpO1xuICBmb250LXdlaWdodDogdmFyKC0tZm9udC13ZWlnaHQtYm9sZCk7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnkpO1xuICBtYXJnaW46IDAgMCB2YXIoLS1zcGFjZS0yKSAwO1xuICBsaW5lLWhlaWdodDogdmFyKC0tbGluZS1oZWlnaHQtdGlnaHQpO1xufVxuXG4uc2VjdGlvbi10aXRsZSB7XG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLTN4bCk7XG4gIGZvbnQtd2VpZ2h0OiB2YXIoLS1mb250LXdlaWdodC1ib2xkKTtcbiAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7XG4gIG1hcmdpbjogMCAwIHZhcigtLXNwYWNlLTIpIDA7XG4gIGxpbmUtaGVpZ2h0OiB2YXIoLS1saW5lLWhlaWdodC10aWdodCk7XG59XG5cbi50cmVuZGluZy10aXRsZSB7XG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLTN4bCk7XG4gIGZvbnQtd2VpZ2h0OiB2YXIoLS1mb250LXdlaWdodC1ib2xkKTtcbiAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7XG4gIG1hcmdpbjogMCAwIHZhcigtLXNwYWNlLTIpIDA7XG4gIGxpbmUtaGVpZ2h0OiB2YXIoLS1saW5lLWhlaWdodC10aWdodCk7XG59XG5cbi5zZWN0aW9uLXN1YnRpdGxlIHtcbiAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtYmFzZSk7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LXNlY29uZGFyeSk7XG4gIGZvbnQtd2VpZ2h0OiB2YXIoLS1mb250LXdlaWdodC1ub3JtYWwpO1xuICBtYXJnaW4tYm90dG9tOiB2YXIoLS1zcGFjZS0xMCk7XG4gIGxpbmUtaGVpZ2h0OiB2YXIoLS1saW5lLWhlaWdodC1yZWxheGVkKTtcbn1cblxuLmdyYWRpZW50LXRleHQge1xuICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XG4gIGZvbnQtd2VpZ2h0OiB2YXIoLS1mb250LXdlaWdodC1ib2xkKTtcbn1cblxuLmNhdGVnb3JpZXMtZ3JpZCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMTQwcHgsIDFmcikpO1xuICBnYXA6IHZhcigtLXNwYWNlLTQpO1xuICBtYXJnaW4tdG9wOiB2YXIoLS1zcGFjZS04KTtcbiAgbWF4LXdpZHRoOiA4MDBweDtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbn1cblxuLmNhdGVnb3J5LWJ1dHRvbiB7XG4gIHBhZGRpbmc6IHZhcigtLXNwYWNlLTQpIHZhcigtLXNwYWNlLTMpO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uLW5vcm1hbCk7XG4gIGJhY2tncm91bmQ6IHZhcigtLWJnLXByaW1hcnkpO1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpdXMtbGcpO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO1xuICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3ctc20pO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IHZhcigtLXNwYWNlLTIpO1xufVxuXG4uY2F0ZWdvcnktYnV0dG9uOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xuICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3ctbWQpO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tcHJpbWFyeSk7XG59XG5cbi5jYXRlZ29yeS1jYXJkIHtcbiAgcGFkZGluZzogdmFyKC0tc3BhY2UtNCkgdmFyKC0tc3BhY2UtMyk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXRpb24tbm9ybWFsKTtcbiAgYmFja2dyb3VuZDogdmFyKC0tYmctcHJpbWFyeSk7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cy1sZyk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XG4gIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdy1zbSk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogdmFyKC0tc3BhY2UtMik7XG59XG5cbi5jYXRlZ29yeS1jYXJkOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xuICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3ctbWQpO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tcHJpbWFyeSk7XG59XG5cbi5jYXRlZ29yeS1pY29uIHtcbiAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtMnhsKTtcbiAgbWFyZ2luLWJvdHRvbTogdmFyKC0tc3BhY2UtMSk7XG4gIHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXRpb24tbm9ybWFsKTtcbiAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xufVxuXG4uY2F0ZWdvcnktY2FyZDpob3ZlciAuY2F0ZWdvcnktaWNvbiB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbiAgY29sb3I6IHZhcigtLXByaW1hcnktZGFyayk7XG59XG5cbi5jYXRlZ29yeS1uYW1lIHtcbiAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtc20pO1xuICBmb250LXdlaWdodDogdmFyKC0tZm9udC13ZWlnaHQtbWVkaXVtKTtcbiAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7XG4gIG1hcmdpbjogMDtcbiAgbGluZS1oZWlnaHQ6IHZhcigtLWxpbmUtaGVpZ2h0LXRpZ2h0KTtcbn1cblxuLmNhdGVnb3J5LWNvdW50IHtcbiAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUteHMpO1xuICBjb2xvcjogdmFyKC0tdGV4dC10ZXJ0aWFyeSk7XG4gIGZvbnQtd2VpZ2h0OiB2YXIoLS1mb250LXdlaWdodC1ub3JtYWwpO1xuICBtYXJnaW46IDA7XG59XG5cbi8qIFByb2R1Y3QgR3JpZCAqL1xuLnByb2R1Y3QtZ3JpZCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDUsIG1pbm1heCgwLCAxZnIpKTtcbiAgZ2FwOiAyMHB4O1xuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAgbWFyZ2luLXRvcDogdmFyKC0tc3BhY2UtOCk7XG59XG5cbi8qIFByb2R1Y3RzIEdyaWQgKi9cbi5wcm9kdWN0cy1ncmlkIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoMjgwcHgsIDFmcikpO1xuICBnYXA6IHZhcigtLXNwYWNlLTYpO1xuICBtYXJnaW4tdG9wOiB2YXIoLS1zcGFjZS04KTtcbn1cblxuLyogTW9kZXJuIEZlYXR1cmVzIFNlY3Rpb24gKi9cbi5mZWF0dXJlcy1ncmlkIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgzMDBweCwgMWZyKSk7XG4gIGdhcDogdmFyKC0tc3BhY2UtNik7XG4gIG1hcmdpbi10b3A6IHZhcigtLXNwYWNlLTEwKTtcbn1cblxuLmZlYXR1cmUtY2FyZCB7XG4gIHBhZGRpbmc6IHZhcigtLXNwYWNlLTgpIHZhcigtLXNwYWNlLTYpO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6IHZhcigtLWJnLXByaW1hcnkpO1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpdXMteGwpO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO1xuICB0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uLW5vcm1hbCk7XG4gIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdy1zbSk7XG59XG5cbi5mZWF0dXJlLWNhcmQ6aG92ZXIge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTRweCk7XG4gIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdy1sZyk7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tcHJpbWFyeSk7XG59XG5cbi5mZWF0dXJlLWljb24ge1xuICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS00eGwpO1xuICBtYXJnaW4tYm90dG9tOiB2YXIoLS1zcGFjZS01KTtcbiAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLmZlYXR1cmUtY2FyZCBoMyB7XG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLXhsKTtcbiAgZm9udC13ZWlnaHQ6IHZhcigtLWZvbnQtd2VpZ2h0LXNlbWlib2xkKTtcbiAgbWFyZ2luLWJvdHRvbTogdmFyKC0tc3BhY2UtMyk7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnkpO1xuICBsaW5lLWhlaWdodDogdmFyKC0tbGluZS1oZWlnaHQtdGlnaHQpO1xufVxuXG4uZmVhdHVyZS1jYXJkIHAge1xuICBjb2xvcjogdmFyKC0tdGV4dC1zZWNvbmRhcnkpO1xuICBsaW5lLWhlaWdodDogdmFyKC0tbGluZS1oZWlnaHQtcmVsYXhlZCk7XG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLXNtKTtcbiAgZm9udC13ZWlnaHQ6IHZhcigtLWZvbnQtd2VpZ2h0LW5vcm1hbCk7XG4gIG1hcmdpbjogMDtcbn1cblxuLyogU2VjdGlvbiBIZWFkZXIgKi9cbi5zZWN0aW9uLWhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIG1hcmdpbi1ib3R0b206IHZhcigtLXNwYWNlLTgpO1xufVxuXG4uc2VjdGlvbi1oZWFkZXItY29udGVudCB7XG4gIGZsZXg6IDE7XG59XG5cbi5zZWN0aW9uLWhlYWRlciAuYnRuIHtcbiAgbWFyZ2luLXRvcDogdmFyKC0tc3BhY2UtMik7XG59XG5cbi8qIFJlc3BvbnNpdmUgRGVzaWduICovXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmhlcm8tY29udGVudCB7XG4gICAgcGFkZGluZzogNDBweCAzMHB4O1xuICAgIG1hcmdpbjogMDtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEwcHgpO1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgYm94LXNoYWRvdzogMCA4cHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMTApO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIFxuICAuaGVyby10aXRsZSB7XG4gICAgZm9udC1zaXplOiAyLjVyZW07XG4gIH1cbiAgXG4gIC5oZXJvLXN1YnRpdGxlIHtcbiAgICBmb250LXNpemU6IDEuMXJlbTtcbiAgfVxuICBcbiAgLmZlYXR1cmUtYmFkZ2VzIHtcbiAgICBnYXA6IDE1cHg7XG4gIH1cbiAgXG4gIC5iYWRnZSB7XG4gICAgcGFkZGluZzogMTBweCAxNnB4O1xuICAgIGZvbnQtc2l6ZTogMC44NXJlbTtcbiAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgLmhlcm8tdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgfVxuICBcbiAgLmhlcm8tc3VidGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgfVxuICBcbiAgLmhlcm8tYnRuIHtcbiAgICBwYWRkaW5nOiAxNnB4IDMycHg7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICB9XG4gIFxuICAuZmVhdHVyZS1iYWRnZXMge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxufVxuXG4vKiBQcm9kdWN0IEdyaWQgUmVzcG9uc2l2ZSAqL1xuQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkge1xuICAucHJvZHVjdC1ncmlkIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg1LCBtaW5tYXgoMCwgMWZyKSk7XG4gIH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDExOTlweCkgYW5kIChtaW4td2lkdGg6IDk5MnB4KSB7XG4gIC5wcm9kdWN0LWdyaWQge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIG1pbm1heCgwLCAxZnIpKTtcbiAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogOTkxcHgpIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xuICAucHJvZHVjdC1ncmlkIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCBtaW5tYXgoMCwgMWZyKSk7XG4gIH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC5wcm9kdWN0LWdyaWQge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIG1pbm1heCgwLCAxZnIpKTtcbiAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgLnByb2R1Y3QtZ3JpZCB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gIH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMjRweCkge1xuICBcbiAgLnByb2R1Y3RzLWdyaWQge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDI1MHB4LCAxZnIpKTtcbiAgICBnYXA6IDE2cHg7XG4gIH1cbiAgXG4gIC5jYXRlZ29yaWVzLWdyaWQge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMTIwcHgsIDFmcikpO1xuICAgIGdhcDogMTJweDtcbiAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLnNlY3Rpb24td3JhcHBlciB7XG4gICAgcGFkZGluZzogNDBweCAwO1xuICB9XG4gIFxuICAuaG9tZS10aXRsZSB7XG4gICAgZm9udC1zaXplOiAyLjVyZW07XG4gIH1cbiAgXG4gIC5oZXJvLXN1YnRpdGxlIHtcbiAgICBmb250LXNpemU6IDEuMXJlbTtcbiAgfVxuICBcbiAgLnNlY3Rpb24taGVhZGluZyxcbiAgLnNlY3Rpb24tdGl0bGUsXG4gIC50cmVuZGluZy10aXRsZSB7XG4gICAgZm9udC1zaXplOiAxLjc1cmVtO1xuICB9XG4gIFxuICAuc2VjdGlvbi1zdWJ0aXRsZSB7XG4gICAgZm9udC1zaXplOiAwLjlyZW07XG4gIH1cbiAgXG4gIC5wcm9kdWN0cy1ncmlkIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgyMDBweCwgMWZyKSk7XG4gICAgZ2FwOiAxNnB4O1xuICB9XG4gIFxuICAuZmVhdHVyZXMtZ3JpZCB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gICAgZ2FwOiAyMHB4O1xuICB9XG4gIFxuICAuaGVyby1idXR0b25zIHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxuICBcbiAgLnNlY3Rpb24taGVhZGVyIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgIGdhcDogMTZweDtcbiAgfVxuICBcbiAgLnNlY3Rpb24taGVhZGVyIC5idG4ge1xuICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XG4gIH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gIC5oZXJvLXNlY3Rpb24ge1xuICAgIHBhZGRpbmc6IDYwcHggMCA0MHB4O1xuICB9XG4gIFxuICAuc2VjdGlvbi13cmFwcGVyIHtcbiAgICBwYWRkaW5nOiAzMnB4IDA7XG4gIH1cbiAgXG4gIC5ob21lLXRpdGxlIHtcbiAgICBmb250LXNpemU6IDJyZW07XG4gIH1cbiAgXG4gIC5zZWN0aW9uLWhlYWRpbmcsXG4gIC5zZWN0aW9uLXRpdGxlLFxuICAudHJlbmRpbmctdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICB9XG4gIFxuICAucHJvZHVjdHMtZ3JpZCB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoMTYwcHgsIDFmcikpO1xuICAgIGdhcDogMTJweDtcbiAgfVxuICBcbiAgLmNhdGVnb3JpZXMtZ3JpZCB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcbiAgICBnYXA6IDhweDtcbiAgfVxuICBcbiAgLmNhdGVnb3J5LWNhcmQge1xuICAgIGhlaWdodDogNDRweDtcbiAgfVxuICBcbiAgLmNhdGVnb3J5LW5hbWUge1xuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuICB9XG4gIFxuICAuZmVhdHVyZS1jYXJkIHtcbiAgICBwYWRkaW5nOiAyNHB4IDIwcHg7XG4gIH1cbiAgXG4gIC5jb250YWluZXIge1xuICAgIHBhZGRpbmc6IDAgMTZweDtcbiAgfVxufVxuXG4vKiBMb2FkaW5nIFN0YXRlcyAqL1xuLmxvYWRpbmctY29udGFpbmVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiB2YXIoLS1zcGFjZS0xMCkgdmFyKC0tc3BhY2UtNSk7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LXNlY29uZGFyeSk7XG4gIGJhY2tncm91bmQ6IHZhcigtLWJnLXNlY29uZGFyeSk7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cy1sZyk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XG4gIG1hcmdpbjogdmFyKC0tc3BhY2UtNikgMDtcbn1cblxuLmxvYWRpbmctY29udGFpbmVyIHAge1xuICBtYXJnaW4tdG9wOiB2YXIoLS1zcGFjZS00KTtcbiAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtYmFzZSk7XG4gIGZvbnQtd2VpZ2h0OiB2YXIoLS1mb250LXdlaWdodC1tZWRpdW0pO1xufVxuXG4ubm8tbW9yZS1wcm9kdWN0cyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogdmFyKC0tc3BhY2UtMTApIHZhcigtLXNwYWNlLTUpO1xuICBjb2xvcjogdmFyKC0tdGV4dC1zZWNvbmRhcnkpO1xuICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1iYXNlKTtcbiAgZm9udC13ZWlnaHQ6IHZhcigtLWZvbnQtd2VpZ2h0LW1lZGl1bSk7XG4gIGJhY2tncm91bmQ6IHZhcigtLWJnLXNlY29uZGFyeSk7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cy1sZyk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XG4gIG1hcmdpbjogdmFyKC0tc3BhY2UtNikgMDtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 4585:
/*!*********************************************************************!*\
  !*** ./src/app/components/order-success/order-success.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OrderSuccessComponent: () => (/* binding */ OrderSuccessComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);





const _c0 = a0 => ["/track-order", a0];
function OrderSuccessComponent_div_12_div_60_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 51)(1, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 54)(4, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", item_r1.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", item_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.category);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Qty: ", item_r1.quantity, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" \u20B9", item_r1.price * item_r1.quantity, " ");
  }
}
function OrderSuccessComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24)(1, "div", 25)(2, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Order Details ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Order ID: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 28)(10, "div", 29)(11, "div", 30)(12, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Customer Information");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 32)(16, "div", 33)(17, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Name:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 33)(22, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Email:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 33)(27, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Phone:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 30)(32, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "i", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " Delivery Information");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 37)(36, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "i", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 30)(45, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "i", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, " Payment Information");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 41)(49, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "i", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 45)(56, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, " Order Items");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](60, OrderSuccessComponent_div_12_div_60_Template, 12, 6, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 48)(62, "div", 49)(63, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Subtotal:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 49)(68, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Delivery Fee:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 49)(73, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Taxes & Fees:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 50)(78, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Total Paid:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.orderSummary.orderId);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.orderSummary.customerName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.orderSummary.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.orderSummary.phone);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.orderSummary.address.street);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx_r1.orderSummary.address.city, ", ", ctx_r1.orderSummary.address.postalCode, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Estimated delivery: ", ctx_r1.getFormattedDeliveryTime(), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r1.getPaymentClass());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r1.getPaymentIcon());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.getPaymentMethodName(), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.orderSummary.paymentMethod === "cod" ? "Pay on Delivery" : "Payment Successful", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.orderSummary.items);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u20B9", ctx_r1.orderSummary.subtotal, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u20B9", ctx_r1.orderSummary.deliveryFee, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u20B9", ctx_r1.orderSummary.taxes, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u20B9", ctx_r1.orderSummary.total, "");
  }
}
class OrderSuccessComponent {
  constructor(router) {
    this.router = router;
    this.orderSummary = null;
  }
  ngOnInit() {
    this.loadOrderSummary();
  }
  loadOrderSummary() {
    const orderData = sessionStorage.getItem('orderSummary');
    if (orderData) {
      this.orderSummary = JSON.parse(orderData);
      // Convert date strings back to Date objects
      if (this.orderSummary) {
        this.orderSummary.orderDate = new Date(this.orderSummary.orderDate);
        this.orderSummary.estimatedDelivery = new Date(this.orderSummary.estimatedDelivery);
      }
    } else {
      // If no order data found, redirect to home
      this.router.navigate(['/']);
    }
  }
  getFormattedDeliveryTime() {
    if (!this.orderSummary) return '';
    const deliveryTime = this.orderSummary.estimatedDelivery;
    const now = new Date();
    const diffMinutes = Math.ceil((deliveryTime.getTime() - now.getTime()) / (1000 * 60));
    if (diffMinutes <= 0) {
      return 'Arriving soon!';
    } else if (diffMinutes < 60) {
      return `${diffMinutes} minutes`;
    } else {
      const hours = Math.floor(diffMinutes / 60);
      const minutes = diffMinutes % 60;
      return `${hours}h ${minutes}m`;
    }
  }
  getPaymentMethodName() {
    if (!this.orderSummary) return '';
    switch (this.orderSummary.paymentMethod) {
      case 'card':
        return 'Credit/Debit Card';
      case 'upi':
        return 'UPI Payment';
      case 'cod':
        return 'Cash on Delivery';
      default:
        return 'Unknown';
    }
  }
  getPaymentIcon() {
    if (!this.orderSummary) return '';
    switch (this.orderSummary.paymentMethod) {
      case 'card':
        return 'fas fa-credit-card';
      case 'upi':
        return 'fas fa-mobile-alt';
      case 'cod':
        return 'fas fa-money-bill-wave';
      default:
        return 'fas fa-question';
    }
  }
  getPaymentClass() {
    if (!this.orderSummary) return '';
    switch (this.orderSummary.paymentMethod) {
      case 'card':
        return 'card-payment';
      case 'upi':
        return 'upi-payment';
      case 'cod':
        return 'cod-payment';
      default:
        return '';
    }
  }
  trackOrder() {
    // Implement order tracking functionality
    alert(`Tracking order ${this.orderSummary?.orderId}. This feature will be implemented soon!`);
  }
  ngOnDestroy() {
    // Clear order data when leaving the page
    // sessionStorage.removeItem('orderSummary');
  }
  static {
    this.ɵfac = function OrderSuccessComponent_Factory(t) {
      return new (t || OrderSuccessComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: OrderSuccessComponent,
      selectors: [["app-order-success"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
      decls: 46,
      vars: 4,
      consts: [[1, "success-container"], [1, "container"], [1, "success-animation"], [1, "checkmark-circle"], [1, "checkmark"], [1, "success-message"], [1, "success-title"], [1, "neon-text"], [1, "success-subtitle"], ["class", "order-details glass-card", 4, "ngIf"], [1, "action-buttons"], ["routerLink", "/products", 1, "btn", "btn-ghost"], [1, "fas", "fa-shopping-bag"], [1, "btn", "btn-neon", 3, "routerLink"], [1, "fas", "fa-truck"], ["routerLink", "/", 1, "btn", "btn-primary"], [1, "fas", "fa-home"], [1, "additional-info", "glass-card"], [1, "info-cards"], [1, "info-card"], [1, "info-icon"], [1, "fas", "fa-headset"], [1, "fas", "fa-undo-alt"], [1, "fas", "fa-shield-alt"], [1, "order-details", "glass-card"], [1, "order-header"], [1, "fas", "fa-receipt"], [1, "order-id"], [1, "order-content"], [1, "order-info"], [1, "info-section"], [1, "fas", "fa-user"], [1, "info-grid"], [1, "info-item"], [1, "label"], [1, "value"], [1, "fas", "fa-map-marker-alt"], [1, "delivery-address"], [1, "delivery-time"], [1, "fas", "fa-clock"], [1, "fas", "fa-credit-card"], [1, "payment-method"], [1, "payment-badge", 3, "ngClass"], [1, "payment-status", "success"], [1, "fas", "fa-check-circle"], [1, "order-items"], [1, "items-list"], ["class", "order-item", 4, "ngFor", "ngForOf"], [1, "order-total"], [1, "total-row"], [1, "total-row", "final-total"], [1, "order-item"], [1, "item-image"], [3, "src", "alt"], [1, "item-details"], [1, "quantity"], [1, "item-price"]],
      template: function OrderSuccessComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5)(6, "h1", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Order ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Confirmed!");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Thank you for your order. We're preparing your fresh groceries! ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, OrderSuccessComponent_div_12_Template, 82, 18, "div", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10)(14, "button", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Continue Shopping ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "i", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Track Order ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "i", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Back to Home ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 17)(24, "div", 18)(25, "div", 19)(26, "div", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "i", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "24/7 Support");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Need help? Our customer support team is available 24/7 to assist you.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 19)(33, "div", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "i", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Easy Returns");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Not satisfied? Return your order within 24 hours for a full refund.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 19)(40, "div", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "i", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Quality Guarantee");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "We guarantee the freshness and quality of all our products.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.orderSummary);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, ctx.orderSummary == null ? null : ctx.orderSummary.orderId));
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink],
      styles: [".success-container[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  padding: 120px 0 60px;\n  background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);\n  text-align: center;\n}\n\n\n\n.success-animation[_ngcontent-%COMP%] {\n  margin-bottom: 40px;\n}\n\n.checkmark-circle[_ngcontent-%COMP%] {\n  width: 120px;\n  height: 120px;\n  border-radius: 50%;\n  background: var(--success-gradient);\n  margin: 0 auto 30px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n  animation: _ngcontent-%COMP%_scaleIn 0.6s ease-out;\n  box-shadow: 0 0 30px rgba(79, 172, 254, 0.5);\n}\n\n@keyframes _ngcontent-%COMP%_scaleIn {\n  0% {\n    transform: scale(0);\n    opacity: 0;\n  }\n  50% {\n    transform: scale(1.1);\n  }\n  100% {\n    transform: scale(1);\n    opacity: 1;\n  }\n}\n\n.checkmark[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 20px;\n  border: 4px solid white;\n  border-top: none;\n  border-right: none;\n  transform: rotate(-45deg);\n  animation: _ngcontent-%COMP%_checkmarkDraw 0.4s ease-out 0.6s both;\n}\n\n@keyframes _ngcontent-%COMP%_checkmarkDraw {\n  0% {\n    width: 0;\n    height: 0;\n  }\n  50% {\n    width: 40px;\n    height: 0;\n  }\n  100% {\n    width: 40px;\n    height: 20px;\n  }\n}\n\n\n\n.success-message[_ngcontent-%COMP%] {\n  margin-bottom: 50px;\n}\n\n.success-title[_ngcontent-%COMP%] {\n  font-size: 3.5rem;\n  font-weight: 700;\n  color: var(--text-white);\n  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);\n  margin-bottom: 16px;\n  animation: _ngcontent-%COMP%_fadeInUp 0.8s ease-out 0.3s both;\n}\n\n.success-subtitle[_ngcontent-%COMP%] {\n  font-size: 1.3rem;\n  color: var(--text-muted);\n  font-weight: 500;\n  animation: _ngcontent-%COMP%_fadeInUp 0.8s ease-out 0.5s both;\n}\n\n@keyframes _ngcontent-%COMP%_fadeInUp {\n  0% {\n    opacity: 0;\n    transform: translateY(30px);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n\n\n\n.order-details[_ngcontent-%COMP%] {\n  max-width: 900px;\n  margin: 0 auto 50px;\n  padding: 40px;\n  text-align: left;\n  background: rgba(255, 255, 255, 0.12);\n  backdrop-filter: blur(20px);\n  border: 1px solid rgba(255, 255, 255, 0.25);\n  animation: _ngcontent-%COMP%_fadeInUp 0.8s ease-out 0.7s both;\n}\n\n.order-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 30px;\n  padding-bottom: 20px;\n  border-bottom: 2px solid rgba(255, 255, 255, 0.2);\n}\n\n.order-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 600;\n  color: var(--text-white);\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n\n.order-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: var(--neon-blue);\n}\n\n.order-id[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  font-weight: 600;\n  color: var(--text-white);\n}\n\n.order-content[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 40px;\n}\n\n\n\n.info-section[_ngcontent-%COMP%] {\n  margin-bottom: 30px;\n}\n\n.info-section[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  font-weight: 600;\n  color: var(--text-white);\n  margin-bottom: 15px;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n\n.info-section[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: var(--neon-blue);\n  font-size: 1rem;\n}\n\n.info-grid[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 10px;\n}\n\n.info-item[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  padding: 8px 0;\n}\n\n.info-item[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  font-weight: 500;\n}\n\n.info-item[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%] {\n  color: var(--text-white);\n  font-weight: 600;\n}\n\n.delivery-address[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.1);\n  padding: 15px;\n  border-radius: var(--border-radius);\n  margin-bottom: 15px;\n}\n\n.delivery-address[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--text-white);\n  margin: 0;\n  line-height: 1.5;\n}\n\n.delivery-time[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  color: var(--neon-green);\n  font-weight: 600;\n}\n\n.payment-method[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n\n.payment-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 8px 16px;\n  background: var(--primary-gradient);\n  color: var(--text-white);\n  border-radius: 20px;\n  font-weight: 600;\n  font-size: 0.9rem;\n  width: -moz-fit-content;\n  width: fit-content;\n}\n\n.payment-status[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-weight: 600;\n}\n\n.payment-status.success[_ngcontent-%COMP%] {\n  color: var(--neon-green);\n}\n\n\n\n.order-items[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  font-weight: 600;\n  color: var(--text-white);\n  margin-bottom: 20px;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n\n.order-items[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: var(--neon-blue);\n}\n\n.items-list[_ngcontent-%COMP%] {\n  margin-bottom: 25px;\n}\n\n.order-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 15px;\n  padding: 15px;\n  background: rgba(255, 255, 255, 0.05);\n  border-radius: var(--border-radius);\n  margin-bottom: 10px;\n}\n\n.order-item[_ngcontent-%COMP%]   .item-image[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 60px;\n  border-radius: 8px;\n  overflow: hidden;\n}\n\n.order-item[_ngcontent-%COMP%]   .item-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n\n.order-item[_ngcontent-%COMP%]   .item-details[_ngcontent-%COMP%] {\n  flex: 1;\n}\n\n.order-item[_ngcontent-%COMP%]   .item-details[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 600;\n  color: var(--text-white);\n  margin-bottom: 4px;\n}\n\n.order-item[_ngcontent-%COMP%]   .item-details[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: var(--text-muted);\n  margin-bottom: 4px;\n}\n\n.order-item[_ngcontent-%COMP%]   .quantity[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: var(--text-muted);\n  font-weight: 500;\n}\n\n.order-item[_ngcontent-%COMP%]   .item-price[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: var(--neon-blue);\n  font-size: 1rem;\n}\n\n\n\n.order-total[_ngcontent-%COMP%] {\n  border-top: 2px solid rgba(255, 255, 255, 0.2);\n  padding-top: 20px;\n}\n\n.total-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 10px;\n  font-size: 0.95rem;\n}\n\n.total-row[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-child {\n  color: var(--text-muted);\n  font-weight: 500;\n}\n\n.total-row[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:last-child {\n  color: var(--text-white);\n  font-weight: 600;\n}\n\n.final-total[_ngcontent-%COMP%] {\n  border-top: 1px solid rgba(255, 255, 255, 0.2);\n  padding-top: 15px;\n  margin-top: 15px;\n  font-size: 1.1rem;\n}\n\n.final-total[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-weight: 700;\n}\n\n.final-total[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:last-child {\n  color: var(--neon-blue);\n  text-shadow: 0 0 10px rgba(0, 212, 255, 0.3);\n}\n\n\n\n.action-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  gap: 20px;\n  margin-bottom: 50px;\n  flex-wrap: wrap;\n  animation: _ngcontent-%COMP%_fadeInUp 0.8s ease-out 0.9s both;\n}\n\n.action-buttons[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  padding: 16px 32px;\n  font-size: 1.1rem;\n  font-weight: 600;\n}\n\n\n\n.additional-info[_ngcontent-%COMP%] {\n  max-width: 900px;\n  margin: 0 auto;\n  padding: 40px;\n  background: rgba(255, 255, 255, 0.1);\n  backdrop-filter: blur(20px);\n  border: 1px solid rgba(255, 255, 255, 0.2);\n  animation: _ngcontent-%COMP%_fadeInUp 0.8s ease-out 1.1s both;\n}\n\n.info-cards[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 30px;\n}\n\n.info-card[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 20px;\n}\n\n.info-icon[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 60px;\n  background: var(--secondary-gradient);\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0 auto 20px;\n  font-size: 1.5rem;\n  color: var(--text-white);\n}\n\n.info-card[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  font-weight: 600;\n  color: var(--text-white);\n  margin-bottom: 10px;\n}\n\n.info-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  font-size: 0.9rem;\n  line-height: 1.5;\n}\n\n\n\n@media (max-width: 768px) {\n  .success-container[_ngcontent-%COMP%] {\n    padding: 100px 0 40px;\n  }\n  \n  .success-title[_ngcontent-%COMP%] {\n    font-size: 2.5rem;\n  }\n  \n  .order-details[_ngcontent-%COMP%] {\n    padding: 25px;\n  }\n  \n  .order-content[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 30px;\n  }\n  \n  .order-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 15px;\n    text-align: center;\n  }\n  \n  .action-buttons[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: center;\n  }\n  \n  .action-buttons[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    width: 100%;\n    max-width: 300px;\n  }\n  \n  .additional-info[_ngcontent-%COMP%] {\n    padding: 25px;\n  }\n  \n  .info-cards[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 25px;\n  }\n}\n\n@media (max-width: 480px) {\n  .success-title[_ngcontent-%COMP%] {\n    font-size: 2rem;\n  }\n  \n  .checkmark-circle[_ngcontent-%COMP%] {\n    width: 100px;\n    height: 100px;\n  }\n  \n  .checkmark[_ngcontent-%COMP%] {\n    width: 30px;\n    height: 15px;\n  }\n  \n  .order-details[_ngcontent-%COMP%] {\n    padding: 20px;\n  }\n  \n  .order-item[_ngcontent-%COMP%] {\n    flex-direction: column;\n    text-align: center;\n    gap: 10px;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9vcmRlci1zdWNjZXNzL29yZGVyLXN1Y2Nlc3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFpQjtFQUNqQixxQkFBcUI7RUFDckIsMEVBQTBFO0VBQzFFLGtCQUFrQjtBQUNwQjs7QUFFQSxzQkFBc0I7QUFDdEI7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixtQ0FBbUM7RUFDbkMsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixnQ0FBZ0M7RUFDaEMsNENBQTRDO0FBQzlDOztBQUVBO0VBQ0U7SUFDRSxtQkFBbUI7SUFDbkIsVUFBVTtFQUNaO0VBQ0E7SUFDRSxxQkFBcUI7RUFDdkI7RUFDQTtJQUNFLG1CQUFtQjtJQUNuQixVQUFVO0VBQ1o7QUFDRjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLGdEQUFnRDtBQUNsRDs7QUFFQTtFQUNFO0lBQ0UsUUFBUTtJQUNSLFNBQVM7RUFDWDtFQUNBO0lBQ0UsV0FBVztJQUNYLFNBQVM7RUFDWDtFQUNBO0lBQ0UsV0FBVztJQUNYLFlBQVk7RUFDZDtBQUNGOztBQUVBLG9CQUFvQjtBQUNwQjtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsd0JBQXdCO0VBQ3hCLDJDQUEyQztFQUMzQyxtQkFBbUI7RUFDbkIsMkNBQTJDO0FBQzdDOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLHdCQUF3QjtFQUN4QixnQkFBZ0I7RUFDaEIsMkNBQTJDO0FBQzdDOztBQUVBO0VBQ0U7SUFDRSxVQUFVO0lBQ1YsMkJBQTJCO0VBQzdCO0VBQ0E7SUFDRSxVQUFVO0lBQ1Ysd0JBQXdCO0VBQzFCO0FBQ0Y7O0FBRUEsa0JBQWtCO0FBQ2xCO0VBQ0UsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLHFDQUFxQztFQUNyQywyQkFBMkI7RUFDM0IsMkNBQTJDO0VBQzNDLDJDQUEyQztBQUM3Qzs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixvQkFBb0I7RUFDcEIsaURBQWlEO0FBQ25EOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQix3QkFBd0I7RUFDeEIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixTQUFTO0FBQ1g7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsU0FBUztBQUNYOztBQUVBLHlCQUF5QjtBQUN6QjtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsd0JBQXdCO0VBQ3hCLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFNBQVM7QUFDWDs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLHdCQUF3QjtFQUN4QixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usb0NBQW9DO0VBQ3BDLGFBQWE7RUFDYixtQ0FBbUM7RUFDbkMsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLFNBQVM7RUFDVCxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFNBQVM7RUFDVCx3QkFBd0I7RUFDeEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsbUJBQW1CO0VBQ25CLFFBQVE7RUFDUixpQkFBaUI7RUFDakIsbUNBQW1DO0VBQ25DLHdCQUF3QjtFQUN4QixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQix1QkFBa0I7RUFBbEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixRQUFRO0VBQ1IsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usd0JBQXdCO0FBQzFCOztBQUVBLGdCQUFnQjtBQUNoQjtFQUNFLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsd0JBQXdCO0VBQ3hCLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFNBQVM7QUFDWDs7QUFFQTtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsU0FBUztFQUNULGFBQWE7RUFDYixxQ0FBcUM7RUFDckMsbUNBQW1DO0VBQ25DLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsT0FBTztBQUNUOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQix3QkFBd0I7RUFDeEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHdCQUF3QjtFQUN4QixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsd0JBQXdCO0VBQ3hCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQix1QkFBdUI7RUFDdkIsZUFBZTtBQUNqQjs7QUFFQSxnQkFBZ0I7QUFDaEI7RUFDRSw4Q0FBOEM7RUFDOUMsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixtQkFBbUI7RUFDbkIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHdCQUF3QjtFQUN4QixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSw4Q0FBOEM7RUFDOUMsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsNENBQTRDO0FBQzlDOztBQUVBLG1CQUFtQjtBQUNuQjtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsU0FBUztFQUNULG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsMkNBQTJDO0FBQzdDOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixnQkFBZ0I7QUFDbEI7O0FBRUEsMkJBQTJCO0FBQzNCO0VBQ0UsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxhQUFhO0VBQ2Isb0NBQW9DO0VBQ3BDLDJCQUEyQjtFQUMzQiwwQ0FBMEM7RUFDMUMsMkNBQTJDO0FBQzdDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDJEQUEyRDtFQUMzRCxTQUFTO0FBQ1g7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixxQ0FBcUM7RUFDckMsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQix3QkFBd0I7RUFDeEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLGlCQUFpQjtFQUNqQixnQkFBZ0I7QUFDbEI7O0FBRUEsc0JBQXNCO0FBQ3RCO0VBQ0U7SUFDRSxxQkFBcUI7RUFDdkI7O0VBRUE7SUFDRSxpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxhQUFhO0VBQ2Y7O0VBRUE7SUFDRSwwQkFBMEI7SUFDMUIsU0FBUztFQUNYOztFQUVBO0lBQ0Usc0JBQXNCO0lBQ3RCLFNBQVM7SUFDVCxrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxzQkFBc0I7SUFDdEIsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0UsV0FBVztJQUNYLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLGFBQWE7RUFDZjs7RUFFQTtJQUNFLDBCQUEwQjtJQUMxQixTQUFTO0VBQ1g7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLFlBQVk7SUFDWixhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsWUFBWTtFQUNkOztFQUVBO0lBQ0UsYUFBYTtFQUNmOztFQUVBO0lBQ0Usc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixTQUFTO0VBQ1g7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi5zdWNjZXNzLWNvbnRhaW5lciB7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICBwYWRkaW5nOiAxMjBweCAwIDYwcHg7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICM2NjdlZWEgMCUsICM3NjRiYTIgNTAlLCAjZjA5M2ZiIDEwMCUpO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi8qIFN1Y2Nlc3MgQW5pbWF0aW9uICovXG4uc3VjY2Vzcy1hbmltYXRpb24ge1xuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xufVxuXG4uY2hlY2ttYXJrLWNpcmNsZSB7XG4gIHdpZHRoOiAxMjBweDtcbiAgaGVpZ2h0OiAxMjBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1zdWNjZXNzLWdyYWRpZW50KTtcbiAgbWFyZ2luOiAwIGF1dG8gMzBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYW5pbWF0aW9uOiBzY2FsZUluIDAuNnMgZWFzZS1vdXQ7XG4gIGJveC1zaGFkb3c6IDAgMCAzMHB4IHJnYmEoNzksIDE3MiwgMjU0LCAwLjUpO1xufVxuXG5Aa2V5ZnJhbWVzIHNjYWxlSW4ge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIDUwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuXG4uY2hlY2ttYXJrIHtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogMjBweDtcbiAgYm9yZGVyOiA0cHggc29saWQgd2hpdGU7XG4gIGJvcmRlci10b3A6IG5vbmU7XG4gIGJvcmRlci1yaWdodDogbm9uZTtcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbiAgYW5pbWF0aW9uOiBjaGVja21hcmtEcmF3IDAuNHMgZWFzZS1vdXQgMC42cyBib3RoO1xufVxuXG5Aa2V5ZnJhbWVzIGNoZWNrbWFya0RyYXcge1xuICAwJSB7XG4gICAgd2lkdGg6IDA7XG4gICAgaGVpZ2h0OiAwO1xuICB9XG4gIDUwJSB7XG4gICAgd2lkdGg6IDQwcHg7XG4gICAgaGVpZ2h0OiAwO1xuICB9XG4gIDEwMCUge1xuICAgIHdpZHRoOiA0MHB4O1xuICAgIGhlaWdodDogMjBweDtcbiAgfVxufVxuXG4vKiBTdWNjZXNzIE1lc3NhZ2UgKi9cbi5zdWNjZXNzLW1lc3NhZ2Uge1xuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xufVxuXG4uc3VjY2Vzcy10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMy41cmVtO1xuICBmb250LXdlaWdodDogNzAwO1xuICBjb2xvcjogdmFyKC0tdGV4dC13aGl0ZSk7XG4gIHRleHQtc2hhZG93OiAycHggMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gIGFuaW1hdGlvbjogZmFkZUluVXAgMC44cyBlYXNlLW91dCAwLjNzIGJvdGg7XG59XG5cbi5zdWNjZXNzLXN1YnRpdGxlIHtcbiAgZm9udC1zaXplOiAxLjNyZW07XG4gIGNvbG9yOiB2YXIoLS10ZXh0LW11dGVkKTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgYW5pbWF0aW9uOiBmYWRlSW5VcCAwLjhzIGVhc2Utb3V0IDAuNXMgYm90aDtcbn1cblxuQGtleWZyYW1lcyBmYWRlSW5VcCB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgzMHB4KTtcbiAgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgfVxufVxuXG4vKiBPcmRlciBEZXRhaWxzICovXG4ub3JkZXItZGV0YWlscyB7XG4gIG1heC13aWR0aDogOTAwcHg7XG4gIG1hcmdpbjogMCBhdXRvIDUwcHg7XG4gIHBhZGRpbmc6IDQwcHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xMik7XG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigyMHB4KTtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI1KTtcbiAgYW5pbWF0aW9uOiBmYWRlSW5VcCAwLjhzIGVhc2Utb3V0IDAuN3MgYm90aDtcbn1cblxuLm9yZGVyLWhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XG59XG5cbi5vcmRlci1oZWFkZXIgaDMge1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6IHZhcigtLXRleHQtd2hpdGUpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDEycHg7XG59XG5cbi5vcmRlci1oZWFkZXIgaDMgaSB7XG4gIGNvbG9yOiB2YXIoLS1uZW9uLWJsdWUpO1xufVxuXG4ub3JkZXItaWQge1xuICBmb250LXNpemU6IDEuMXJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6IHZhcigtLXRleHQtd2hpdGUpO1xufVxuXG4ub3JkZXItY29udGVudCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcbiAgZ2FwOiA0MHB4O1xufVxuXG4vKiBJbmZvcm1hdGlvbiBTZWN0aW9ucyAqL1xuLmluZm8tc2VjdGlvbiB7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG59XG5cbi5pbmZvLXNlY3Rpb24gaDQge1xuICBmb250LXNpemU6IDEuMnJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6IHZhcigtLXRleHQtd2hpdGUpO1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDEwcHg7XG59XG5cbi5pbmZvLXNlY3Rpb24gaDQgaSB7XG4gIGNvbG9yOiB2YXIoLS1uZW9uLWJsdWUpO1xuICBmb250LXNpemU6IDFyZW07XG59XG5cbi5pbmZvLWdyaWQge1xuICBkaXNwbGF5OiBncmlkO1xuICBnYXA6IDEwcHg7XG59XG5cbi5pbmZvLWl0ZW0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBhZGRpbmc6IDhweCAwO1xufVxuXG4uaW5mby1pdGVtIC5sYWJlbCB7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LW11dGVkKTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLmluZm8taXRlbSAudmFsdWUge1xuICBjb2xvcjogdmFyKC0tdGV4dC13aGl0ZSk7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5kZWxpdmVyeS1hZGRyZXNzIHtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xuICBwYWRkaW5nOiAxNXB4O1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cblxuLmRlbGl2ZXJ5LWFkZHJlc3MgcCB7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LXdoaXRlKTtcbiAgbWFyZ2luOiAwO1xuICBsaW5lLWhlaWdodDogMS41O1xufVxuXG4uZGVsaXZlcnktdGltZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTBweDtcbiAgY29sb3I6IHZhcigtLW5lb24tZ3JlZW4pO1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG4ucGF5bWVudC1tZXRob2Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDEwcHg7XG59XG5cbi5wYXltZW50LWJhZGdlIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogOHB4O1xuICBwYWRkaW5nOiA4cHggMTZweDtcbiAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeS1ncmFkaWVudCk7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LXdoaXRlKTtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAwLjlyZW07XG4gIHdpZHRoOiBmaXQtY29udGVudDtcbn1cblxuLnBheW1lbnQtc3RhdHVzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA4cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5wYXltZW50LXN0YXR1cy5zdWNjZXNzIHtcbiAgY29sb3I6IHZhcigtLW5lb24tZ3JlZW4pO1xufVxuXG4vKiBPcmRlciBJdGVtcyAqL1xuLm9yZGVyLWl0ZW1zIGg0IHtcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LXdoaXRlKTtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxMHB4O1xufVxuXG4ub3JkZXItaXRlbXMgaDQgaSB7XG4gIGNvbG9yOiB2YXIoLS1uZW9uLWJsdWUpO1xufVxuXG4uaXRlbXMtbGlzdCB7XG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XG59XG5cbi5vcmRlci1pdGVtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxNXB4O1xuICBwYWRkaW5nOiAxNXB4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpO1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLm9yZGVyLWl0ZW0gLml0ZW0taW1hZ2Uge1xuICB3aWR0aDogNjBweDtcbiAgaGVpZ2h0OiA2MHB4O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5vcmRlci1pdGVtIC5pdGVtLWltYWdlIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xufVxuXG4ub3JkZXItaXRlbSAuaXRlbS1kZXRhaWxzIHtcbiAgZmxleDogMTtcbn1cblxuLm9yZGVyLWl0ZW0gLml0ZW0tZGV0YWlscyBoNSB7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6IHZhcigtLXRleHQtd2hpdGUpO1xuICBtYXJnaW4tYm90dG9tOiA0cHg7XG59XG5cbi5vcmRlci1pdGVtIC5pdGVtLWRldGFpbHMgcCB7XG4gIGZvbnQtc2l6ZTogMC44NXJlbTtcbiAgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpO1xuICBtYXJnaW4tYm90dG9tOiA0cHg7XG59XG5cbi5vcmRlci1pdGVtIC5xdWFudGl0eSB7XG4gIGZvbnQtc2l6ZTogMC44NXJlbTtcbiAgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpO1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4ub3JkZXItaXRlbSAuaXRlbS1wcmljZSB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiB2YXIoLS1uZW9uLWJsdWUpO1xuICBmb250LXNpemU6IDFyZW07XG59XG5cbi8qIE9yZGVyIFRvdGFsICovXG4ub3JkZXItdG90YWwge1xuICBib3JkZXItdG9wOiAycHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xuICBwYWRkaW5nLXRvcDogMjBweDtcbn1cblxuLnRvdGFsLXJvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgZm9udC1zaXplOiAwLjk1cmVtO1xufVxuXG4udG90YWwtcm93IHNwYW46Zmlyc3QtY2hpbGQge1xuICBjb2xvcjogdmFyKC0tdGV4dC1tdXRlZCk7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi50b3RhbC1yb3cgc3BhbjpsYXN0LWNoaWxkIHtcbiAgY29sb3I6IHZhcigtLXRleHQtd2hpdGUpO1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG4uZmluYWwtdG90YWwge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xuICBwYWRkaW5nLXRvcDogMTVweDtcbiAgbWFyZ2luLXRvcDogMTVweDtcbiAgZm9udC1zaXplOiAxLjFyZW07XG59XG5cbi5maW5hbC10b3RhbCBzcGFuIHtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuLmZpbmFsLXRvdGFsIHNwYW46bGFzdC1jaGlsZCB7XG4gIGNvbG9yOiB2YXIoLS1uZW9uLWJsdWUpO1xuICB0ZXh0LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAyMTIsIDI1NSwgMC4zKTtcbn1cblxuLyogQWN0aW9uIEJ1dHRvbnMgKi9cbi5hY3Rpb24tYnV0dG9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBnYXA6IDIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgYW5pbWF0aW9uOiBmYWRlSW5VcCAwLjhzIGVhc2Utb3V0IDAuOXMgYm90aDtcbn1cblxuLmFjdGlvbi1idXR0b25zIC5idG4ge1xuICBwYWRkaW5nOiAxNnB4IDMycHg7XG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG4vKiBBZGRpdGlvbmFsIEluZm9ybWF0aW9uICovXG4uYWRkaXRpb25hbC1pbmZvIHtcbiAgbWF4LXdpZHRoOiA5MDBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHBhZGRpbmc6IDQwcHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDIwcHgpO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XG4gIGFuaW1hdGlvbjogZmFkZUluVXAgMC44cyBlYXNlLW91dCAxLjFzIGJvdGg7XG59XG5cbi5pbmZvLWNhcmRzIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgyNTBweCwgMWZyKSk7XG4gIGdhcDogMzBweDtcbn1cblxuLmluZm8tY2FyZCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMjBweDtcbn1cblxuLmluZm8taWNvbiB7XG4gIHdpZHRoOiA2MHB4O1xuICBoZWlnaHQ6IDYwcHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLXNlY29uZGFyeS1ncmFkaWVudCk7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbjogMCBhdXRvIDIwcHg7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBjb2xvcjogdmFyKC0tdGV4dC13aGl0ZSk7XG59XG5cbi5pbmZvLWNhcmQgaDQge1xuICBmb250LXNpemU6IDEuMXJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6IHZhcigtLXRleHQtd2hpdGUpO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4uaW5mby1jYXJkIHAge1xuICBjb2xvcjogdmFyKC0tdGV4dC1tdXRlZCk7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xuICBsaW5lLWhlaWdodDogMS41O1xufVxuXG4vKiBSZXNwb25zaXZlIERlc2lnbiAqL1xuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5zdWNjZXNzLWNvbnRhaW5lciB7XG4gICAgcGFkZGluZzogMTAwcHggMCA0MHB4O1xuICB9XG4gIFxuICAuc3VjY2Vzcy10aXRsZSB7XG4gICAgZm9udC1zaXplOiAyLjVyZW07XG4gIH1cbiAgXG4gIC5vcmRlci1kZXRhaWxzIHtcbiAgICBwYWRkaW5nOiAyNXB4O1xuICB9XG4gIFxuICAub3JkZXItY29udGVudCB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gICAgZ2FwOiAzMHB4O1xuICB9XG4gIFxuICAub3JkZXItaGVhZGVyIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogMTVweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgXG4gIC5hY3Rpb24tYnV0dG9ucyB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG4gIFxuICAuYWN0aW9uLWJ1dHRvbnMgLmJ0biB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWF4LXdpZHRoOiAzMDBweDtcbiAgfVxuICBcbiAgLmFkZGl0aW9uYWwtaW5mbyB7XG4gICAgcGFkZGluZzogMjVweDtcbiAgfVxuICBcbiAgLmluZm8tY2FyZHMge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICAgIGdhcDogMjVweDtcbiAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgLnN1Y2Nlc3MtdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgfVxuICBcbiAgLmNoZWNrbWFyay1jaXJjbGUge1xuICAgIHdpZHRoOiAxMDBweDtcbiAgICBoZWlnaHQ6IDEwMHB4O1xuICB9XG4gIFxuICAuY2hlY2ttYXJrIHtcbiAgICB3aWR0aDogMzBweDtcbiAgICBoZWlnaHQ6IDE1cHg7XG4gIH1cbiAgXG4gIC5vcmRlci1kZXRhaWxzIHtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICB9XG4gIFxuICAub3JkZXItaXRlbSB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZ2FwOiAxMHB4O1xuICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 1787:
/*!************************************************************************!*\
  !*** ./src/app/components/orders/track-order/track-order.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TrackOrderComponent: () => (/* binding */ TrackOrderComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 2510);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 9240);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 5072);





function TrackOrderComponent_p_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, ctx_r0.getStepTime(2), "medium"));
  }
}
function TrackOrderComponent_p_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, ctx_r0.getStepTime(3), "medium"));
  }
}
function TrackOrderComponent_p_40_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, ctx_r0.getStepTime(4), "medium"));
  }
}
function TrackOrderComponent_div_41_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Estimated delivery: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](3, 1, ctx_r0.estimatedDelivery, "medium"), "");
  }
}
class TrackOrderComponent {
  constructor(route) {
    this.route = route;
    this.orderId = '';
    this.currentStep = 1;
    this.orderPlacedTime = new Date();
    this.estimatedDelivery = new Date();
    this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subscription();
  }
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.orderId = params['id'] || 'RC' + Date.now();
    });
    this.orderPlacedTime = new Date();
    this.estimatedDelivery = new Date(Date.now() + 4 * 60 * 1000);
    this.subscription = (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.interval)(60000).subscribe(() => {
      this.updateOrderStatus();
    });
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  updateOrderStatus() {
    const elapsed = Date.now() - this.orderPlacedTime.getTime();
    const minutes = elapsed / (1000 * 60);
    if (minutes >= 4) {
      this.currentStep = 4;
    } else if (minutes >= 3) {
      this.currentStep = 3;
    } else if (minutes >= 1) {
      this.currentStep = 2;
    }
  }
  getStepTime(step) {
    const baseTime = this.orderPlacedTime.getTime();
    switch (step) {
      case 2:
        return new Date(baseTime + 1 * 60 * 1000);
      case 3:
        return new Date(baseTime + 3 * 60 * 1000);
      case 4:
        return new Date(baseTime + 4 * 60 * 1000);
      default:
        return this.orderPlacedTime;
    }
  }
  static {
    this.ɵfac = function TrackOrderComponent_Factory(t) {
      return new (t || TrackOrderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TrackOrderComponent,
      selectors: [["app-track-order"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
      decls: 42,
      vars: 29,
      consts: [[1, "track-container"], [1, "container"], [1, "track-header"], [1, "order-progress"], [1, "progress-step"], [1, "step-icon"], [1, "fas", "fa-shopping-cart"], [1, "step-info"], [1, "progress-line"], [1, "fas", "fa-box"], [4, "ngIf"], [1, "fas", "fa-truck"], [1, "fas", "fa-check-circle"], ["class", "estimated-time", 4, "ngIf"], [1, "estimated-time"]],
      template: function TrackOrderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h1");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Track Your Order");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3)(8, "div", 4)(9, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7)(12, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Order Placed");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "date");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 4)(19, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "i", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 7)(22, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Order Packed");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, TrackOrderComponent_p_24_Template, 3, 4, "p", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 4)(27, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "i", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 7)(30, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Out for Delivery");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, TrackOrderComponent_p_32_Template, 3, 4, "p", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 4)(35, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "i", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 7)(38, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Delivered");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, TrackOrderComponent_p_40_Template, 3, 4, "p", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, TrackOrderComponent_div_41_Template, 4, 4, "div", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Order ID: ", ctx.orderId, "");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.currentStep >= 1)("completed", ctx.currentStep > 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](16, 26, ctx.orderPlacedTime, "medium"));
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.currentStep >= 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.currentStep >= 2)("completed", ctx.currentStep > 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentStep >= 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.currentStep >= 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.currentStep >= 3)("completed", ctx.currentStep > 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentStep >= 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.currentStep >= 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.currentStep >= 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentStep >= 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentStep < 4);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.DatePipe],
      styles: [".track-container[_ngcontent-%COMP%] {\n      min-height: 100vh;\n      padding: 120px 20px 60px;\n      background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);\n    }\n    .track-header[_ngcontent-%COMP%] {\n      text-align: center;\n      margin-bottom: 60px;\n      color: white;\n    }\n    .order-progress[_ngcontent-%COMP%] {\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      max-width: 800px;\n      margin: 0 auto;\n      padding: 40px;\n      background: rgba(255, 255, 255, 0.1);\n      border-radius: 20px;\n    }\n    .progress-step[_ngcontent-%COMP%] {\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n      text-align: center;\n      color: #ccc;\n    }\n    .progress-step.active[_ngcontent-%COMP%] {\n      color: #00d4ff;\n    }\n    .step-icon[_ngcontent-%COMP%] {\n      width: 60px;\n      height: 60px;\n      border-radius: 50%;\n      background: #444;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      font-size: 24px;\n      margin-bottom: 15px;\n    }\n    .progress-step.active[_ngcontent-%COMP%]   .step-icon[_ngcontent-%COMP%] {\n      background: #00d4ff;\n      color: white;\n    }\n    .progress-line[_ngcontent-%COMP%] {\n      width: 100px;\n      height: 3px;\n      background: #444;\n      margin: 0 20px;\n    }\n    .progress-line.active[_ngcontent-%COMP%] {\n      background: #00d4ff;\n    }\n    .estimated-time[_ngcontent-%COMP%] {\n      text-align: center;\n      margin-top: 40px;\n      color: white;\n    }\n  \n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9vcmRlcnMvdHJhY2stb3JkZXIvdHJhY2stb3JkZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7SUFDSTtNQUNFLGlCQUFpQjtNQUNqQix3QkFBd0I7TUFDeEIsMEVBQTBFO0lBQzVFO0lBQ0E7TUFDRSxrQkFBa0I7TUFDbEIsbUJBQW1CO01BQ25CLFlBQVk7SUFDZDtJQUNBO01BQ0UsYUFBYTtNQUNiLG1CQUFtQjtNQUNuQix1QkFBdUI7TUFDdkIsZ0JBQWdCO01BQ2hCLGNBQWM7TUFDZCxhQUFhO01BQ2Isb0NBQW9DO01BQ3BDLG1CQUFtQjtJQUNyQjtJQUNBO01BQ0UsYUFBYTtNQUNiLHNCQUFzQjtNQUN0QixtQkFBbUI7TUFDbkIsa0JBQWtCO01BQ2xCLFdBQVc7SUFDYjtJQUNBO01BQ0UsY0FBYztJQUNoQjtJQUNBO01BQ0UsV0FBVztNQUNYLFlBQVk7TUFDWixrQkFBa0I7TUFDbEIsZ0JBQWdCO01BQ2hCLGFBQWE7TUFDYixtQkFBbUI7TUFDbkIsdUJBQXVCO01BQ3ZCLGVBQWU7TUFDZixtQkFBbUI7SUFDckI7SUFDQTtNQUNFLG1CQUFtQjtNQUNuQixZQUFZO0lBQ2Q7SUFDQTtNQUNFLFlBQVk7TUFDWixXQUFXO01BQ1gsZ0JBQWdCO01BQ2hCLGNBQWM7SUFDaEI7SUFDQTtNQUNFLG1CQUFtQjtJQUNyQjtJQUNBO01BQ0Usa0JBQWtCO01BQ2xCLGdCQUFnQjtNQUNoQixZQUFZO0lBQ2QiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAudHJhY2stY29udGFpbmVyIHtcbiAgICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICAgICAgcGFkZGluZzogMTIwcHggMjBweCA2MHB4O1xuICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzY2N2VlYSAwJSwgIzc2NGJhMiA1MCUsICNmMDkzZmIgMTAwJSk7XG4gICAgfVxuICAgIC50cmFjay1oZWFkZXIge1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgbWFyZ2luLWJvdHRvbTogNjBweDtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB9XG4gICAgLm9yZGVyLXByb2dyZXNzIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBtYXgtd2lkdGg6IDgwMHB4O1xuICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICBwYWRkaW5nOiA0MHB4O1xuICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xuICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICB9XG4gICAgLnByb2dyZXNzLXN0ZXAge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgY29sb3I6ICNjY2M7XG4gICAgfVxuICAgIC5wcm9ncmVzcy1zdGVwLmFjdGl2ZSB7XG4gICAgICBjb2xvcjogIzAwZDRmZjtcbiAgICB9XG4gICAgLnN0ZXAtaWNvbiB7XG4gICAgICB3aWR0aDogNjBweDtcbiAgICAgIGhlaWdodDogNjBweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgIGJhY2tncm91bmQ6ICM0NDQ7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgICB9XG4gICAgLnByb2dyZXNzLXN0ZXAuYWN0aXZlIC5zdGVwLWljb24ge1xuICAgICAgYmFja2dyb3VuZDogIzAwZDRmZjtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB9XG4gICAgLnByb2dyZXNzLWxpbmUge1xuICAgICAgd2lkdGg6IDEwMHB4O1xuICAgICAgaGVpZ2h0OiAzcHg7XG4gICAgICBiYWNrZ3JvdW5kOiAjNDQ0O1xuICAgICAgbWFyZ2luOiAwIDIwcHg7XG4gICAgfVxuICAgIC5wcm9ncmVzcy1saW5lLmFjdGl2ZSB7XG4gICAgICBiYWNrZ3JvdW5kOiAjMDBkNGZmO1xuICAgIH1cbiAgICAuZXN0aW1hdGVkLXRpbWUge1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgbWFyZ2luLXRvcDogNDBweDtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB9XG4gICJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 3548:
/*!****************************************************************************!*\
  !*** ./src/app/components/products/product-list/product-list.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProductListComponent: () => (/* binding */ ProductListComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _shared_product_card_product_card_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/product-card/product-card.component */ 2961);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/product.service */ 6241);
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/cart.service */ 6868);










function ProductListComponent_div_29_app_product_card_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-product-card", 19);
  }
  if (rf & 2) {
    const product_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("product", product_r1);
  }
}
function ProductListComponent_div_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ProductListComponent_div_29_app_product_card_1_Template, 1, 1, "app-product-card", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r1.filteredProducts)("ngForTrackBy", ctx_r1.trackByProductId);
  }
}
function ProductListComponent_div_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Loading delicious products...");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
function ProductListComponent_div_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "No products found");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Try adjusting your search or filter criteria");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
class ProductListComponent {
  constructor(productService, cartService, route) {
    this.productService = productService;
    this.cartService = cartService;
    this.route = route;
    this.products = [];
    this.filteredProducts = [];
    this.loading = true;
    this.searchQuery = '';
    this.selectedCategory = 'all';
    this.currentCategory = null;
  }
  ngOnInit() {
    // Subscribe to query parameters to handle category filtering
    this.route.queryParams.subscribe(params => {
      this.currentCategory = params['category'];
      console.log('Route category parameter:', this.currentCategory);
      if (this.currentCategory) {
        this.selectedCategory = this.currentCategory.toLowerCase();
        this.loadProductsByCategory(this.currentCategory);
      } else {
        this.selectedCategory = 'all';
        this.loadAllProducts();
      }
    });
  }
  loadAllProducts() {
    this.loading = true;
    this.productService.getAllProducts().subscribe({
      next: products => {
        this.products = products;
        this.filteredProducts = products;
        this.loading = false;
        this.filterProducts();
      },
      error: error => {
        console.error('Error loading products:', error);
        this.loading = false;
      }
    });
  }
  loadProductsByCategory(category) {
    this.loading = true;
    console.log('Loading products for category:', category);
    this.productService.getProductsByCategory(category).subscribe({
      next: products => {
        console.log('Products received:', products.length);
        this.products = products;
        this.filteredProducts = products;
        this.loading = false;
        this.filterProducts();
      },
      error: error => {
        console.error('Error loading products by category:', error);
        // Fallback to all products if category filtering fails
        this.loadAllProducts();
      }
    });
  }
  filterProducts() {
    this.filteredProducts = this.products.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(this.searchQuery.toLowerCase()) || product.description && product.description.toLowerCase().includes(this.searchQuery.toLowerCase());
      let matchesCategory = true;
      if (this.selectedCategory !== 'all') {
        // Case-insensitive category matching
        matchesCategory = !!(product.category && product.category.toLowerCase() === this.selectedCategory.toLowerCase());
      }
      return matchesSearch && matchesCategory;
    });
  }
  filterByCategory(category) {
    console.log('Filter by category clicked:', category);
    this.selectedCategory = category.toLowerCase();
    if (category === 'all') {
      this.loadAllProducts();
    } else {
      this.loadProductsByCategory(category);
    }
  }
  trackByProductId(index, product) {
    return product.id;
  }
  static {
    this.ɵfac = function ProductListComponent_Factory(t) {
      return new (t || ProductListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_product_service__WEBPACK_IMPORTED_MODULE_1__.ProductService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_cart_service__WEBPACK_IMPORTED_MODULE_2__.CartService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: ProductListComponent,
      selectors: [["app-product-list"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵStandaloneFeature"]],
      decls: 32,
      vars: 16,
      consts: [[1, "products-container"], [1, "container"], [1, "products-header"], [1, "page-title"], [1, "gradient-text"], [1, "page-subtitle"], [1, "filters-section"], [1, "search-bar"], ["type", "text", "placeholder", "Search for products...", 1, "search-input", 3, "ngModelChange", "input", "ngModel"], [1, "btn", "btn-neon", 3, "click"], [1, "fas", "fa-search"], [1, "filter-buttons"], [1, "filter-btn", 3, "click"], [1, "products-section"], ["class", "product-grid", 4, "ngIf"], ["class", "loading-state", 4, "ngIf"], ["class", "empty-state", 4, "ngIf"], [1, "product-grid"], [3, "product", 4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "product"], [1, "loading-state"], [1, "loading-spinner"], [1, "empty-state"]],
      template: function ProductListComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h1", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, " Our ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "span", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Products");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "p", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Fresh groceries delivered to your doorstep");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 6)(10, "div", 7)(11, "input", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayListener"]("ngModelChange", function ProductListComponent_Template_input_ngModelChange_11_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayBindingSet"](ctx.searchQuery, $event) || (ctx.searchQuery = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("input", function ProductListComponent_Template_input_input_11_listener() {
            return ctx.filterProducts();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "button", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ProductListComponent_Template_button_click_12_listener() {
            return ctx.filterProducts();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](13, "i", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, " Search ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 11)(16, "button", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ProductListComponent_Template_button_click_16_listener() {
            return ctx.filterByCategory("all");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, " All Products ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "button", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ProductListComponent_Template_button_click_18_listener() {
            return ctx.filterByCategory("Fruits & Vegetables");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, " Fruits & Vegetables ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "button", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ProductListComponent_Template_button_click_20_listener() {
            return ctx.filterByCategory("Dairy & Eggs");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, " Dairy & Eggs ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "button", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ProductListComponent_Template_button_click_22_listener() {
            return ctx.filterByCategory("Meat & Seafood");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, " Meat & Seafood ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "button", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ProductListComponent_Template_button_click_24_listener() {
            return ctx.filterByCategory("Beverages");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25, " Beverages ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "button", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ProductListComponent_Template_button_click_26_listener() {
            return ctx.filterByCategory("Snacks");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27, " Snacks ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "div", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](29, ProductListComponent_div_29_Template, 2, 2, "div", 14)(30, ProductListComponent_div_30_Template, 4, 0, "div", 15)(31, ProductListComponent_div_31_Template, 6, 0, "div", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayProperty"]("ngModel", ctx.searchQuery);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("active", ctx.selectedCategory === "all");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("active", ctx.selectedCategory === "fruits");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("active", ctx.selectedCategory === "dairy");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("active", ctx.selectedCategory === "meat");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("active", ctx.selectedCategory === "beverages");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("active", ctx.selectedCategory === "snacks");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.loading && ctx.filteredProducts.length > 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.loading && ctx.filteredProducts.length === 0);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgModel, _shared_product_card_product_card_component__WEBPACK_IMPORTED_MODULE_0__.ProductCardComponent],
      styles: [".products-container[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  padding: 120px 0 60px;\n  background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);\n}\n\n.container[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 0 20px;\n  width: 100%;\n}\n\n.products-header[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 60px;\n}\n\n.page-title[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n  font-weight: 700;\n  margin-bottom: 20px;\n  color: var(--text-white);\n}\n\n.gradient-text[_ngcontent-%COMP%] {\n  background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\n\n.page-subtitle[_ngcontent-%COMP%] {\n  font-size: 1.3rem;\n  color: var(--text-white);\n  font-weight: 500;\n  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);\n}\n\n\n\n.filters-section[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.1);\n  backdrop-filter: blur(20px);\n  border: 1px solid rgba(255, 255, 255, 0.2);\n  border-radius: 16px;\n  padding: 24px;\n  margin-bottom: 40px;\n  display: block;\n  position: relative;\n  z-index: 10;\n}\n\n.search-bar[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 20px;\n  margin-bottom: 25px;\n  flex-wrap: wrap;\n}\n\n.search-input[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 280px;\n  padding: 12px 16px;\n  border: 1px solid rgba(255, 255, 255, 0.3);\n  border-radius: 12px;\n  background: rgba(255, 255, 255, 0.1);\n  color: var(--text-white);\n  font-size: 14px;\n  transition: all 0.3s ease;\n}\n\n.search-input[_ngcontent-%COMP%]::placeholder {\n  color: rgba(255, 255, 255, 0.7);\n}\n\n.search-input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #667eea;\n  box-shadow: 0 0 10px rgba(102, 126, 234, 0.3);\n  background: rgba(255, 255, 255, 0.15);\n}\n\n.filter-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  flex-wrap: wrap;\n  justify-content: flex-start;\n}\n\n.filter-btn[_ngcontent-%COMP%] {\n  padding: 8px 16px;\n  border: 1px solid rgba(255, 255, 255, 0.3);\n  background: transparent;\n  color: var(--text-white);\n  border-radius: 12px;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  font-weight: 500;\n  font-size: 0.9rem;\n}\n\n.filter-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.1);\n  border-color: rgba(255, 255, 255, 0.4);\n  transform: translateY(-1px);\n}\n\n.filter-btn.active[_ngcontent-%COMP%] {\n  background: var(--primary-gradient);\n  border-color: transparent;\n  transform: translateY(-1px);\n  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);\n}\n\n\n\n.products-section[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n}\n\n\n\n.product-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(5, minmax(0, 1fr));\n  gap: 20px;\n  align-items: stretch;\n  width: 100%;\n  max-width: 100%;\n}\n\n\n\n.loading-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 80px 20px;\n}\n\n.loading-spinner[_ngcontent-%COMP%] {\n  margin: 0 auto 30px;\n  width: 50px;\n  height: 50px;\n  border: 4px solid rgba(255, 255, 255, 0.3);\n  border-top: 4px solid var(--neon-blue);\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n}\n\n@keyframes _ngcontent-%COMP%_spin {\n  0% { transform: rotate(0deg); }\n  100% { transform: rotate(360deg); }\n}\n\n.loading-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  color: var(--text-white);\n  font-weight: 500;\n}\n\n\n\n.empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 80px 20px;\n}\n\n.empty-state[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 4rem;\n  color: var(--text-muted);\n  margin-bottom: 20px;\n}\n\n.empty-state[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.8rem;\n  color: var(--text-white);\n  margin-bottom: 10px;\n}\n\n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  font-size: 1.1rem;\n}\n\n\n\n@media (min-width: 1200px) {\n  .product-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(5, minmax(0, 1fr));\n  }\n}\n\n@media (max-width: 1199px) and (min-width: 992px) {\n  .product-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(4, minmax(0, 1fr));\n  }\n}\n\n@media (max-width: 991px) and (min-width: 768px) {\n  .product-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(3, minmax(0, 1fr));\n  }\n  \n  .page-title[_ngcontent-%COMP%] {\n    font-size: 2.2rem;\n  }\n}\n\n@media (max-width: 767px) {\n  .product-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n  \n  .page-title[_ngcontent-%COMP%] {\n    font-size: 2rem;\n  }\n  \n  .page-subtitle[_ngcontent-%COMP%] {\n    font-size: 1.1rem;\n  }\n  \n  .search-bar[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  \n  .search-input[_ngcontent-%COMP%] {\n    min-width: 100%;\n  }\n  \n  .filter-buttons[_ngcontent-%COMP%] {\n    justify-content: center;\n    gap: 8px;\n  }\n  \n  .filter-btn[_ngcontent-%COMP%] {\n    padding: 6px 12px;\n    font-size: 0.8rem;\n  }\n}\n\n@media (max-width: 480px) {\n  .products-container[_ngcontent-%COMP%] {\n    padding: 100px 0 40px;\n  }\n  \n  .page-title[_ngcontent-%COMP%] {\n    font-size: 1.8rem;\n  }\n  \n  .product-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  \n  .filters-section[_ngcontent-%COMP%] {\n    padding: 20px;\n  }\n  \n  .filter-buttons[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n    gap: 6px;\n  }\n  \n  .filter-btn[_ngcontent-%COMP%] {\n    flex: 1;\n    min-width: calc(50% - 3px);\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9wcm9kdWN0cy9wcm9kdWN0LWxpc3QvcHJvZHVjdC1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBaUI7RUFDakIscUJBQXFCO0VBQ3JCLDBFQUEwRTtBQUM1RTs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QsZUFBZTtFQUNmLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQix3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSw0REFBNEQ7RUFDNUQsNkJBQTZCO0VBQzdCLG9DQUFvQztFQUNwQyxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsd0JBQXdCO0VBQ3hCLGdCQUFnQjtFQUNoQiwyQ0FBMkM7QUFDN0M7O0FBRUEsOEJBQThCO0FBQzlCO0VBQ0Usb0NBQW9DO0VBQ3BDLDJCQUEyQjtFQUMzQiwwQ0FBMEM7RUFDMUMsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsU0FBUztFQUNULG1CQUFtQjtFQUNuQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsT0FBTztFQUNQLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsMENBQTBDO0VBQzFDLG1CQUFtQjtFQUNuQixvQ0FBb0M7RUFDcEMsd0JBQXdCO0VBQ3hCLGVBQWU7RUFDZix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSwrQkFBK0I7QUFDakM7O0FBRUE7RUFDRSxhQUFhO0VBQ2IscUJBQXFCO0VBQ3JCLDZDQUE2QztFQUM3QyxxQ0FBcUM7QUFDdkM7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsU0FBUztFQUNULGVBQWU7RUFDZiwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsMENBQTBDO0VBQzFDLHVCQUF1QjtFQUN2Qix3QkFBd0I7RUFDeEIsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZix5QkFBeUI7RUFDekIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLG9DQUFvQztFQUNwQyxzQ0FBc0M7RUFDdEMsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsbUNBQW1DO0VBQ25DLHlCQUF5QjtFQUN6QiwyQkFBMkI7RUFDM0IsK0NBQStDO0FBQ2pEOztBQUVBLCtCQUErQjtBQUMvQjtFQUNFLGtCQUFrQjtFQUNsQixVQUFVO0FBQ1o7O0FBRUEsaUJBQWlCO0FBQ2pCO0VBQ0UsYUFBYTtFQUNiLGdEQUFnRDtFQUNoRCxTQUFTO0VBQ1Qsb0JBQW9CO0VBQ3BCLFdBQVc7RUFDWCxlQUFlO0FBQ2pCOztBQUVBLGtCQUFrQjtBQUNsQjtFQUNFLGtCQUFrQjtFQUNsQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsV0FBVztFQUNYLFlBQVk7RUFDWiwwQ0FBMEM7RUFDMUMsc0NBQXNDO0VBQ3RDLGtCQUFrQjtFQUNsQixrQ0FBa0M7QUFDcEM7O0FBRUE7RUFDRSxLQUFLLHVCQUF1QixFQUFFO0VBQzlCLE9BQU8seUJBQXlCLEVBQUU7QUFDcEM7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsd0JBQXdCO0VBQ3hCLGdCQUFnQjtBQUNsQjs7QUFFQSxnQkFBZ0I7QUFDaEI7RUFDRSxrQkFBa0I7RUFDbEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLHdCQUF3QjtFQUN4QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsd0JBQXdCO0VBQ3hCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHdCQUF3QjtFQUN4QixpQkFBaUI7QUFDbkI7O0FBRUEsc0JBQXNCO0FBQ3RCO0VBQ0U7SUFDRSxnREFBZ0Q7RUFDbEQ7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsZ0RBQWdEO0VBQ2xEO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLGdEQUFnRDtFQUNsRDs7RUFFQTtJQUNFLGlCQUFpQjtFQUNuQjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxnREFBZ0Q7RUFDbEQ7O0VBRUE7SUFDRSxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0Usc0JBQXNCO0VBQ3hCOztFQUVBO0lBQ0UsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLHVCQUF1QjtJQUN2QixRQUFRO0VBQ1Y7O0VBRUE7SUFDRSxpQkFBaUI7SUFDakIsaUJBQWlCO0VBQ25CO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLHFCQUFxQjtFQUN2Qjs7RUFFQTtJQUNFLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLDBCQUEwQjtFQUM1Qjs7RUFFQTtJQUNFLGFBQWE7RUFDZjs7RUFFQTtJQUNFLGVBQWU7SUFDZixRQUFRO0VBQ1Y7O0VBRUE7SUFDRSxPQUFPO0lBQ1AsMEJBQTBCO0VBQzVCO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvZHVjdHMtY29udGFpbmVyIHtcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIHBhZGRpbmc6IDEyMHB4IDAgNjBweDtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzY2N2VlYSAwJSwgIzc2NGJhMiA1MCUsICNmMDkzZmIgMTAwJSk7XG59XG5cbi5jb250YWluZXIge1xuICBtYXgtd2lkdGg6IDEyMDBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHBhZGRpbmc6IDAgMjBweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5wcm9kdWN0cy1oZWFkZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDYwcHg7XG59XG5cbi5wYWdlLXRpdGxlIHtcbiAgZm9udC1zaXplOiAyLjVyZW07XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LXdoaXRlKTtcbn1cblxuLmdyYWRpZW50LXRleHQge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICM2NjdlZWEgMCUsICM3NjRiYTIgMTAwJSk7XG4gIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xuICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJhY2tncm91bmQtY2xpcDogdGV4dDtcbn1cblxuLnBhZ2Utc3VidGl0bGUge1xuICBmb250LXNpemU6IDEuM3JlbTtcbiAgY29sb3I6IHZhcigtLXRleHQtd2hpdGUpO1xuICBmb250LXdlaWdodDogNTAwO1xuICB0ZXh0LXNoYWRvdzogMXB4IDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjIpO1xufVxuXG4vKiBTZWFyY2ggYW5kIEZpbHRlciBTZWN0aW9uICovXG4uZmlsdGVycy1zZWN0aW9uIHtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMjBweCk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcbiAgcGFkZGluZzogMjRweDtcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMTA7XG59XG5cbi5zZWFyY2gtYmFyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAyMHB4O1xuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG5cbi5zZWFyY2gtaW5wdXQge1xuICBmbGV4OiAxO1xuICBtaW4td2lkdGg6IDI4MHB4O1xuICBwYWRkaW5nOiAxMnB4IDE2cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xuICBjb2xvcjogdmFyKC0tdGV4dC13aGl0ZSk7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbn1cblxuLnNlYXJjaC1pbnB1dDo6cGxhY2Vob2xkZXIge1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpO1xufVxuXG4uc2VhcmNoLWlucHV0OmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyLWNvbG9yOiAjNjY3ZWVhO1xuICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDEwMiwgMTI2LCAyMzQsIDAuMyk7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNSk7XG59XG5cbi5maWx0ZXItYnV0dG9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMTJweDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG59XG5cbi5maWx0ZXItYnRuIHtcbiAgcGFkZGluZzogOHB4IDE2cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LXdoaXRlKTtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDAuOXJlbTtcbn1cblxuLmZpbHRlci1idG46aG92ZXIge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XG4gIGJvcmRlci1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFweCk7XG59XG5cbi5maWx0ZXItYnRuLmFjdGl2ZSB7XG4gIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnktZ3JhZGllbnQpO1xuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFweCk7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDE1cHggcmdiYSgxMDIsIDEyNiwgMjM0LCAwLjQpO1xufVxuXG4vKiBQcm9kdWN0cyBTZWN0aW9uIENvbnRhaW5lciAqL1xuLnByb2R1Y3RzLXNlY3Rpb24ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDE7XG59XG5cbi8qIFByb2R1Y3QgR3JpZCAqL1xuLnByb2R1Y3QtZ3JpZCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDUsIG1pbm1heCgwLCAxZnIpKTtcbiAgZ2FwOiAyMHB4O1xuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogMTAwJTtcbn1cblxuLyogTG9hZGluZyBTdGF0ZSAqL1xuLmxvYWRpbmctc3RhdGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDgwcHggMjBweDtcbn1cblxuLmxvYWRpbmctc3Bpbm5lciB7XG4gIG1hcmdpbjogMCBhdXRvIDMwcHg7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIGJvcmRlcjogNHB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcbiAgYm9yZGVyLXRvcDogNHB4IHNvbGlkIHZhcigtLW5lb24tYmx1ZSk7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYW5pbWF0aW9uOiBzcGluIDFzIGxpbmVhciBpbmZpbml0ZTtcbn1cblxuQGtleWZyYW1lcyBzcGluIHtcbiAgMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTsgfVxuICAxMDAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgfVxufVxuXG4ubG9hZGluZy1zdGF0ZSBwIHtcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIGNvbG9yOiB2YXIoLS10ZXh0LXdoaXRlKTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLyogRW1wdHkgU3RhdGUgKi9cbi5lbXB0eS1zdGF0ZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogODBweCAyMHB4O1xufVxuXG4uZW1wdHktc3RhdGUgaSB7XG4gIGZvbnQtc2l6ZTogNHJlbTtcbiAgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4uZW1wdHktc3RhdGUgaDMge1xuICBmb250LXNpemU6IDEuOHJlbTtcbiAgY29sb3I6IHZhcigtLXRleHQtd2hpdGUpO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4uZW1wdHktc3RhdGUgcCB7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LW11dGVkKTtcbiAgZm9udC1zaXplOiAxLjFyZW07XG59XG5cbi8qIFJlc3BvbnNpdmUgRGVzaWduICovXG5AbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSB7XG4gIC5wcm9kdWN0LWdyaWQge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDUsIG1pbm1heCgwLCAxZnIpKTtcbiAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogMTE5OXB4KSBhbmQgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgLnByb2R1Y3QtZ3JpZCB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgbWlubWF4KDAsIDFmcikpO1xuICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA5OTFweCkgYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIC5wcm9kdWN0LWdyaWQge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIG1pbm1heCgwLCAxZnIpKTtcbiAgfVxuICBcbiAgLnBhZ2UtdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMi4ycmVtO1xuICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xuICAucHJvZHVjdC1ncmlkIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCBtaW5tYXgoMCwgMWZyKSk7XG4gIH1cbiAgXG4gIC5wYWdlLXRpdGxlIHtcbiAgICBmb250LXNpemU6IDJyZW07XG4gIH1cbiAgXG4gIC5wYWdlLXN1YnRpdGxlIHtcbiAgICBmb250LXNpemU6IDEuMXJlbTtcbiAgfVxuICBcbiAgLnNlYXJjaC1iYXIge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cbiAgXG4gIC5zZWFyY2gtaW5wdXQge1xuICAgIG1pbi13aWR0aDogMTAwJTtcbiAgfVxuICBcbiAgLmZpbHRlci1idXR0b25zIHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBnYXA6IDhweDtcbiAgfVxuICBcbiAgLmZpbHRlci1idG4ge1xuICAgIHBhZGRpbmc6IDZweCAxMnB4O1xuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xuICAucHJvZHVjdHMtY29udGFpbmVyIHtcbiAgICBwYWRkaW5nOiAxMDBweCAwIDQwcHg7XG4gIH1cbiAgXG4gIC5wYWdlLXRpdGxlIHtcbiAgICBmb250LXNpemU6IDEuOHJlbTtcbiAgfVxuICBcbiAgLnByb2R1Y3QtZ3JpZCB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gIH1cbiAgXG4gIC5maWx0ZXJzLXNlY3Rpb24ge1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gIH1cbiAgXG4gIC5maWx0ZXItYnV0dG9ucyB7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGdhcDogNnB4O1xuICB9XG4gIFxuICAuZmlsdGVyLWJ0biB7XG4gICAgZmxleDogMTtcbiAgICBtaW4td2lkdGg6IGNhbGMoNTAlIC0gM3B4KTtcbiAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 4507:
/*!********************************************************************************!*\
  !*** ./src/app/components/shared/category-slider/category-slider.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CategorySliderComponent: () => (/* binding */ CategorySliderComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _services_category_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../services/category.service */ 4354);






const _c0 = () => [1, 2, 3, 4, 5, 6];
const _c1 = () => ["/products"];
const _c2 = a0 => ({
  category: a0
});
function CategorySliderComponent_div_8_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 10);
  }
}
function CategorySliderComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CategorySliderComponent_div_8_div_1_Template, 1, 0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](1, _c0));
  }
}
function CategorySliderComponent_div_9_a_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 13)(1, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const category_r1 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](3, _c1))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](4, _c2, ctx_r1.getCategoryDisplayName(category_r1)));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.getCategoryDisplayName(category_r1));
  }
}
function CategorySliderComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CategorySliderComponent_div_9_a_1_Template, 3, 6, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.categories)("ngForTrackBy", ctx_r1.trackByCategory);
  }
}
function CategorySliderComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 15)(1, "div", 16)(2, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "No Categories Available");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
}
class CategorySliderComponent {
  constructor(categoryService) {
    this.categoryService = categoryService;
    this.categories = [];
    this.isLoading = true;
  }
  ngOnInit() {
    this.loadCategories();
    // Subscribe to category updates for real-time updates
    this.categoryService.categories$.subscribe(categories => {
      this.categories = categories;
      this.isLoading = false;
    });
  }
  loadCategories() {
    this.categoryService.getAllCategories().subscribe({
      next: categories => {
        this.categories = categories;
        this.isLoading = false;
      },
      error: error => {
        console.error('Error loading categories:', error);
        // Fallback to hardcoded categories if service fails
        this.categories = [{
          id: 1,
          name: 'fruits',
          description: 'Fruits & Vegetables'
        }, {
          id: 2,
          name: 'dairy',
          description: 'Dairy & Eggs'
        }, {
          id: 3,
          name: 'meat',
          description: 'Meat & Seafood'
        }, {
          id: 4,
          name: 'beverages',
          description: 'Beverages'
        }, {
          id: 5,
          name: 'bakery',
          description: 'Bakery'
        }, {
          id: 6,
          name: 'snacks',
          description: 'Snacks'
        }, {
          id: 7,
          name: 'frozen',
          description: 'Frozen Foods'
        }];
        this.isLoading = false;
      }
    });
  }
  getCategoryDisplayName(category) {
    return category.description || this.formatCategoryName(category.name);
  }
  formatCategoryName(name) {
    const categoryMap = {
      'fruits': 'Fruits & Vegetables',
      'vegetables': 'Vegetables',
      'dairy': 'Dairy & Eggs',
      'meat': 'Meat & Seafood',
      'beverages': 'Beverages',
      'bakery': 'Bakery',
      'snacks': 'Snacks',
      'frozen': 'Frozen Foods'
    };
    return categoryMap[name.toLowerCase()] || name.charAt(0).toUpperCase() + name.slice(1);
  }
  onCategoryClick(category) {
    // Navigate to products page with category filter
    // This will be handled by the router link in template
  }
  trackByCategory(index, category) {
    return category.id || category.name;
  }
  static {
    this.ɵfac = function CategorySliderComponent_Factory(t) {
      return new (t || CategorySliderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_category_service__WEBPACK_IMPORTED_MODULE_0__.CategoryService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: CategorySliderComponent,
      selectors: [["app-category-slider"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
      decls: 11,
      vars: 3,
      consts: [[1, "categories-section"], [1, "container"], [1, "section-title"], [1, "gradient-text"], [1, "section-subtitle"], ["class", "loading-grid", 4, "ngIf"], ["class", "categories-grid", 4, "ngIf"], ["class", "empty-state", 4, "ngIf"], [1, "loading-grid"], ["class", "category-skeleton", 4, "ngFor", "ngForOf"], [1, "category-skeleton"], [1, "categories-grid"], ["class", "category-card", 3, "routerLink", "queryParams", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "category-card", 3, "routerLink", "queryParams"], [1, "category-name"], [1, "empty-state"], [1, "empty-card"], [1, "empty-text"]],
      template: function CategorySliderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "h2", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " Shop by ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Category");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Browse through our wide range of fresh groceries and essentials");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, CategorySliderComponent_div_8_Template, 2, 2, "div", 5)(9, CategorySliderComponent_div_9_Template, 2, 2, "div", 6)(10, CategorySliderComponent_div_10_Template, 4, 0, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isLoading);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isLoading && ctx.categories.length > 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isLoading && ctx.categories.length === 0);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink],
      styles: [".categories-section[_ngcontent-%COMP%] {\n  padding: var(--space-16) 0;\n  background: var(--bg-secondary);\n}\n\n.container[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 0 var(--space-6);\n}\n\n.section-title[_ngcontent-%COMP%] {\n  font-size: var(--font-size-3xl);\n  font-weight: var(--font-weight-bold);\n  color: var(--text-primary);\n  text-align: center;\n  margin-bottom: var(--space-2);\n  line-height: var(--line-height-tight);\n}\n\n.section-subtitle[_ngcontent-%COMP%] {\n  font-size: var(--font-size-base);\n  color: var(--text-secondary);\n  font-weight: var(--font-weight-normal);\n  text-align: center;\n  margin-bottom: var(--space-10);\n  line-height: var(--line-height-relaxed);\n}\n\n.gradient-text[_ngcontent-%COMP%] {\n  color: var(--primary);\n  font-weight: var(--font-weight-bold);\n}\n\n\n\n.categories-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));\n  gap: var(--space-4);\n  max-width: 800px;\n  margin: 0 auto;\n}\n\n\n\n.category-card[_ngcontent-%COMP%] {\n  height: 48px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  text-decoration: none;\n  border-radius: var(--radius-lg);\n  background: var(--bg-primary);\n  border: 1px solid var(--border-color);\n  transition: var(--transition-normal);\n  cursor: pointer;\n  box-shadow: var(--shadow-sm);\n}\n\n.category-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: var(--shadow-md);\n  border-color: var(--primary);\n  text-decoration: none;\n}\n\n.category-name[_ngcontent-%COMP%] {\n  font-size: var(--font-size-sm);\n  font-weight: var(--font-weight-medium);\n  color: var(--text-primary);\n  text-align: center;\n  line-height: var(--line-height-tight);\n  padding: 0 var(--space-3);\n  margin: 0;\n}\n\n\n\n.loading-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));\n  gap: 1rem;\n  max-width: 1000px;\n  margin: 0 auto;\n}\n\n.category-skeleton[_ngcontent-%COMP%] {\n  height: 48px;\n  border-radius: var(--radius-lg);\n  background: linear-gradient(\n    90deg,\n    var(--gray-100) 25%,\n    var(--gray-200) 50%,\n    var(--gray-100) 75%\n  );\n  background-size: 200% 100%;\n  animation: _ngcontent-%COMP%_shimmer 2s infinite;\n  border: 1px solid var(--border-color);\n}\n\n@keyframes _ngcontent-%COMP%_shimmer {\n  0% {\n    background-position: -200% 0;\n  }\n  100% {\n    background-position: 200% 0;\n  }\n}\n\n\n\n.empty-state[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 200px;\n}\n\n.empty-card[_ngcontent-%COMP%] {\n  height: 48px;\n  width: 250px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: var(--radius-lg);\n  background: var(--bg-primary);\n  border: 1px solid var(--border-color);\n  box-shadow: var(--shadow-sm);\n}\n\n.empty-text[_ngcontent-%COMP%] {\n  font-size: var(--font-size-base);\n  font-weight: var(--font-weight-medium);\n  color: var(--text-secondary);\n  text-align: center;\n}\n\n\n\n@media (max-width: 1024px) {\n  .categories-grid[_ngcontent-%COMP%], \n   .loading-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));\n    gap: 0.8rem;\n  }\n  \n  .category-card[_ngcontent-%COMP%] {\n    height: 55px;\n  }\n  \n  .category-name[_ngcontent-%COMP%] {\n    font-size: 0.85rem;\n  }\n}\n\n@media (max-width: 768px) {\n  .categories-section[_ngcontent-%COMP%] {\n    padding: 3rem 0;\n  }\n  \n  .container[_ngcontent-%COMP%] {\n    padding: 0 1.5rem;\n  }\n  \n  .section-title[_ngcontent-%COMP%] {\n    font-size: 2rem;\n    margin-bottom: 2rem;\n  }\n  \n  .categories-grid[_ngcontent-%COMP%], \n   .loading-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));\n    gap: 0.8rem;\n  }\n  \n  .category-card[_ngcontent-%COMP%] {\n    height: 50px;\n    border-radius: 14px;\n  }\n  \n  .category-name[_ngcontent-%COMP%] {\n    font-size: 0.8rem;\n  }\n}\n\n@media (max-width: 480px) {\n  .container[_ngcontent-%COMP%] {\n    padding: 0 1rem;\n  }\n  \n  .section-title[_ngcontent-%COMP%] {\n    font-size: 1.8rem;\n  }\n  \n  .categories-grid[_ngcontent-%COMP%], \n   .loading-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n    gap: 0.6rem;\n  }\n  \n  .category-card[_ngcontent-%COMP%] {\n    height: 45px;\n    border-radius: 12px;\n  }\n  \n  .category-name[_ngcontent-%COMP%] {\n    font-size: 0.75rem;\n    padding: 0 0.5rem;\n  }\n  \n  .empty-card[_ngcontent-%COMP%] {\n    width: 200px;\n    height: 50px;\n  }\n}\n\n\n\n@media (min-width: 1400px) {\n  .categories-grid[_ngcontent-%COMP%], \n   .loading-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(6, 1fr);\n    max-width: 1200px;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9zaGFyZWQvY2F0ZWdvcnktc2xpZGVyL2NhdGVnb3J5LXNsaWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMEJBQTBCO0VBQzFCLCtCQUErQjtBQUNqQzs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsK0JBQStCO0VBQy9CLG9DQUFvQztFQUNwQywwQkFBMEI7RUFDMUIsa0JBQWtCO0VBQ2xCLDZCQUE2QjtFQUM3QixxQ0FBcUM7QUFDdkM7O0FBRUE7RUFDRSxnQ0FBZ0M7RUFDaEMsNEJBQTRCO0VBQzVCLHNDQUFzQztFQUN0QyxrQkFBa0I7RUFDbEIsOEJBQThCO0VBQzlCLHVDQUF1QztBQUN6Qzs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixvQ0FBb0M7QUFDdEM7O0FBRUEsb0JBQW9CO0FBQ3BCO0VBQ0UsYUFBYTtFQUNiLDJEQUEyRDtFQUMzRCxtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLGNBQWM7QUFDaEI7O0FBRUEsa0JBQWtCO0FBQ2xCO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLHFCQUFxQjtFQUNyQiwrQkFBK0I7RUFDL0IsNkJBQTZCO0VBQzdCLHFDQUFxQztFQUNyQyxvQ0FBb0M7RUFDcEMsZUFBZTtFQUNmLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLDJCQUEyQjtFQUMzQiw0QkFBNEI7RUFDNUIsNEJBQTRCO0VBQzVCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLDhCQUE4QjtFQUM5QixzQ0FBc0M7RUFDdEMsMEJBQTBCO0VBQzFCLGtCQUFrQjtFQUNsQixxQ0FBcUM7RUFDckMseUJBQXlCO0VBQ3pCLFNBQVM7QUFDWDs7QUFFQSxxQkFBcUI7QUFDckI7RUFDRSxhQUFhO0VBQ2IsMkRBQTJEO0VBQzNELFNBQVM7RUFDVCxpQkFBaUI7RUFDakIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFlBQVk7RUFDWiwrQkFBK0I7RUFDL0I7Ozs7O0dBS0M7RUFDRCwwQkFBMEI7RUFDMUIsOEJBQThCO0VBQzlCLHFDQUFxQztBQUN2Qzs7QUFFQTtFQUNFO0lBQ0UsNEJBQTRCO0VBQzlCO0VBQ0E7SUFDRSwyQkFBMkI7RUFDN0I7QUFDRjs7QUFFQSxnQkFBZ0I7QUFDaEI7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osWUFBWTtFQUNaLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLCtCQUErQjtFQUMvQiw2QkFBNkI7RUFDN0IscUNBQXFDO0VBQ3JDLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLGdDQUFnQztFQUNoQyxzQ0FBc0M7RUFDdEMsNEJBQTRCO0VBQzVCLGtCQUFrQjtBQUNwQjs7QUFFQSxzQkFBc0I7QUFDdEI7RUFDRTs7SUFFRSwyREFBMkQ7SUFDM0QsV0FBVztFQUNiOztFQUVBO0lBQ0UsWUFBWTtFQUNkOztFQUVBO0lBQ0Usa0JBQWtCO0VBQ3BCO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxlQUFlO0lBQ2YsbUJBQW1CO0VBQ3JCOztFQUVBOztJQUVFLDJEQUEyRDtJQUMzRCxXQUFXO0VBQ2I7O0VBRUE7SUFDRSxZQUFZO0lBQ1osbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0UsaUJBQWlCO0VBQ25CO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxpQkFBaUI7RUFDbkI7O0VBRUE7O0lBRUUscUNBQXFDO0lBQ3JDLFdBQVc7RUFDYjs7RUFFQTtJQUNFLFlBQVk7SUFDWixtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsWUFBWTtJQUNaLFlBQVk7RUFDZDtBQUNGOztBQUVBLHFCQUFxQjtBQUNyQjtFQUNFOztJQUVFLHFDQUFxQztJQUNyQyxpQkFBaUI7RUFDbkI7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi5jYXRlZ29yaWVzLXNlY3Rpb24ge1xuICBwYWRkaW5nOiB2YXIoLS1zcGFjZS0xNikgMDtcbiAgYmFja2dyb3VuZDogdmFyKC0tYmctc2Vjb25kYXJ5KTtcbn1cblxuLmNvbnRhaW5lciB7XG4gIG1heC13aWR0aDogMTIwMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgcGFkZGluZzogMCB2YXIoLS1zcGFjZS02KTtcbn1cblxuLnNlY3Rpb24tdGl0bGUge1xuICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS0zeGwpO1xuICBmb250LXdlaWdodDogdmFyKC0tZm9udC13ZWlnaHQtYm9sZCk7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnkpO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IHZhcigtLXNwYWNlLTIpO1xuICBsaW5lLWhlaWdodDogdmFyKC0tbGluZS1oZWlnaHQtdGlnaHQpO1xufVxuXG4uc2VjdGlvbi1zdWJ0aXRsZSB7XG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLWJhc2UpO1xuICBjb2xvcjogdmFyKC0tdGV4dC1zZWNvbmRhcnkpO1xuICBmb250LXdlaWdodDogdmFyKC0tZm9udC13ZWlnaHQtbm9ybWFsKTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiB2YXIoLS1zcGFjZS0xMCk7XG4gIGxpbmUtaGVpZ2h0OiB2YXIoLS1saW5lLWhlaWdodC1yZWxheGVkKTtcbn1cblxuLmdyYWRpZW50LXRleHQge1xuICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XG4gIGZvbnQtd2VpZ2h0OiB2YXIoLS1mb250LXdlaWdodC1ib2xkKTtcbn1cblxuLyogQ2F0ZWdvcmllcyBHcmlkICovXG4uY2F0ZWdvcmllcy1ncmlkIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgxNDBweCwgMWZyKSk7XG4gIGdhcDogdmFyKC0tc3BhY2UtNCk7XG4gIG1heC13aWR0aDogODAwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuXG4vKiBDYXRlZ29yeSBDYXJkICovXG4uY2F0ZWdvcnktY2FyZCB7XG4gIGhlaWdodDogNDhweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzLWxnKTtcbiAgYmFja2dyb3VuZDogdmFyKC0tYmctcHJpbWFyeSk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XG4gIHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXRpb24tbm9ybWFsKTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3ctc20pO1xufVxuXG4uY2F0ZWdvcnktY2FyZDpob3ZlciB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcbiAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LW1kKTtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4uY2F0ZWdvcnktbmFtZSB7XG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLXNtKTtcbiAgZm9udC13ZWlnaHQ6IHZhcigtLWZvbnQtd2VpZ2h0LW1lZGl1bSk7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnkpO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGxpbmUtaGVpZ2h0OiB2YXIoLS1saW5lLWhlaWdodC10aWdodCk7XG4gIHBhZGRpbmc6IDAgdmFyKC0tc3BhY2UtMyk7XG4gIG1hcmdpbjogMDtcbn1cblxuLyogTG9hZGluZyBTa2VsZXRvbiAqL1xuLmxvYWRpbmctZ3JpZCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMTgwcHgsIDFmcikpO1xuICBnYXA6IDFyZW07XG4gIG1heC13aWR0aDogMTAwMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbn1cblxuLmNhdGVnb3J5LXNrZWxldG9uIHtcbiAgaGVpZ2h0OiA0OHB4O1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpdXMtbGcpO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXG4gICAgOTBkZWcsXG4gICAgdmFyKC0tZ3JheS0xMDApIDI1JSxcbiAgICB2YXIoLS1ncmF5LTIwMCkgNTAlLFxuICAgIHZhcigtLWdyYXktMTAwKSA3NSVcbiAgKTtcbiAgYmFja2dyb3VuZC1zaXplOiAyMDAlIDEwMCU7XG4gIGFuaW1hdGlvbjogc2hpbW1lciAycyBpbmZpbml0ZTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTtcbn1cblxuQGtleWZyYW1lcyBzaGltbWVyIHtcbiAgMCUge1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0yMDAlIDA7XG4gIH1cbiAgMTAwJSB7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMjAwJSAwO1xuICB9XG59XG5cbi8qIEVtcHR5IFN0YXRlICovXG4uZW1wdHktc3RhdGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWluLWhlaWdodDogMjAwcHg7XG59XG5cbi5lbXB0eS1jYXJkIHtcbiAgaGVpZ2h0OiA0OHB4O1xuICB3aWR0aDogMjUwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpdXMtbGcpO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1wcmltYXJ5KTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTtcbiAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LXNtKTtcbn1cblxuLmVtcHR5LXRleHQge1xuICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1iYXNlKTtcbiAgZm9udC13ZWlnaHQ6IHZhcigtLWZvbnQtd2VpZ2h0LW1lZGl1bSk7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LXNlY29uZGFyeSk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLyogUmVzcG9uc2l2ZSBEZXNpZ24gKi9cbkBtZWRpYSAobWF4LXdpZHRoOiAxMDI0cHgpIHtcbiAgLmNhdGVnb3JpZXMtZ3JpZCxcbiAgLmxvYWRpbmctZ3JpZCB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgxNjBweCwgMWZyKSk7XG4gICAgZ2FwOiAwLjhyZW07XG4gIH1cbiAgXG4gIC5jYXRlZ29yeS1jYXJkIHtcbiAgICBoZWlnaHQ6IDU1cHg7XG4gIH1cbiAgXG4gIC5jYXRlZ29yeS1uYW1lIHtcbiAgICBmb250LXNpemU6IDAuODVyZW07XG4gIH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5jYXRlZ29yaWVzLXNlY3Rpb24ge1xuICAgIHBhZGRpbmc6IDNyZW0gMDtcbiAgfVxuICBcbiAgLmNvbnRhaW5lciB7XG4gICAgcGFkZGluZzogMCAxLjVyZW07XG4gIH1cbiAgXG4gIC5zZWN0aW9uLXRpdGxlIHtcbiAgICBmb250LXNpemU6IDJyZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbiAgfVxuICBcbiAgLmNhdGVnb3JpZXMtZ3JpZCxcbiAgLmxvYWRpbmctZ3JpZCB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgxNDBweCwgMWZyKSk7XG4gICAgZ2FwOiAwLjhyZW07XG4gIH1cbiAgXG4gIC5jYXRlZ29yeS1jYXJkIHtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTRweDtcbiAgfVxuICBcbiAgLmNhdGVnb3J5LW5hbWUge1xuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xuICAuY29udGFpbmVyIHtcbiAgICBwYWRkaW5nOiAwIDFyZW07XG4gIH1cbiAgXG4gIC5zZWN0aW9uLXRpdGxlIHtcbiAgICBmb250LXNpemU6IDEuOHJlbTtcbiAgfVxuICBcbiAgLmNhdGVnb3JpZXMtZ3JpZCxcbiAgLmxvYWRpbmctZ3JpZCB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcbiAgICBnYXA6IDAuNnJlbTtcbiAgfVxuICBcbiAgLmNhdGVnb3J5LWNhcmQge1xuICAgIGhlaWdodDogNDVweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICB9XG4gIFxuICAuY2F0ZWdvcnktbmFtZSB7XG4gICAgZm9udC1zaXplOiAwLjc1cmVtO1xuICAgIHBhZGRpbmc6IDAgMC41cmVtO1xuICB9XG4gIFxuICAuZW1wdHktY2FyZCB7XG4gICAgd2lkdGg6IDIwMHB4O1xuICAgIGhlaWdodDogNTBweDtcbiAgfVxufVxuXG4vKiBIaWdoLWVuZCBkZXZpY2VzICovXG5AbWVkaWEgKG1pbi13aWR0aDogMTQwMHB4KSB7XG4gIC5jYXRlZ29yaWVzLWdyaWQsXG4gIC5sb2FkaW5nLWdyaWQge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDYsIDFmcik7XG4gICAgbWF4LXdpZHRoOiAxMjAwcHg7XG4gIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 2961:
/*!**************************************************************************!*\
  !*** ./src/app/components/shared/product-card/product-card.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProductCardComponent: () => (/* binding */ ProductCardComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../services/cart.service */ 6868);




function ProductCardComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.product.discount, "% OFF ");
  }
}
function ProductCardComponent_button_4_i_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "i", 20);
  }
}
function ProductCardComponent_button_4_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Out of Stock");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function ProductCardComponent_button_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProductCardComponent_button_4_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r0.addToCart());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ProductCardComponent_button_4_i_1_Template, 1, 0, "i", 18)(2, ProductCardComponent_button_4_span_2_Template, 2, 0, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r0.product.currentStock === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.product.currentStock > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.product.currentStock === 0);
  }
}
function ProductCardComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 22)(1, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProductCardComponent_div_5_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r0.decreaseQuantity());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProductCardComponent_div_5_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r0.increaseQuantity());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.quantity);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r0.quantity >= ctx_r0.product.currentStock);
  }
}
function ProductCardComponent_i_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "i", 27);
  }
}
function ProductCardComponent_span_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("\u20B9", ctx_r0.product.originalPrice, "");
  }
}
function ProductCardComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 29)(1, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Only ", ctx_r0.product.currentStock, " left!");
  }
}
function ProductCardComponent_div_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 29)(1, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Out of Stock");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
class ProductCardComponent {
  constructor(cartService) {
    this.cartService = cartService;
    this.quantity = 0;
  }
  ngOnInit() {
    this.cartSubscription = this.cartService.getCartItems().subscribe(cartItems => {
      const cartItem = cartItems.find(item => item.id === this.product.id);
      this.quantity = cartItem ? cartItem.quantity : 0;
    });
  }
  ngOnDestroy() {
    if (this.cartSubscription) {
      this.cartSubscription.unsubscribe();
    }
  }
  addToCart() {
    this.cartService.addToCart(this.product);
  }
  increaseQuantity() {
    this.cartService.increaseQuantity(this.product.id);
  }
  decreaseQuantity() {
    this.cartService.decreaseQuantity(this.product.id);
  }
  getStars(rating) {
    return Array(Math.floor(rating)).fill(0);
  }
  static {
    this.ɵfac = function ProductCardComponent_Factory(t) {
      return new (t || ProductCardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_cart_service__WEBPACK_IMPORTED_MODULE_0__.CartService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: ProductCardComponent,
      selectors: [["app-product-card"]],
      inputs: {
        product: "product"
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
      decls: 20,
      vars: 12,
      consts: [[1, "product-card"], [1, "product-image"], ["loading", "lazy", 3, "src", "alt"], ["class", "product-badge", 4, "ngIf"], ["class", "add-to-cart-btn", 3, "disabled", "click", 4, "ngIf"], ["class", "quantity-counter", 4, "ngIf"], [1, "product-info"], [1, "product-name"], [1, "product-rating"], [1, "stars"], ["class", "fas fa-star", 4, "ngFor", "ngForOf"], [1, "rating-text"], [1, "product-price"], [1, "current-price"], ["class", "original-price", 4, "ngIf"], ["class", "stock-info", 4, "ngIf"], [1, "product-badge"], [1, "add-to-cart-btn", 3, "click", "disabled"], ["class", "fas fa-plus", 4, "ngIf"], ["class", "out-of-stock", 4, "ngIf"], [1, "fas", "fa-plus"], [1, "out-of-stock"], [1, "quantity-counter"], [1, "quantity-btn", "decrease", 3, "click"], [1, "fas", "fa-minus"], [1, "quantity-display"], [1, "quantity-btn", "increase", 3, "click", "disabled"], [1, "fas", "fa-star"], [1, "original-price"], [1, "stock-info"], [1, "low-stock"], [1, "out-of-stock-badge"]],
      template: function ProductCardComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, ProductCardComponent_div_3_Template, 2, 1, "div", 3)(4, ProductCardComponent_button_4_Template, 3, 3, "button", 4)(5, ProductCardComponent_div_5_Template, 7, 2, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 6)(7, "h4", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 8)(10, "div", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, ProductCardComponent_i_11_Template, 1, 0, "i", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "span", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 12)(15, "span", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, ProductCardComponent_span_17_Template, 2, 1, "span", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, ProductCardComponent_div_18_Template, 3, 1, "div", 15)(19, ProductCardComponent_div_19_Template, 3, 0, "div", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx.product.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"])("alt", ctx.product.name);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.product.discount);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.quantity === 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.quantity > 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.product.name);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.getStars(ctx.product.rating));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("(", ctx.product.rating, ")");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("\u20B9", ctx.product.price, "");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.product.originalPrice);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.product.currentStock <= 5 && ctx.product.currentStock > 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.product.currentStock === 0);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf],
      styles: [".product-card[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 280px;\n  min-width: 260px;\n  padding: var(--space-4);\n  cursor: pointer;\n  transition: var(--transition-normal);\n  background: var(--bg-primary);\n  border: 1px solid var(--border-color);\n  border-radius: var(--radius-xl);\n  position: relative;\n  overflow: hidden;\n  justify-self: center;\n  box-sizing: border-box;\n  box-shadow: var(--shadow-sm);\n}\n\n.product-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-4px);\n  box-shadow: var(--shadow-lg);\n  border-color: var(--gray-300);\n}\n\n.product-image[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  height: 180px;\n  border-radius: var(--radius-lg);\n  overflow: hidden;\n  margin-bottom: var(--space-4);\n  background: var(--bg-tertiary);\n}\n\n.product-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 180px;\n  object-fit: cover;\n  border-radius: var(--radius-lg);\n  transition: var(--transition-normal);\n}\n\n.product-card[_ngcontent-%COMP%]:hover   .product-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  transform: scale(1.03);\n}\n\n.product-badge[_ngcontent-%COMP%] {\n  position: absolute;\n  top: var(--space-3);\n  left: var(--space-3);\n  background: var(--secondary);\n  color: var(--text-inverse);\n  padding: var(--space-1) var(--space-3);\n  border-radius: var(--radius-full);\n  font-size: var(--font-size-xs);\n  font-weight: var(--font-weight-semibold);\n  box-shadow: var(--shadow-md);\n  z-index: 2;\n}\n\n\n\n.add-to-cart-btn[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: var(--space-3);\n  right: var(--space-3);\n  width: 40px;\n  height: 40px;\n  border-radius: var(--radius-full);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  opacity: 0;\n  transition: var(--transition-normal);\n  background: var(--primary);\n  border: none;\n  color: var(--text-inverse);\n  cursor: pointer;\n  box-shadow: var(--shadow-md);\n  z-index: 2;\n  font-size: var(--font-size-sm);\n}\n\n.add-to-cart-btn[_ngcontent-%COMP%]:disabled {\n  background: var(--gray-300);\n  cursor: not-allowed;\n}\n\n.product-card[_ngcontent-%COMP%]:hover   .add-to-cart-btn[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n\n.add-to-cart-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  transform: scale(1.1);\n  background: var(--primary-dark);\n}\n\n\n\n.quantity-counter[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: var(--space-2);\n  right: var(--space-2);\n  display: flex;\n  align-items: center;\n  background: var(--bg-primary);\n  border: 1px solid var(--border-color);\n  border-radius: var(--radius-full);\n  padding: var(--space-1);\n  box-shadow: var(--shadow-md);\n  z-index: 3;\n  opacity: 0;\n  transition: var(--transition-normal);\n  animation: _ngcontent-%COMP%_slideIn 0.3s ease forwards;\n}\n\n.product-card[_ngcontent-%COMP%]:hover   .quantity-counter[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n\n@keyframes _ngcontent-%COMP%_slideIn {\n  from {\n    opacity: 0;\n    transform: translateY(8px) scale(0.9);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0) scale(1);\n  }\n}\n\n.quantity-btn[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n  border-radius: var(--radius-full);\n  border: none;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  transition: var(--transition-fast);\n  font-size: var(--font-size-xs);\n  color: var(--text-inverse);\n}\n\n.quantity-btn.decrease[_ngcontent-%COMP%] {\n  background: var(--error);\n}\n\n.quantity-btn.increase[_ngcontent-%COMP%] {\n  background: var(--primary);\n}\n\n.quantity-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  transform: scale(1.1);\n}\n\n.quantity-btn[_ngcontent-%COMP%]:disabled {\n  background: var(--gray-300);\n  cursor: not-allowed;\n  transform: none;\n}\n\n.quantity-display[_ngcontent-%COMP%] {\n  min-width: 24px;\n  text-align: center;\n  font-weight: var(--font-weight-semibold);\n  font-size: var(--font-size-sm);\n  color: var(--text-primary);\n  margin: 0 var(--space-2);\n}\n\n.product-name[_ngcontent-%COMP%] {\n  font-size: var(--font-size-base);\n  font-weight: var(--font-weight-semibold);\n  margin-bottom: var(--space-2);\n  color: var(--text-primary);\n  line-height: var(--line-height-tight);\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n\n.product-rating[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--space-2);\n  margin-bottom: var(--space-2);\n}\n\n.stars[_ngcontent-%COMP%] {\n  color: var(--accent);\n  font-size: var(--font-size-sm);\n}\n\n.rating-text[_ngcontent-%COMP%] {\n  color: var(--text-tertiary);\n  font-size: var(--font-size-xs);\n  font-weight: var(--font-weight-medium);\n}\n\n.product-price[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--space-3);\n  margin-bottom: var(--space-2);\n}\n\n.current-price[_ngcontent-%COMP%] {\n  font-size: var(--font-size-lg);\n  font-weight: var(--font-weight-bold);\n  color: var(--primary);\n}\n\n.original-price[_ngcontent-%COMP%] {\n  text-decoration: line-through;\n  color: var(--text-tertiary);\n  font-size: var(--font-size-sm);\n}\n\n.stock-info[_ngcontent-%COMP%] {\n  margin-top: var(--space-2);\n  font-size: var(--font-size-xs);\n}\n\n.low-stock[_ngcontent-%COMP%] {\n  color: var(--warning);\n  font-weight: var(--font-weight-medium);\n}\n\n.out-of-stock-badge[_ngcontent-%COMP%] {\n  color: var(--error);\n  font-weight: var(--font-weight-medium);\n}\n\n.out-of-stock[_ngcontent-%COMP%] {\n  font-size: var(--font-size-xs);\n  font-weight: var(--font-weight-medium);\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9zaGFyZWQvcHJvZHVjdC1jYXJkL3Byb2R1Y3QtY2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsdUJBQXVCO0VBQ3ZCLGVBQWU7RUFDZixvQ0FBb0M7RUFDcEMsNkJBQTZCO0VBQzdCLHFDQUFxQztFQUNyQywrQkFBK0I7RUFDL0Isa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixvQkFBb0I7RUFDcEIsc0JBQXNCO0VBQ3RCLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLDJCQUEyQjtFQUMzQiw0QkFBNEI7RUFDNUIsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxhQUFhO0VBQ2IsK0JBQStCO0VBQy9CLGdCQUFnQjtFQUNoQiw2QkFBNkI7RUFDN0IsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsK0JBQStCO0VBQy9CLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsb0JBQW9CO0VBQ3BCLDRCQUE0QjtFQUM1QiwwQkFBMEI7RUFDMUIsc0NBQXNDO0VBQ3RDLGlDQUFpQztFQUNqQyw4QkFBOEI7RUFDOUIsd0NBQXdDO0VBQ3hDLDRCQUE0QjtFQUM1QixVQUFVO0FBQ1o7O0FBRUEsdUJBQXVCO0FBQ3ZCO0VBQ0Usa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QixxQkFBcUI7RUFDckIsV0FBVztFQUNYLFlBQVk7RUFDWixpQ0FBaUM7RUFDakMsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsVUFBVTtFQUNWLG9DQUFvQztFQUNwQywwQkFBMEI7RUFDMUIsWUFBWTtFQUNaLDBCQUEwQjtFQUMxQixlQUFlO0VBQ2YsNEJBQTRCO0VBQzVCLFVBQVU7RUFDViw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSwyQkFBMkI7RUFDM0IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLCtCQUErQjtBQUNqQzs7QUFFQSxxQkFBcUI7QUFDckI7RUFDRSxrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLHFCQUFxQjtFQUNyQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDZCQUE2QjtFQUM3QixxQ0FBcUM7RUFDckMsaUNBQWlDO0VBQ2pDLHVCQUF1QjtFQUN2Qiw0QkFBNEI7RUFDNUIsVUFBVTtFQUNWLFVBQVU7RUFDVixvQ0FBb0M7RUFDcEMscUNBQXFDO0FBQ3ZDOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0U7SUFDRSxVQUFVO0lBQ1YscUNBQXFDO0VBQ3ZDO0VBQ0E7SUFDRSxVQUFVO0lBQ1YsaUNBQWlDO0VBQ25DO0FBQ0Y7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGlDQUFpQztFQUNqQyxZQUFZO0VBQ1osYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsZUFBZTtFQUNmLGtDQUFrQztFQUNsQyw4QkFBOEI7RUFDOUIsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0Usd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsMkJBQTJCO0VBQzNCLG1CQUFtQjtFQUNuQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQix3Q0FBd0M7RUFDeEMsOEJBQThCO0VBQzlCLDBCQUEwQjtFQUMxQix3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxnQ0FBZ0M7RUFDaEMsd0NBQXdDO0VBQ3hDLDZCQUE2QjtFQUM3QiwwQkFBMEI7RUFDMUIscUNBQXFDO0VBQ3JDLG9CQUFvQjtFQUNwQixxQkFBcUI7RUFDckIsNEJBQTRCO0VBQzVCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQiw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSwyQkFBMkI7RUFDM0IsOEJBQThCO0VBQzlCLHNDQUFzQztBQUN4Qzs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLDhCQUE4QjtFQUM5QixvQ0FBb0M7RUFDcEMscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsNkJBQTZCO0VBQzdCLDJCQUEyQjtFQUMzQiw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSwwQkFBMEI7RUFDMUIsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLHNDQUFzQztBQUN4Qzs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixzQ0FBc0M7QUFDeEM7O0FBRUE7RUFDRSw4QkFBOEI7RUFDOUIsc0NBQXNDO0FBQ3hDIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2R1Y3QtY2FyZCB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDI4MHB4O1xuICBtaW4td2lkdGg6IDI2MHB4O1xuICBwYWRkaW5nOiB2YXIoLS1zcGFjZS00KTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uLW5vcm1hbCk7XG4gIGJhY2tncm91bmQ6IHZhcigtLWJnLXByaW1hcnkpO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpdXMteGwpO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3ctc20pO1xufVxuXG4ucHJvZHVjdC1jYXJkOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC00cHgpO1xuICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3ctbGcpO1xuICBib3JkZXItY29sb3I6IHZhcigtLWdyYXktMzAwKTtcbn1cblxuLnByb2R1Y3QtaW1hZ2Uge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDE4MHB4O1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpdXMtbGcpO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBtYXJnaW4tYm90dG9tOiB2YXIoLS1zcGFjZS00KTtcbiAgYmFja2dyb3VuZDogdmFyKC0tYmctdGVydGlhcnkpO1xufVxuXG4ucHJvZHVjdC1pbWFnZSBpbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxODBweDtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cy1sZyk7XG4gIHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXRpb24tbm9ybWFsKTtcbn1cblxuLnByb2R1Y3QtY2FyZDpob3ZlciAucHJvZHVjdC1pbWFnZSBpbWcge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDMpO1xufVxuXG4ucHJvZHVjdC1iYWRnZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiB2YXIoLS1zcGFjZS0zKTtcbiAgbGVmdDogdmFyKC0tc3BhY2UtMyk7XG4gIGJhY2tncm91bmQ6IHZhcigtLXNlY29uZGFyeSk7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWludmVyc2UpO1xuICBwYWRkaW5nOiB2YXIoLS1zcGFjZS0xKSB2YXIoLS1zcGFjZS0zKTtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzLWZ1bGwpO1xuICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS14cyk7XG4gIGZvbnQtd2VpZ2h0OiB2YXIoLS1mb250LXdlaWdodC1zZW1pYm9sZCk7XG4gIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdy1tZCk7XG4gIHotaW5kZXg6IDI7XG59XG5cbi8qIEFkZCB0byBDYXJ0IEJ1dHRvbiAqL1xuLmFkZC10by1jYXJ0LWJ0biB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiB2YXIoLS1zcGFjZS0zKTtcbiAgcmlnaHQ6IHZhcigtLXNwYWNlLTMpO1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpdXMtZnVsbCk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uLW5vcm1hbCk7XG4gIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnkpO1xuICBib3JkZXI6IG5vbmU7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWludmVyc2UpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdy1tZCk7XG4gIHotaW5kZXg6IDI7XG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLXNtKTtcbn1cblxuLmFkZC10by1jYXJ0LWJ0bjpkaXNhYmxlZCB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWdyYXktMzAwKTtcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbn1cblxuLnByb2R1Y3QtY2FyZDpob3ZlciAuYWRkLXRvLWNhcnQtYnRuIHtcbiAgb3BhY2l0eTogMTtcbn1cblxuLmFkZC10by1jYXJ0LWJ0bjpob3Zlcjpub3QoOmRpc2FibGVkKSB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbiAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeS1kYXJrKTtcbn1cblxuLyogUXVhbnRpdHkgQ291bnRlciAqL1xuLnF1YW50aXR5LWNvdW50ZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogdmFyKC0tc3BhY2UtMik7XG4gIHJpZ2h0OiB2YXIoLS1zcGFjZS0yKTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogdmFyKC0tYmctcHJpbWFyeSk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cy1mdWxsKTtcbiAgcGFkZGluZzogdmFyKC0tc3BhY2UtMSk7XG4gIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdy1tZCk7XG4gIHotaW5kZXg6IDM7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXRpb24tbm9ybWFsKTtcbiAgYW5pbWF0aW9uOiBzbGlkZUluIDAuM3MgZWFzZSBmb3J3YXJkcztcbn1cblxuLnByb2R1Y3QtY2FyZDpob3ZlciAucXVhbnRpdHktY291bnRlciB7XG4gIG9wYWNpdHk6IDE7XG59XG5cbkBrZXlmcmFtZXMgc2xpZGVJbiB7XG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDhweCkgc2NhbGUoMC45KTtcbiAgfVxuICB0byB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCkgc2NhbGUoMSk7XG4gIH1cbn1cblxuLnF1YW50aXR5LWJ0biB7XG4gIHdpZHRoOiAyOHB4O1xuICBoZWlnaHQ6IDI4cHg7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cy1mdWxsKTtcbiAgYm9yZGVyOiBub25lO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uLWZhc3QpO1xuICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS14cyk7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWludmVyc2UpO1xufVxuXG4ucXVhbnRpdHktYnRuLmRlY3JlYXNlIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tZXJyb3IpO1xufVxuXG4ucXVhbnRpdHktYnRuLmluY3JlYXNlIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeSk7XG59XG5cbi5xdWFudGl0eS1idG46aG92ZXI6bm90KDpkaXNhYmxlZCkge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG59XG5cbi5xdWFudGl0eS1idG46ZGlzYWJsZWQge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1ncmF5LTMwMCk7XG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4gIHRyYW5zZm9ybTogbm9uZTtcbn1cblxuLnF1YW50aXR5LWRpc3BsYXkge1xuICBtaW4td2lkdGg6IDI0cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IHZhcigtLWZvbnQtd2VpZ2h0LXNlbWlib2xkKTtcbiAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtc20pO1xuICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5KTtcbiAgbWFyZ2luOiAwIHZhcigtLXNwYWNlLTIpO1xufVxuXG4ucHJvZHVjdC1uYW1lIHtcbiAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtYmFzZSk7XG4gIGZvbnQtd2VpZ2h0OiB2YXIoLS1mb250LXdlaWdodC1zZW1pYm9sZCk7XG4gIG1hcmdpbi1ib3R0b206IHZhcigtLXNwYWNlLTIpO1xuICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5KTtcbiAgbGluZS1oZWlnaHQ6IHZhcigtLWxpbmUtaGVpZ2h0LXRpZ2h0KTtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIC13ZWJraXQtbGluZS1jbGFtcDogMjtcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLnByb2R1Y3QtcmF0aW5nIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiB2YXIoLS1zcGFjZS0yKTtcbiAgbWFyZ2luLWJvdHRvbTogdmFyKC0tc3BhY2UtMik7XG59XG5cbi5zdGFycyB7XG4gIGNvbG9yOiB2YXIoLS1hY2NlbnQpO1xuICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1zbSk7XG59XG5cbi5yYXRpbmctdGV4dCB7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LXRlcnRpYXJ5KTtcbiAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUteHMpO1xuICBmb250LXdlaWdodDogdmFyKC0tZm9udC13ZWlnaHQtbWVkaXVtKTtcbn1cblxuLnByb2R1Y3QtcHJpY2Uge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IHZhcigtLXNwYWNlLTMpO1xuICBtYXJnaW4tYm90dG9tOiB2YXIoLS1zcGFjZS0yKTtcbn1cblxuLmN1cnJlbnQtcHJpY2Uge1xuICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1sZyk7XG4gIGZvbnQtd2VpZ2h0OiB2YXIoLS1mb250LXdlaWdodC1ib2xkKTtcbiAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xufVxuXG4ub3JpZ2luYWwtcHJpY2Uge1xuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcbiAgY29sb3I6IHZhcigtLXRleHQtdGVydGlhcnkpO1xuICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1zbSk7XG59XG5cbi5zdG9jay1pbmZvIHtcbiAgbWFyZ2luLXRvcDogdmFyKC0tc3BhY2UtMik7XG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLXhzKTtcbn1cblxuLmxvdy1zdG9jayB7XG4gIGNvbG9yOiB2YXIoLS13YXJuaW5nKTtcbiAgZm9udC13ZWlnaHQ6IHZhcigtLWZvbnQtd2VpZ2h0LW1lZGl1bSk7XG59XG5cbi5vdXQtb2Ytc3RvY2stYmFkZ2Uge1xuICBjb2xvcjogdmFyKC0tZXJyb3IpO1xuICBmb250LXdlaWdodDogdmFyKC0tZm9udC13ZWlnaHQtbWVkaXVtKTtcbn1cblxuLm91dC1vZi1zdG9jayB7XG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLXhzKTtcbiAgZm9udC13ZWlnaHQ6IHZhcigtLWZvbnQtd2VpZ2h0LW1lZGl1bSk7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 9153:
/*!***************************************!*\
  !*** ./src/app/guards/admin.guard.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdminGuard: () => (/* binding */ AdminGuard)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/auth.service */ 4796);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5072);



class AdminGuard {
  constructor(authService, router) {
    this.authService = authService;
    this.router = router;
  }
  canActivate() {
    if (this.authService.isAuthenticated() && this.authService.isAdmin()) {
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }
  static {
    this.ɵfac = function AdminGuard_Factory(t) {
      return new (t || AdminGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: AdminGuard,
      factory: AdminGuard.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 472:
/*!**************************************************!*\
  !*** ./src/app/interceptors/auth.interceptor.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   authInterceptor: () => (/* binding */ authInterceptor)
/* harmony export */ });
const authInterceptor = (req, next) => {
  const token = localStorage.getItem('token');
  if (token) {
    const authReq = req.clone({
      headers: req.headers.set('Authorization', `Bearer ${token}`)
    });
    return next(authReq);
  }
  return next(req);
};

/***/ }),

/***/ 7945:
/*!*******************************************!*\
  !*** ./src/app/services/admin.service.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdminService: () => (/* binding */ AdminService)
/* harmony export */ });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ 5312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 6443);



class AdminService {
  constructor(http) {
    this.http = http;
    this.apiUrl = `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/admin`;
  }
  getDashboardStats() {
    return this.http.get(`${this.apiUrl}/dashboard`);
  }
  getRecentOrders() {
    return this.http.get(`${this.apiUrl}/orders/recent`);
  }
  static {
    this.ɵfac = function AdminService_Factory(t) {
      return new (t || AdminService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: AdminService,
      factory: AdminService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 4796:
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthService: () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 5797);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 271);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ 5312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 6443);





class AuthService {
  constructor(http) {
    this.http = http;
    this.apiUrl = `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/auth`;
    this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(null);
    this.currentUser$ = this.currentUserSubject.asObservable();
    const storedUser = localStorage.getItem('user');
    if (storedUser && storedUser !== 'undefined' && storedUser !== 'null') {
      try {
        this.currentUserSubject.next(JSON.parse(storedUser));
      } catch (error) {
        console.error('Error parsing stored user data:', error);
        localStorage.removeItem('user');
        localStorage.removeItem('token');
      }
    }
  }
  login(credentials) {
    return this.http.post(`${this.apiUrl}/login`, credentials).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(response => {
      const user = {
        id: response.id,
        name: response.name,
        email: response.email,
        role: response.role
      };
      localStorage.setItem('token', response.token);
      localStorage.setItem('user', JSON.stringify(user));
      this.currentUserSubject.next(user);
      return response;
    }));
  }
  signup(userData) {
    return this.http.post(`${this.apiUrl}/signup`, userData).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(response => {
      const user = {
        id: response.id,
        name: response.name,
        email: response.email,
        role: response.role
      };
      localStorage.setItem('token', response.token);
      localStorage.setItem('user', JSON.stringify(user));
      this.currentUserSubject.next(user);
      return response;
    }));
  }
  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.currentUserSubject.next(null);
  }
  getCurrentUser() {
    return this.currentUserSubject.value;
  }
  isAuthenticated() {
    return !!localStorage.getItem('token');
  }
  isAdmin() {
    const user = this.getCurrentUser();
    return user?.role === 'ADMIN';
  }
  isDeliveryAgent() {
    const user = this.getCurrentUser();
    return user?.role === 'DELIVERY_AGENT';
  }
  sendVerificationOTP(email) {
    return this.http.post(`${this.apiUrl}/send-verification-otp`, {
      email
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(response => {
      if (response.otp) {
        alert(`Your verification OTP is: ${response.otp}`);
      }
      return response;
    }));
  }
  verifyEmail(email, otp) {
    return this.http.post(`${this.apiUrl}/verify-email`, {
      email,
      otp
    });
  }
  forgotPassword(email) {
    return this.http.post(`${this.apiUrl}/forgot-password`, {
      email
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(response => {
      if (response.otp) {
        alert(`Your password reset OTP is: ${response.otp}`);
      }
      return response;
    }));
  }
  resetPassword(email, otp, newPassword) {
    return this.http.post(`${this.apiUrl}/reset-password`, {
      email,
      otp,
      newPassword
    });
  }
  updateProfile(userData) {
    return this.http.put(`${this.apiUrl}/profile`, userData);
  }
  static {
    this.ɵfac = function AuthService_Factory(t) {
      return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
      token: AuthService,
      factory: AuthService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 6868:
/*!******************************************!*\
  !*** ./src/app/services/cart.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CartService: () => (/* binding */ CartService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 5797);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);


class CartService {
  constructor() {
    this.cartItems = [];
    this.cartSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject([]);
    this.loadCartFromStorage();
  }
  getCartItems() {
    return this.cartSubject.asObservable();
  }
  getQuantity(productId) {
    const item = this.cartItems.find(item => item.id === productId);
    return item ? item.quantity : 0;
  }
  addToCart(product) {
    const existingItemIndex = this.cartItems.findIndex(item => item.id === product.id);
    const currentQuantity = existingItemIndex >= 0 ? this.cartItems[existingItemIndex].quantity : 0;
    const newQuantity = currentQuantity + 1;
    if (newQuantity > product.currentStock) {
      return {
        success: false,
        message: `Only ${product.currentStock} items available`
      };
    }
    if (existingItemIndex >= 0) {
      // Product exists, increase quantity
      this.cartItems = this.cartItems.map((item, index) => index === existingItemIndex ? {
        ...item,
        quantity: newQuantity
      } : item);
    } else {
      // Product doesn't exist, add new item
      const newItem = {
        id: product.id,
        name: product.name,
        price: product.price,
        quantity: 1,
        imageUrl: product.imageUrl,
        category: product.category,
        currentStock: product.currentStock
      };
      this.cartItems = [...this.cartItems, newItem];
    }
    this.updateCart();
    return {
      success: true
    };
  }
  increaseQuantity(productId) {
    const item = this.cartItems.find(i => i.id === productId);
    if (item && item.quantity + 1 > item.currentStock) {
      return {
        success: false,
        message: `Only ${item.currentStock} items available`
      };
    }
    this.cartItems = this.cartItems.map(item => item.id === productId ? {
      ...item,
      quantity: item.quantity + 1
    } : item);
    this.updateCart();
    return {
      success: true
    };
  }
  decreaseQuantity(productId) {
    this.cartItems = this.cartItems.map(item => item.id === productId ? {
      ...item,
      quantity: Math.max(0, item.quantity - 1)
    } : item).filter(item => item.quantity > 0); // Auto-remove when quantity reaches 0
    this.updateCart();
  }
  removeItem(productId) {
    this.cartItems = this.cartItems.filter(item => item.id !== productId);
    this.updateCart();
  }
  clearCart() {
    this.cartItems = [];
    this.updateCart();
  }
  getCartCount() {
    return this.cartItems.reduce((total, item) => total + item.quantity, 0);
  }
  getCartTotal() {
    return this.cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  }
  updateCart() {
    this.cartSubject.next([...this.cartItems]);
    this.saveCartToStorage();
  }
  saveCartToStorage() {
    localStorage.setItem('cart', JSON.stringify(this.cartItems));
  }
  loadCartFromStorage() {
    const savedCart = localStorage.getItem('cart');
    if (savedCart && savedCart !== 'undefined' && savedCart !== 'null') {
      try {
        this.cartItems = JSON.parse(savedCart);
        this.cartSubject.next([...this.cartItems]);
      } catch (error) {
        console.error('Error parsing saved cart data:', error);
        localStorage.removeItem('cart');
        this.cartItems = [];
        this.cartSubject.next([]);
      }
    }
  }
  static {
    this.ɵfac = function CartService_Factory(t) {
      return new (t || CartService)();
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: CartService,
      factory: CartService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 4354:
/*!**********************************************!*\
  !*** ./src/app/services/category.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CategoryService: () => (/* binding */ CategoryService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 5797);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 9452);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ 5312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 6443);




class CategoryService {
  constructor(http) {
    this.http = http;
    this.apiUrl = `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/categories`;
    this.categoriesSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject([]);
    this.categories$ = this.categoriesSubject.asObservable();
    this.mockCategories = [{
      id: 1,
      name: 'fruits',
      description: 'Fruits & Vegetables'
    }, {
      id: 2,
      name: 'dairy',
      description: 'Dairy & Eggs'
    }, {
      id: 3,
      name: 'meat',
      description: 'Meat & Seafood'
    }, {
      id: 4,
      name: 'beverages',
      description: 'Beverages'
    }, {
      id: 5,
      name: 'bakery',
      description: 'Bakery'
    }, {
      id: 6,
      name: 'snacks',
      description: 'Snacks'
    }];
    this.categoriesSubject.next(this.mockCategories);
  }
  getAllCategories() {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)(this.mockCategories);
  }
  createCategory(category) {
    const newCategory = {
      ...category,
      id: Math.max(...this.mockCategories.map(c => c.id || 0)) + 1
    };
    this.mockCategories.push(newCategory);
    this.categoriesSubject.next([...this.mockCategories]);
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)(newCategory);
  }
  getCategories() {
    return this.categoriesSubject.value;
  }
  static {
    this.ɵfac = function CategoryService_Factory(t) {
      return new (t || CategoryService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
      token: CategoryService,
      factory: CategoryService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 5214:
/*!**********************************************!*\
  !*** ./src/app/services/checkout.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CheckoutService: () => (/* binding */ CheckoutService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 9452);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ 5312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product.service */ 6241);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 6443);





class CheckoutService {
  constructor(productService, http) {
    this.productService = productService;
    this.http = http;
  }
  processOrder(cartItems) {
    // Validate stock for all items
    for (const item of cartItems) {
      if (item.quantity > item.currentStock) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)({
          success: false,
          message: `Insufficient stock for ${item.name}. Only ${item.currentStock} available.`
        });
      }
    }
    // Reduce stock for each item
    cartItems.forEach(item => {
      this.productService.reduceStock(item.id, item.quantity).subscribe();
    });
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)({
      success: true
    });
  }
  saveOrder(orderData) {
    return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/orders`, orderData);
  }
  getUserOrders() {
    return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/orders/user`);
  }
  getAllOrders() {
    return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/orders/admin`);
  }
  static {
    this.ɵfac = function CheckoutService_Factory(t) {
      return new (t || CheckoutService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_product_service__WEBPACK_IMPORTED_MODULE_1__.ProductService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
      token: CheckoutService,
      factory: CheckoutService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 8674:
/*!*******************************************!*\
  !*** ./src/app/services/order.service.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OrderService: () => (/* binding */ OrderService)
/* harmony export */ });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ 5312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 6443);



class OrderService {
  constructor(http) {
    this.http = http;
    this.apiUrl = `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/orders`;
  }
  createOrder(orderData) {
    return this.http.post(this.apiUrl, orderData);
  }
  getUserOrders() {
    return this.http.get(`${this.apiUrl}/user`);
  }
  getAllOrders() {
    return this.http.get(`${this.apiUrl}/admin`);
  }
  updateOrderStatus(orderId, status) {
    return this.http.put(`${this.apiUrl}/${orderId}/status`, {
      status
    });
  }
  getRecentOrders() {
    return this.http.get(`${this.apiUrl}/admin/orders/recent`);
  }
  static {
    this.ɵfac = function OrderService_Factory(t) {
      return new (t || OrderService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: OrderService,
      factory: OrderService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 6241:
/*!*********************************************!*\
  !*** ./src/app/services/product.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProductService: () => (/* binding */ ProductService)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 1318);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ 5312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 6443);




class ProductService {
  constructor(http) {
    this.http = http;
    this.apiUrl = `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/products`;
  }
  getAllProducts() {
    return this.http.get(`${this.apiUrl}/all`);
  }
  getProducts(page = 0, size = 10) {
    return this.http.get(`${this.apiUrl}?page=${page}&size=${size}&sortBy=id&sortDir=desc`);
  }
  getProductById(id) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }
  getProductsByCategory(category) {
    // Normalize category name and encode for URL
    const normalizedCategory = this.normalizeCategoryName(category);
    const encodedCategory = encodeURIComponent(normalizedCategory);
    console.log('Requesting category:', category, '-> normalized:', normalizedCategory);
    return this.http.get(`${this.apiUrl}/category/${encodedCategory}`);
  }
  normalizeCategoryName(category) {
    // Map display names to database values
    const categoryMap = {
      'fruits & vegetables': 'Fruits & Vegetables',
      'fruits': 'Fruits & Vegetables',
      'dairy & eggs': 'Dairy & Eggs',
      'dairy': 'Dairy & Eggs',
      'meat & seafood': 'Meat & Seafood',
      'meat': 'Meat & Seafood',
      'beverages': 'Beverages',
      'snacks': 'Snacks',
      'bakery': 'Bakery',
      'frozen foods': 'Frozen Foods',
      'frozen': 'Frozen Foods'
    };
    const lowerCategory = category.toLowerCase();
    return categoryMap[lowerCategory] || category;
  }
  searchProducts(query) {
    return this.http.get(`${this.apiUrl}/search?q=${query}`);
  }
  reduceStock(productId, quantity) {
    return this.http.patch(`${this.apiUrl}/${productId}/reduce-stock`, {
      quantity
    });
  }
  updateProductStock(productId, initialStock, currentStock) {
    return this.http.patch(`${this.apiUrl}/${productId}/stock`, {
      initialStock,
      currentStock
    });
  }
  createProduct(product) {
    return this.http.post(this.apiUrl, product);
  }
  updateProduct(id, product) {
    return this.http.put(`${this.apiUrl}/${id}`, product);
  }
  deleteProduct(id) {
    console.log('Frontend: Deleting product with ID:', id);
    return this.http.delete(`${this.apiUrl}/${id}`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)(error => {
      console.error('Frontend: Delete API failed:', error);
      throw error;
    }));
  }
  toggleProductStatus(id) {
    return this.http.patch(`${this.apiUrl}/${id}/status`, {});
  }
  getCategories() {
    return ['fruits', 'vegetables', 'dairy', 'meat', 'beverages', 'bakery', 'snacks', 'frozen'];
  }
  // Category mapping for display names vs database values
  getCategoryMapping() {
    return {
      'fruits': 'fruits',
      'vegetables': 'vegetables',
      'dairy': 'dairy',
      'meat': 'meat',
      'beverages': 'beverages',
      'bakery': 'bakery',
      'snacks': 'snacks',
      'frozen': 'frozen'
    };
  }
  getCategoryDisplayName(category) {
    const displayNames = {
      'fruits': 'Fruits & Vegetables',
      'vegetables': 'Vegetables',
      'dairy': 'Dairy & Eggs',
      'meat': 'Meat & Seafood',
      'beverages': 'Beverages',
      'bakery': 'Bakery',
      'snacks': 'Snacks',
      'frozen': 'Frozen Foods'
    };
    return displayNames[category.toLowerCase()] || category;
  }
  filterProducts(category, minPrice, maxPrice, brand) {
    let params = [];
    if (category) params.push(`category=${encodeURIComponent(category)}`);
    if (minPrice !== undefined) params.push(`minPrice=${minPrice}`);
    if (maxPrice !== undefined) params.push(`maxPrice=${maxPrice}`);
    if (brand) params.push(`brand=${encodeURIComponent(brand)}`);
    const queryString = params.length > 0 ? `?${params.join('&')}` : '';
    return this.http.get(`${this.apiUrl}/filter${queryString}`);
  }
  getAllBrands() {
    return this.http.get(`${this.apiUrl}/brands`);
  }
  static {
    this.ɵfac = function ProductService_Factory(t) {
      return new (t || ProductService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
      token: ProductService,
      factory: ProductService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 5312:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   environment: () => (/* binding */ environment)
/* harmony export */ });
const environment = {
  production: false,
  apiUrl: 'http://localhost:8080/api'
};

/***/ }),

/***/ 4429:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 436);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ 3835);
/* harmony import */ var _app_app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.component */ 92);
/* harmony import */ var _app_app_routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app/app.routes */ 2181);
/* harmony import */ var _app_interceptors_auth_interceptor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/interceptors/auth.interceptor */ 472);








(0,_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.bootstrapApplication)(_app_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent, {
  providers: [(0,_angular_router__WEBPACK_IMPORTED_MODULE_4__.provideRouter)(_app_app_routes__WEBPACK_IMPORTED_MODULE_1__.routes), (0,_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.provideHttpClient)((0,_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.withInterceptors)([_app_interceptors_auth_interceptor__WEBPACK_IMPORTED_MODULE_2__.authInterceptor])), (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.importProvidersFrom)(_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__.BrowserAnimationsModule)]
}).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4429)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map