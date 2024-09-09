export class Negociacao {

    constructor(
        private _data: Date,
        public readonly quantidade: number,
        public readonly valor: number
    ) { }

    get data():Date{
        const data = new Date(this._data.getTime());
        return data;
    }
    
    get volume(): number {
        return this.quantidade * this.valor;
    }

    //vai retornar uma intancis dela mesma convertida
    public static criaDe(dataString:string, quantidadeString:string, valorString:string):Negociacao{
        const exp = /-/g; //Expressões regulares, 'g' de global
        const date = new Date(dataString.replace(exp, ","));
        const quantidade = parseInt(quantidadeString);
        const valor = parseFloat(valorString);
        return new Negociacao(date, quantidade, valor);
    }
}