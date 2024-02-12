FROM node:18 as build

WORKDIR /app

COPY package*.json .
COPY tsconfig.build.json .
COPY tsconfig.json .
COPY src src

RUN npm install
RUN npm run build

FROM node:18-alpine

WORKDIR /app

COPY --from=build /app/node_modules node_modules
COPY --from=build /app/dist dist

CMD ["node", "dist/main.js"]
