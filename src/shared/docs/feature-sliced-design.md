# Feature-Sliced Design

Структура проекта построена по методологии Feature-Sliced Design:

## Слои

| Слой       | Путь                  | Назначение                                                         |
|------------|-----------------------|--------------------------------------------------------------------|
| **app**    | `src/app/`            | Точка входа, роутинг, глобальные провайдеры, инициализация         |
| **pages**  | `src/pages/`          | Страницы приложения (сборка из widgets/features)                   |
| **widgets**| `src/widgets/`        | Композиционные блоки, агрегирующие features и entities             |
| **features**| `src/features/`      | Функциональность, связанная с действиями пользователя              |
| **entities**| `src/entities/`     | Доменные сущности (модели, репозитории, сервисы)                    |
| **shared** | `src/shared/`         | Общий код: UI-компоненты, хелперы, типы, API, конфиги               |

## Правила

- **Стрелочные импорты**: слои импортируют только нижележащие (app → pages/widgets/features/entities/shared).
- **Нет обратных импортов**: shared не импортирует entities, entities не импортируют features и т. д.
- **Порядок импортов**: сначала слои, затем node_modules, затем путь от @.
- **UI-кит**: все переиспользуемые компоненты — в `shared/ui`.
- **Маршрутизация**: роуты регистрируются в `app/router`, страницы — в `pages`.
- **Модели сущностей**: `entities/*/model/`, UI — `entities/*/ui/`.
- **Компоненты**: всегда `<ComponentName.vue>` в PascalCase.

## Команды

```bash
npm run dev        # Запуск dev-сервера
npm run build      # Сборка для продакшена
npm run type-check # Проверка типов
npm run test       # Запуск тестов
npm run lint       # Линтинг
npm run storybook  # Storybook
```
