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

3. 環境変数の設定

appディレクトリに移動

```
~/IpponGrandPrix $ cd app
```

local.env の作成

```
~/IpponGrandPrix/app $ touch local.env
```

local.env に以下を追加（ホストユーザーに教えてもらってください）

```
REACT_APP_FIREBASE_API_KEY=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
REACT_APP_FIREBASE_APP_ID=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
REACT_APP_FIREBASE_AUTH_DOMAIN=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
REACT_APP_FIREBASE_MEASUREMENT_ID=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
REACT_APP_FIREBASE_MESSAGE_SENDER_ID=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
REACT_APP_FIREBASE_PROJECT_ID=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
REACT_APP_FIREBASE_STORAGE_BUCKET=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```


4. コンテナ起動

```
~/IpponGrandPrix $ docker compose up
```

※少し時間がかかります

5. ブラウザに接続

[http://localhost:3000/](http://localhost:3000/)

## 設計図について

1. drawio を開く

[https://app.diagrams.net/](https://app.diagrams.net/)

2. main ブランチの Blueprint.drawio を選択
