
<img align="left" src="https://user-images.githubusercontent.com/72359805/231846346-e31e5690-df78-49f8-9bd6-6da5c58e0084.png" width="80">

<h1>Adding Firebase JavaScript SDK in my web app:</h1> 


### Step 1: Create a Firebase project and register your app
### Step 2: Install the SDK and initialize Firebase

#### Install Firebase using npm:

```
npm install firebase
```
#### Initialize Firebase in your app and create a Firebase App object:

```
import { initializeApp } from 'firebase/app';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  //...
};

const app = initializeApp(firebaseConfig);
```

### Step 3: Access Firebase in your app
```
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  //...
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Get a list of cities from your database
async function getCities(db) {
  const citiesCol = collection(db, 'cities');
  const citySnapshot = await getDocs(citiesCol);
  const cityList = citySnapshot.docs.map(doc => doc.data());
  return cityList;
}
```
