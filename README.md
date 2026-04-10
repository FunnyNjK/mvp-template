# MVP Template

Single-app Next.js MVP starter focused on fast delivery with clean boundaries.

## Requirements
- Node.js 24+
- pnpm

## Scripts
- `pnpm install`
- `pnpm dev`
- `pnpm lint`
- `pnpm typecheck`
- `pnpm test`
- `pnpm build`
- `docker compose up --build`

## Structure
- `src/app`: App Router routes (marketing + app)
- `src/features`: feature-oriented domain modules
- `src/server/services`: server-side business logic
- `src/server/repositories`: persistence layer
- `prisma`: database schema/migrations
- `docker`: local containerization assets

## Local Docker
- Start the app and PostgreSQL: `docker compose up --build`
- Open the app at `http://localhost:3000`
- Health endpoint: `http://localhost:3000/api/health`
- PostgreSQL is exposed at `localhost:5432`
