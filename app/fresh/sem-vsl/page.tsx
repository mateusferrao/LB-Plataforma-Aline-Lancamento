import { FreshPage } from "@/components/fresh/FreshPage";
import { freshMetadata } from "../metadata";

// /fresh/sem-vsl — variante SEM VSL (foto do laboratório no Hero). Par da /fresh.
export const metadata = freshMetadata;

export default function FreshSemVsl() {
  return <FreshPage comVsl={false} />;
}
