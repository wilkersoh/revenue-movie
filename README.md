# How to start
1. yarn install
2.

```bash

cp .env.example .env.local

```

3. yarn start
4. serve in localhost:3000

> Restart server if you updated .env.local file

# APIs provided from [TMDB](https://www.themoviedb.org/documentation/api)

``` javascript

/**
  Error in cloud server to catch remotely api (Image Component from nextj)
  Indicate whether to send a cookie in a cross-site request by specifying its SameSite attribute
  ## Solution, use pure img html to load the image

**/

```


# Server:
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