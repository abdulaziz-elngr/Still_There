import { SectionTitle } from "@/components/ui/SectionTitle";
import { DataPanel } from "@/components/ui/DataPanel";
export default function SciencePage() {
  return (<><SectionTitle index="07 / 09" label="Science" />
    <DataPanel title="NASA data" source="SAMPLE DATA">Science explanations and NASA data panels go here, fed through src/lib/nasa.ts.</DataPanel></>);
}
