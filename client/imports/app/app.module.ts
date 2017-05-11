import { NgModule } from "@angular/core";
import { IonicApp, IonicModule } from 'ionic-angular';
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { MainComponent } from "./main/main.component";
import { AccountsModule } from 'angular2-meteor-accounts-ui';


@NgModule({
  // Components, Pipes, Directive
  declarations: [
    AppComponent,
    MainComponent
  ],
  // Entry Components
  entryComponents: [
    AppComponent,
    MainComponent
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
