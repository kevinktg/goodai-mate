"use client";

import dynamic from "next/dynamic";

const Carousel = dynamic(() => import("@/components/carousel/Carousel"), {
  ssr: false,
  loading: () => (
    <section
      aria-label="Loading services carousel"
      className="min-h-[max(640px,100dvh)] bg-brand-paper"
    />
  ),
});

export default function ServicesCarousel() {
  return <Carousel />;
}
