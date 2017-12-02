FROM node:9.2
RUN mkdir -p /usr/src/app
COPY . /usr/src/app

WORKDIR /usr/src/app

RUN npm install
RUN npm run build

RUN npm install -g serve

CMD ["serve", "-p", "8000", "-s", "build"]
