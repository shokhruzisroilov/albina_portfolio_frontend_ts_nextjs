'use client';

import { motion, useScroll } from 'motion/react';

export default function ScrollLinked({
  children,
}: {
  children: React.ReactNode;
}) {
  const { scrollYProgress } = useScroll();

  return (
    <>
      <motion.div
        id="scroll-indicator"
        style={{
          scaleX: scrollYProgress,
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: 5,
          originX: 0,
          backgroundColor: '#F99D1C',
          zIndex: 50,
        }}
      />
      {children}
    </>
  );
}
