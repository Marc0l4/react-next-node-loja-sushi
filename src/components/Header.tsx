import { CartSidebar } from "@/components/cart/sidebar";
import { Logo } from "@/components/Logo";
import { ToggleTheme } from "@/components/ToggleTheme";

export const Header = () => {
    return (
        <header className="flex justify-between items-center my-5 mx-3">
            <div className=" flex items-center gap-3">
                <Logo />
                <ToggleTheme />
            </div>
            <div className="flex items-center gap-3">
                <CartSidebar />
            </div>
        </header>
    );
}