// src/index.jsx
import React from "react";
var FUNDOS = [
  "#EF4444",
  "#F97316",
  "#EAB308",
  "#22C55E",
  "#3B82F6",
  "#A855F7",
  "#EC4899",
  "#64748B"
];
function InitialsAvatar({
  nome = "?",
  tamanho = 40,
  fonte = "inherit",
  corTexto = "#FFFFFF"
}) {
  const tamanhoNome = nome.length;
  const FundoEscolhido = FUNDOS[tamanhoNome % FUNDOS.length];
  const inicial = nome.trim().charAt(0).toUpperCase();
  return /* @__PURE__ */ React.createElement(
    "div",
    {
      style: {
        width: tamanho,
        height: tamanho,
        backgroundColor: FundoEscolhido,
        color: corTexto,
        fontFamily: fonte,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "50%",
        fontSize: tamanho / 2.2,
        fontWeight: "bold",
        userSelect: "none"
      }
    },
    inicial
  );
}
export {
  InitialsAvatar as default
};
