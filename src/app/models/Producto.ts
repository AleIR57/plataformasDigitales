export class Cliente{
    idProducto?: string;
    nombre: String;
    precio1Pantalla: String;
    precio2Pantallas: String;
    precio3Pantallas: String;
    precio4Pantallas: String;


    constructor(nombre: string, precio1Pantalla: string, precio2Pantallas: string, precio3Pantallas: string, precio4Pantallas: string){
        this.nombre = nombre;
        this.precio1Pantalla = precio1Pantalla;
        this.precio2Pantallas = precio2Pantallas;
        this.precio3Pantallas = precio3Pantallas;
        this.precio4Pantallas = precio4Pantallas;
    }

    
}