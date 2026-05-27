import Link from "next/link";
import { Category } from "@/core/domain/category";
import { Page } from "@/core/domain/page";

import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

type Props = {
    items: Page[] | Category[];
};

export default function PrimaryMenu({ items }: Props) {
    return (
        <>
            <NavigationMenu>
                <NavigationMenuList>
                    {items.map((item) => {
                        return (
                            <NavigationMenuItem key={item.id}>
                                <NavigationMenuLink
                                    asChild
                                    className={`
                                    ${navigationMenuTriggerStyle()}
                                    text-sm
                                    lg:text-base text-black
                                `}
                                >
                                    <Link href={item.slug}>{item.name}</Link>
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                        );
                    })}
                </NavigationMenuList>
            </NavigationMenu>
        </>
    );
}
