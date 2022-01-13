# p-complect.ru website

## Requirements

### ENV

```

```

should be defined in .env.local

### ENV optionally

NEXT_PUBLIC_SENTRY_RELEASE=[version]

## Run

`yarn dev` – development
`yarn build` – production
`yarn start` – serve production

## Blog

## Deploy

- `ssh root@62.109.9.246`
- `cd p-complect.ru`
- `git pull`
- `yarn` (if needed)
- `yarn build && pm2 restart p-complect`
