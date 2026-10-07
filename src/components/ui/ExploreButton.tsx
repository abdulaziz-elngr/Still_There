import Link from "next/link";
export function ExploreButton({ href, children = "Explore" }: { href: string; children?: React.ReactNode }) {
  return <Link href={href} className="inline-block border border-silver/40 px-8 py-3 text-xs uppercase tracking-[0.35em] hover:border-gold hover:text-gold">{children}</Link>;
}
