# How to start
1. yarn install
2. yarn start
3. serve in localhost:3000
4.

```bash

cp .env.example .env

```

5. Auth0
  1. Go to Github
  2. Settings
  3. Developer Settings
  4. OAuth Apps
  5. Create OAuth App
  6. Fill in Application Name - Any name
  7. Fill in Homepage Url - http://localhost:3000
  8. Fill in Authorization callback URL - http://localhost:3000/api/auth/callback/github
  9. Copy Client ID into .env.local
  10. Copy Client Secrets into .env.local

# APIs provided from [TMDB](https://www.themoviedb.org/documentation/api)

``` javascript

/**
  Error in cloud server to catch remotely api (Image Component from nextj)
  Indicate whether to send a cookie in a cross-site request by specifying its SameSite attribute
  ## Solution, use pure img html to load the image

**/

```
