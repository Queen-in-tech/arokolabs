import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container py-12">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <Link href="/" className="flex items-center gap-2">
              <Image src="/logo4.png" alt="Àrokò Labs" width={96} height={64} className="h-16 w-24" />
              <span className="font-display text-sm font-semibold text-muted-foreground">Labs</span>
            </Link>
            <p className="mt-3 font-body text-sm text-muted-foreground">
              AI-powered automation systems that eliminate repetitive work and help Nigerian enterprises scale efficiently.
            </p>
          </div>

          <div>
            <h4 className="mb-3 font-display text-sm font-semibold text-foreground">Navigation</h4>
            <div className="flex flex-col gap-2">
              {["Solutions", "Industries", "Case Studies", "In-House Services", "About", "Insights"].map((item) => (
                <Link
                  key={item}
                  href={`/${item.toLowerCase().replace(" ", "-")}`}
                  className="font-body text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="mb-3 font-display text-sm font-semibold text-foreground">Resources</h4>
            <div className="flex flex-col gap-2">
              {[
                { label: "15-Min Efficiency Audit", path: "/contact" },
                { label: "Privacy Policy", path: "/privacy" },
                { label: "Terms", path: "/terms" },
              ].map((item) => (
                <Link key={item.label} href={item.path} className="font-body text-sm text-muted-foreground transition-colors hover:text-primary">
                  {item.label}
                </Link>
              ))}
              <a href="https://www.linkedin.com/company/aroko-labs" target="_blank" rel="noopener noreferrer" className="font-body text-sm text-muted-foreground transition-colors hover:text-primary">
                LinkedIn
              </a>
            </div>
          </div>

          <div>
            <h4 className="mb-3 font-display text-sm font-semibold text-foreground">Get Started</h4>
            <p className="font-body text-sm text-muted-foreground">Ready to automate your business processes?</p>
            <Link href="/contact" className="mt-3 inline-block font-display text-sm font-semibold text-primary transition-colors hover:text-primary/80">
              Book a 15-Min Efficiency Audit →
            </Link>
          </div>
        </div>

        <div className="mt-6 border-t border-border pt-6">
          <div className="flex flex-col items-center gap-2 text-center">
            <p className="font-body text-xs text-muted-foreground">
              We take data privacy and security seriously. All client data is encrypted and handled in compliance with Nigerian data protection regulations.
            </p>
            <p className="font-body text-xs text-muted-foreground">info@arokolabs.com</p>
            <p className="font-body text-xs text-muted-foreground">© {new Date().getFullYear()} Àrokò Labs. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
