import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ChatMessagesService } from '../services';
import { ChatMessage } from '../models';

class ChatMessageFormModel {
  author: string;
  body: string;
}

@Component({
  selector: 'fc-chat-message-form',
  templateUrl: 'chat-message-form.component.html',
  styleUrls: ['chat-message-form.component.css']
})
export class ChatMessageFormComponent {
  @Input() roomId: string;


  constructor(public fb: FormBuilder) { 
    
  }
  saveMessage(){
    console.log('SAve Message!');
  }


}
