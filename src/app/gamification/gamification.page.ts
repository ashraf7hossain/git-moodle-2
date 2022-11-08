import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-gamification',
  templateUrl: './gamification.page.html',
  styleUrls: ['./gamification.page.scss'],
})
export class GamificationPage implements OnInit {

  constructor(private loc : Location) { }

  ngOnInit() {
  }

  goBack():void{
    this.loc.back();
  }

}
