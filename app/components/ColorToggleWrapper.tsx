"use client";
import dynamic from "next/dynamic";
//  cannot do ssr: false in app page.tsx as it is  a server component , socreating a wrapper and making it client component
//  this is a workaround to use dynamic import with ssr: false

const DynamicColorToggle = dynamic(() => import("./ColorToggle"), {
  ssr: false,
});

export default function ColorToggleWrapper() {
  return <DynamicColorToggle />;
}
