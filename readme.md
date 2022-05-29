# Byg og kør docker-compose
Start med at få docker-compose til at bygge vores shared-network
```bash
docker-compose build
```

Start vores shared-network
```bash
docker-compose up
```

## Opret backend image

Hop ind i mappen
```bash
cd backend
```
Byg nyt image ud fra dockerfilen
```bash
docker build -t foreningsblog_backend -f "./netbackendforeningsblog/Dockerfile" .
```
Tjek at imaget er oprettet korrekt

```bash
docker images
```

Lav en ny container af vores image (-d betyder detach)
```bash
docker run -ti -d -p 7282:80 foreningsblog_backend
```

Tjek at vores container er oprettet
```bash
docker ps
```

## Opret frontend image

Hop ind i mappen
```bash
cd foreningsblognetfrontend
```
Byg nyt image ud fra dockerfilen
```bash
docker build -t foreningsblog_frontend .
```
Tjek at imaget er oprettet korrekt

```bash
docker images
```

Lav en ny container af vores image (-d betyder detach)
```bash
docker run -ti -d -p 8080:80 foreningsblog_frontend
```

Tjek at vores container er oprettet
```bash
docker ps
```