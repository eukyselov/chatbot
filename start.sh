npm install --prefix ./frontend
npm run build --prefix ./frontend
cp -R ./frontend/build ./backend/public/

docker-compose -f ./dockers/docker-compose.yml build
docker-compose -f ./dockers/docker-compose.yml up -d

npm install --prefix ./backend
npm run build --prefix ./backend
npm run start --prefix ./backend
