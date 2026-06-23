import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background text-center px-4">
      <span className="font-display text-8xl font-bold text-primary/20">404</span>
      <h1 className="mt-4 font-display text-3xl font-bold text-foreground">Page Not Found</h1>
      <p className="mt-3 font-body text-muted-foreground">This page doesn't exist or has been moved.</p>
      <Link href="/" className="mt-8">
        <Button variant="hero">Go Home</Button>
      </Link>
    </div>
  );
}
