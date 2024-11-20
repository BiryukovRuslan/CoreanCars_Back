### Установка зависимостей

npm i

### Docker container

docker run --name car -e POSTGRES_DB=car -e POSTGRES_USER=car -e POSTGRES_PASSWORD=car -p 5433:5432 -d postgres

### Новая таблица

npx sequelize-cli model:generate --name Car --attributes brand:string,model:string,year:string,mileage:number,image:string


