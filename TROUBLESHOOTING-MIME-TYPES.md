# Устранение проблем с MIME типами в Vite

## Проблема
```
Loading module from "http://localhost:8080/src/index.css" was blocked because of a disallowed MIME type ("text/css").
Loading failed for the module with source "http://localhost:8080/node_modules/.vite/deps/chunk-*.js"
```

## Решения

### 1. Очистка кэша Vite

```bash
# Остановить все процессы Node.js
taskkill /f /im node.exe

# Удалить кэш Vite
Remove-Item -Recurse -Force node_modules\.vite -ErrorAction SilentlyContinue

# Переустановить зависимости
npm install

# Запустить dev сервер заново
npm run dev
```

### 2. Исправление конфигурации Vite

В `vite.config.ts` убраны кэш-заголовки для dev режима:

```typescript
server: {
  host: "::",
  port: 8080,
  // Remove cache headers for dev mode to avoid MIME type issues
},
```

### 3. Исправление index.html

Удалена ссылка на `/src/index.css` из `index.html`:

```html
<!-- Removed /src/index.css preload as it's handled by Vite -->
```

### 4. Проверка работы

1. Откройте `http://localhost:8080/test.html` - должна показаться тестовая страница
2. Откройте `http://localhost:8080/` - должна загрузиться главная страница
3. Проверьте консоль браузера на ошибки

### 5. Альтернативные решения

Если проблема сохраняется:

#### Вариант A: Использовать другой порт
```bash
npm run dev -- --port 3000
```

#### Вариант B: Очистить кэш браузера
- Откройте DevTools (F12)
- Правый клик на кнопке обновления
- Выберите "Очистить кэш и жесткую перезагрузку"

#### Вариант C: Проверить антивирус
Некоторые антивирусы могут блокировать локальные файлы. Добавьте папку проекта в исключения.

### 6. Проверка конфигурации

Убедитесь, что в `package.json` есть все необходимые зависимости:

```json
{
  "devDependencies": {
    "@vitejs/plugin-react-swc": "^3.5.0",
    "vite": "^5.4.1"
  }
}
```

### 7. Логи для диагностики

Если проблема не решается, проверьте:

1. **Консоль браузера** - какие именно файлы не загружаются
2. **Сетевую вкладку** - статус загрузки файлов
3. **Консоль терминала** - ошибки Vite сервера

### 8. Временное решение

Если ничего не помогает, можно использовать production build:

```bash
npm run build
npm run preview
```

Это запустит production версию на `http://localhost:4173/`

## Ожидаемый результат

После применения исправлений:
- ✅ Страница загружается без ошибок
- ✅ CSS и JS файлы загружаются корректно
- ✅ Dev сервер работает стабильно
- ✅ Hot Module Replacement (HMR) работает 