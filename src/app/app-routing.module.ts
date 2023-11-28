import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Components
import { HomeComponent } from './components/home/home.component';
import { QrScannerComponent } from './components/qr-scanner/qr-scanner.component';
import { XlsxReaderComponent } from './components/xlsx-reader/xlsx-reader.component';
import { PruebaXlsxReaderComponent } from './components/prueba-xlsx-reader/prueba-xlsx-reader.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'home', component: HomeComponent},
  { path: 'qr-scanner', component: QrScannerComponent},
  { path: 'xlsx-reader', component: XlsxReaderComponent},
  { path: 'prueba-xlsx-reader', component: PruebaXlsxReaderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
