# Simple REACT app running on Node

This project utilizes docker to serve the application.

## Building and serving for Production
```bash
# rebuild production image
docker-compose build

# serve as production at port 80
docker-compose up
```

Short hand for doing both in one line:
```bash
docker-compose up --build  # rebuilds image before starting the containers
```
