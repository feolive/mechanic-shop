import { useContext } from "react";
import { AuthContext } from "@/app/_utils/auth-context";
import tryCatch from "@/app/_utils/try-catch";
import { useRouter } from "next/navigation";
import Link from "next/link";
import clsx from "clsx";
import Logo from "@/app/_icons/Logo"


export default function Navigation({ navItems, isNarrow=false }) {
    const { user, customer, signOut } = useContext(AuthContext);
    const route = useRouter();

    const signOutStaff = async () => {
        if (user) {
            const [data, error] = await tryCatch(() => signOut());
            if (error) {
                console.error(error);
            }
        }
        route.push('/client-side');
    };

    return (
        <div className="w-full fixed top-0 sm:top-2 z-10 flex justify-center items-center">
            <div className={clsx("inline-flex justify-between items-center h-10 sm:h-12 w-full transition-all ease-linear duration-300", isNarrow ? "w-[80%] sm:w-[50%] bg-base-content/35 backdrop-blur-sm border-1 border-l-white/15 border-t-white/15 border-r-white/20 border-b-white/20 rounded-full mx-auto px-4" : "bg-transparent px-[15em]")}>
                <div className="inline-flex justify-center items-center gap-1">
                    <Logo color="white" width={32} height={32} />
                    <h1 className="text-sm sm:text-2xl font-bold text-white">Hi-5 Auto</h1>
                </div>
                <nav className="inline-flex justify-center items-center gap-2">
                    {navItems &&
                        navItems.map((navItem) => (
                            <Link key={navItem.href} className="btn btn-ghost btn-xs sm:btn-md border-0 shadow-none rounded-full hover:bg-neutral-content/50 text-white" href={navItem.href}>{navItem.label}</Link>
                        ))}
                </nav>
                <div className="inline-flex justify-center items-center gap-2">
                    {
                        customer ? (
                            <Link className={clsx("btn btn-primary btn-xs xs:btn-md rounded-full", isNarrow && "btn-xs rounded-full")} href="/client-side">My Account</Link>
                        ) : (
                            <>
                                <button className={clsx("btn btn-outline btn-info btn-x sm:btn-md rounded-2xl", isNarrow && "btn-xs rounded-full")} onClick={signOutStaff}>Sign In</button>
                                <Link className={clsx("btn btn-secondary btn-xs sm:btn-md rounded-2xl", isNarrow && "btn-xs rounded-full")} href="/signup">Register</Link>
                            </>
                        )
                    }
                </div>
            </div>
        </div>
    )
}