# ChatRooms
Create rooms and chat with firebase and angular 2

`$ npm install -g angular-cli`

`$ npm install`

`$ ng serve` - listen in localhost:42000

`$ ng build` - The build datas in the dist/ directory

##Custom App
- Create project in https://console.firebase.google.com
- Select project > Database > Rules
- replace text json 3 tree line =  ".read": "true"
- In dashboard select > Add Firebase to your web application
- Copy var config paste in const firebaseConfig data in app.module.ts
