# Sets official Node.js as the base image in our application
FROM node:14

# Sets working directory inside the container(where our application files will be copied)
WORKDIR /app

# Copying package.json and package-lock.json
COPY package*.json ./

# Installing application dependencies
RUN npm install

# Copying all files to container
COPY . .

# Exposes port 3000(wherer our application listen on)
EXPOSE 3000

# execute the application
CMD ["node", "app.js"]