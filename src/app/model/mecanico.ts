import { Taller } from "./taller";

export class Mecanico {
  id: number = 0;
  nameMecanico:string = "";
  emailMecanico:string = "";
  passwordMecanico:string = "";
  taller:Taller=new Taller();
}
