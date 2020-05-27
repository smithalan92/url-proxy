# URL Proxy

A simple GET url proxy that runs on port 3400 with no CORS restrictions.

---

## /image?url=
### Usage
```
/image?url=http://xxxxx.(jpg|png|gif|jpeg)
```
Proxies the request to get the image, downloads the image, encodes it as base64 and returns a json response with 

```
{
    img: 'data:image/${imageExt};base64, xxxxxxx'
}
```

Demo: http://urlproxy.mralansmith.com/image?url=https://help.github.com/assets/images/help/releases/releases-overview.png

---

## /json?url=
### Usage
```
/json?url=http://xxxx.json
```

Proxies the request to the given URL and returns the original response.


Demo: http://urlproxy.mralansmith.com/json?url=http://reddit.com/r/github.json