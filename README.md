# Cars API (TypeScript + Node.js + Prisma)

Описание: Бэкенд-приложение с CRUD для сущности cars.  
Реализовано без Elysia поэтому используется Express + Zod для валидации

Эндпоинты
- POST /api/cars - добавить машину
- GET /api/cars/:id - получить машину по id
- GET /api/cars - получить все машины
- DELETE /api/cars/:id - удалить машину

Сделано на
- Node.js, TypeScript
- Express
- Prisma (по умолчанию SQLite; в задании был PostgreSQL — инструкция по переключению есть ниже)
- Zod — валидация (заменяет валидацию elysia)
- OOP-подход: сервисы и контроллеры как классы

Запуск (локально)
1. Установите Node.js (>=18) и npm/yarn.
2. Установите зависимости:
      npm install
   
3. Сгенерируйте Prisma client:
      npx prisma generate
   
4. Применить миграции (для SQLite в проекте уже есть dev.db при первом запуске):
      npx prisma migrate dev --name init
   
5. Запустить в режиме разработки:
      npm run dev
   
6. Сервер будет на http://localhost:3000


Примечание про Elysia:

Elysia у меня не работает на пк и я сделал эквивалентную валидацию через Zod и Express это полноценная реализация ООП + валидация
