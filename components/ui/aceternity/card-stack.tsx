"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export const CardStack = ({
  items,
  offset = 2,
  scaleFactor = 0.06,
}: {
  items: {
    title: string;
    description: string;
    icon: string;
  }[];
  offset?: number;
  scaleFactor?: number;
}) => {
  const [dragStart, setDragStart] = useState(false);

  return (
    <div className="relative h-auto w-full max-w-sm mx-auto">
      {items.map((item, index) => (
        <motion.div
          key={item.title}
          className="absolute bg-card border rounded-3xl p-4 md:p-8 cursor-grab active:cursor-grabbing w-full h-full"
          style={{
            transformOrigin: "top center",
          }}
          animate={{
            top: index * offset,
            scale: 1 - index * scaleFactor,
            zIndex: items.length - index,
          }}
          drag="y"
          dragConstraints={{
            top: 0,
            bottom: 0,
          }}
          onDragStart={() => setDragStart(true)}
          onDragEnd={() => setDragStart(false)}
          onDrag={(_, info) => {
            if (info.offset.y > 100) {
              // Move card to end of stack
              const newItems = [...items];
              const draggedItem = newItems.splice(index, 1)[0];
              newItems.push(draggedItem);
              // Update state with new order
            }
          }}
        >
          <div className="text-4xl mb-2">{item.icon}</div>
          <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
          <p className="text-muted-foreground text-sm">{item.description}</p>
        </motion.div>
      ))}
    </div>
  );
};
