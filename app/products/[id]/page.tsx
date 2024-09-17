"use client";

import Image from "next/image";
import Breadcrumb from "@/components/Breadcrumb";
import AddToCart from "@/components/AddToCart";
import Stars from "@/components/Stars";
import { useEffect, useState, useContext } from "react";
import { useProductsContext } from "@/context/products_context";
import { useSearchParams } from "next/navigation";

function Product() {
  const [selectedImage, setSelectedImage] = useState("");

  const {
    single_product: product,
    single_product_loading: loading,
    single_product_error: error,
    fetchSingleProduct,
  } = useProductsContext();

  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  if (!product) {
    return <div>Loading...</div>;
  }

  useEffect(() => {
    fetchSingleProduct(id);
  }, [id]);

  useEffect(() => {
    if (product && product.thumbnail) {
      setSelectedImage(product.thumbnail);
    }
  }, [product]);

  if (loading) {
    return (
      <div role="status" className="flex justify-center my-6">
        <svg
          aria-hidden="true"
          className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-500"
          viewBox="0 0 100 101"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
            fill="currentColor"
          />
          <path
            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
            fill="currentFill"
          />
        </svg>
        <span className="sr-only">Loading...</span>
      </div>
    );
  }

  return (
    <main>
      <div className="px-10 lg:px-20 py-5">
        <Breadcrumb products title={product.title} />
        <article>
          <div className="p-6 lg:max-w-7xl max-w-2xl max-lg:mx-auto">
            <div className="grid items-start grid-cols-1 lg:grid-cols-5 gap-12">
              <div className="lg:col-span-3 flex flex-col justify-center items-center bg-gray-100 text-center center p-4 rounded-md">
                {selectedImage && (
                  <Image
                    src={selectedImage}
                    width={300}
                    height={280}
                    alt="Product"
                    className=""
                  />
                )}
                <div className="flex flex-wrap gap-x-12 gap-y-6 justify-center mx-auto border-t-2">
                  {product.images &&
                    product.images.map((image, index) => (
                      <Image
                        key={index}
                        src={image}
                        width={120}
                        height={100}
                        alt="Product"
                        className="object-cover w-8 md:w-24 cursor-pointer"
                        onClick={() => setSelectedImage(image)}
                      />
                    ))}
                </div>
              </div>

              <div className="lg:col-span-2">
                <h2 className="text-3xl font-extrabold text-gray-800">
                  {product.title}
                </h2>
                <div className="flex flex-wrap gap-4 mt-4">
                  <p className="text-gray-800 text-xl font-bold">
                    ${product.price}
                  </p>
                  <p className="text-gray-400 text-xl">
                    <span style={{ textDecoration: "line-through" }}>
                      ${product.price}
                    </span>
                    <span className="text-sm ml-1">Tax included</span>
                  </p>
                  <p className="text-black text-xl">
                    {product.discountPercentage}%
                    <span className="text-sm ml-1">Discount</span>
                  </p>
                </div>
                <div className="flex gap-4 space-x-2 mt-4">
                  <div className="">
                    <span className="text-sm">SKU:</span>
                    <h3 className="text-sm font-bold text-gray-800 capitalize">
                      {product.sku}
                    </h3>
                  </div>
                  <div className="">
                    <span className="text-sm">Category:</span>
                    <h3 className="text-sm font-bold text-gray-800 capitalize">
                      {product.category}
                    </h3>
                  </div>
                  <div className="">
                    <span className="text-sm">Stock:</span>
                    <h3 className="text-sm font-bold text-gray-800 capitalize">
                      {product.stock}
                    </h3>
                  </div>
                  <div className="">
                    <span className="text-sm">Brand:</span>
                    <h3 className="text-sm font-bold text-gray-800 capitalize">
                      {product.brand}
                    </h3>
                  </div>
                </div>
                <div className="flex space-x-2 mt-4">
                  <Stars stars={product.rating} />
                </div>

                <div className="mt-6 flex justify-between items-center">
                  <AddToCart product={product} />
                </div>

                <div className="mt-8">
                  <h3 className="text-lg font-bold text-gray-800">
                    About {product.title}
                  </h3>
                  <ul className="space-y-3 list-disc mt-4 pl-4 text-sm text-gray-800">
                    <li>{product.description}</li>
                  </ul>
                </div>

                <div className="flex gap-4 space-x-2 mt-4">
                  <div>
                    <span className="text-sm">Warranty information:</span>
                    <h3 className="text-sm font-bold text-gray-800 capitalize">
                      {product.warrantyInformation}
                    </h3>
                  </div>
                  <div>
                    <span className="text-sm">Shipping information:</span>
                    <h3 className="text-sm font-bold text-gray-800 capitalize">
                      {product.shippingInformation}
                    </h3>
                  </div>
                  <div>
                    <span className="text-sm">Availability:</span>
                    <h3 className="text-sm font-bold text-gray-800 capitalize">
                      {product.availabilityStatus}
                    </h3>
                  </div>
                </div>

                <div className="flex gap-4 space-x-2 mt-4">
                  <div>
                    <span className="text-sm">Return policy:</span>
                    <h3 className="text-sm font-bold text-gray-800 capitalize">
                      {product.returnPolicy}
                    </h3>
                  </div>
                  <div>
                    <span className="text-sm">Minimum order quantity:</span>
                    <h3 className="text-sm font-bold text-gray-800 capitalize">
                      {product.minimumOrderQuantity}
                    </h3>
                  </div>
                </div>

                <div className="mt-8 max-w-md">
                  <h3 className="text-lg font-bold text-gray-800">
                    Reviews({product.reviews && product.reviews.length})
                  </h3>

                  {product.reviews &&
                    product.reviews.map((review, index) => (
                      <div key={index} className="flex items-start mt-8">
                        <div className="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                          <svg
                            className="absolute w-12 h-12 text-gray-400 -left-1"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                              clip-rule="evenodd"
                            ></path>
                          </svg>
                        </div>
                        <div className="ml-3">
                          <h4 className="text-sm font-bold">
                            {review.reviewerName}
                          </h4>

                          <div className="flex space-x-1 mt-1">
                            {[...Array(review.rating)].map((_, i) => (
                              <svg
                                key={i}
                                className="w-4 fill-gray-800"
                                viewBox="0 0 14 13"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                              </svg>
                            ))}
                            {[...Array(5 - review.rating)].map((_, i) => (
                              <svg
                                key={i}
                                className="w-4 fill-[#CED5D8]"
                                viewBox="0 0 14 13"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                              </svg>
                            ))}
                            <p className="text-xs !ml-2 font-semibold">
                              {new Date(review.date).toLocaleDateString()}
                            </p>
                          </div>
                          <p className="text-xs mt-4">{review.comment}</p>
                        </div>
                      </div>
                    ))}
                  <button
                    type="button"
                    className="w-full mt-8 px-4 py-2 bg-transparent border-2 border-gray-800 text-gray-800 font-bold rounded"
                  >
                    Read all reviews
                  </button>
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
    </main>
  );
}

export default Product;
