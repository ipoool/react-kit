FROM node:11.10.0

RUN mkdir -p /var/www/html/app
WORKDIR /var/www/html/app

ENV PATH /var/www/html/app/node_modules/.bin:$PATH

COPY package.json /var/www/html/app/package.json
COPY .env /var/www/html/app/.env

RUN npm install --silent
RUN npm install react-scripts@2.1.5 -g --silent

CMD ["npm", "start"]