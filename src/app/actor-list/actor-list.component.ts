import { Component, OnInit } from '@angular/core';
import { ActorListService } from './actor-list.service';

@Component({
  selector: 'app-actor-list',
  templateUrl: './actor-list.component.html',
  styleUrls: ['./actor-list.component.css']
})
export class ActorListComponent implements OnInit {

  actors;
  showDetails;

  constructor(private actorlistservice:ActorListService) { }

  ngOnInit(): void {

    this.actorlistservice.getActorList()
    .subscribe(actors => {
      this.actors = actors;
    })
    
  }

}
