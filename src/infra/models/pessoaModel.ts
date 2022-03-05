
export class PessoaModel {
    private nome: string;
    private telefone: string;
    private email: string;
    
    constructor(nome: string, telefone: string, email: string) {
		this.nome = nome;
        this.telefone = telefone;
        this.email = email;
	}

  getNome(){
    return this.nome;
  }

  getTelefone(){
    return this.telefone;
  }

  getEmail(){
    return this.email;
  }

   toMap(): Map<String, any> {
      const pessoaMap = new Map<String, any>();

      pessoaMap.set("nome", this.nome);
      pessoaMap.set("telefone", this.telefone);
      pessoaMap.set("email", this.email);
      
      
      return pessoaMap;
    }
  
    getPessoaModelfromMap(map: Map<String,any>) : PessoaModel {
      if (map == null) return null;
  
      return new PessoaModel(map['nome'], map['telefone'], map['email']);
    }
  
     toJson(): string {
        return JSON.stringify(Object.fromEntries(this.toMap()));
     }

    getPessoaModelFromJson(source: string) : PessoaModel {
      return this.getPessoaModelfromMap(JSON.parse(source));
    }
}

