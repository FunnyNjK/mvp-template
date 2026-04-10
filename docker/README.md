# Docker

Local Docker assets for the MVP template live here.

## Current Stack
- `docker-compose.yml` at the repo root runs:
- Next.js app on `http://localhost:3000`
- PostgreSQL 18 on `localhost:5432`

## Start
- `docker compose up --build`

## Stop
- `docker compose down`

## Notes
- The app container installs dependencies with `pnpm` inside Docker, so the host machine does not need local Node.js or pnpm to preview the scaffold.
