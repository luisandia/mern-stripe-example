FROM node:alpine
WORKDIR "/"
COPY ./package.json ./
RUN npm install
COPY . ./server
# CMD ["npm","run","dev"]
# EXPOSE 3000
