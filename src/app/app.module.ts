import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { NgxBootstrapIconsModule, upload } from 'ngx-bootstrap-icons';
import { AppComponent } from './app.component';
import { HomeComponent } from './view/home/home.component';
import { AppHeaderComponent } from './view/app-header/app-header.component';
// import { DatePickerComponent } from './date-picker/date-picker.component';
// import { TestComponent } from './pages/test/test.component';
//import { HomeComponent } from './view/home/home.component';

// const icons = {
//   upload
// };
@NgModule({
  declarations: [
    AppComponent,
    //HomeComponent,
    // DatePickerComponent,
    // TestComponent,
    // HomeComponent,
  ],
  imports: [
    BrowserModule,
    //FormsModule,
    AppRoutingModule,
    // NgbModule,
    // //NgxBootstrapIconsModule.pick(icons),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
