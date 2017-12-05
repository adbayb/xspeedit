FROM node:carbon

# Create app directory
WORKDIR /usr/src/app

# Bundle app source
COPY . .

RUN npm install

EXPOSE 3000
CMD [ "npm", "install" ]
CMD [ "npm", "test" ]
