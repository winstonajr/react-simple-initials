# React Simple Initials

[![NPM Version](https://img.shields.io/npm/v/react-simple-initials.svg)](https://www.npmjs.com/package/react-simple-initials)
[![Bundle Size](https://img.shields.io/bundlephobia/minzip/react-simple-initials)](https://bundlephobia.com/package/react-simple-initials)
[![License](https://img.shields.io/npm/l/react-simple-initials.svg)](https://github.com/seu-usuario/react-simple-initials/blob/main/LICENSE)

A functional, minimalist, and ultra-light React component to generate avatars based on the user's initials. Ideal for interfaces that require an elegant visual fallback when the profile picture is not available.

---

## Features

- **Zero Dependencies:** Built only with React and inline CSS, ensuring a reduced bundle size.
- **Deterministic Colors:** The avatar background is algorithmically generated based on the provided name. The same name will always result in the same color.
- **Scalability:** The font size and container adjust proportionally through the size prop.
- **Production Ready:** Native TypeScript support and compatibility with SSR (Next.js, Remix) and modern tools like Vite.

---

## Installation

Install the package using your preferred package manager:

```bash
npm install react-simple-initials
# or
yarn add react-simple-initials
# or
pnpm add react-simple-initials
```

---

## How to use

Import the component and pass the required name property. The component will take care of the rest.

```typescript
import InitialsAvatar from "react-simple-initials";

export default function Page() {
  return (
    <div className="flex gap-4 items-center">

      {/* Default Example (Square, 40px) */}
      <InitialsAvatar name="Visitor" />

      {/* Circular Example using Tailwind CSS */}
      <div className="rounded-full overflow-hidden">
         <InitialsAvatar name="Maria Silva" size={60} />
      </div>

      {/* Style Customization */}
      <InitialsAvatar
        name="Joao"
        size={80}
        textColor="#FFFFFF"
        fontFamily="Arial, sans-serif"
      />
    </div>
  );
}

```

---

## Properties (API)

| Property       | Type   | Default   | Description                                                                        |
| :------------- | :----- | :-------- | :--------------------------------------------------------------------------------- |
| **name**       | string | "?"       | The user's name. The first letter will be extracted and capitalized automatically. |
| **size**       | number | 40        | The diameter of the avatar in pixels.                                              |
| **fontFamily** | string | "inherit" | Defines the font family (e.g., "Inter, sans-serif").                               |
| **textColor**  | string | "#FFFFFF" | Defines the color of the avatar's central letter.                                  |

---

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

1. Fork the project
2. Create your feature branch (git checkout -b feature/NewFeature)
3. Commit your changes (git commit -m 'feat: Add new feature')
4. Push to the branch (git push origin feature/NewFeature)
5. Open a Pull Request

---

## License

This project is under the MIT license.
