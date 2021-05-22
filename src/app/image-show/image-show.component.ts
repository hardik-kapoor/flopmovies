import { Component, Input, OnInit, Output , EventEmitter} from '@angular/core';

@Component({
  selector: 'app-image-show',
  templateUrl: './image-show.component.html',
  styleUrls: ['./image-show.component.css']
})

export class ImageShowComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input() index:number;
  @Input() flopList;
  @Input() isPlayed:boolean;
  @Output() clickImage=new EventEmitter();

  buttonClick()
  {
    if(!this.isPlayed)
      this.clickImage.emit(null);
  }
}
