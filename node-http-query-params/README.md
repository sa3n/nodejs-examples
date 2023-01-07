Распарсить информацию из query string в виде объекта с помощью url.parse()

```
curl "localhost:3000/?foo=bar&bar=baz"
```

Вывод в консоль:

```
Url {
    protocol: null,
    slashes: null,
    auth: null,
    host: null,
    port: null,
    hostname: null,
    hash: null,
    search: '?foo=bar&bar=baz',
    query: [Object: null prototype] { foo: 'bar', bar: 'baz' },
    pathname: '/app/',
    path: '/app/?foo=bar&bar=baz',
    href: '/app/?foo=bar&bar=baz'
}
```