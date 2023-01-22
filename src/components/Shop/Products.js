import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DummyProducs = [
    {
        id:'p1',
        price:110,
        title:"Bhagooooo",
        description: 'RUNNNNN'
    },
    {
        id:'p2',
        price:10,
        title:"Bhagooooo part - II",
        description: 'RUNNNNN'
    },
    {
        id:'p3',
        price:5,
        title:"Bhagooooo Again!",
        description: 'RUNNNNNINGGG'
    }
];
const Products = () => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
          {DummyProducs.map((product) =>
              <ProductItem
                  id={product.id}
                  title={product.title}
                  price={product.price}
                  description={product.description}
              />
          )}
      </ul>
    </section>
  );
};

export default Products;
