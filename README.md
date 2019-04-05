# Angular-PWA-Ionic
PWA using angular/ionic

### Installation

#### `Step 1` - clone the repo

```bash
$ git clone https://github.com/RemiRenard/Angular-PWA-Ionic.git
```

#### `Step 2` - cd in the repo

```bash
$ cd ./Angular-PWA-Ionic
```

#### `Step 3` - install dependencies

```bash
$ npm install
$ npm install --save-dev webpack-dev-server 
```

#### `Step 4` - run application

```bash
$ ng serve
```

In browser, open [http://localhost:4200]

### Use the service worker

#### `Step 1` - build the project

```bash
$ ng build --prod
```

#### `Step 2` - Serving with http-server

Because ng serve does not work with service workers, you must use a separate HTTP server to test your project locally. You can use any HTTP server. The example below uses the http-server package from npm. To reduce the possibility of conflicts and avoid serving stale content, test on a dedicated port and disable caching.
To serve the directory containing your web files with http-server, run the following command:

```bash
$ http-server -p 8080 -c-1 ./www/
```

### If you found a bug or some improvments, feel free to raise an issue and send a PR!
