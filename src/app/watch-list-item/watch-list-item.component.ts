import { Component, Input, OnInit, Output ,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-watch-list-item',
  templateUrl: './watch-list-item.component.html',
  styleUrls: ['./watch-list-item.component.css',]
})
export class WatchListItemComponent implements OnInit {

  @Input() istop:boolean;
  @Input() isbottom:boolean;
  @Input() item;
  @Output() goU:EventEmitter<any>=new EventEmitter();
  @Output() goD:EventEmitter<any>=new EventEmitter();
  
  constructor() { }

  ngOnInit(): void {
  }

  clickU(){
    console.log('clicku');
    this.goU.emit(null);
  }

  clickD(){
    console.log('clickd');
    this.goD.emit(null);
  }
}
