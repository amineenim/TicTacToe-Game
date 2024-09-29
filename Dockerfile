# use the official node js image 
FROM node:18

# set working directory
WORKDIR /usr/src/app

# copy package.json and install dependencies
COPY package-lock.json package.json ./
RUN npm install 

COPY . . 
# Set environment variable for polling
ENV WATCHPACK_POLLING=true

EXPOSE 3000

CMD ["npm", "start", "--", "--watch"]
