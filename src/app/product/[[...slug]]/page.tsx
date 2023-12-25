type DetailProductProps = {
  params: {
    slug: string[];
  };
};

import React from 'react';

async function getData() {
  // const response = await fetch('https://fakestoreapi.com/products', {
  //   cache: 'no-store',
  // });
  const response = await fetch('http://localhost:3000/api/product', {
    cache: 'no-store',
    next: {
      tags: ['products']
    }
  });

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
}

export default async function DetailProduct(props: DetailProductProps) {
  const { params } = props;
  const products = await getData();
  // console.log(products);


  return (
    <div className='grid grid-cols-4 mt-5 place-items-center'>
      {/* <h1 className="text-3xl text-center">{params.slug ? 'Detail Product' : 'Product Page'}</h1> */}
      {products.data.length > 0 &&
        products.data.map((products: any) => (
          <div key={products.id} className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 my-5">
            <a href="#">
              <img className="p-8 rounded-t-lg object-cover h-96 w-full" src={products.image} alt="product image" />
            </a>
            <div className="px-5 pb-5">
              <a href="#">
                <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white truncate">{products.title}</h5>
              </a>

              <div className="flex items-center justify-between mt-3">
                <span className="text-3xl font-bold text-gray-900 dark:text-white">£ {products.price}</span>
                <a
                  href="#"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Add to cart
                </a>
              </div>
            </div>
          </div>
        ))}
      {params.slug && (
        <>
          <p className="text-2xl font-semibold text-center mt-5">Category : {params.slug[0]}</p>
          <p className="text-2xl font-semibold text-center">Gender : {params.slug[1]}</p>
          <p className="text-2xl font-semibold text-center">id : {params.slug[2]}</p>
        </>
      )}
    </div>
  );
}
