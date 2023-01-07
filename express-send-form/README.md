Установить зависимости

```
npm install
```

Получить HTML-страницу с формой

```
curl localhost:3000
```

Отправить POST-запрос и получить в ответ JSON с именем пользователя

```
curl -X POST localhost:3000/user -d "username=Alice"
```
