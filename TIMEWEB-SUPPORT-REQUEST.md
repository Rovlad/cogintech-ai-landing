# Текст для техподдержки Timeweb

## Здравствуйте!

Мне нужно настроить кэширование для статических файлов на моем сайте. Сейчас PageSpeed Insights показывает, что статические файлы (CSS, JS, изображения, видео) не кэшируются, что негативно влияет на производительность сайта.

Пожалуйста, примените следующую конфигурацию Nginx для моего домена:

```nginx
# Кэширование статических файлов на 1 год
location ~* \.(css|js|png|jpg|jpeg|gif|svg|mp4|webm|woff|woff2|ico)$ {
    expires 1y;
    add_header Cache-Control "public, max-age=31536000, immutable";
    add_header Vary Accept-Encoding;
    try_files $uri =404;
}

# Кэширование папки lovable-uploads на 1 год
location /lovable-uploads/ {
    expires 1y;
    add_header Cache-Control "public, max-age=31536000, immutable";
    add_header Vary Accept-Encoding;
    try_files $uri =404;
}

# Кэширование папки assets на 1 год
location /assets/ {
    expires 1y;
    add_header Cache-Control "public, max-age=31536000, immutable";
    add_header Vary Accept-Encoding;
    try_files $uri =404;
}

# Кэширование HTML файлов на 1 час
location ~* \.html$ {
    expires 1h;
    add_header Cache-Control "public, max-age=3600";
    try_files $uri =404;
}
```

Эта конфигурация:
- Включает кэширование статических файлов на 1 год
- Добавляет правильные заголовки Cache-Control
- Улучшает производительность сайта
- Положительно влияет на SEO

После применения конфигурации я смогу проверить кэширование через Developer Tools браузера.

Спасибо за помощь!

---

**Дополнительная информация:**
- Домен: [укажите ваш домен]
- Тип сайта: React SPA
- Критично для SEO и производительности 