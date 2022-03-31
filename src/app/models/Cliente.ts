export class Cliente{
    idCliente?: string;
    nombre: String;
    whatsapp: String;
    fechaInicio: String;
    estado: String;


    constructor(nombre: string, whatsapp: string, fechaInicio: string, estado: string){
        this.nombre = nombre;
        this.whatsapp = whatsapp;
        this.fechaInicio = fechaInicio;
        this.estado = estado;
    }

    
}