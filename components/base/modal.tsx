'use client';

import clsx from 'clsx';
import { ReactNode, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

interface ModalProps {
  isOpen: boolean;
  children: ReactNode;
}

export function Modal(props: ModalProps) {
  const { isOpen, children } = props;

  const [modalRoot, setModalRoot] = useState<HTMLElement | null>(null);

  useEffect(() => {
    setModalRoot(document.getElementById('modal-root'));
  }, []);

  if (!modalRoot) {
    return null;
  }

  if (!isOpen) {
    return null;
  }

  return createPortal(
    <div
      className={clsx(
        'z-[9999] fixed top-0 left-0',
        'w-screen h-[calc(var(--vh,1vh)*100)]',
        'overflow-scroll scrollbar-none',
        'bg-modal-background',
        'animate-fadeIn'
      )}
    >
      <div className="flex justify-center items-center relative w-full min-h-full ">
        {children}
      </div>
    </div>,
    modalRoot
  );
}
