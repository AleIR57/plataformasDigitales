export class Venta{
    idVenta?: string;
    codigoReferencia: String;
    cantidadPantallas: String;
    correos: String;
    productos: String;
    idCliente: String;
    plataforma: String;
    precioTotal: String;
    fechaInicio: Date;
    fechaExpiracion: Date;
    tipo: String;
    formaPago: String;


    constructor(codigoReferencia: string, cantidadPantallas: string, correos: string, productos: string, idCliente: string, plataforma: string, precioTotal: string, fechaInicio: Date, fechaExpiracion: Date, tipo:string, formaPago: string){
        this.codigoReferencia = codigoReferencia;
        this.cantidadPantallas = cantidadPantallas;
        this.correos = correos;
        this.productos = productos;
        this.idCliente = idCliente;
        this.plataforma = plataforma;
        this.precioTotal = precioTotal;
        this.fechaInicio = fechaInicio;
        this.fechaExpiracion = fechaExpiracion;
        this.tipo = tipo;
        this.formaPago = formaPago;
    }

 


    

}