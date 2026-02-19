import type { Metadata } from "next";
import { COMPARISONS } from "@/lib/constants";
import ComparisonPage from "@/components/shared/ComparisonPage";

export const metadata: Metadata = {
  title: "Katalyst vs Firebase",
  description: "Compare Katalyst and Firebase. Katalyst uses PostgreSQL and is built for AI agents, Firebase uses NoSQL and manual configuration.",
};

export default function KatalystVsFirebase() {
  return <ComparisonPage data={COMPARISONS.firebase} />;
}
