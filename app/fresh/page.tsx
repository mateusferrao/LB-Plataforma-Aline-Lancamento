import { FreshPage } from "@/components/fresh/FreshPage";
import { freshMetadata } from "./metadata";

// /fresh — variante COM VSL. A SEM VSL é app/fresh/sem-vsl/page.tsx.
export const metadata = freshMetadata;

export default function Fresh() {
  return <FreshPage comVsl />;
}
