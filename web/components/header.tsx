import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
} from "@/components/ui/navigation-menu"
import { $router } from "@/lib/router";
import { openPage } from "@nanostores/router";

const Header = () => {
    const navigateToUpdates = (e: React.MouseEvent) => {
        e.preventDefault();
        openPage($router, "home");
    }

    return (
        <div className="w-screen flex items-center justify-between px-8 py-4 border-b bg-background">
            <h1 className="text-xl font-semibold tracking-tight" onClick={navigateToUpdates}>Sorrowood</h1>
            <NavigationMenu>
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <NavigationMenuLink href="/">Updates</NavigationMenuLink>
                    </NavigationMenuItem>
                </NavigationMenuList>
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <NavigationMenuLink href="/about">About</NavigationMenuLink>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
        </div>
    )
}

export default Header