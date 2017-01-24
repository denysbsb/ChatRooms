import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';

import { AppComponent } from './app.component';


export const firebaseConfig = {
    apiKey: "AIzaSyCuyqGUpxSVXFhMHWz_XakPcerz0BBdaNQ",
    authDomain: "chatroom-f40f8.firebaseapp.com",
    databaseURL: "https://chatroom-f40f8.firebaseio.com",
    storageBucket: "chatroom-f40f8.appspot.com",
    messagingSenderId: "756240004778"
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AngularFireModule.initializeApp(firebaseConfig),
    BrowserModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
