import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

//Modules
import { ZXingScannerModule } from '@zxing/ngx-scanner';

import { AppComponent } from './app.component';

//Components
import { HomeComponent } from './components/home/home.component';
import { QrScannerComponent } from './components/qr-scanner/qr-scanner.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    QrScannerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ZXingScannerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
