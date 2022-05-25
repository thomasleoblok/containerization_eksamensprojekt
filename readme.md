# Opret image

Hop ind i mappen
```bash
cd netbackendforeningsblog
```
Byg nyt image ud fra dockerfilen
```bash
docker build -t foreningsbloggen -f "./netbackendforeningsblog/Dockerfile" .
```
Tjek at imaget er oprettet korrekt

```bash
docker images
```

Lav en ny container af vores image (-d betyder detach)
```bash
docker run -ti -d -p 9090:80 foreningsblog_backend
```

Tjek at vores container er oprettet
```bash
docker ps
```
