FROM node:16-alpine3.14 as build

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
COPY yarn.lock ./
RUN yarn
RUN yarn global add react-scripts@4.0.3

# Build the app
COPY . ./
RUN yarn build

# Deploy to final environment
FROM nginx:stable-alpine

RUN apk add --update nodejs
RUN apk add --update npm
RUN npm i -g runtime-env-cra@0.2.2

# Copy build artifacts   
COPY --from=build /app/build /usr/share/nginx/html

# Setup ENV values substitution
COPY .env.default .env

# Substitute vars and run
CMD ["/bin/sh", "-c", "runtime-env-cra --config-name=\"/usr/share/nginx/html/runtime-env.js\" && nginx -g \"daemon off;\""]