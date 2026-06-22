import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Projects", href: "#projects" },
  { name: "Why Us", href: "#why-choose-us" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = navItems.map((item) => item.href.substring(1));
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed w-full z-50 transition-all duration-500 ease-in-out",
        isScrolled
          ? "py-3 bg-white/80 backdrop-blur-md shadow-sm border-b border-[#1A2F1A]/10"
          : "py-5 bg-transparent"
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo / Name */}
        <a
          href="#hero"
          className="text-2xl font-serif font-bold text-[#1A2F1A] tracking-tighter"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          HeisenMan Labs
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => {
            const sectionId = item.href.substring(1);
            return (
              <a
                key={item.name}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-all duration-300 relative py-1 group",
                  activeSection === sectionId
                    ? "text-[#1A2F1A]"
                    : "text-[#1A2F1A]/60 hover:text-[#1A2F1A]"
                )}
                onClick={() => setActiveSection(sectionId)}
              >
                {item.name}
                <span className={cn(
                  "absolute bottom-0 left-0 h-[1.5px] bg-[#1A2F1A] transition-all duration-300",
                  activeSection === sectionId ? "w-full" : "w-0 group-hover:w-full"
                )} />
              </a>
            );
          })}
        </div>

        {/* Mobile nav toggle */}
        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="md:hidden p-2 rounded-full text-[#1A2F1A] hover:bg-[#1A2F1A]/5 transition-colors duration-300"
          aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile menu */}
        <div
          className={cn(
            "fixed inset-0 bg-white z-40 flex flex-col items-center justify-center md:hidden transition-all duration-500 ease-in-out",
            isMenuOpen
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-full pointer-events-none"
          )}
        >
          <div className="flex flex-col space-y-8 text-center">
            {navItems.map((item) => {
              const sectionId = item.href.substring(1);
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "text-3xl font-serif transition-all duration-300",
                    activeSection === sectionId
                      ? "text-[#1A2F1A]"
                      : "text-[#1A2F1A]/40"
                  )}
                  style={{ fontFamily: "'Playfair Display', serif" }}
                  onClick={() => {
                    setIsMenuOpen(false);
                    setActiveSection(sectionId);
                  }}
                >
                  {item.name}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};