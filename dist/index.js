var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.jsx
var index_exports = {};
__export(index_exports, {
  default: () => InitialsAvatar
});
module.exports = __toCommonJS(index_exports);
var import_react = __toESM(require("react"));
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
  return /* @__PURE__ */ import_react.default.createElement(
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
