export class Login {
    private email: string = "";
    private password: string = "";

    constructor({ email, senha } : { email: string, senha: string }) {
        this.email = email,
        this.password = senha 
    }
}