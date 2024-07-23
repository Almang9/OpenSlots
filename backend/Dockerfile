# syntax=docker/dockerfile:1

ARG NODE_VERSION=20.15.1

FROM node:${NODE_VERSION}-alpine

# Use production node environment by default.
ENV NODE_ENV production

WORKDIR /usr/src/open-slots-backend

# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./

RUN npm install

COPY . .

# Run the application as a non-root user.
RUN  chown -R node /usr/src/open-slots-backend
USER node
# Creates a "dist" folder with the production build
RUN npm run build
# Start the server using the production build
CMD [ "node", "dist/main.js" ]

