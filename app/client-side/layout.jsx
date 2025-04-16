import AuthContextProvider from "@/app/_utils/auth-context";
import CustomerLogin from "@/app/_components/client-side/customer-login";
import CartContextProvider from "@/app/_utils/cart-context";


export default function ClientSideLayout({ children }) {
  return (
    <AuthContextProvider loginPage={<CustomerLogin />}>
      <div className="text-base-content bg-base-300 flex justify-center items-center">
        <main className="w-98 h-full min-w-[393px]">
          <CartContextProvider>
            {children}
          </CartContextProvider>
        </main>
      </div>
    </AuthContextProvider>
  );
}
