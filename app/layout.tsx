
import { CartProvider } from "./context/CartContext";
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'
import "./globals.css";
import Header from "./Components/Header";
import MobileHeader from "./Components/MobileHeader";
import Footer from "./Components/Footer";
import { WishlistProvider } from "./context/WishlistContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // wrap clerk provider
    <ClerkProvider>
    <html lang="en">
      <body>

        {/* wrap wishlist and cart context/provider */}
      <WishlistProvider> 
      <CartProvider >
        <div className="lg:block hidden">
        <Header />
        </div>
        <div className="block lg:hidden"> 
        <MobileHeader />
        </div>
        {children}
        <Footer />
        </CartProvider>
        </WishlistProvider>
        </body>
    </html>
    </ClerkProvider>
  );
}
