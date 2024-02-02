FROM node:12

WORKDIR /api

COPY package*.json ./

RUN npm install

COPY . .

ENV PORT=5040

EXPOSE 5040

CMD [ "npm", "start"]