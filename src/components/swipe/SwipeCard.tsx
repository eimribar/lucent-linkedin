import { motion, useMotionValue, useTransform } from "framer-motion";
import { useState } from "react";

interface SwipeCardProps {
  text: string;
  author?: string;
  onSwipe?: (direction: "left" | "right") => void;
}

const CHARACTER_LIMIT = 300; // demo

const SwipeCard = ({ text, author, onSwipe }: SwipeCardProps) => {
  const [isDragging, setDragging] = useState(false);
  const x = useMotionValue(0);
  const rotate = useTransform(x, [-200, 0, 200], [-8, 0, 8]);
  const rightOpacity = useTransform(x, [0, 150], [0, 0.05]);
  const leftOpacity = useTransform(x, [0, -150], [0, 0.05]);

  const handleDragEnd = (_: any, info: any) => {
    setDragging(false);
    if (info.offset.x > 160) onSwipe?.("right");
    else if (info.offset.x < -160) onSwipe?.("left");
  };

  const count = text.length;
  const progress = Math.min(1, count / CHARACTER_LIMIT);

  return (
    <div className="relative w-full max-w-[440px] mx-auto">
      <motion.div
        className="relative bg-card elevation-2 rounded-3xl overflow-hidden"
        style={{ x, rotate }}
        drag="x"
        dragElastic={0.2}
        dragConstraints={{ left: 0, right: 0 }}
        onDragStart={() => setDragging(true)}
        onDragEnd={handleDragEnd}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
      >
        <motion.div className="pointer-events-none absolute inset-0 bg-success/10" style={{ opacity: rightOpacity }} />
        <motion.div className="pointer-events-none absolute inset-0 bg-destructive/10" style={{ opacity: leftOpacity }} />

        <div className="bg-muted/50 h-11 flex items-center px-4">
          <span className="text-xs text-muted-foreground">Draft · LinkedIn Post</span>
        </div>

        <div className="p-6 space-y-3">
          <p className="text-base leading-relaxed">{text}</p>
          {author && (
            <p className="text-sm text-muted-foreground">— {author}</p>
          )}
        </div>

        <div className="px-6 pb-6">
          <div className="h-1.5 w-full rounded-full bg-muted">
            <div
              className="h-1.5 rounded-full bg-foreground/80 transition-all"
              style={{ width: `${progress * 100}%` }}
              aria-label="Character usage"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SwipeCard;
