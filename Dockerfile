FROM node:latest AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:stable-alpine
COPY --from=build /app/dist/resume /usr/share/nginx/html
COPY ./nginx-custom.conf /etc/nginx/conf.d/default.conf
