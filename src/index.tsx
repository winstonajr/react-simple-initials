interface InitialsAvatarProps {
  nome?: string;
  tamanho?: number;
  fonte?: string;
  corTexto?: string;
}

const FUNDOS = [
  "#EF4444",
  "#F97316",
  "#EAB308",
  "#22C55E",
  "#3B82F6",
  "#A855F7",
  "#EC4899",
  "#64748B",
];

export default function InitialsAvatar({
  nome = "?",
  tamanho = 40,
  fonte = "inherit",
  corTexto = "#FFFFFF",
}: InitialsAvatarProps) {
  const tamanhoNome = nome.length;
  const FundoEscolhido = FUNDOS[tamanhoNome % FUNDOS.length];
  const inicial = nome.trim().charAt(0).toUpperCase();

  return (
    <div
      style={{
        width: tamanho,
        height: tamanho,
        backgroundColor: FundoEscolhido,
        color: corTexto,
        fontFamily: fonte,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: tamanho / 2.2,
        fontWeight: "bold",
        userSelect: "none",
      }}
    >
      {inicial}
    </div>
  );
}
