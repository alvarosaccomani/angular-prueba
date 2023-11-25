import { Component, Input } from '@angular/core';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-xlsx-reader',
  templateUrl: './xlsx-reader.component.html',
  styleUrls: ['./xlsx-reader.component.scss']
})
export class XlsxReaderComponent {

  @Input() config: any;

  public file: any;
  public arrayBuffer: any;
  public filelist: any;
  public titles: any;
  public rows: any = [];

  constructor() { }

  public addfile(event: any): void {
    this.file = event.target.files[0];
    let fileReader = new FileReader();
    fileReader.readAsArrayBuffer(this.file);
    fileReader.onload = (e) => {
        this.arrayBuffer = fileReader.result;
        var data = new Uint8Array(this.arrayBuffer);
        var arr = new Array();
        for(var i = 0; i != data.length; ++i) arr[i] = String.fromCharCode(data[i]);
        var bstr = arr.join("");
        var workbook = XLSX.read(bstr, { type:"binary" });
        var first_sheet_name = workbook.SheetNames[0];
        var worksheet = workbook.Sheets[first_sheet_name];
        console.log(XLSX.utils.sheet_to_json(worksheet, { raw: true, defval: null }));

        let arraylist = XLSX.utils.sheet_to_json(worksheet, { raw: true, defval: null });
            this.filelist = [];
            console.log(this.filelist);
            this.getRows(arraylist);
    }
  }

  private getRows(arraylist: any): void {
    arraylist.forEach((el: any, index: number) => {
      if(this.config.firsLineTitle) {
        if(index === 0) {
          this.titles = el;
         } else {
          Object.keys(el).forEach((item: any) => {
            this.renameProperty(el, /*oldName*/ item.trim(), this.titles[item.trim()]);
           });
          this.rows.push(el);
         }
       } else {
        Object.keys(el).forEach((item: any) => {
          this.renameProperty(el, /*oldName*/ item, item.trim());
         });
        this.rows.push(el);
       };
    });
    this.config.onRead(this.rows);
  }

  private renameProperty(object: any, oldName: string, newName: string) {
    // no hacer nada si los nombre son iguales
    if (oldName === newName) {
      return object;
    }
    // Verificar si ya existe la propiedad con el nombre nuevo y evitar errores.
    if (object.hasOwnProperty(oldName)) {
      object[newName] = object[oldName];
      delete object[oldName];
    }
    return object;
  }

}
