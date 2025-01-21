"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { HandHeart, Copy, Check } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const PIX_KEY = "fviniciuscarvalheido@hotmail.com";

export default function Donation() {
  const { toast } = useToast();
  const [copied, setCopied] = useState(false);

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
    <section id="donate" className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <HandHeart className="w-16 h-16 text-blue-600 mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-blue-900 mb-6">Como Ajudar</h2>
          <p className="text-gray-600 mb-8">
            Sua contribuição é fundamental para mantermos nossos projetos ativos. 
            Escolha a melhor forma de participar:
          </p>

          <Card className="p-8 mb-8 bg-gradient-to-br from-blue-600 to-blue-700 text-white">
            <h3 className="text-2xl font-semibold mb-4">PIX</h3>
            <p className="mb-2">Chave PIX (E-mail):</p>
            <p className="text-lg font-medium mb-4">{PIX_KEY}</p>
            <Button 
              variant="secondary" 
              className="bg-white text-blue-700 hover:bg-blue-50"
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

          <Card className="p-8 border-2 border-blue-100">
            <h3 className="text-xl font-semibold text-blue-900 mb-4">Transferência Bancária</h3>
            <div className="text-left max-w-md mx-auto">
              <p className="text-gray-600">Associação Vinícius Carvalheido</p>
              <p className="text-gray-600">Banco: 104 - Caixa Econômica Federal</p>
              <p className="text-gray-600">Tipo de conta: Poupança - Pessoa Física - 1288</p>
              <p className="text-gray-600">Agência: 0671</p>
              <p className="text-gray-600">Conta: 0007863855714</p>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}