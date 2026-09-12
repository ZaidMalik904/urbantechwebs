"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import QuoteModal from "./QuoteModal";

interface QuoteModalContextType {
  isOpen: boolean;
  openQuoteModal: (serviceName?: string) => void;
  closeQuoteModal: () => void;
  selectedService: string;
}

const QuoteModalContext = createContext<QuoteModalContextType | undefined>(
  undefined
);

export function QuoteModalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");

  const openQuoteModal = (serviceName?: string) => {
    if (serviceName) {
      setSelectedService(serviceName);
    } else {
      setSelectedService("");
    }
    setIsOpen(true);
  };

  const closeQuoteModal = () => {
    setIsOpen(false);
  };

  // 1. Auto popup form 3 seconds after page visit
  useEffect(() => {
    const timer = setTimeout(() => {
      const hasSeenModal = sessionStorage.getItem("hasSeenQuoteModal_3s");
      if (!hasSeenModal) {
        setIsOpen(true);
        sessionStorage.setItem("hasSeenQuoteModal_3s", "true");
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  // 2. Disable background scrolling when popup form is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.body.classList.add("modal-open");
    } else {
      document.body.style.overflow = "";
      document.body.classList.remove("modal-open");
    }

    return () => {
      document.body.style.overflow = "";
      document.body.classList.remove("modal-open");
    };
  }, [isOpen]);

  return (
    <QuoteModalContext.Provider
      value={{ isOpen, openQuoteModal, closeQuoteModal, selectedService }}
    >
      {children}
      <QuoteModal
        isOpen={isOpen}
        onClose={closeQuoteModal}
        initialService={selectedService}
      />
    </QuoteModalContext.Provider>
  );
}

export function useQuoteModal() {
  const context = useContext(QuoteModalContext);
  if (!context) {
    throw new Error("useQuoteModal must be used within a QuoteModalProvider");
  }
  return context;
}
