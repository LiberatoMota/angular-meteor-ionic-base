import {Injectable, NgZone} from '@angular/core';
import { Meteor } from 'meteor/meteor';
import {MeteorObservable} from 'meteor-rxjs';
import {Subscription, Subject, Observable} from 'rxjs';
import * as SIP from "sip.js";

@Injectable()
export class SipJsService {

    sip : any;
    user = Meteor.user();

    constructor(private _sip : SIP) {
        this.sip = _sip;
        console.log(this.sip);
    }

    private config = {
        // EXAMPLE wsServers: "wss://my.websocketserver.com",
        wsServers: 'wss://liberato.mota@itcenter.onsip.com',
        uri: null,
        authorizationUser: null,
        password: null,
        // FILL IN THOSE VALUES ^

        userAgentString: 'cenas',
        traceSip: true
    };
}