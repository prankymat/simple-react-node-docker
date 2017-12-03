FROM node:latest
RUN mkdir -p /usr/src/app
COPY . /usr/src/app

WORKDIR /usr/src/app

RUN npm install && npm install -g serve && npm run build

CMD ["serve", "-p", "3000", "-s", "build"]
