export interface InitialsAvatarProps {
  name?: string;
  size?: number;
  fontFamily?: string;
  textColor?: string;
}

// Expanded and optimized palette for contrast with white text
const BACKGROUNDS = [
  "#EF4444", // Red
  "#F97316", // Orange
  "#F59E0B", // Amber
  "#10B981", // Emerald
  "#22C55E", // Green
  "#14B8A6", // Teal
  "#06B6D4", // Cyan
  "#3B82F6", // Blue
  "#6366F1", // Indigo
  "#8B5CF6", // Violet
  "#A855F7", // Purple
  "#D946EF", // Fuchsia
  "#EC4899", // Pink
  "#F43F5E", // Rose
  "#64748B", // Slate
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
