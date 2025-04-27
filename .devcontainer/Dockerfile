ARG VARIANT="22-bookworm"
# FROM mcr.microsoft.com/devcontainers/typescript-node:1-${VARIANT}

# Use a multi-stage build to keep the final image small
# First stage: build the Go application
FROM golang:latest as builder-go
WORKDIR /app
COPY go.mod go.sum ./
RUN go mod download
COPY . .
RUN go build -o myapp

# Second stage: build the Node.js application
FROM node:latest as builder-node
WORKDIR /app
COPY package*.json ./
# RUN npm install
# [Optional] Uncomment if you want to install an additional version
#  of node using nvm
ARG EXTRA_NODE_VERSION=18
RUN su node -c "source /usr/local/share/nvm/nvm.sh \
    && nvm install ${EXTRA_NODE_VERSION}"

COPY . .
RUN npm run build

# Final stage: create the runtime image
FROM alpine:latest
# Install necessary packages
RUN apk add --no-cache nodejs npm
WORKDIR /root/
COPY --from=builder-go /app/myapp ./
COPY --from=builder-node /app/dist ./static

# Expose ports if necessary
EXPOSE 8080
# Command to run both applications
CMD ["./myapp"]

RUN apt-get update && export DEBIAN_FRONTEND=noninteractive \
    && apt-get -y install --no-install-recommends npm

RUN sudo apt-get install gnupg2 -y

RUN npm install -g pnpm@latest-10

# COPY ./customScript.sh /tmp/scripts/customScript.sh
# RUN apt-get update && bash /tmp/scripts/customScript.sh
