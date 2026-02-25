# React Simple Initials

[![NPM Version](https://img.shields.io/npm/v/react-simple-initials.svg)](https://www.npmjs.com/package/react-simple-initials)
[![Bundle Size](https://img.shields.io/bundlephobia/minzip/react-simple-initials)](https://bundlephobia.com/package/react-simple-initials)

Um componente React minimalista, elegante e ultraleve para gerar avatares coloridos baseados nas iniciais do usuário. Perfeito para painéis, listas de contatos e comentários onde o usuário ainda não enviou uma foto de perfil.

---

## Funcionalidades

- **Zero Dependências:** Sem bibliotecas de imagens pesadas; usa apenas CSS e HTML puro.
- **Cores Determinísticas:** O fundo do avatar é calculado com base no tamanho do nome. O mesmo nome sempre terá a mesma cor.
- **Altamente Customizável:** Adapta-se automaticamente à fonte do seu projeto, ou permite customização total de tamanho e cor.
- **Suporte a TypeScript & SSR:** Funciona perfeitamente com Next.js, Vite, Remix e Create React App.

## Instalação

Você pode instalar usando o seu gerenciador de pacotes favorito:

npm install react-simple-initials

## Como usar

A configuração é instantânea. Basta importar o componente e passar o nome desejado:

import React from 'react';
import InitialsAvatar from 'react-simple-initials';

export default function App() {
return (

<div style={{ display: 'flex', gap: '16px' }}>
<InitialsAvatar nome="Visitante" />
<InitialsAvatar nome="Maria Silva" tamanho={60} />
<InitialsAvatar nome="João" tamanho={80} corTexto="#FFF" fonte="Arial, sans-serif" />
</div>
);
}

## Propriedades (API)

O componente aceita as seguintes propriedades (props) para você customizar como preferir:

| Propriedade | Tipo   | Padrão    | Descrição                                                                                          |
| :---------- | :----- | :-------- | :------------------------------------------------------------------------------------------------- |
| nome        | string | "?"       | O nome do usuário. A primeira letra será extraída e capitalizada automaticamente.                  |
| tamanho     | number | 40        | O diâmetro do avatar (largura e altura) em pixels. O tamanho da fonte se ajusta proporcionalmente. |
| fonte       | string | "inherit" | A família da fonte. Por padrão, herda a fonte do elemento pai.                                     |
| corTexto    | string | "#FFFFFF" | A cor da letra exibida no centro do avatar.                                                        |

## Contribuindo

Contribuições são super bem-vindas! Se você encontrou um bug ou tem uma ideia para uma nova funcionalidade:

1. Faça um Fork do projeto
2. Crie sua branch de funcionalidade (git checkout -b feature/MinhaNovaFeature)
3. Faça o commit das suas alterações (git commit -m 'feat: Adiciona nova paleta de cores')
4. Faça o push para a branch (git push origin feature/MinhaNovaFeature)
5. Abra um Pull Request

## Licença

Este projeto está licenciado sob a Licença MIT.
