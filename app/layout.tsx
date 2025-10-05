'use client'
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import React, { useEffect, useState } from "react";
import "./globals.css";

import GoogleTranslate from "@/components/GoogleTranslate";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) 

{


  
  
  return (
    <html lang="en">
      <head>
    
      </head>
      <body className={`${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        
        
        {children}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              document.addEventListener('DOMContentLoaded', function() {
                document.addEventListener('click', function(e) {
                  if (e.target.tagName === 'A' && e.target.getAttribute('href')?.startsWith('#')) {
                    e.preventDefault();
                    const targetId = e.target.getAttribute('href')?.substring(1);
                    const element = document.getElementById(targetId);
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                  }
                });
              });
            `,
          }}
        />
      </body>
    </html>
  );
}
