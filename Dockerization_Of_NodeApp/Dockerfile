FROM ubuntu

RUN apt-get update -y
RUN apt-get install -y curl
RUN curl -sL https://deb.nodesource.com/setup_25.x | bash -
RUN apt-get install -y nodejs


COPY package.json /app/package.json
COPY package-lock.json /app/package-lock.json
RUN cd app && npm install
COPY main.js /app/main.js




ENTRYPOINT ["node", "/app/main.js"]
