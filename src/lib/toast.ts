"use client";

import { toast } from "sonner";

const roleLabels: Record<string, string> = {
  admin: "Admin",
  doctor: "Doktor",
  patient: "Hasta",
  nurse: "Hemşire",
};

export const Toast = {
  signupSuccess: () =>
    toast.success("Kayıt başarıyla tamamlandı 🎉", {
      description: "Hesabın oluşturuldu, giriş yapabilirsin.",
    }),

  signinSuccess: (role?: string) => {
    const label = role && roleLabels[role] ? roleLabels[role] : "Patient";

    toast.success("Giriş başarılı 🏆", {
      description: `NARLA Healthcare sistemine hoş geldiniz. ${label} Dashboard’una yönlendiriliyorsunuz.`,
    });
  },

  authError: (message?: string) =>
    toast.error("Bir hata oluştu ❌", {
      description: message || "Lütfen bilgilerini kontrol et.",
    }),

  passwordError: () =>
    toast.error("Şifre hatalı 🔒", {
      description: "Girdiğin şifre geçersiz.",
    }),

  genericError: () => toast.error("Beklenmeyen bir hata oluştu ⚠️"),
};
