FROM mhart/alpine-node:6

WORKDIR /usr/local

COPY package*.json .

RUN npm install

COPY server.js .

EXPOSE 8080

HEALTHCHECK --interval=10s --timeout=5s CMD wget --quiet --tries=1 --spider http://localhost:8080 || exit 1

CMD [ "node", "server.js" ]
