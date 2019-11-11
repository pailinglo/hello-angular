import { Product } from './product';

describe('Product', () => {
  it('should create an instance', () => {
    expect(new Product("product name","product description")).toBeTruthy();
  });
});
