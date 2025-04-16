import AuthContextProvider from "@/app/_utils/auth-context";
import CustomerLogin from "@/app/_components/client-side/customer-login";
import CartContextProvider from "@/app/_utils/cart-context";


export default function ClientSideLayout({ children }) {
  return (
    <AuthContextProvider loginPage={<CustomerLogin />}>
      <div className="text-base-content bg-base-300">
        <main className="w-full h-full">
          <CartContextProvider>
            {children}
          </CartContextProvider>
        </main>
      </div>
    </AuthContextProvider>
  );
}
