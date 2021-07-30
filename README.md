# How to start
1. yarn install
2.

```bash

cp .env.example .env.local

```

3. yarn start
4. serve in localhost:3000

5. Setup Github Auth0
  a. Go to Github

  b. Settings

  c. Developer Settings

  d. OAuth Apps

  e. Create OAuth App

  f. Fill in Application Name - Any name

  g. Fill in Homepage Url - http://localhost:3000

  h. Fill in Authorization callback URL - http://localhost:3000/api/auth/callback/github

  i. Copy Client ID into .env.local

  j. Copy Client Secrets into .env.local

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