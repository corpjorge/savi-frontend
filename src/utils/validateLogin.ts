import { required, validateEmail } from "@/utils/validateForm";

interface values {
  email: string;
  password: string;
  TermsAndConditions: boolean;
}

export function validateLogin(values: values) {
  if (validateEmail(values.email)) {
    return {
      email: "El email no es válido",
    };
  }

  if (required(values.email)) {
    return {
      email: "El correo es requerido",
    };
  }

  if (required(values.password)) {
    return {
      password: "El password es requerido",
    };
  }

  if (!values.TermsAndConditions) {
    return {
      TermsAndConditions: "Debe aceptar los términos y condiciones",
    };
  }
}
