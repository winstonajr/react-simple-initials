# React Simple Initials

[![NPM Version](https://img.shields.io/npm/v/react-simple-initials.svg)](https://www.npmjs.com/package/react-simple-initials)
[![Bundle Size](https://img.shields.io/bundlephobia/minzip/react-simple-initials)](https://bundlephobia.com/package/react-simple-initials)
[![License](https://img.shields.io/npm/l/react-simple-initials.svg)](https://github.com/seu-usuario/react-simple-initials/blob/main/LICENSE)

Um componente React funcional, minimalista e ultraleve para gerar avatares baseados nas iniciais do usuário. Ideal para interfaces que necessitam de um fallback visual elegante quando a foto de perfil não está disponível.

---

## Funcionalidades

- **Zero Dependencias:** Construido apenas com React e CSS inline, garantindo um bundle size reduzido.
- **Cores Deterministicas:** O fundo do avatar e gerado algoritmicamente com base no nome fornecido. O mesmo nome sempre resultara na mesma cor.
- **Escalabilidade:** O tamanho da fonte e do container se ajustam proporcionalmente atraves da prop de tamanho.
- **Pronto para Producao:** Suporte nativo a TypeScript e compatibilidade com SSR (Next.js, Remix) e ferramentas modernas como Vite.

---

## Instalacao

Instale o pacote utilizando o seu gerenciador de preferencia:

```bash
npm react-simple-initials
# or
yarn react-simple-initials
# or
pnpm react-simple-initials
```

---

## Como usar

Importe o componente e passe a propriedade obrigatoria nome. O componente cuidara do restante.

```typescript
import InitialsAvatar from "react-simple-initials";

export default function Page() {
  return (
    <div className="flex gap-4 items-centrer">

      {/* Exemplo Padrao (40px) */}
      <InitialsAvatar nome="Visitante" />

      {/* Tamanho Customizado */}
      <InitialsAvatar nome="Maria Silva" tamanho={60} />

      {/* Customizacao de Estilo */}
      <InitialsAvatar
        nome="Joao"
        tamanho={80}
        corTexto="#FFFFFF"
        fonte="Arial, sans-serif"
      />
    </div>
  );
}

```

---

## Propriedades (API)

| Propriedade  | Tipo   | Padrao    | Descricao                                                                         |
| :----------- | :----- | :-------- | :-------------------------------------------------------------------------------- |
| **nome**     | string | "?"       | O nome do usuario. A primeira letra sera extraida e capitalizada automaticamente. |
| **tamanho**  | number | 40        | O diametro do avatar em pixels.                                                   |
| **fonte**    | string | "inherit" | Define a familia da fonte (ex: "Inter, sans-serif").                              |
| **corTexto** | string | "#FFFFFF" | Define a cor da letra central do avatar.                                          |

---

## Contribuindo

Pull requests sao bem-vindos. Para mudancas maiores, abra uma issue primeiro para discutir o que voce gostaria de mudar.

1. Faça um Fork do projeto
2. Crie sua branch de funcionalidade (git checkout -b feature/NovaFeature)
3. Commit suas alterações (git commit -m 'feat: Adiciona nova funcionalidade')
4. Push para a branch (git push origin feature/NovaFeature)
5. Abra um Pull Request

---

## Licenca

Este projeto esta sob a licenca MIT.
