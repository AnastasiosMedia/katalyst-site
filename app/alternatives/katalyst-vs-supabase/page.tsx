import type { Metadata } from "next";
import { COMPARISONS } from "@/lib/constants";
import ComparisonPage from "@/components/shared/ComparisonPage";

export const metadata: Metadata = {
  title: "Katalyst vs Supabase",
  description: "Compare Katalyst and Supabase. Both provide backend services, but Katalyst is built for AI coding agents.",
};

export default function KatalystVsSupabase() {
  return <ComparisonPage data={COMPARISONS.supabase} />;
}
