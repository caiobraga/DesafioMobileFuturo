
export class Pessoa {
    private nome: string;
    private telefone: string;
    private email: string;
    
    constructor(nome: string, telefone: string, email: string) {
		this.nome = nome;
        this.email = email;
        let tel = telefone.replace(/[^\d]+/g,'');
        this.telefone = tel;
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
        var regex = new RegExp(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/, 'g'); 

        /*

        */

        return regex.test(this.email);
    }

    isTelefoneValid<bool>(){
        var regex = new RegExp('^[1-9]{2}[9]{0,1}[6-9]{1}[0-9]{3}[0-9]{4}$', 'g');

        /*xx xxxxx-xxxx - parenteses e ifens opcionais */

        return regex.test(this.telefone);
    }
}

