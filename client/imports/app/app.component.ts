import { Component, OnInit } from "@angular/core";
import { Title } from '@angular/platform-browser';
import { Platform } from 'ionic-angular';
//import { StatusBar } from 'ionic-native';
import { Meteor } from 'meteor/meteor';
import { InjectUser } from 'angular2-meteor-accounts-ui';
import { MeteorObservable } from 'meteor-rxjs';
import template from "./app.component.html";
import style from "./app.component.scss";

import { MainComponent } from "./main/main.component";

@InjectUser('user')
@Component({
  selector: "app",
  template,
  styles: [ style ]
})
export class AppComponent implements OnInit {
  rootPage: any;
  user = Meteor.user();

  constructor(platform: Platform, private title: Title) {
    this.rootPage =  MainComponent;
  }

  ngOnInit() {
    console.log(this.user);
    
    MeteorObservable.autorun().subscribe(() => {
      this.user = Meteor.user();
      console.log(this.user);
    });
    
  }

  

}
