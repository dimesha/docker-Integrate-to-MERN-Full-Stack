FROM node:18.19.1

WORKDIR /app

COPY package.json .

COPY . .

RUN npm install

EXPOSE 3000

CMD ["npm", "run", "start"]