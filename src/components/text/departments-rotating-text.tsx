"use client";

import * as React from "react";
import { RotatingText, type RotatingTextProps } from "./rotating-text";

const DEPARTMENTS: string[] = [
  "Organization",
  "HR",
  "Marketing",
  "Sales",
  "Analytics",
  "Software",
  "Finance",
  "Operations",
  "Customer Support",
  "Product",
  "Legal",
];

// Reuse all RotatingText props except `text`, which is preconfigured here
export type DepartmentsRotatingTextProps = Omit<RotatingTextProps, "text">;

export function DepartmentsRotatingText(props: DepartmentsRotatingTextProps) {
  return <RotatingText text={DEPARTMENTS} {...props} />;
}

export default DepartmentsRotatingText;
