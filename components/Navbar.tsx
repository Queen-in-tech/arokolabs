"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Menu, X, Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "@/components/ThemeProvider";

const navLinks = [
  { label: "How It Works", path: "/solutions" },
  { label: "Systems", path: "/case-studies" },
  { label: "Industries", path: "/industries" },
  { label: "Managed Services", path: "/in-house-services" },
  { label: "About", path: "/about" },
  { label: "Insights", path: "/insights" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const { theme, toggle } = useTheme();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-[--color-border]/50 bg-[--color-background]/80 backdrop-blur-xl px-6">
      <div className="wrap flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo4.png" alt="Àrokò Labs" width={80} height={52} className="h-12 w-auto" />
          <span className="font-display text-sm font-semibold text-[--color-muted-foreground]">Labs</span>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <Link key={link.path} href={link.path} className={`rounded-md px-3 py-2 font-body text-sm transition-colors ${pathname === link.path ? "text-[--color-primary]" : "text-[--color-muted-foreground] hover:text-[--color-foreground]"}`}>
              {link.label}
            </Link>
          ))}
          <button onClick={toggle} className="rounded-md p-2 text-[--color-muted-foreground] hover:text-[--color-foreground] transition-colors ml-1" aria-label="Toggle theme">
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <Link href="/contact" className="ml-2">
            <Button variant="hero" size="sm">Book Operations Review</Button>
          </Link>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <button onClick={toggle} className="rounded-md p-2 text-[--color-muted-foreground] hover:text-[--color-foreground] transition-colors" aria-label="Toggle theme">
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button className="text-[--color-foreground]" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="border-b border-[--color-border] bg-[--color-background] lg:hidden">
            <div className="wrap flex flex-col gap-1 py-4">
              {navLinks.map((link) => (
                <Link key={link.path} href={link.path} onClick={() => setOpen(false)} className={`rounded-md px-3 py-2 font-body text-sm transition-colors ${pathname === link.path ? "text-[--color-primary]" : "text-[--color-muted-foreground] hover:text-[--color-foreground]"}`}>
                  {link.label}
                </Link>
              ))}
              <Link href="/contact" onClick={() => setOpen(false)} className="mt-2">
                <Button variant="hero" size="sm" className="w-full">Book Operations Review</Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
