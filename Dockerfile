############################
# STEP 1 build the project
############################
FROM node:14.1-alpine AS builder

# Create app directory
WORKDIR /usr/src/app
# Bundle app source
COPY . .
# Install app dependencies and build the project
RUN npm install && npm run build

################################
# STEP 2 build the final image
################################
FROM node:14.1-alpine

# Copying the built app
COPY --from=builder /usr/src/app /usr/src/app
# Using the app directory
WORKDIR /usr/src/app

EXPOSE 3000

CMD [ "npm", "run", "start:prod" ]