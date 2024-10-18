import React from "react"
import { Link } from "gatsby"
import { cn } from "@/lib/utils"

export interface NavItemProps {
    text: string
    href?: string
    disabled?: boolean
}

interface MainNavProps {
    title?: string
    items?: NavItem[]
}



const NavItem = ({ text, href, disabled }: NavItemProps) => (
    <Link
        to={href}
        className={cn(
            "flex items-center text-sm font-semibold text-muted-foreground md:text-base",
            disabled && "cursor-not-allowed opacity-80"
        )}
    >
        {text}
    </Link>
)

export function MainNav({ title, items }: MainNavProps) {
    return (
        <nav className="ml-auto flex gap-6 md:gap-10"> 
            {items?.length ? (
                items?.map((item, index) => {
                    if (item.href) {
                        return <NavItem key={index} {...item} />
                    }
                    return null
                })
            ) : null}
        </nav>
    )
}