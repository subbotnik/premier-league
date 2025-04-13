### Project Structure

```
- src: Main container of all the code inside the application
    - api: Methods to communicate with the backend
    - components: Folder to store common components that are used throughout the app
    - navigation: App navigation components.
    - screens: Screen components.
    - store: Redux configuration files (store, middlewares etc) and business logic modules.
    - App.tsx: Main component that starts the whole app
- ios android: Folders, containing native iOS and Android projects and everything related
- index.js: Entry point of the application as per React-Native standards
```

### Clone the repo and install dependencies

```sh
git clone git@github.com:subbotnik/premier-league.git

cd ./premier-league

yarn && cd ios && bundle install && bundle exec pod install && cd ..
```

### Start metro

```sh
yarn start
```

### Run the app

```sh
yarn ios
```
or
```sh
yarn android
```
Also i can run the app from the Xcode and Android Studio

## Additional info

### The architecture and approach

The architecture of the application appears to follow a React Native structure with a focus on modularity and state management.
