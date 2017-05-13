import { Component, OnInit} from "@angular/core";
import { Keyboard,LoadingController} from 'ionic-angular';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import template from "./profile.component.html";
import style from "./profile.component.scss";
import { Meteor} from 'meteor/meteor';
import {Accounts} from 'meteor/accounts-base';
import * as faker from 'faker';



@Component({
    selector: "profile",
    template,
    styles: [style]
})
export class ProfileComponent implements OnInit {

    constructor( ) {}

    ngOnInit() {
    }

    
}