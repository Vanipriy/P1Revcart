# Stage 1: Build Angular App
FROM node:18 AS build
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build -- --project revcart-frontend --configuration production

# Stage 2: Serve with Nginx
FROM nginx:stable-alpine
COPY --from=build /usr/src/app/dist/revcart-frontend /usr/share/nginx/html
EXPOSE 8081
CMD ["nginx", "-g", "daemon off;"]
