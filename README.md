# Dbrain/Handl Landing Page

## Requirements

### ENV

```
PRISMIC_API_TOKEN=[get on prismic.io]
PRISMIC_REPOSITORY_NAME=dbrain
PRISMIC_REPOSITORY_LOCALE="ru
```

should be defined in .env.local

### ENV optionally

NEXT_PUBLIC_SENTRY_RELEASE=[version]

## Run

`yarn dev` – development
`yarn build` – production
`yarn start` – serve production

## Blog

Blog is integrated with headless CMS prismic.io

## Deploy

1. Deploy to S3 – `yarn deploy`
2. Clear cloudfront cache – `yarn invalidate`

## AWS

### Clear cache at cloudfront:

`aws cloudfront create-invalidation --distribution-id E3EZY16SD9JYFJ --paths "/*"`

## Send mail

Lambda https://console.aws.amazon.com/lambda/home?region=us-east-1#/functions/dbrain-ses-sendmail?tab=configuration
