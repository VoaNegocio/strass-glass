import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../constants';

const WhatsAppButton = () => {
    return (
        <motion.a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=Ol%C3%A1%2C+preciso+de+or%C3%A7amento+para+obra+comercial`}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1 }}
            className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl hover:shadow-green-500/40 transition-all group"
        >
            <MessageCircle className="w-7 h-7" />
            <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-in-out whitespace-nowrap font-bold">
                Solicitar Orçamento
            </span>
        </motion.a>
    );
};

export default WhatsAppButton;
