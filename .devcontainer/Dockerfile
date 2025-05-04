# Base image: Official Go image based on Debian
FROM golang:1.24.2-bookworm

# Set environment variables
ENV GO111MODULE=on \
    CGO_ENABLED=1 \
    GOPATH=/home/user/go \
    GOMODCACHE=/home/user/go/pkg/mod \
    PATH=/home/user/go/bin:/usr/local/go/bin:/usr/local/node/bin:$PATH

# Install system dependencies
RUN apt-get update && apt-get install -y --no-install-recommends \
    curl git build-essential ca-certificates gnupg2 wget iputils-ping tree nmap sudo && \
    rm -rf /var/lib/apt/lists/*

# Install Node.js and pnpm
RUN curl -fsSL https://deb.nodesource.com/setup_18.x | bash - && \
    apt-get install -y nodejs && \
    npm install -g pnpm@latest

# Install swag command
RUN go install github.com/swaggo/swag/cmd/swag@latest

# Create a non-root user and add to sudoers
RUN groupadd -g 1000 user && \
    useradd -m -u 1000 -g 1000 -s /bin/bash user && \
    echo "user ALL=(ALL) NOPASSWD:ALL" >> /etc/sudoers

# Ensure the user owns their home directory
RUN chown -R user:user /home/user

# Set working directory
WORKDIR /workspace

# Switch to non-root user
USER user

# Expose application ports
EXPOSE 8081 4002
