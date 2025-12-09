# Development Dockerfile for Next.js (dev server). Mount project dir as volume when running.
FROM node:20-bullseye-slim

# Create app directory
WORKDIR /app

# Install pnpm if project uses it, otherwise npm will be used.
# If you use yarn/pnpm, update the install & run commands accordingly.
# RUN corepack enable

# Copy only package manifests first to leverage Docker cache
COPY package.json package-lock.json* pnpm-lock.yaml* yarn.lock* ./

# Install dependencies (uses npm ci by default; corepack chooses pnpm/yarn if lockfile present)
RUN if [ -f pnpm-lock.yaml ]; then corepack prepare pnpm@latest --activate && pnpm install --frozen-lockfile; \
    elif [ -f yarn.lock ]; then corepack prepare yarn@stable --activate && yarn install --frozen-lockfile; \
    else npm ci; fi

# Copy source
# COPY . .

# Expose Next.js default dev port
EXPOSE 3000

# Ensure Next dev server binds to all interfaces
ENV HOST=0.0.0.0
ENV NODE_ENV=development
# Enable polling so file changes on host are picked up by Next/chokidar inside container
ENV CHOKIDAR_USEPOLLING=true

# Default command for development
CMD ["npm", "run", "dev"]

# docker run -p 3000:3000 -v .:/app -v /app/node_modules --name uparticipa-home uparticipa-home