FROM node:11-alpine
COPY ./ /app/
WORKDIR /app
RUN npm install
RUN npm build
CMD ["node", "client-express.js"]