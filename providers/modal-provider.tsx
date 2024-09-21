"use client";
import React, { useEffect, useState } from "react";
import RenameModal from "@/components/modals/RenameModal";

const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <RenameModal />
    </>
  );
};

export default ModalProvider;
