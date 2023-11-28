import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

//Modules
import { ZXingScannerModule } from '@zxing/ngx-scanner';

import { AppComponent } from './app.component';

//Components
import { HomeComponent } from './components/home/home.component';
import { QrScannerComponent } from './components/qr-scanner/qr-scanner.component';
import { XlsxReaderComponent } from './components/xlsx-reader/xlsx-reader.component';
import { PruebaXlsxReaderComponent } from './components/prueba-xlsx-reader/prueba-xlsx-reader.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    QrScannerComponent,
    XlsxReaderComponent,
    PruebaXlsxReaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ZXingScannerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
