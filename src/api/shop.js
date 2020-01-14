/**
 * Mocking client-server processing
 */
const products = [
  {
    id: 1,
    title: "iPad 4 Mini",
    price: 500.01,
    inventory: 2
  },
  {
    id: 2,
    title: "H&M T-Shirt White",
    price: 10.99,
    inventory: 10
  },
  {
    id: 3,
    title: "Charli XCX - Sucker CD",
    price: 19.99,
    inventory: 5
  }
];

export default {
  getProducts(cb) {
    setTimeout(() => cb(products), 100);
  },

  buyProducts(_products, cb, errorCb) {
    setTimeout(() => {
      // eslint-disable-next-line no-unused-expressions
      Math.random() > 0.5 || navigator.userAgent.indexOf("PhantomJS") > -1
        ? cb()
        : errorCb();
    }, 100);
  }
};
