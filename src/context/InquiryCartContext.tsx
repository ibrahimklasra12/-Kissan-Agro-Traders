import React, { createContext, useContext, useState, useEffect, useCallback, useMemo } from 'react';
import { Product, InquiryItem, InquiryCustomerDetails } from '../types';

interface InquiryCartContextType {
  items: InquiryItem[];
  totalCount: number;
  isDrawerOpen: boolean;
  setIsDrawerOpen: (open: boolean) => void;
  addToInquiry: (product: Product, quantity?: number) => void;
  updateQuantity: (productId: string, delta: number) => void;
  removeFromInquiry: (productId: string) => void;
  clearInquiry: () => void;
  customerDetails: InquiryCustomerDetails;
  setCustomerDetails: React.Dispatch<React.SetStateAction<InquiryCustomerDetails>>;
  toastMessage: string | null;
}

const CART_STORAGE_KEY = 'kissan_agro_inquiry_cart_v1';
const DETAILS_STORAGE_KEY = 'kissan_agro_inquiry_details_v1';

const InquiryCartContext = createContext<InquiryCartContextType | undefined>(undefined);

export const InquiryCartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<InquiryItem[]>(() => {
    try {
      const saved = localStorage.getItem(CART_STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) return parsed;
      }
    } catch {
      // ignore JSON parse error
    }
    return [];
  });

  const [customerDetails, setCustomerDetails] = useState<InquiryCustomerDetails>(() => {
    try {
      const saved = localStorage.getItem(DETAILS_STORAGE_KEY);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch {
      // ignore
    }
    return { name: '', phone: '', villageArea: '' };
  });

  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Sync items to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
    } catch {
      // ignore storage error
    }
  }, [items]);

  // Sync customerDetails to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(DETAILS_STORAGE_KEY, JSON.stringify(customerDetails));
    } catch {
      // ignore
    }
  }, [customerDetails]);

  // Toast timeout
  useEffect(() => {
    if (!toastMessage) return;
    const timer = setTimeout(() => {
      setToastMessage(null);
    }, 2500);
    return () => clearTimeout(timer);
  }, [toastMessage]);

  const totalCount = useMemo(() => {
    return items.reduce((sum, item) => sum + item.quantity, 0);
  }, [items]);

  const addToInquiry = useCallback((product: Product, quantity = 1) => {
    setItems((prev) => {
      const existingIndex = prev.findIndex((item) => item.product.id === product.id);
      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex] = {
          ...updated[existingIndex],
          quantity: updated[existingIndex].quantity + quantity,
        };
        return updated;
      } else {
        return [...prev, { product, quantity }];
      }
    });

    setToastMessage(`✓ ${product.name} Inquiry Cart mein shamil ho gaya`);
  }, []);

  const updateQuantity = useCallback((productId: string, delta: number) => {
    setItems((prev) => {
      return prev
        .map((item) => {
          if (item.product.id === productId) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter((item): item is InquiryItem => item !== null);
    });
  }, []);

  const removeFromInquiry = useCallback((productId: string) => {
    setItems((prev) => prev.filter((item) => item.product.id !== productId));
  }, []);

  const clearInquiry = useCallback(() => {
    setItems([]);
  }, []);

  return (
    <InquiryCartContext.Provider
      value={{
        items,
        totalCount,
        isDrawerOpen,
        setIsDrawerOpen,
        addToInquiry,
        updateQuantity,
        removeFromInquiry,
        clearInquiry,
        customerDetails,
        setCustomerDetails,
        toastMessage,
      }}
    >
      {children}
    </InquiryCartContext.Provider>
  );
};

export const useInquiryCart = (): InquiryCartContextType => {
  const context = useContext(InquiryCartContext);
  if (!context) {
    throw new Error('useInquiryCart must be used within an InquiryCartProvider');
  }
  return context;
};
