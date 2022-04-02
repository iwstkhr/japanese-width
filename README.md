# japanese-width
A library for conversion of Japanese half/full-width characters.

## Install
```
npm install https://github.com/iwstkhr/japanese-width.git
```

## Usage
```typescript
import { toFullWidth, toHalfWidth } from '@iwstkhr/japanese-width';

// Output "Ｈｅｌｌｏ　Ｗｏｒｌｄ　！　ハローワールド"　２０２２
console.info(toFullWidth('Hello World ! ﾊﾛｰﾜｰﾙﾄﾞ 2022'));

// Output Hello World ! ﾊﾛｰﾜｰﾙﾄﾞ 2022
console.info(toHalfWidth('Ｈｅｌｌｏ　Ｗｏｒｌｄ　！　ハローワールド　２０２２'));
```

## License
MIT
