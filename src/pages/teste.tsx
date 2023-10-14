import React from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Teste() {
  function Somar(a, b) {
    const resultado = a + b;
    toast.success(`A soma de ${a} e ${b} é igual a ${resultado}`);
    return resultado;
  }

  return (
    <div>
      <button
        onClick={() => {
          const a = 5;
          const b = 7;
          Somar(a, b);
        }}
      >
        Calcular Soma
      </button>
    </div>
  );
}
