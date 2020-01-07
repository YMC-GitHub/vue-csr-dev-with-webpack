import cart from "./modules/cart";
import products from "./modules/products";
export default {
  // By default, actions, mutations and getters inside modules are still registered under the global namespace
  // -- this allows multiple modules to react to the same mutation/action type.
  // If you want your modules to be more self-contained or reusable ,make it true:
  namespaced: true,
  // nested modules
  modules: {
    cart,
    products
  }
};
