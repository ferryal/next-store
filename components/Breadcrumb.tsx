"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

type BreadcrumbProps = {
  title?: string;
  products?: boolean;
};
const Breadcrumb: React.FC<BreadcrumbProps> = ({ title, products }) => {
  const pathname = usePathname();
  const isProductPage = pathname.startsWith("/products");

  console.log("products", products);

  return (
    <div>
      {isProductPage && <Link href="/products"> Products / </Link>}
      <span> {title}</span>
    </div>
  );
};

export default Breadcrumb;
