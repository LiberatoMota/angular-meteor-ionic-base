import {    Component,    OnInit} from "@angular/core";
import { Keyboard,LoadingController} from 'ionic-angular';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import template from "./signin.component.html";
import style from "./signin.component.scss";
import {    Meteor} from 'meteor/meteor';
import {Accounts} from 'meteor/accounts-base';
import * as faker from 'faker';



@Component({
    selector: "signin",
    template,
    styles: [style]
})
export class SigninComponent implements OnInit {

    signinForm: FormGroup;
    signupForm: FormGroup;
    showSignin: boolean = true;

    constructor(private _loadingCtrl: LoadingController, private _formBuilder: FormBuilder, private _keyboard: Keyboard, ) {}

    ngOnInit() {

        this.signinForm = this
            ._formBuilder
            .group({
                email: ['', Validators.required],
                password: ['', Validators.required]
            });

        this.signupForm = this
            ._formBuilder
            .group({
                email: ['', Validators.required],
                password: ['', Validators.required],
                username: ['', Validators.required]
            });
    }

    public signIn() {
        const loading = this
            ._loadingCtrl
            .create({
                // content: 'Please wait...'
            });
        loading.present();

        Meteor.loginWithPassword(this.signinForm.value.email, this.signinForm.value.password, (error) => {
            loading.dismiss();
            console.log("error", error);
            if (!error) {
                this
                    ._keyboard
                    .close();
            }
        })

    }

    public signUp() {
        const loading = this
            ._loadingCtrl
            .create({
                // content: 'Please wait...'
            });
        loading.present();

        const options = {
            username: this.signupForm.value.username,
            email: this.signupForm.value.email,
            password: this.signupForm.value.password,
            profile:{
                avatar: faker.fake("{{internet.avatar}}")
            }
            
        }

        Accounts.createUser(options, (error)=>{
            loading.dismiss();
            console.log("error", error);
            if (!error) {
                this._keyboard.close();
            }
        })
    }

    public signOut(){
        Meteor.logout();
    }
}