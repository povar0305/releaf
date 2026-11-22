# Releaf

**Releaf** — веб-приложение (SPA) для обмена комнатными растениями. Локальный сервис для Санкт-Петербурга и пригородов, помогающий коллекционерам находить редкие растения, быстро договариваться об обмене и отслеживать статусы сделок.

## О проекте

Releaf решает ключевые проблемы сообщества коллекционеров комнатных растений:

- **Объявления теряются в чатах** — все свопы в одном месте с удобным поиском и фильтрацией.
- **Долго договариваться** — статусы согласований фиксируются в системе.
- **Неравноценный обмен** — прозрачные сделки с двусторонним списком «я отдаю / я получаю».
- **Далеко ехать** — привязка к городу и пригородам Санкт-Петербурга.
- **Пересорт и вредители** — профили растений с фото, категорией и комментариями.

## Фичи

- [ ] Авторизация через VK
- [ ] Страница профиля: данные о пользователе и смена темы
- [ ] Фича «Растение»: страница со списком растений
- [ ] Фича «Растение»: детальная страница растения
- [ ] Фича «Обмен»: страница со списком обменов
- [ ] Фича «Обмен»: детальная страница обмена
- [ ] Фича «Обмен»: страница поиска обмена

## Целевая аудитория

- Коллекционеры с 40+ растениями и стажем 3+ года.
- Новички, начинающие собирать коллекцию.
- Большинство совершает более 5 обменов за 3 месяца.

## Функционал MVP

### 1. Авторизация и профиль

- Вход через **VK ID**.
- Автоматическое подтягивание имени и аватара из профиля ВК.
- Редактирование профиля: город, контакт для связи (телефон или Telegram).
- Настройка приватности (показывать ли номер телефона).

### 2. Коллекция растений

- Добавление растения: название, фото, категория (детка / черенок / клубень / взрослое растение / семена), количество, комментарий.
- Редактирование и удаление записей.

### 3. Обмены (сделки)

- Создание обмена: выбрать свое растение, указать, что получаешь взамен, имя партнера, номер телефона, ссылку на ВК и место/время встречи.
- Двусторонний список «я отдаю» / «я получаю».
- Статусы обмена: **предложен** → **согласован** → **упакован** → **завершен** / **отменён**.
- Выгрузка данных обмена в буфер обмена (для отправки в чат).

## Стек технологий

| Категория | Технология |
|---|---|
| Фронтенд | Vue 3 (Composition API, `<script setup lang="ts">`), Vite 7 |
| Язык | TypeScript (strict) |
| Роутинг | Vue Router 4 |
| Состояние | Pinia 3 |
| UI и стили | Tailwind CSS v4 |
| Валидация | Zod + VeeValidate |
| Серверное состояние | TanStack Query (Vue Query) |
| Бэкенд (BaaS) | Firebase (Firestore, Firebase Auth, Hosting) |
| Компонентная разработка | Storybook 10 (WCAG 2.2 AA) |
| Тестирование | Vitest + Playwright (component testing) |
| Линтинг и форматирование | ESLint 9 (flat config) + oxlint + Prettier |

## Структура проекта

```
src/
  App.vue                 # Layout: NavRail + ToastProvider + router-view + DebugPanel
  main.ts                 # Bootstrap: createApp -> Pinia -> Router -> mount('#app')
  router/index.ts         # Роуты: home(/), search(/search), notFound(:catchAll)
  stores/                 # Pinia stores
  services/               # Бизнес-логика
  components/             # UI-компоненты
  views/                  # Экраны
  stories/                # Storybook stories (.mdx)
public/                   # Статика
```

## Соглашения о коде

- Строгий TypeScript (`strict: true`), но `noUnusedLocals` / `noUnusedParameters` выключены.
- Именование классов ошибок: `*Error` (в `tsconfig.node.json` — `*Err`).
- Перед коммитом: `npm run lint`.

## Команды

| Команда | Действие |
|---|---|
| `npm run dev` | Запуск Vite dev server |
| `npm run build` | Проверка типов + production сборка |
| `npm run type-check` | Проверка типов (`vue-tsc`) |
| `npm run test` | Vitest (smoke tests) |
| `npm run storybook` | Запуск Storybook на порту 6006 |
| `npm run build-storybook` | Статическая сборка Storybook |
| `npm run lint` / `format` | Линтер / Prettier |

## Архитектурные заметки

- Приложение создаётся как SPA без PWA на текущем этапе.
- Авторизация через ВК требует промежуточного слоя (Cloud Function) для обмена токена VK на кастомный токен Firebase Auth.
- Работа с Firestore ведётся через modular API.
- Для управления формами используется связка **Zod** (схемы) и **VeeValidate** (UI-логика), что даёт типобезопасность.
- **TanStack Query** добавлен в стек для единообразия состояний загрузки/ошибок, хотя у Firestore есть встроенный real-time кэш.

## Рекомендуемая настройка IDE

### VS Code

- [Vue (Official)](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (и отключите Vetur).

### Браузер

Chromium-based браузеры (Chrome, Edge, Brave и др.):

- [Vue.js devtools](https://chromewebstore.google.com/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd)
- [Turn on Custom Object Formatter в Chrome DevTools](http://bit.ly/object-formatters)

Firefox:

- [Vue.js devtools](https://addons.mozilla.org/en-US/firefox/addon/vue-js-devtools/)
- [Turn on Custom Object Formatter в Firefox DevTools](https://fxdx.dev/firefox-devtools-custom-object-formatters/)

## Установка и запуск

```sh
npm install
```

```sh
npm run dev
```

```sh
npm run build
```

```sh
npm run lint
```
