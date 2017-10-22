# vue-debug-path サンプルプロジェクト
フロントプロジェクトのみ独立して開発・動作検証を行えるように、非productionビルド時のみ vue-router でパスを解決するようにしたものです。

Vue.js 2.5.2 と Spring Boot (spring-boot-starter-thymeleaf) 1.5.8 を利用。

## フロント側
* 非SPAで、ページ(≠URL)ごとに App クラス (Vue コンポーネント)を1つ持つ形式です。
* `vue-debug-path-front/src/router.ts` でルート定義とダミーパラメータを設定しています。
* Vue コンポーネント内では `$path.abs(...)` で URL を変換します。

## サーバ側
* `Model.addAttribute("appClass", クラス名)` でフロント側 App クラスを指定します。
* `Model.addAttribute("someParam", ...)` でパラメータを渡しています。
* パラメータの渡し方については、JSON 文字列で渡すとか、Thymeleaf 3 系のエスケープなしインライン処理を使う等すると、文字列以外のパラメータも柔軟に渡せます。

# 必要なもの
* JDK
* NPM
* Yarn (なくても良い)

# 実行方法
## フロント側
1. シェルを開いて下記のコマンドを実行
    ```bash
    git clone git@github.com:kuinaein/vue-debug-path.git
    cd vue-debug-path/vue-debug-path-front
    yarn install # npm install でも可
    npm run dev
    ```

## サーバ側
1. シェルを開いて下記のコマンドを実行
    ```bash
    git clone git@github.com:kuinaein/vue-debug-path.git
    cd vue-debug-path/vue-debug-path-front
    yarn install # npm install でも可
    npm run build
    cd ..
    ./gradlew bootRun
    ```
2. ブラウザで http://localhost:8080/actual-ctx/ を開く

# ライセンス
CC0 (**ただし、 vue-webpack-boilerplate テンプレート由来のものを除く**)

https://creativecommons.org/publicdomain/zero/1.0/deed.ja
