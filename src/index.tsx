export interface InitialsAvatarProps {
  name?: string;
  size?: number;
  fontFamily?: string;
  textColor?: string;
}

const BACKGROUNDS = [
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
  name = "?",
  size = 40,
  fontFamily = "inherit",
  textColor = "#FFFFFF",
}: InitialsAvatarProps) {
  const getHash = (str: string) => {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash = (Math.imul(31, hash) + str.charCodeAt(i)) | 0;
    }
    return Math.abs(hash);
  };

  const safeName = name.trim();
  const backgroundIndex = getHash(safeName) % BACKGROUNDS.length;
  const backgroundColor = BACKGROUNDS[backgroundIndex];
  const initial = safeName.length > 0 ? safeName.charAt(0).toUpperCase() : "?";

  return (
    <div
      style={{
        width: size,
        height: size,
        backgroundColor,
        color: textColor,
        fontFamily,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: size / 2.2,
        fontWeight: "bold",
        userSelect: "none",
      }}
    >
      {initial}
    </div>
  );
}
