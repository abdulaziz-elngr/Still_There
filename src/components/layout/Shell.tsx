import type { ReactNode } from "react";
import { PlanetNavigation } from "@/components/navigation/PlanetNavigation";
import { AudioButton } from "@/components/ui/AudioButton";
export function Shell({ children }: { children: ReactNode }) {
  return (<><AudioButton /><main className="mx-auto min-h-dvh max-w-5xl px-6 pb-24 pt-16">{children}</main><PlanetNavigation /></>);
}
