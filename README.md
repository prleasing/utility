# @prleasing/utility

Вспомогательные функции, которые пригодятся в работе

## Установка

Добавьте пакет в свои dependencies, используя npm или yarn

```bash
npm i @prleasing/utility
# или
yarn add @prleasing/utility
```

## Использование

```typescript
import { omit } from '@prleasing/utility';

const object = { a: '1', b: '2', c: '3' };
omit(object, 'a', 'c'); // => { 'b': '2' }
```
