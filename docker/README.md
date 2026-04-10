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

## Database Commands
- Generate Prisma client:
- `docker compose exec app sh -lc "pnpm db:generate"`
- Create and apply a migration:
- `docker compose exec app sh -lc "pnpm db:migrate"`
- Seed starter data:
- `docker compose exec app sh -lc "pnpm db:seed"`

## Auth Notes
- The compose stack provides local development values for `NEXTAUTH_URL` and `NEXTAUTH_SECRET`.
- OAuth provider credentials can be supplied from your local `.env` file when you are ready to enable sign-in.

## Notes
- The app container installs dependencies with `pnpm` inside Docker, so the host machine does not need local Node.js or pnpm to preview the scaffold.
- Docker is the recommended local workflow when Node.js or pnpm are not already installed on the host machine.
