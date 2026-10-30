"use client";

import { ImagesBadge } from "@/components/ui/images-badge";

export default function ImagesBadgeDemo() {
  return (
    <div className="flex h-[10rem] w-full items-center justify-center">
      <ImagesBadge
        text="VIBBHU A - Official Photo"
        images={["/images/vibbhu.jpg"]}
      />
    </div>
  );
}

export { ImagesBadge };
