"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";
import { X, ZoomIn } from "lucide-react";

export interface ImagesBadgeProps {
  text: string;
  images: string[];
  className?: string;
  /** Optional link URL */
  href?: string;
  /** Link target attribute (e.g., "_blank" for new tab) */
  target?: string;
  /** Folder dimensions { width, height } in pixels */
  folderSize?: { width: number; height: number };
  /** Image dimensions when teased (peeking) { width, height } in pixels */
  teaserImageSize?: { width: number; height: number };
  /** Image dimensions when hovered { width, height } in pixels */
  hoverImageSize?: { width: number; height: number };
  /** How far images translate up on hover in pixels */
  hoverTranslateY?: number;
  /** How far images spread horizontally on hover in pixels */
  hoverSpread?: number;
  /** Rotation angle for fanned images on hover in degrees */
  hoverRotation?: number;
  /** Enable click to expand modal preview */
  enableExpandModal?: boolean;
}

export function ImagesBadge({
  text,
  images,
  className,
  href,
  target,
  folderSize = { width: 34, height: 26 },
  teaserImageSize = { width: 22, height: 16 },
  hoverImageSize = { width: 54, height: 38 },
  hoverTranslateY = -38,
  hoverSpread = 22,
  hoverRotation = 16,
  enableExpandModal = true,
}: ImagesBadgeProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeImageIdx, setActiveImageIdx] = useState(0);

  // Limit to max 3 images for the folder fan
  const displayImages = images.length > 0 ? images.slice(0, 3) : ["/images/profile.jpg"];

  // Calculate folder tab dimensions proportionally
  const tabWidth = folderSize.width * 0.375;
  const tabHeight = folderSize.height * 0.25;

  const handleClick = (e: React.MouseEvent) => {
    if (enableExpandModal && !href) {
      e.preventDefault();
      setIsModalOpen(true);
    }
  };

  const Component = href ? "a" : "button";

  return (
    <>
      <Component
        {...(href ? { href, target, rel: target === "_blank" ? "noopener noreferrer" : undefined } : { type: "button" })}
        onClick={handleClick}
        className={cn(
          "inline-flex cursor-pointer items-center gap-2.5 perspective-[1000px] transform-3d select-none group text-left",
          className
        )}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        aria-label={`View images for ${text}`}
      >
        {/* Folder Container */}
        <motion.div
          className="relative shrink-0"
          style={{
            width: folderSize.width,
            height: folderSize.height,
            transformStyle: "preserve-3d",
          }}
        >
          {/* Folder Back */}
          <div className="absolute inset-0 rounded-[5px] bg-gradient-to-b from-amber-400 via-amber-500 to-amber-600 shadow-sm dark:from-amber-500 dark:via-amber-600 dark:to-amber-700">
            {/* Folder Tab */}
            <div
              className="absolute left-0.5 rounded-t-[3px] bg-gradient-to-b from-amber-300 to-amber-400 dark:from-amber-400 dark:to-amber-500"
              style={{
                top: -tabHeight * 0.65,
                width: tabWidth,
                height: tabHeight,
              }}
            />
          </div>

          {/* Images that pop out */}
          {displayImages.map((image, index) => {
            const totalImages = displayImages.length;

            // Calculate rotation based on index
            const baseRotation =
              totalImages === 1
                ? 0
                : totalImages === 2
                ? (index - 0.5) * hoverRotation
                : (index - 1) * hoverRotation;

            // Hover positions - fan out
            const hoverY = hoverTranslateY - (totalImages - 1 - index) * 3;
            const hoverX =
              totalImages === 1
                ? 0
                : totalImages === 2
                ? (index - 0.5) * hoverSpread
                : (index - 1) * hoverSpread;

            // Teaser positions - slight peek from folder
            const teaseY = -4 - (totalImages - 1 - index) * 1;
            const teaseRotation =
              totalImages === 1
                ? 0
                : totalImages === 2
                ? (index - 0.5) * 3
                : (index - 1) * 3;

            return (
              <motion.div
                key={index}
                className="absolute top-0.5 left-1/2 origin-bottom overflow-hidden rounded-[4px] bg-white shadow-md ring-1 shadow-black/15 ring-black/10 dark:bg-neutral-800 dark:shadow-white/10 dark:ring-white/10"
                animate={{
                  x: `calc(-50% + ${isHovered ? hoverX : 0}px)`,
                  y: isHovered ? hoverY : teaseY,
                  rotate: isHovered ? baseRotation : teaseRotation,
                  width: isHovered ? hoverImageSize.width : teaserImageSize.width,
                  height: isHovered
                    ? hoverImageSize.height
                    : teaserImageSize.height,
                }}
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 25,
                  delay: index * 0.03,
                }}
                style={{
                  zIndex: 10 + index,
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={image}
                  alt={`Preview ${index + 1}`}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </motion.div>
            );
          })}

          {/* Folder Front (flattens on hover) */}
          <motion.div
            className="absolute inset-x-0 bottom-0 h-[85%] origin-bottom rounded-[5px] bg-gradient-to-b from-amber-300 via-amber-400 to-amber-500 shadow-sm dark:from-amber-400 dark:via-amber-500 dark:to-amber-600"
            animate={{
              rotateX: isHovered ? -45 : -25,
              scaleY: isHovered ? 0.8 : 1,
            }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 25,
            }}
            style={{
              transformStyle: "preserve-3d",
              zIndex: 20,
            }}
          >
            {/* Folder line detail */}
            <div className="absolute top-1 right-1 left-1 h-px bg-amber-200/60 dark:bg-amber-300/60" />
          </motion.div>
        </motion.div>

        {/* Text */}
        <span className="text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-200 group-hover:theme-accent-text transition-colors flex items-center gap-1.5">
          <span>{text}</span>
          <ZoomIn className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 transition-opacity" />
        </span>
      </Component>

      {/* Expandable Image Preview Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-3xl rounded-2xl border border-white/20 bg-slate-900 text-white p-6 shadow-2xl overflow-hidden"
            >
              {/* Header */}
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div>
                  <h4 className="text-lg font-bold text-white">{text}</h4>
                  <p className="text-xs text-slate-400">
                    Official Profile Portrait • VIBBHU A
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="rounded-full p-2 text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Main Image Preview */}
              <div className="my-5 relative rounded-xl overflow-hidden bg-black/60 flex items-center justify-center max-h-[60vh]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={displayImages[activeImageIdx]}
                  alt={`${text} preview`}
                  className="max-h-[55vh] w-auto max-w-full object-contain rounded-lg shadow-xl"
                />
              </div>

              {/* Thumbnails if multiple images */}
              {displayImages.length > 1 && (
                <div className="flex gap-2 pt-2 overflow-x-auto pb-1">
                  {displayImages.map((img, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => setActiveImageIdx(i)}
                      className={cn(
                        "relative h-16 w-24 shrink-0 overflow-hidden rounded-lg border-2 transition-all",
                        activeImageIdx === i
                          ? "border-amber-400 ring-2 ring-amber-400/30 scale-105"
                          : "border-transparent opacity-60 hover:opacity-100"
                      )}
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={img}
                        alt={`Thumbnail ${i + 1}`}
                        className="h-full w-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}

              {/* Footer Note */}
              <div className="mt-4 flex items-center justify-between text-xs text-slate-400 pt-3 border-t border-white/10">
                <span className="text-amber-400 font-medium">Sri Eshwar College of Engineering</span>
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-xs transition-colors"
                >
                  Close Preview
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
