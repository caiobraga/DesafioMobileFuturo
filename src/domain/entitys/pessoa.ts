
export class Pessoa {
    private nome: string;
    private telefone: string;
    private email: string;
    
    constructor(nome: string, telefone: string, email: string) {
		this.nome = nome;
        this.telefone = telefone;
        this.email = email;
	}

    getNome(): string{
        return this.nome;
    }
    getTelefone(): string{
        return this.telefone;
    }
    getEmail(): string{
        return this.email;
    }

    isEmailValid<bool>(){  
        var regex = new RegExp('/^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i'); 

        /*
        foo.bar@gmail.com       true
        foo.bar@gmail.com.br    true
        foo.bar@gmail.com.br.br false
        foo.bar@gmail.          false
        foo.bar@gmailcom        false
        foo.bargmail.com        false
        @gmail.com              false
        */

        return regex.test(this.email);
    }

    isTelefoneValid<bool>(){
        var regex = new RegExp('^\(?[1-9]{2}\)? ?(?:[2-8]|9[1-9])[0-9]{3}\-?[0-9]{4}$');  //xx xxxxx-xxxx - parenteses e ifens opcionais

        return regex.test(this.telefone);
    }
}

