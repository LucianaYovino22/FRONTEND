export class persona {

    //con el id? declaro que no es necesario inicializarlo ya que sera autoincremental.
id?: number;
nombreP: string;
apellidoP: string;
imgP: string;
tituloP: string;
descP: string;


constructor(nombreP: string, apellidoP: string, imgP: string, tituloP: string, descP: string){
    this.nombreP = nombreP;
    this.apellidoP = apellidoP;
    this.imgP = imgP;
    this.tituloP = tituloP;
    this.descP = descP;
}
}