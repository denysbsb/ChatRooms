import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ChatMessage } from '../models';

import { AngularFire } from 'angularfire2';

@Component({
  selector: 'fc-chat-message-list',
  templateUrl: 'chat-message-list.component.html',
  styleUrls: ['chat-message-list.component.css']
})
export class ChatMessageListComponent implements OnInit {
  @Input() roomId: string;
  leva:any;

  constructor( private _af: AngularFire) { }

  ngOnInit(){
    this.leva = this._af.database.list('/messages/' , {
    query: {
        orderByChild: 'room',
        equalTo: this.roomId
    }
});

     console.log(this.roomId);
     console.log(this.leva);
  }
  


}
