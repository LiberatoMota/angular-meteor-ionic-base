import { NgModule } from "@angular/core";
import { IonicApp, IonicModule, Platform,  } from "ionic-angular";
import { StatusBar, Splashscreen } from 'ionic-native';
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { MainComponent } from "./main/main.component";
import { AccountsModule } from 'angular2-meteor-accounts-ui';
import { SIGNIN_DECLARATIONS } from './auth'


@NgModule({
  // Components, Pipes, Directive
  declarations: [
    AppComponent,
    MainComponent,
    ...SIGNIN_DECLARATIONS
  ],
  // Entry Components
  entryComponents: [
    AppComponent,
    MainComponent,
    ...SIGNIN_DECLARATIONS
  ],
  // Providers
  providers: [
  //DemoDataService
  ],
  // Modules
  imports: [
    IonicModule.forRoot(AppComponent, {
      mode: 'ios',
    }),
    BrowserModule,
    AccountsModule
  ],
  // Main Component
  bootstrap: [IonicApp]
})
export class AppModule {
  constructor() {

  }
}
