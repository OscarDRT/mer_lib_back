FROM node:20.6.1

WORKDIR /usr/src/app

COPY package.json .

RUN yarn install --frozen-lockfile

COPY . .

RUN yarn build

EXPOSE 3000

CMD ["yarn", "start"]
