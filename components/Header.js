import Link from "next/link"
import classes from "./Header.module.css"

export function Header() {
    return (
        <header className={classes.header}>
            <Link href="/" passHref>
            <LinkAnchor className={classes.anchor}>Index</LinkAnchor>
            </Link>
            <Link href="/about" passHref>
            <LinkAnchor className={classes.anchor}>About</LinkAnchor>
            </Link>
        </header>
    )
}

function LinkAnchor(props) {
    return (
        <a {...props}>
            {props.children}
        </a>
    )
}


