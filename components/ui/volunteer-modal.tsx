"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

import { useToast } from "@/components/ui/use-toast";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { usePreventScroll } from "@/hooks/usePreventScroll";

interface VolunteerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function VolunteerModal({ isOpen, onClose }: VolunteerModalProps) {
  const { toast } = useToast();
  usePreventScroll(isOpen);

  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    mensagem: "",
  });

  const [errors, setErrors] = useState({
    nome: "",
    email: "",
    telefone: "",
  });

  const validateForm = () => {
    let isValid = true;
    const newErrors = {
      nome: "",
      email: "",
      telefone: "",
    };

    // Validação do nome
    if (formData.nome.length < 3) {
      newErrors.nome = "Nome deve ter pelo menos 3 caracteres";
      isValid = false;
    }

    // Validação do email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      newErrors.email = "Email inválido";
      isValid = false;
    }

    // Validação do telefone
    const telefoneRegex = /^\(\d{2}\)\s\d{5}-\d{4}$/;
    if (!telefoneRegex.test(formData.telefone)) {
      newErrors.telefone = "Telefone inválido. Use o formato (00) 00000-0000";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const formatTelefone = (value: string) => {
    // Remove tudo que não é número
    const numbers = value.replace(/\D/g, "");

    // Aplica a máscara
    if (numbers.length <= 11) {
      return numbers.replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3");
    }
    return value;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      toast({
        title: "Erro no formulário",
        description: "Por favor, corrija os erros antes de enviar.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Formulário enviado!",
      description: "Agradecemos seu interesse. Entraremos em contato em breve.",
    });

    onClose();
    setFormData({ nome: "", email: "", telefone: "", mensagem: "" });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[9999] overflow-y-auto"
        >
          <motion.div
            initial={{ x: "100%", opacity: 0.5 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0.5 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="min-h-screen px-4 text-center flex items-center justify-center"

          >
            <div
              className="bg-white w-full md:h-auto md:rounded-lg md:shadow-xl md:w-[500px] relative overflow-y-auto max-h-[90vh] modal-content rounded-lg"
              onClick={(e) => e.stopPropagation()}
            >

              <button
                onClick={onClose}
                className="absolute right-4 top-4 text-gray-500 hover:text-gray-700 bg-white rounded-full p-1 z-10"
              >
                <X size={20} />
              </button>

              <div className="p-6 md:p-6 pt-12">
                <h2 className="text-xl md:text-2xl font-bold text-blue-900 mb-4">
                  Seja Voluntário
                </h2>

                <div className="bg-blue-50 rounded-lg p-3 md:p-4 mb-6">
                  <p className="text-blue-900 text-xs sm:text-sm">
                    &ldquo;Transforme vidas com a gente. Seu tempo faz a diferença.&rdquo;
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label
                      htmlFor="nome"
                      className="block text-sm font-medium text-gray-700 mb-1 text-left"
                    >
                      Nome completo
                    </label>
                    <Input
                      id="nome"
                      value={formData.nome}
                      onChange={(e) =>
                        setFormData({ ...formData, nome: e.target.value })
                      }
                      required
                      className="w-full bg-white border-gray-300 text-gray-900"
                      placeholder="Digite seu nome completo"
                      inputMode="text"
                      autoComplete="name"
                    />
                    {errors.nome && (
                      <p className="text-red-500 text-sm mt-1">{errors.nome}</p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-1 text-left"
                    >
                      E-mail
                    </label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      required
                      className="w-full bg-white border-gray-300 text-gray-900"
                      placeholder="Digite seu e-mail"
                      inputMode="email"
                      autoComplete="email"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="telefone"
                      className="block text-sm font-medium text-gray-700 mb-1 text-left"
                    >
                      Telefone
                    </label>
                    <Input
                      id="telefone"
                      value={formData.telefone}
                      onChange={(e) => {
                        const formatted = formatTelefone(e.target.value);
                        setFormData({ ...formData, telefone: formatted });
                      }}
                      required
                      className="w-full bg-white border-gray-300 text-gray-900"
                      placeholder="(00) 00000-0000"
                      maxLength={15}
                      inputMode="tel"
                      autoComplete="tel"
                    />
                    {errors.telefone && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.telefone}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="mensagem"
                      className="block text-sm font-medium text-gray-700 mb-1 text-left"
                    >
                      Mensagem (opcional)
                    </label>
                    <Textarea
                      id="mensagem"
                      value={formData.mensagem}
                      onChange={(e) =>
                        setFormData({ ...formData, mensagem: e.target.value })
                      }
                      className="w-full min-h-[60px] max-h-[200px] bg-white border-gray-300 text-gray-900 resize-y"
                      placeholder="Conte-nos um pouco sobre você e sua motivação para ser voluntário"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-6 text-lg mt-6"
                  >
                    Enviar
                  </Button>
                </form>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
