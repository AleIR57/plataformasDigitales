export class Gasto{
    idGasto?: string;
    codigoReferencia: String;
    cantidadPantallas: String;
    correos: String;
    productos: String;
    plataforma: String;
    precioTotal: String;
    fechaInicio: Date;
    fechaExpiracion: Date;
    formaPago: String;


    constructor(codigoReferencia: string, cantidadPantallas: string, correos: string, productos: string, plataforma: string, precioTotal: string, fechaInicio: Date, fechaExpiracion: Date, formaPago: string){
        this.codigoReferencia = codigoReferencia;
        this.cantidadPantallas = cantidadPantallas;
        this.correos = correos;
        this.productos = productos;
        this.plataforma = plataforma;
        this.precioTotal = precioTotal;
        this.fechaInicio = fechaInicio;
        this.fechaExpiracion = fechaExpiracion;
        this.formaPago = formaPago;
    }
    
}