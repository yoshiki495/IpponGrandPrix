# IpponGrandPrix

## 開発環境について

1. docker image を作成する

```
~/IpponGrandPrix $ docker compose build
```

2. ./src/app/node_modules の作成

```
~/IpponGrandPrix $ docker-compose run --rm node sh -c "npm install -g create-react-app && create-react-app app"
```

3. コンテナ起動

```
~/IpponGrandPrix $ docker compose up
```

※少し時間がかかります

4. ブラウザに接続

[http://localhost:3000/](http://localhost:3000/)

## 設計図について

1. drawio を開く

[https://app.diagrams.net/](https://app.diagrams.net/)

2. main ブランチの Blueprint.drawio を選択
