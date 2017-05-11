import "angular2-meteor-polyfills";

import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { enableProdMode } from "@angular/core";
import { MeteorObservable } from 'meteor-rxjs';
import { AppModule } from "./imports/app";

// enableProdMode();

Meteor.startup(() => {
  const sub = MeteorObservable.autorun().subscribe(() => {
    if (Meteor.loggingIn()) return;

    setTimeout(() => {
      sub.unsubscribe();
    });

    platformBrowserDynamic().bootstrapModule(AppModule);
  });
});
