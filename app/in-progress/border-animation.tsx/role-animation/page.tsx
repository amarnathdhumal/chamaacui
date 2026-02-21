import type { Metadata } from "next";
import RoleAnimationClient from "./role-animation-client";

export const metadata: Metadata = {
  title: "Role Animation | Chamaac UI",
  description: "An animated role/title reveal built with Motion.",
};

export default function Page() {
  return <RoleAnimationClient />;
}
