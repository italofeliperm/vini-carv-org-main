"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Copy, Check } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import { usePreventScroll } from "@/hooks/usePreventScroll";

const PIX_KEY = "fviniciuscarvalheido@hotmail.com";

interface DonationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function DonationModal({ isOpen, onClose }: DonationModalProps) {
  const { toast } = useToast();
  const [copied, setCopied] = useState(false);
  usePreventScroll(isOpen);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(PIX_KEY);
      setCopied(true);
      toast({
        title: "Chave PIX copiada!",
        description: "A chave foi copiada para sua área de transferência.",
      });
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      toast({
        title: "Erro ao copiar",
        description: "Não foi possível copiar a chave PIX.",
        variant: "destructive",
      });
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.95 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-lg shadow-xl w-full md:w-[500px] relative mx-4 sm:mx-auto"
          >
            <button
              onClick={onClose}
              className="absolute right-3 top-3 text-gray-500 hover:text-gray-700 bg-white rounded-full p-1 z-10"
            >
              <X size={20} />
            </button>

            <div className="p-4 sm:p-6">
              <h2 className="text-xl sm:text-2xl font-bold text-blue-900 mb-4">
                Faça sua Doação
              </h2>

              <div className="bg-blue-50 rounded-lg p-3 sm:p-4 mb-6">
                <p className="text-blue-900 text-sm sm:text-base">
                  &ldquo;Sua contribuição faz a diferença na vida de muitas
                  famílias. Cada doação nos ajuda a continuar transformando
                  vidas e levando esperança para quem mais precisa.&rdquo;
                </p>
              </div>

              <div className="space-y-4 sm:space-y-6">
                <Card className="p-3 sm:p-4 bg-gradient-to-br from-blue-600 to-blue-700 text-white">
                  <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">
                    PIX
                  </h3>
                  <p className="text-sm sm:text-base mb-2">
                    Chave PIX (E-mail):
                  </p>
                  <p className="text-base sm:text-lg font-medium mb-3">
                    {PIX_KEY}
                  </p>
                  <Button
                    variant="secondary"
                    className="w-full bg-white text-blue-700 hover:bg-blue-50 text-sm sm:text-base py-4 sm:py-6"
                    onClick={copyToClipboard}
                  >
                    {copied ? (
                      <>
                        <Check className="w-4 h-4 mr-2" />
                        Copiado!
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4 mr-2" />
                        Copiar Chave PIX
                      </>
                    )}
                  </Button>
                </Card>

                <Card className="p-3 sm:p-4 border-2 border-blue-100">
                  <h3 className="text-lg sm:text-xl font-semibold text-blue-900 mb-2 sm:mb-3">
                    Transferência Bancária
                  </h3>
                  <div className="space-y-2 text-gray-600 text-sm sm:text-base">
                    <p>Associação Vinícius Carvalheido</p>
                    <p>Banco: 104 - Caixa Econômica Federal</p>
                    <p>Tipo de conta: Poupança - Pessoa Física - 1288</p>
                    <p>Agência: 0671</p>
                    <p>Conta: 0007863855714</p>
                  </div>
                </Card>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
