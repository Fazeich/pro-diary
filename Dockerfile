# устанавливаем официальный образ Node.js
FROM node:19-alpine as build

# указываем рабочую (корневую) директорию
WORKDIR /

# копируем основные файлы приложения в рабочую директорию
COPY package.json package-lock.json ./

# устанавливаем указанные зависимости NPM на этапе установки образа
RUN npm install

# после установки копируем все файлы проекта в корневую директорию
COPY . .

# запускаем основной скрипт в момент запуска контейнера
RUN npm build

FROM nginx:stable-alpine

COPY --from build /build /var/www

EXPOSE 3000

CMD [ "nginx", "-g", "daemon off;"]