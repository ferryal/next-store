import Link from "next/link";
import Image from "next/image";

const ListProducts = ({ products }) => {
  return (
    <div className="grid grid-cols-1 gap-1.2 p-1 md:mb-1.5">
      {products.map(({ title, thumbnail, id, price, description }) => (
        <Link
          href={{
            pathname: "products/product",
            query: { id: id },
          }}
          className="block h-full"
        >
          <article
            key={id}
            className="bg-white shadow-md border rounded-lg px-2 py-2 md:px-5 md:py-5 flex align-center items-center mb-2.5"
          >
            <div className="product__img mr-4">
              <Image src={thumbnail} width={200} height={200} alt={title} />
            </div>
            <div className="product__info">
              <h3 className="text-sm md:text-lg uppercase font-bold">
                {title}
              </h3>
              <p className="mt-2 text-gray-600">${price}</p>
              <p className="mt-2 mb-4 text-gray-600 text-md">{description}</p>
            </div>
          </article>
        </Link>
      ))}
    </div>
  );
};

export default ListProducts;
