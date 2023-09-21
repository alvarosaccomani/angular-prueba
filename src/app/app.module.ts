import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

//Modules
import { ZXingScannerModule } from '@zxing/ngx-scanner';

import { AppComponent } from './app.component';

//Components
import { HomeComponent } from './components/home/home.component';
import { QrScannerComponent } from './components/qr-scanner/qr-scanner.component';
import { XlsxReaderComponent } from './components/xlsx-reader/xlsx-reader.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    QrScannerComponent,
    XlsxReaderComponent
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
