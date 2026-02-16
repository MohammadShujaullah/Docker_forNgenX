FROM ubuntu as build 

RUN apt-get update -y
RUN apt-get install -y curl
RUN curl -sL https://deb.nodesource.com/setup_25.x | bash -
RUN apt-get install -y nodejs
RUN apt-get install typescript


WORKDIR /app
COPY package.json package.json
COPY package-lock.json package-lock.json
RUN  npm install

COPY main.js main.js
RUN tsc -p . # build 





FROM  node as runner

WORKDIR /app
copy --from=build app/ .

ENTRYPOINT ["node", "main.js"]
