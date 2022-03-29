export class Cliente{
    idCliente?: string;
    nombre: String;
    whatsapp: String;
    fechaInicio: String;


    constructor(nombre: string, whatsapp: string, fechaInicio: string){
        this.nombre = nombre;
        this.whatsapp = whatsapp;
        this.fechaInicio = fechaInicio;
    }

    
}