import type { Metadata } from "next";
import { COMPARISONS } from "@/lib/constants";
import ComparisonPage from "@/components/shared/ComparisonPage";

export const metadata: Metadata = {
  title: "Katalyst vs Hosted Postgres",
  description: "Compare Katalyst and hosted Postgres services. Katalyst provides a complete backend stack, not just a database.",
};

export default function KatalystVsHostedPostgres() {
  return <ComparisonPage data={COMPARISONS["hosted-postgres"]} />;
}
