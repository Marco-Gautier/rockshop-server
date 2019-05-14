FROM node:12.1.0

LABEL maintainer="Marco Gautier <marco.gautier@epitech.eu>"

RUN mkdir -p /app
ADD package.json /app
WORKDIR /app
RUN npm install --verbose --production
ENV NODE_PATH=/app/node_modules

COPY . /app/

CMD node /app/bin/www