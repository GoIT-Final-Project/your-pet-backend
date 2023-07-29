# My Pet API docs

<a href='https://my-pet-app-8sz1.onrender.com/api-docs/'>Документація</a>

# Посібник Git для команди

Цей посібник надає інструкції з ефективного використання Git для роботи з бекендом вашої команди.

## Конвенція назв змін (Commits)

1. **Повідомлення про коміти мають бути короткими, описовими та складеними англійською мовою**:

   - Починайте з дієслова у теперішньому часі (наприклад, "додати", "оновити", "виправити", "видалити").
   - Використовуйте наказовий спосіб для забезпечення послідовності (наприклад, "додати функціонал" замість "додав функціонал").
   - Використовуйте чіткі та змістовні назви, що пояснюють призначення коміту.

   Приклад: `add user authentication feature`

2. **Повідомлення про коміти мають бути автономними**:

   - Кожний коміт має представляти логічну зміну або виправлення.
   - Уникайте об'єднання неспоріднених змін у один коміт.

3. **Використовуйте префікси для повідомлень про коміти**:

   - Використовуйте префікси для вказання типу коміту:
     - `feature:` для нових функцій або функціональності
     - `fix:` для виправлення помилок
     - `refactor:` для рефакторингу або переструктуризації коду
     - `docs:` для оновлення документації
     - `test:` для додавання або зміни тестів
     - `chore:` для загального обслуговування або різноманітних завдань

   EПриклад: `feature: add user authentication feature`

4. **Дотримуйтесь послідовності**:

   - Впроваджуйте однакову конвенцію назв протягом всього проекту.
   - Якщо працюєте над конкретним завданням або проблемою, включіть номер завдання або проблеми у повідомлення про коміт для полегшення відстеження.

   Приклад: `fix: Issue #123 - Fix user authentication bug`

## Конвенція назв гілок (Branches)

1. **Назви гілок повинні бути змістовними та описовими**:

   - Використовуйте строчні літери та дефіси для розділення слів.
   - Включайте пов'язаний номер завдання або проблеми, якщо це застосовно..

   Приклад:: `feature/user-authentication`, `fix/issue-123`

2. **Використовуйте гілки короткого життя**:

   - Створіть нову гілку для кожного нового функціоналу або виправлення помилок.
   - Об'єднайте гілку знову з головною гілкою (наприклад, `main` або `master`) після завершення роботи.

3. **Префікси для назв гілок**:

   - Використовуйте префікси для вказання призначення гілки:
     - `feature/` для нових функцій або функціональності
     - `fix/` для виправлення помилок
     - `hotfix/` для термінових виправлень на головній гілці
     - `release/` для підготовки нового релізу

   Приклад: `feature/user-authentication`, `fix/issue-123`

4. **Будьте послідовними**:
   - икористовуйте однакову конвенцію назв протягом всього проекту.