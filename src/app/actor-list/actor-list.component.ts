import { Component, OnInit } from '@angular/core';
import { ActorListService } from './actor-list.service';
import {ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-actor-list',
  templateUrl: './actor-list.component.html',
  styleUrls: ['./actor-list.component.css']
})
export class ActorListComponent implements OnInit {

  actors;
  showDetails:boolean=false;

  constructor(private actorlistservice:ActorListService,private route:ActivatedRoute) { }

  ngOnInit(): void {

    this.route.queryParams.subscribe(
      qps=>{
        if(!!qps.showDetails)
        {
          this.showDetails=true;
        }
        else{
          this.showDetails=false;
        }    
        this.actorlistservice.getActorList()
        .subscribe(actors => {
          this.actors = actors;
        })
      }
    )
    
  }

}
