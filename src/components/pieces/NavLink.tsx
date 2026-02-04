import Link from "next/link"

interface NavLinks {
    label: string,
    path: string
}
const NavLink = ({label, path}: NavLinks) => {
  return (
    <Link href={path} className="text-text-main hover:text-primary dark:hover:text-primary font-light transition-colors ">
            {label}
    </Link>
  )
}

export default NavLink