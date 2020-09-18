import { Component } from '@angular/core';
import * as firebase from "firebase";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bookshelves';

  constructor() {
    const firebaseConfig = {
      apiKey: "AIzaSyAfjPVojzwXzroMbp_Q8ahIaZd4nRC4psU",
      authDomain: "bookshelves-1cfac.firebaseapp.com",
      databaseURL: "https://bookshelves-1cfac.firebaseio.com",
      projectId: "bookshelves-1cfac",
      storageBucket: "bookshelves-1cfac.appspot.com",
      messagingSenderId: "569035037898",
      appId: "1:569035037898:web:db8f99a15c8c23e60ea833",
      measurementId: "G-TERQFMCPW1"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

  }
}
