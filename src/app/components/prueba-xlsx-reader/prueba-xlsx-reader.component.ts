import { Component } from '@angular/core';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-prueba-xlsx-reader',
  templateUrl: './prueba-xlsx-reader.component.html',
  styleUrls: ['./prueba-xlsx-reader.component.scss']
})
export class PruebaXlsxReaderComponent {

  public step = 1;
  public tipoComprobante: any = "Todos";
  public tiposCompPrologue: any = [
    {
      id: -2,
      name: 'Todos',
      idAFIP: null
    }/*,
    {
      id: -1,
      name: 'Solo Fiscales',
      idAFIP: null
    }*/,
    {
      id: 0,
      name: 'Planilla d',
      idAFIP: null
    },
    {
      id: 1,
      name: 'Factura A',
      idAFIP: 1
    },
    {
      id: 2,
      name: 'N.Crédito',
      idAFIP: null
    },
    {
      id: 2,
      name: 'N.Crédito A',
      idAFIP: 3
    },
    {
      id: 3,
      name: 'Factura C',
      idAFIP: 11
    },
    {
      id: 4,
      name: 'Recibo C',
      idAFIP: 15
    },
    {
      id: 5,
      name: 'N.Débito A',
      idAFIP: 2
    }
  ]

  private columnsAFIPConf: any = [
    {
      name: "Fecha",
      caption: "Fecha",
      datatype: "date",
      style: {
        'width.px': 120,
        'max-width.px': 120
      },
      width: "120px"
    },
    {
      name: "Tipo",
      caption: "Tipo",
      datatype: "string",
      style: {
        'width.px': 200,
        'max-width.px': 200
      },
      width: "200px"
    },
    {
      name: "Punto de Venta",
      caption: "Punto de Venta",
      datatype: "int",
      style: {
        'width.px': 100,
        'max-width.px': 100
      },
      width: "100px",
      format: "0000"
    },
    {
      name: "Número Desde",
      caption: "Número Desde",
      datatype: "int",
      style: {
        'width.px': 130,
        'max-width.px': 130
      },
      width: "130px",
      format: "00000000"
    },
    {
      name: "Número Hasta",
      caption: "Número Hasta",
      datatype: "int",
      style: {
        'width.px': 130,
        'max-width.px': 130
      },
      width: "130px",
      format: "00000000"
    },
    {
      name: "Cód. Autorización",
      caption: "Cód. Autorización",
      datatype: "string",
      style: {
        'width.px': 150,
        'max-width.px': 150
      },
      width: "150px"
    },
    {
      name: "Tipo Doc. Emisor",
      caption: "Tipo Doc. Emisor",
      style: {
        'width.px': 150,
        'max-width.px': 150
      },
      width: "150px"
    },
    {
      name: "Nro. Doc. Emisor",
      caption: "Nro. Doc. Emisor",
      style: {
        'width.px': 150,
        'max-width.px': 150
      },
      width: "150px"
    },
    {
      name: "Denominación Emisor",
      caption: "Denominación Emisor",
      style: {
        'width.px': 250,
        'max-width.px': 250
      },
      width: "250px"
    },
    {
      name: "Tipo Cambio",
      caption: "Tipo Cambio",
      style: {
        header: {
          'width.px': 100,
          'max-width.px': 100,
          'text-align': 'center'
        },
        data: {
          'width.px': 100,
          'max-width.px': 100,
          'text-align': 'right'
        },
      },
      width: "100px"
    },
    {
      name: "Moneda",
      caption: "Moneda",
      style: {
        header: {
          'width.px': 100,
          'max-width.px': 100,
          'text-align': 'left'
        },
        data: {
          'width.px': 100,
          'max-width.px': 100,
          'text-align': 'right'
        },
      },
      width: "100px"
    },
    {
      name: "Imp. Neto Gravado",
      caption: "Imp. Neto Gravado",
      style: {
        header: {
          'width.px': 100,
          'max-width.px': 100,
          'text-align': 'center'
        },
        data: {
          'width.px': 100,
          'max-width.px': 100,
          'text-align': 'right'
        },
      },
      width: "100px"
    },
    {
      name: "Imp. Neto No Gravado",
      caption: "Imp. Neto No Gravado",
      style: {
        header: {
          'width.px': 100,
          'max-width.px': 100,
          'text-align': 'center'
        },
        data: {
          'width.px': 100,
          'max-width.px': 100,
          'text-align': 'right'
        },
      },
      width: "100px"
    },
    {
      name: "Imp. Op. Exentas",
      caption: "Imp. Op. Exentas",
      style: {
        header: {
          'width.px': 100,
          'max-width.px': 100,
          'text-align': 'center'
        },
        data: {
          'width.px': 100,
          'max-width.px': 100,
          'text-align': 'right'
        },
      },
      width: "100px"
    },
    {
      name: "IVA",
      caption: "IVA",
      style: {
        header: {
          'width.px': 100,
          'max-width.px': 100,
          'text-align': 'center'
        },
        data: {
          'width.px': 100,
          'max-width.px': 100,
          'text-align': 'right'
        },
      },
      width: "100px"
    },
    {
      name: "Imp. Total",
      caption: "Imp. Total",
      style: {
        header: {
          'width.px': 100,
          'max-width.px': 100,
          'text-align': 'center'
        },
        data: {
          'width.px': 100,
          'max-width.px': 100,
          'text-align': 'right'
        },
      },
      width: "100px"
    }
  ];

  public comprobantesAFIP: any = [];
  public configCtevtaAFIP: any = {
    firsLineTitle: true,
    columns: this.columnsAFIPConf,
    onRead: (data: any) => {
      this.comprobantesAFIP = data;
      this.comprobantesAFIP.forEach((elem: any) => {
        let ctePrologue = this.tiposCompPrologue.find((tcp: any) => (tcp.idAFIP === parseInt(elem["Tipo"].substring(0, elem["Tipo"].indexOf("-")).trim())));
        if(ctePrologue) {
          elem["Comprobante"] = `${ctePrologue.name} ${this.convertirAFormato(elem['Punto de Venta'], '0000')}-${this.convertirAFormato(elem['Número Desde'], '00000000')}`;
        } else {
          elem["Comprobante"] = null;
        }
      });
      console.info(this.comprobantesAFIP);
    }
  };
  public comprobantesPrologueFilter: any = [];
  public comprobantesPrologue: any = [];
  public configCtevtaPrologue: any = {
    firsLineTitle: false,
    columns: [
      {
        name: "Fecha",
        caption: "Fecha"
      },
      {
        name: "Comprobante",
        caption: "Comprobante"
      },
      {
        name: "Nombre",
        caption: "Nombre"
      },
      {
        name: "Cuit",
        caption: "CUIT"
      },
      {
        name: "Iv",
        caption: "Iv"
      },
      {
        name: "tc",
        caption: "tc"
      },
      {
        name: "Tasa",
        caption: "Tasa"
      },
      {
        name: "Gravado",
        caption: "Gravado"
      },
      {
        name: "NoGravado",
        caption: "NoGravado"
      },
      {
        name: "PerIbr",
        caption: "PerIbr"
      },
      {
        name: "Impuestos",
        caption: "Impuestos"
      },
      {
        name: "Iva",
        caption: "Iva"
      },
      {
        name: "PercepIVA",
        caption: "PercepIVA"
      },
      {
        name: "RetenIVA",
        caption: "RetenIVA"
      },
      {
        name: "Total",
        caption: "Total"
      }
    ],
    onRead: (data: any) => {
      let ctes: any = [];
      this.comprobantesPrologue = data;
      this.comprobantesPrologue.forEach((elem: any) => {
        if(elem["Comprobante"].indexOf("N.Crédito") >= 0) {
          elem["Comprobante"] = this.obtieneTipoNC(elem["Comprobante"], elem["Iv"]);
         };
        ctes.push(elem["Comprobante"].replace(/\d+/g,'').replaceAll('-','').trim());
      });
      this.comprobantesPrologueFilter = data;
      //console.info(ctes);
      let unique = [...new Set(ctes)];
      console.info(unique);
    }
  };
  public diferenciasComp: any = [];
  public configDiferenciasComp: any = {
    firsLineTitle: false,
    columns: this.columnsAFIPConf,/*[
      {
        name: "Fecha",
        caption: "Fecha",
        datatype: "date",
        width: "120px"
      },
      {
        name: "Tipo",
        caption: "Tipo",
        datatype: "string",
        width: "200px"
      },
      {
        name: "Punto de Venta",
        caption: "Punto de Venta",
        datatype: "int",
        width: "100px",
        format: "0000"
      },
      {
        name: "Número Desde",
        caption: "Número Desde",
        datatype: "int",
        width: "130px",
        format: "00000000"
      },
      {
        name: "Número Hasta",
        caption: "Número Hasta",
        datatype: "int",
        width: "130px",
        format: "00000000"
      },
      {
        name: "Cód. Autorización",
        caption: "Cód. Autorización",
        datatype: "string",
      },
      {
        name: "Tipo Doc. Emisor",
        caption: "Tipo Doc. Emisor"
      },
      {
        name: "Nro. Doc. Emisor",
        caption: "Nro. Doc. Emisor"
      },
      {
        name: "Denominación Emisor",
        caption: "Denominación Emisor"
      },
      {
        name: "Tipo Cambio",
        caption: "Tipo Cambio"
      },
      {
        name: "Moneda",
        caption: "Moneda"
      },
      {
        name: "Imp. Neto Gravado",
        caption: "Imp. Neto Gravado"
      },
      {
        name: "Imp. Neto No Gravado",
        caption: "Imp. Neto No Gravado"
      },
      {
        name: "Imp. Op. Exentas",
        caption: "Imp. Op. Exentas"
      },
      {
        name: "IVA",
        caption: "IVA"
      },
      {
        name: "Imp. Total",
        caption: "Imp. Total"
      }
    ]*/
  };

  public convertirAFormato(numero: number, format: string): string {
    const numeroEntero: number = Math.floor(numero);
    const numeroFormateado: string = numeroEntero.toString().padStart(format.length, '0');
    return numeroFormateado;
  }

  private obtieneTipoNC(tipoComp: string, tipoResp: string): string {
    switch(tipoResp) {
      case 'RI':
        tipoComp = tipoComp.replaceAll("N.Crédito  ", "N.Crédito A ");
        break;
      case 'MO':
        tipoComp = tipoComp.replaceAll("N.Crédito  ", "N.Crédito C ");
        break;
      case "EX":
        tipoComp = tipoComp.replaceAll("N.Crédito  ", "N.Crédito A ");
        break;
    }
    return tipoComp;
  }

  public filtrarComprobantes(): void {
    if(this.tipoComprobante !== 'Todos') {
      this.comprobantesPrologueFilter = this.comprobantesPrologue.filter((elem: any) => {
        return (elem["Comprobante"].replace(/\d+/g,'').replaceAll('-','').trim() === this.tipoComprobante)
       });
    } else if(this.tipoComprobante === 'Solo Fiscales') {

    } else {
      this.comprobantesPrologueFilter = this.comprobantesPrologue;
    }
  }

  public next(): void {
    this.step++;
  }

  public back(): void {
    this.step--;
  }

  public compararComprobantes(): void {
    this.comprobantesAFIP.forEach((elem: any) => {
      let filter = this.comprobantesPrologueFilter.filter((cte: any) => {
        return (cte["Comprobante"]?.replaceAll('  ',' ').trim() === elem["Comprobante"]?.replaceAll('  ',' ').trim())
                && (cte["Cuit"]?.toString().replaceAll('-','').trim() === elem["Nro. Doc. Emisor"]?.toString().replaceAll('-','').trim())
      });
      if(!filter.length) {
        this.diferenciasComp.push(elem);
      }
    });
    //let array: any = this.filtrarElementos(this.comprobantesPrologueFilter, this.comprobantesAFIP)
    //console.info(array);
    this.next();
  }

  private filtrarElementos(baseArray: any[], elementosAFiltrar: any[]): any[] {
    debugger;
    return baseArray.filter(item => !elementosAFiltrar.includes(item["Comprobante"]));
  }

  public exportarComprobantes(): void {
    let fileName = `ComprobantesCompras_${new Date().getFullYear()}${new Date().getMonth()}${new Date().getDay()}`

    /* table id is passed over here */
    let element = document.getElementById('diferencias-comp');
    const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element, { dateNF: 'yyyy-mm-dd;@', cellDates: true/*, raw: true*/ });

    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Hoja1');

    /* save to file */
    XLSX.writeFile(wb, fileName);

  }

}
