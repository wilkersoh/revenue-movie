# How to start (without OAuth)
1. yarn install
2.
```javascript

cp .env.example .env.local

```
3. yarn start
4. serve in localhost:3000

# APIs provided from [TMDB](https://www.themoviedb.org/documentation/api)


```

# Selfpaths Server Info

1. Change package port to **3005**

### Current Github OAuth are serve in port 3000

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


### Selfpaths Server Error

``` javascript

/** Only Error in Cloud Server Side
  Error in cloud server to catch remotely api (Image Component from nextj)
  Indicate whether to send a cookie in a cross-site request by specifying its SameSite attribute
  ## Solution, use pure img html to load the image
**/

### Selfpaths Server need to setup database for OAuth (havn't done it yet)

