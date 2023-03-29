Este projeto foi criado com [Next.js](https://nextjs.org/)

Classe utiliátaria e implemantação de shorcuts no navegador, levando em base os shortcut map do WhatsApp Web

Obs: Antes de definir os atalhos verifique quais pretende usar e suas possíveis funções em cada navegador (Opera, Brave, Chrome, Safari...)

## Getting Started

Primeira inicialização:

```bash
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) com seu navegador para ver o resultado

## Docs shortcut

Faça a chamada da classe para o seu projeto dentro de um `useEffect`:

```tsx
useEffect(() => {
  const shortcutHandler = ShortcutHandler;

  // ...
}, [shortcuts]);
```

Defina a configuração de atalhos e faça o `subscribe` dos eventos:

```tsx
// useEffect(() => { ...

shortcutHandler.configure(shortcuts);
shortcutHandler.subscribe();

// }, [shortcuts]);
```

Por final defina o `unsucribe` no `clean-up` do `useEffect`:

```tsx
// useEffect(() => { ...

() => shortcutHandler.unsubscribe();

// }, [shortcuts]);
```
