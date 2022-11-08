import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FirebaseService } from './services/firebase.service';
import { StyleCompiler } from '@angular/compiler';

@Component({
  selector: 'app-gamification',
  templateUrl: './gamification.page.html',
  styleUrls: ['./gamification.page.scss'],
})
export class GamificationPage implements OnInit {

  constructor(private fire: FirebaseService) { }
  data:any;
  progressBar: any;
  ngOnInit() {
    this.fire.getTodos().subscribe((res:any)=>{
      this.data = res.map((re:any)=>{
        return {...re,styles: this.Styler(re.level)}
      })
      console.log(this.data);
    });

  }
  Styler(width:number){
    return {
      'width' : `${width * 35}px`,
      'height' : '20px',
      'background-color' : 'red',
      'border-radius' : '5px'
    }
  }



}
