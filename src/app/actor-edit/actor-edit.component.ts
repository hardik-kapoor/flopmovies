import { Component, OnInit } from '@angular/core';
import {ActorListService} from '../actor-list/actor-list.service';
import { ActivatedRoute, Router } from '@angular/router'

@Component({
  selector: 'app-actor-edit',
  templateUrl: './actor-edit.component.html',
  styleUrls: ['../../../node_modules/bootstrap/dist/css/bootstrap.css'],
})
export class ActorEditComponent implements OnInit {

  actor;
  constructor(private actorlistservice:ActorListService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(ret=>{
      let id=ret.get('id');
      this.actorlistservice.getActor(+id).subscribe(ret=>{
        this.actor=ret;
      })
    })
  }

  onCancelClick(){
    this.router.navigate(["/actors"]);
  }

}
