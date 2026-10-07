import type { Metadata } from "next";
import "@/styles/globals.css";
import { Shell } from "@/components/layout/Shell";
export const metadata: Metadata = { title: "STILL THERE", description: "The machines we left behind on other worlds." };
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (<html lang="en"><body><Shell>{children}</Shell></body></html>);
}
