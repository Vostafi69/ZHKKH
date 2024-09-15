<h1 align="center">Тестовое задание</h1>
<h2 align="center">на позицию Frontend-разработчик</h2>

> Создать приложение для отображения списка счётчиков горячей и холодной воды.
>
> ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)

## Содержание

- [Требования](#Требования)
- [Технологии](#технологии)
- [Начало работы](#начало-работы)
- [Примеры](#Примеры)

## Требования

> Дизайн:
>
> https://www.figma.com/design/gxVXNv5MEY8RQ1KXRVvkUT/%D0%A2%D0%B5%D1%81%D1%82-(%D1%84%D1%80%D0%BE%D0%BD%D1%82)?node-id=0-1&t=QQ9ijj1biJPPjj7s-0

<hr/>

1. Список счётчиков.
   Счётчики получать запросом GET http://showroom.eis24.me/api/v4/test/meters/
   Параметры limit=20 и offset (выводить по 20 на страницу).
   Данные должны выводиться на странице с внутренним скроллом
   («шапка» фиксированная, табличка скроллится внутри).
   Колонки:

- Порядковый номер.
- Тип (ColdWaterAreaMeter — ХВС, HotWaterAreaMeter — ГВС).
- Дата установки в формате дд.мм.гггг.
- Автоматический ли он (is_automatic).
- Значение (initial_values).
- Адреc.
- Примечание (description).

<hr/>

2. Адрес счётчика.
   Адреса получать параллельным запросом
   GET http://showroom.eis24.me/api/v4/test/areas/ с параметром списка айди id\_\_in.
   Продумать оптимизацию, не запрашивать уже известные адреса.
   Выводить улицу, дом, номер квартиры.

<hr/>

3. Удаление счётчика.
   При наведении на строку должна появляться кнопка удаления, инициирующая
   удаление счётчика (DELETE http://showroom.eis24.me/api/v4/test/meters/:meterId/).
   На странице при этом всегда должно оставаться 20 элементов.

## Технологии

- [React](https://react.dev/)
- [Shadcn](https://ui.shadcn.com/docs/components/accordion)
- [Vite](https://vitejs.dev/)
- [Tailwindcss](https://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Mobx-state-tree](https://mobx-state-tree.js.org/intro/welcome)

## Начало работы

Стянуть проект:

```sh
$ git clone https://github.com/Vostafi69/ZHKKH.git
```

Перейти в директорию проекта:

```sh
$ cd ZHKKH
```

Установить зависимости

```sh
$ npm i
```

Запустить проект

```sh
$ npm run dev
```

## Примеры

Таблица отображения счетчиков воды

![Таблица отображения счетчиков воды](https://github.com/Vostafi69/ZHKKH/blob/main/examples/example.png)
