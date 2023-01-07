Получить HTML-страницу с формой

```
curl localhost:3000
```

Записать имя пользователя в JSON-файл:

```
curl -X POST localhost:3000/users -d "username=Alice"
```

Получить HTML-страницу с именами пользователей:

```
curl localhost:3000/users
```

SIGINT удаляет файл с данными