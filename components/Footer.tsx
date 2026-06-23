import Link from "next/link";
import Image from "next/image";

const Footer = () => (
  <footer className="border-t border-[--color-border] bg-[--color-card] px-8">
    <div className="wrap py-12">
      <div className="grid gap-8 md:grid-cols-4">
        <div>
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logo4.png" alt="Àrokò Labs" width={80} height={52} className="h-12 w-auto" />
            <span className="font-display text-sm font-semibold text-[--color-muted-foreground]">Labs</span>
          </Link>
          <p className="mt-3 font-body text-sm text-[--color-muted-foreground]">
            We replace manual business operations with AI-driven systems that execute work automatically.
          </p>
        </div>
        <div>
          <h4 className="mb-3 font-display text-sm font-semibold text-[--color-foreground]">Services</h4>
          <div className="flex flex-col gap-2">
            {[
              { label: "How It Works", path: "/solutions" },
              { label: "Industries", path: "/industries" },
              { label: "Managed Services", path: "/in-house-services" },
            ].map((item) => (
              <Link key={item.label} href={item.path} className="font-body text-sm text-[--color-muted-foreground] transition-colors hover:text-[--color-primary]">{item.label}</Link>
            ))}
          </div>
        </div>
        <div>
          <h4 className="mb-3 font-display text-sm font-semibold text-[--color-foreground]">Company</h4>
          <div className="flex flex-col gap-2">
            {[
              { label: "Case Studies", path: "/case-studies" },
              { label: "About", path: "/about" },
              { label: "Insights", path: "/insights" },
              { label: "Privacy Policy", path: "/privacy" },
              { label: "Terms", path: "/terms" },
            ].map((item) => (
              <Link key={item.label} href={item.path} className="font-body text-sm text-[--color-muted-foreground] transition-colors hover:text-[--color-primary]">{item.label}</Link>
            ))}
          </div>
        </div>
        <div>
          <h4 className="mb-3 font-display text-sm font-semibold text-[--color-foreground]">Get Started</h4>
          <p className="font-body text-sm text-[--color-muted-foreground]">Ready to automate your operations?</p>
          <Link href="/contact" className="mt-3 inline-block font-display text-sm font-semibold text-[--color-primary] hover:opacity-80 transition-opacity">
            Book an Operations Review →
          </Link>
          <div className="mt-4">
            <a href="mailto:info@arokolabs.com" className="font-body text-sm text-[--color-muted-foreground] hover:text-[--color-primary] transition-colors">info@arokolabs.com</a>
          </div>
        </div>
      </div>
      <div className="mt-8 border-t border-[--color-border] pt-6 text-center">
        <p className="font-body text-xs text-[--color-muted-foreground]">© {new Date().getFullYear()} Àrokò Labs. All rights reserved. All client data encrypted and handled in compliance with Nigerian data protection regulations.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
