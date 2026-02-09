import Link from "next/link"

interface NavLinkProps {
    label: string;
    path: string;
    isActive: boolean; // Nouvelle prop pour l'état
}

const NavLink = ({ label, path, isActive }: NavLinkProps) => {
  return (
    <Link 
      href={path} 
      className={`relative py-2 text-text-main hover:text-primary transition-colors ${isActive ? 'text-primary ' : ''}`}
    >
      {label}
      
      {isActive && (
        <div className="absolute bottom-0 left-0 right-0 h-1 rounded bg-primary drop-shadow-lg drop-shadow-primary/30 transition-all duration-300"
        ></div>
      )}
    </Link>
  )
}

export default NavLink;