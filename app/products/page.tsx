'use client';

import Filters from "@/components/Filters";
import Products from "./Products";
import Sort from "@/components/Sort";

const ProductsPage = () => {

  return (
    <main>
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 gap-x-8 gap-y-10 lg:grid-cols-5 md:px-10 lg:px-20 px-10 py-10">
        <Filters />
        <div className='col-span-2 md:col-span-2 lg:col-span-4 mb-4 md:mb-12'>
          <Sort />
          <Products />
        </div>
      </div>
    </main>
  );
};


export default ProductsPage;