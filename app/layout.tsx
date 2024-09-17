import Header from "@/components/Header";
import { Suspense } from "react";
import { ProductsProvider } from "@/context/products_context";
import { FilterProvider } from "@/context/filter_context";
import { CartProvider } from "@/context/cart_context";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import './index.css'

export const metadata = {
  title: "Next.js",
  description: "Generated by Next.js",
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html>
      <body>
        <ProductsProvider>
          <FilterProvider>
            <CartProvider>
              <ToastContainer />
              <Suspense fallback={<div>Loading...</div>}>
                <Header />
              </Suspense>
              {children}
            </CartProvider>
          </FilterProvider>
        </ProductsProvider>
      </body>
    </html>
  );
}
