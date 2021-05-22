import { Component, OnInit } from '@angular/core';
import { FLOP_DATA } from '../../assets/FLOP_DATA';


@Component({
  selector: 'app-random-flop',
  templateUrl: './random-flop.component.html',
  styleUrls: ['./random-flop.component.css']
})
export class RandomFlopComponent implements OnInit {

  constructor() { }

  flopData=FLOP_DATA;
  isPlayed:boolean=false;
  ind:number[]=[0,1];
  showString:string="";

  calind()
  {
    do
    {
      this.ind[0]=Math.floor(Math.random()*14);
      this.ind[1]=Math.floor(Math.random()*14);
    }while(this.ind[0]===this.ind[1]);
  }

  ngOnInit()
  {
    this.calind();
  }

  imageClicked(whichIndex:number){
    this.isPlayed=true;
    let notIndex:number=1-whichIndex;
    console.log(this.flopData[this.ind[whichIndex]].stars);
    console.log(this.flopData[this.ind[notIndex]].stars);
    if(this.flopData[this.ind[whichIndex]].stars<this.flopData[this.ind[notIndex]].stars)
    {
      this.showString="Correct";
      console.log("correct");
    }
    else if(this.flopData[this.ind[whichIndex]].stars>this.flopData[this.ind[notIndex]].stars)
    {
      this.showString="Wrong";
      console.log("wrong");
    }
    else{
      this.showString="Both have the same Stars";
      console.log("third");
    }
  }

  playAgain(){
    this.isPlayed=false;
    this.showString="";
    this.calind();
  }
}
