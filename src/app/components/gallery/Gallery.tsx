"use client";

import { useState } from "react";
import Categories from "./Categories";
import GalleryGrid from "./GalleryGrid";

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("all");

  return (
    <>
      <Categories
        active={activeCategory}
        setActive={setActiveCategory}
      />

      <GalleryGrid active={activeCategory} />
    </>
  );
}