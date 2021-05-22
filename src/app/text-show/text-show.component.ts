import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-text-show',
  templateUrl: './text-show.component.html',
  styleUrls: ['./text-show.component.css']
})
export class TextShowComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() inputString:string;
  @Input() isHidden:boolean;

}
