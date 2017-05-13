import { Component, OnInit } from "@angular/core";
import { Title } from '@angular/platform-browser';
import { App, Platform, NavController, MenuController } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { Meteor } from 'meteor/meteor';
import { InjectUser } from 'angular2-meteor-accounts-ui';
import { MeteorObservable } from 'meteor-rxjs';
import template from "./app.component.html";
import style from "./app.component.scss";

import { MainComponent } from "./main/main.component";
import { SigninComponent } from "./auth/signin.component";
import { ProfileComponent } from "./user/profile.component";

@InjectUser('user')
@Component({
  selector: "app",
  template,
  styles: [ style ]
})
export class AppComponent implements OnInit {
  rootPage: any;
  user = Meteor.user();

  constructor(
    platform: Platform, 
    private _appCtrl: App,
    public menuCtrl: MenuController
    ) {
    this.rootPage =  MainComponent;
  }

  ngOnInit() {
    console.log(this.user);
    
    MeteorObservable.autorun().subscribe(() => {
      if (Meteor.loggingIn()) {
        return;
      }
      this.user = Meteor.user();
      console.log(this.user);
    });
    
  }

  goToPage(page:string){
    console.log("page",page);
    this.menuCtrl.close();
    let destination;
    switch (page) {
      case 'signin':
        destination = SigninComponent;
        break;
     case 'userProfile':
        destination = userProfile;
        break;
      default:
      destination = MainComponent;
        break;
    }
    this._appCtrl.getRootNav().push(destination);
  }

  

}
