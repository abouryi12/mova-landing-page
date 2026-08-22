"use client";

import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import Image from 'next/image';

interface Props {
  className?: string;
  variant?: 'outline' | 'solid' | 'text' | 'footer' | 'white';
  text?: string;
}

export default function DownloadAppButton({ className = '', variant = 'solid', text = 'حمّل التطبيق الآن' }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const baseClasses = "font-cairo font-bold transition-all duration-200 inline-flex items-center justify-center gap-2";
  
  let variantClasses = "";
  if (variant === 'solid') {
    variantClasses = "bg-amber-500 hover:bg-amber-400 text-white px-5 py-2.5 text-sm md:text-base rounded-xl shadow-amber-glow";
  } else if (variant === 'outline') {
    variantClasses = "border-2 border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-white px-5 py-2.5 text-sm md:text-base rounded-xl";
  } else if (variant === 'text') {
    variantClasses = "text-amber-400 hover:text-amber-300 underline underline-offset-4 px-0 py-0 text-sm md:text-base";
  } else if (variant === 'footer') {
    variantClasses = "w-full bg-teal-800 hover:bg-teal-700 text-teal-100 px-4 py-3 text-sm rounded-xl border border-teal-700 hover:border-teal-600 shadow-sm";
  } else if (variant === 'white') {
    variantClasses = "bg-white text-amber-500 hover:bg-gray-50 px-6 py-3 text-sm md:text-base rounded-xl shadow-md";
  }

  const buttonClasses = `${baseClasses} ${variantClasses} ${className}`;

  return (
    <>
      <button onClick={() => setIsOpen(true)} className={buttonClasses}>
        {variant === 'footer' && (
          <svg className="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
        )}
        {text}
      </button>

      {isOpen && mounted && createPortal(
        <div 
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-[#0c2424]/90"
          onClick={() => setIsOpen(false)}
        >
          <div 
            className="bg-surface rounded-3xl p-6 md:p-8 max-w-[340px] w-full shadow-2xl relative border border-surface-dark transition-all"
            onClick={e => e.stopPropagation()}
            dir="rtl"
          >
            {/* Close button */}
            <button 
              onClick={() => setIsOpen(false)} 
              className="absolute top-5 left-5 text-ink-400 hover:text-teal-700 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="text-center">
              {/* Logo & Rating Header */}
              <div className="flex flex-col items-center justify-center mb-6">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 bg-[#0c2424] rounded-xl flex items-center justify-center shadow-md">
                    <Image src="/icon.svg" alt="MOVA" width={28} height={28} />
                  </div>
                  <span className="font-almarai font-bold text-xl text-teal-900">تطبيق MOVA</span>
                </div>
                
                <div className="flex justify-center gap-1 text-amber-500">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>

              {/* Main Heading */}
              <h3 className="text-xl font-almarai font-extrabold text-teal-900 mb-6 leading-tight">
                وجّه كاميرا هاتفك الذكي لرمز الـ QR لتحميل التطبيق
              </h3>

              {/* QR Code */}
              <div className="flex justify-center mb-6">
                <div className="relative p-3 bg-white rounded-xl shadow-sm border-2 border-surface-dark">
                  {/* Decorative Corners */}
                  <div className="absolute top-0 right-0 w-4 h-4 border-t-4 border-r-4 border-amber-500 rounded-tr-xl -mt-1 -mr-1"></div>
                  <div className="absolute top-0 left-0 w-4 h-4 border-t-4 border-l-4 border-amber-500 rounded-tl-xl -mt-1 -ml-1"></div>
                  <div className="absolute bottom-0 right-0 w-4 h-4 border-b-4 border-r-4 border-amber-500 rounded-br-xl -mb-1 -mr-1"></div>
                  <div className="absolute bottom-0 left-0 w-4 h-4 border-b-4 border-l-4 border-amber-500 rounded-bl-xl -mb-1 -ml-1"></div>
                  
                  <Image 
                    src="/qr-code.png" 
                    alt="QR Code" 
                    width={150} 
                    height={150} 
                    className="rounded-lg opacity-95" 
                  />
                </div>
              </div>

              <p className="text-xs font-cairo text-ink-500 max-w-[240px] mx-auto">
                امسح رمز الاستجابة السريعة بكاميرا هاتفك لتنزيل تطبيق MOVA
              </p>
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  );
}
