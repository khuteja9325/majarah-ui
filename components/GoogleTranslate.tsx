import React, { useEffect } from 'react';
import { XMarkIcon } from '@heroicons/react/24/solid';
import { motion, AnimatePresence } from 'framer-motion';

declare global {
    interface Window {
        googleTranslateElementInit?: () => void;
        google?: any;
    }
}

interface GoogleTranslateProps {
    isOpen: boolean;
    onClose: () => void;
}

const GoogleTranslate: React.FC<GoogleTranslateProps> = ({ isOpen, onClose }) => {
    useEffect(() => {
        let script: HTMLScriptElement | null = null;

        const addGoogleTranslateScript = () => {
            // Remove existing script if any
            const existingScript = document.querySelector('script[src*="translate.google.com"]');
            if (existingScript) {
                existingScript.remove();
            }

            script = document.createElement('script');
            script.type = 'text/javascript';
            script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
            script.async = true;
            document.body.appendChild(script);
        };

        window.googleTranslateElementInit = () => {
            // Clear existing content
            const element = document.querySelector('#google_translate_element');
            if (element) {
                element.innerHTML = '';
            }
            
            new window.google.translate.TranslateElement(
                { pageLanguage: 'en' },
                'google_translate_element'
            );
        };

        if (isOpen) {
            addGoogleTranslateScript();
        }

        // Cleanup function
        return () => {
            if (script && document.body.contains(script)) {
                document.body.removeChild(script);
            }
        };

    }, [isOpen]);

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
                        onClick={onClose}
                    />
                    
                    {/* Modal */}
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            transition={{ duration: 0.2, ease: "easeOut" }}
                            className="bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[80vh] overflow-hidden relative"
                        >
                            {/* Header with close button */}
                            <div className="flex items-center justify-between p-6 border-b border-gray-200">
                                <h3 className="text-lg font-semibold text-gray-900">
                                    Translate Website
                                </h3>
                                <button
                                    onClick={onClose}
                                    className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                                >
                                    <XMarkIcon className="w-5 h-5 text-gray-500" />
                                </button>
                            </div>
                            
                            {/* Google Translate Element */}
                            <div className="p-6">
                                <div 
                                    id="google_translate_element" 
                                    className="flex justify-center"
                                />
                            </div>
                        </motion.div>
                    </div>
                </>
            )}
        </AnimatePresence>
    );
};

export default GoogleTranslate;