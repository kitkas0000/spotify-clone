"use client";

import AuthModel from "@/components/AuthModel";
import Model from "@/components/Model";
import { useEffect, useState } from "react";

const ModelProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <AuthModel />
    </>
  );
};

export default ModelProvider;
