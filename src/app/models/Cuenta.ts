export class Cuenta{
    idCuenta?: string;
    correo: String;
    contrasena: String;
    fechaInicio: String;
    fechaExpiracion: String;
    link: String;
    pinPerfil1: String;
    pinPerfil2: String;
    pinPerfil3: String;
    pinPerfil4: String;
    pinPerfil5: String;
    estado: String;


    constructor(correo: string, contrasena: string, fechaInicio: string, fechaExpiracion: string, link: string, pinPerfil1: string, pinPerfil2: string, pinPerfil3: string, pinPerfil4: string, pinPerfil5: string, estado: string){
       this.correo = correo;
       this.contrasena = contrasena;
       this.fechaInicio = fechaInicio;
       this.fechaExpiracion = fechaExpiracion;
       this.link = link;
       this.pinPerfil1 = pinPerfil1;
       this.pinPerfil2 = pinPerfil2;
       this.pinPerfil3 = pinPerfil3;
       this.pinPerfil4 = pinPerfil4;
       this.pinPerfil5 = pinPerfil5;
       this.estado = estado;
    }

    
}