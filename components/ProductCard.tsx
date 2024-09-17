"use client";

import Image from "next/image";
import Link from "next/link";
import { Product } from "@/types/product";

const ProductCart = ({ product }: { product: Product }) => {
  return (
    <Link
      href={{
        pathname: `/products/product`,
        query: { id: product.id },
      }}
      className="block h-full cursor-pointer"
    >
      <div
        key={product.id}
        className="bg-white shadow-md border rounded-lg p-4 md:p-6 flex flex-col justify-between cursor-pointer h-full"
      >
        <Image
          src={product.thumbnail}
          width={300}
          height={200}
          alt={product.title}
          className="rounded-md object-cover md:h-48 sm:object-scale-down cursor-pointer"
        />
        <div className="mt-2 md:mt-4 flex-grow cursor-pointer">
          <h1 className="text-sm md:text-lg uppercase font-bold cursor-pointer">
            {product.title}
          </h1>
          <p className="mt-2 text-gray-600 text-sm cursor-pointer">
            {product.description}
          </p>
          <p className="mt-2 text-gray-600 cursor-pointer">${product.price}</p>
        </div>
      </div>
    </Link>
  );
};

export default ProductCart;
