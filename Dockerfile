FROM node:alpine
WORKDIR "/"
COPY ./package.json ./
RUN npm install
COPY . ./app
# CMD ["npm","run","dev"]
EXPOSE 3000
