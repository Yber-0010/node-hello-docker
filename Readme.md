### expres
- comandos ejecutados
1. npm init -y
2. npm i express dotenv
3. node app.js

- requisitos con nodemon
1. npm install -g nodemon
2. nodemon app

- con dockerfile
1. build
``` docker build -t node20:v0.0.0 -f Dockerfile.dev . ```
2. run
``` docker run -dp 3000:3000 --name express -v .:/home/app node20:v0.0.0 ```
- con docker compose
1. build run
``` docker compose -f docker-compose-dev.yml up -d ```
