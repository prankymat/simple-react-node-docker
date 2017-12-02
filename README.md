# Simple REACT app running on Node

This project utilizes docker to serve the application.

## Getting Started for Development
```bash
docker-compose up    # spins up all the components and serve at port 8080
```

## Building and serving for Production
```bash
# rebuild production image
docker-compose -f docker-compose.yml build

# serve as production at port 8000
docker-compose -f docker-compose.yml up
```
