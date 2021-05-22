import { Component, OnInit } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { WATCH_LIST } from '../../assets/data'

@Component({
  selector: 'app-watch-list',
  templateUrl: './watch-list.component.html',
  styleUrls: ['./watch-list.component.css']
})
export class WatchListComponent implements OnInit {

  watchList=WATCH_LIST;
  end:number=4;

  constructor(private titleService: Title){}

  ngOnInit(){
  }
  swap(index1:number,index2:number)
  {
    let temp1=this.watchList[index1];
    let temp2=this.watchList[index2];
    this.watchList[index1]=temp2;
    this.watchList[index2]=temp1;
  }

  goUp(index:number)
  {
    this.swap(index,index-1);
  }

  goDown(index:number)
  {
    this.swap(index,index+1);
  }

  showAllClick()
  {
    this.end=6;
  }
}
