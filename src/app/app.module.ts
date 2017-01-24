import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { AngularFireModule } from 'angularfire2';

import { AppComponent } from './app.component';
import { SelectRoomComponent } from './select-room/select-room.component';
import { ChatComponent } from './chat/chat.component';

const appRoutes: Routes = [
  { path: '', component: SelectRoomComponent, pathMatch: 'full' },
  { path: 'new', component: ChatComponent },
  { path: 'chat/:roomId', component: ChatComponent}
];

export const firebaseConfig = {
    apiKey: "AIzaSyCuyqGUpxSVXFhMHWz_XakPcerz0BBdaNQ",
    authDomain: "chatroom-f40f8.firebaseapp.com",
    databaseURL: "https://chatroom-f40f8.firebaseio.com",
    storageBucket: "chatroom-f40f8.appspot.com",
    messagingSenderId: "756240004778"
};

@NgModule({
  declarations: [
    AppComponent,
    SelectRoomComponent,
    ChatComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(firebaseConfig),
    BrowserModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }


