import { Component, OnInit } from '@angular/core';
import {ActorListService} from '../actor-list/actor-list.service';

@Component({
  selector: 'app-actor-edit',
  templateUrl: './actor-edit.component.html',
  styles: [
  ]
})
export class ActorEditComponent implements OnInit {

  actor;
  constructor(private actorlistservice:ActorListService) { }

  ngOnInit(): void {
    let id=0;
    this.actorlistservice.getActor(id).subscribe(ret=>{
      this.actor=ret;
    })
  }

}
