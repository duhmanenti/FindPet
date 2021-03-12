// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false ,
  firebase: {
    apiKey: "AIzaSyANYaHYZox2pqze_a6J4ZlsK4LKC_ww7Uk",
    authDomain: "findpet-db.firebaseapp.com",
    projectId: "findpet-db",
    storageBucket: "findpet-db.appspot.com",
    messagingSenderId: "190866091594",
    appId: "1:190866091594:web:5fb2552a10d904eb5440b3",
    measurementId: "G-KBRPPJKVNC"
  }
};

//firebase.initializeApp(firebaseConfig);
//firebase.analytics();

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
