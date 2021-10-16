import {  OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Component } from '@angular/core';


@Component({
  selector: 'app-feed',
  templateUrl: './feed.page.html',
  styleUrls: ['./feed.page.scss'],
})
export class FeedPage implements OnInit {

  constructor( private menuCtrl: MenuController) { }

  ngOnInit() {
  } 
}
export class MenuExample {
   public selectdeIndex = 0;
   public feed = 0;
   
  constructor(private menu: MenuController) { }
  
    openFirst() {
      this.menu.enable(true, 'first');
      this.menu.open('first');
    }
  
    openEnd() {
      this.menu.open('end');
    }
  
    openCustom() {
      this.menu.enable(true, 'custom');
      this.menu.open('custom');
    }
  }