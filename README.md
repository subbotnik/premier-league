### Clone the repo and install dependencies

```sh
git clone git@github.com:subbotnik/supreme-goggles.git

cd ./supreme-goggles

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

### Run tests

```sh
yarn test
```

## Additional info

### The architecture and approach

The architecture of the application appears to follow a React Native structure with a focus on modularity and state management.

### Possible performance bottlenecks and their mitigations

1. Redux State Management
   
   Potential Bottleneck: Redux can become a performance bottleneck if the state tree grows too large or if unnecessary re-renders occur due to improper state slicing or overuse of global state.
   
   Mitigation:
     1. Use selectors (e.g., reselect) to memoize derived state and avoid unnecessary computations.
     2. Ensure components only subscribe to the specific slices of state they need, reducing re-renders.
     3. Avoid storing non-essential or transient data (e.g., UI state) in Redux; instead, use local component state where appropriate.
     4. Probably use mobx, react context, or some another state manager which will be more 
2. redux-persist Rehydration

   Potential Bottleneck: The PersistGate component delays rendering until the persisted state is rehydrated, which could slow down app startup if the persisted state is large or complex.

   Mitigation:
   1. Optimize the persisted state by excluding non-critical or large data using the blacklist or whitelist options in redux-persist.
   2. Use a lightweight loading component in the PersistGate to improve perceived performance during rehydration.
3. Navigation (Router)

   Potential Bottleneck: If the Router component initializes a large number of screens or performs heavy computations during setup, it could slow down the app's initial render.

   Mitigation:
   1. Use lazy loading for screens in the navigation stack to defer loading until a screen is accessed.
   2. Optimize navigation transitions by using libraries like react-navigation with performance-focused configurations (e.g., enabling react-native-screens).
4. General Rendering Performance

   Potential Bottleneck: If the Router or other components render deeply nested or complex UI trees, it could impact performance.

   Mitigation:
   1. Use React.memo for components that do not need to re-render frequently.
   2. Profile the app using tools like React DevTools or Flipper to identify and optimize slow-rendering components.
5. Third-Party Libraries

   Potential Bottleneck: Libraries like redux-persist and react-native-safe-area-context can introduce overhead if not used efficiently.

   Mitigation:
   1. Regularly update libraries to their latest versions to benefit from performance improvements and bug fixes.
   2. Audit third-party dependencies to ensure they are necessary and optimized.




























