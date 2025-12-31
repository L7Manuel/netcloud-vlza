import { cn } from "@/lib/utils";
import { useNavigate } from "react-router-dom";

interface LogoProps {
  className?: string;
}

const Logo = ({ className }: LogoProps) => {
  const navigate = useNavigate();

  const logoSrc = `${import.meta.env.BASE_URL}logo-netcloud-new.png`;

  const handleLogoClick = () => {
    navigate("/");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={handleLogoClick}
      className={cn("flex items-center hover:opacity-80 transition-opacity duration-200", className)}
      aria-label="NETCLOUD - Ir al inicio"
    >
      <img 
        src={logoSrc} 
        alt="NETCLOUD Logo" 
        className="h-10 w-auto"
        onError={(e) => {
          // Si la imagen no se carga, mostrar texto como respaldo
          const target = e.target as HTMLImageElement;
          target.style.display = 'none';
          const textLogo = document.createElement('div');
          textLogo.textContent = 'NETCLOUD';
          textLogo.className = 'text-xl font-bold text-primary';
          target.parentNode?.insertBefore(textLogo, target.nextSibling);
        }}
      />
    </button>
  );
};

export default Logo;