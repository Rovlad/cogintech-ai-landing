# Блокировка URL-ов с параметром ?p=

## Проблема
URL-ы вида `https://cogintech.com/?p=...` открываются как главная страница вместо возврата ошибки 401.

## Решение

### 1. Настройка Nginx (основное решение)

В файле `nginx-timeweb.conf` добавлены правила:

```nginx
# Block URLs with ?p= parameter - return 401
location ~ ^/\?p= {
    return 401;
}

# Block URLs with ?p= parameter (alternative pattern)
location ~ \?p= {
    return 401;
}
```

### 2. Настройка Apache (.htaccess)

В файле `.htaccess` добавлены правила:

```apache
# Block URLs with ?p= parameter - return 401
<IfModule mod_rewrite.c>
    RewriteEngine On
    RewriteCond %{QUERY_STRING} ^p= [NC]
    RewriteRule ^(.*)$ - [R=401,L]
</IfModule>
```

### 3. JavaScript проверка (резервное решение)

В `src/App.tsx` добавлена проверка:

```javascript
// Check for ?p= parameter and return 401
const checkForbiddenParams = () => {
  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.has('p')) {
    // Return 401 status
    window.location.href = '/401';
    return true;
  }
  return false;
};
```

### 4. Страница 401

Создана страница `src/pages/Unauthorized.tsx` с маршрутом `/401`.

## Деплой

1. **Отправьте файл `nginx-timeweb.conf` в техподдержку Timeweb** с просьбой применить конфигурацию

2. **Загрузите содержимое папки `dist`** на сервер

3. **Проверьте работу:**
   - `https://cogintech.com/?p=test` → должен вернуть 401
   - `https://cogintech.com/?p=123` → должен вернуть 401
   - `https://cogintech.com/` → должен открыть главную страницу

## Ожидаемый результат

После настройки:
- URL-ы с параметром `?p=` будут возвращать HTTP 401
- Пользователи увидят страницу "Неавторизованный доступ"
- Обычные URL-ы будут работать как обычно

## Текст для техподдержки Timeweb

```
Здравствуйте! Мне нужно настроить блокировку URL-ов с параметром ?p=.

Пожалуйста, примените следующую конфигурацию Nginx для моего домена:

[вставьте содержимое файла nginx-timeweb.conf]

Эта конфигурация:
- Блокирует URL-ы с параметром ?p= и возвращает 401
- Включает кэширование статических файлов
- Настраивает правильную обработку SPA маршрутизации

После применения конфигурации URL-ы вида https://cogintech.com/?p=... должны возвращать ошибку 401.

Спасибо за помощь!
``` 