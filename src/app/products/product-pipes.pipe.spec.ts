import { ProductPipesPipe } from './product-pipes.pipe';

describe('ProductPipesPipe', () => {
  it('create an instance', () => {
    const pipe = new ProductPipesPipe();
    expect(pipe).toBeTruthy();
  });

  it('should transform to Limited Stock if available quantity is less than or equal to 6', () => {
    const pipe = new ProductPipesPipe();
    let val = pipe.transform(5);
    expect(val).toBe(`Limited Stock!`);
  });
});
