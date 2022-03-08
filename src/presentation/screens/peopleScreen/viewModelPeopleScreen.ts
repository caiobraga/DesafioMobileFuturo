
export default class ViewModelPeopleScreen {
  
   nome: string;
   telefone: string;
   email: string;

  
  constructor(nome?: string, telefone?: string, email?: string) {
      this.nome = nome ? nome : "";
      this.telefone = telefone ? telefone : "";
      this.email = email ? email : "";
    }
  
  }