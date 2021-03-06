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
FROM nginx:mainline-alpine

RUN apk add --update nodejs
RUN apk add --update npm
RUN npm i -g runtime-env-cra@0.2.2

# Copy build artifacts   
COPY --from=build /app/build /usr/share/nginx/html
COPY nginx.conf.template /etc/nginx/templates/nginx.conf.template

# Setup ENV values substitution
COPY .env.default .env

# Substitute vars and run
ADD docker-start.sh /
RUN chmod +x /docker-start.sh
CMD [ "/docker-start.sh" ]