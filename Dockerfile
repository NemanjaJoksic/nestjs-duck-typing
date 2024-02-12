FROM node:18-alpine

WORKDIR /app

COPY package*.json .
COPY tsconfig.build.json .
COPY tsconfig.json .
COPY src src

RUN npm install
RUN npm run build

CMD ["node", "dist/main.js"]
