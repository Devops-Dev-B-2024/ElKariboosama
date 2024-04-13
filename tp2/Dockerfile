FROM node:20-alpine
WORKDIR /api

COPY ./index.js .
COPY ./package.json .

RUN npm i
EXPOSE 3000

CMD ["node","index.js"]
