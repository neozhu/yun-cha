FROM node:20-alpine AS base
WORKDIR /app
ENV NEXT_TELEMETRY_DISABLED=1

# Install dependencies
FROM base AS deps
RUN corepack enable
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
RUN pnpm install --frozen-lockfile

# Build
FROM deps AS builder
COPY . .
RUN pnpm run build

# Production runtime
FROM base AS runner
ENV NODE_ENV=production
RUN corepack enable
COPY --from=builder /app/package.json /app/pnpm-lock.yaml /app/pnpm-workspace.yaml /app/next.config.ts /app/tsconfig.json /app/postcss.config.mjs /app/
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
# Install only production deps to satisfy next start
RUN pnpm install --frozen-lockfile --prod --ignore-scripts

EXPOSE 3000
CMD ["pnpm", "start"]
