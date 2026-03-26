"use client";
import { motion } from "motion/react";

export default function Sample() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      Hello Motion!
    </motion.div>
  );
}
