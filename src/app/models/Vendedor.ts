export class Vendedor{
    idVendedor?: string;
    nombre: String;
    whatsapp: String;
    fechaInicio: String;
    dinero: String;


    constructor(nombre: string, whatsapp: string, fechaInicio: string, dinero: string){
        this.nombre = nombre;
        this.whatsapp = whatsapp;
        this.fechaInicio = fechaInicio;
        this.dinero = dinero;
    }

    
}