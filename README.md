# How to start with OAuth (Something wrong with yarn build, yarn start in OAuth)
1.

```bash

cp .env.example .env.local

```
2. yarn install
3. yarn dev (Don't use yarn build && yarn start)
4. serve in localhost:3000

> Restart server if you updated .env.local file


# Take note, I'll removed my GITHUB KEY after Aug 04


# APIs provided from [TMDB](https://www.themoviedb.org/documentation/api)


``` javascript

/** Only Error in Cloud Server Side
  Error in cloud server to catch remotely api (Image Component from nextj)
  Indicate whether to send a cookie in a cross-site request by specifying its SameSite attribute
  ## Solution, use pure img html to load the image
**/

```

# Server info:
1. Change package port to **3005**

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start -p 3005",
    "pm2": "pm2"
  },
}
```