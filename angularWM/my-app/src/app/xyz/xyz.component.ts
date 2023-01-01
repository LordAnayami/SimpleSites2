import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-xyz',
  templateUrl: './xyz.component.html',
  styleUrls: ['./xyz.component.scss']
})
export class XyzComponent implements OnInit {
  flag = false;
  constructor() { }

  ngOnInit(): void {
  }


  show(): void{
    this.flag = !this.flag;
  }
}
