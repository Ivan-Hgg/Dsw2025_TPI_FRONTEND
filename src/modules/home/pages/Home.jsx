import Card from '../../shared/components/Card';
import { Products } from '../services/products';
import { useState } from 'react';
import { useEffect } from 'react';
import { Orders } from '../services/orders';

function Home() {
  const [quantityProduct, setQuantityProduct]=useState();
  const [errorQuantityProduct, setErrorQuantityProduct]=useState();
  const [quantityOrder, setQuantityOrder]=useState();
  const [errorQuantityOrder, setErrorQuantityOrder]=useState();


  const getProductQuantity=async()=>{
    const {products, error} =await Products();
    setQuantityProduct(products.length);
    if(error){
      setErrorQuantityProduct("No se pudo encontrar la cantidad de productos");
      setQuantityProduct(null);
    }
  };
  const getOrderQuantity=async()=>{
    const {orders, error} =await Orders();
    setQuantityOrder(orders.length);
    if(error){
      setErrorQuantityOrder("No se pudo encontrar la cantidad de ordenes");
      setQuantityOrder(null);
    }
  };

  useEffect(() => {
    getProductQuantity();
    getOrderQuantity()
  });

  return (
    <div
      className='flex flex-col gap-3 sm:grid sm:grid-cols-2'
    >
      <Card>
        <h3>Productos</h3>
        <p>Cantidad: {errorQuantityProduct ? '#' : quantityProduct}</p>
        {errorQuantityProduct&& <p className='text-sm md:text-md text-red-500'>{errorQuantityProduct}</p>}
      </Card>

      <Card>
        <h3>Ordenes</h3>
        <p>Cantidad: {errorQuantityOrder ? '#' : quantityOrder}</p>
        {errorQuantityOrder&& <p className='text-sm md:text-md text-red-500'>{errorQuantityOrder}</p>}

      </Card>
    </div>
  );
};

export default Home;
