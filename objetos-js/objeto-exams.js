export class Exam{
    constructor(answer, weight){
        this.answer = answer;
        this.weight = weight;
        this.exams = [];
        this.notas = [];
    }
    
    calc_nota = (dict) => {
            let nota = Object.keys(dict.values).reduce(
                (nota, questao) => (dict.values[questao] == this.answer.values[questao] ? nota + this.weight[questao] : nota 
                ), 0
            )
            this.notas.push(nota)
    }
    add = (dict) => {
        this.exams.push(dict)
        this.calc_nota(dict)
    }


    avg = () => {
        let soma = this.notas.reduce((acc, notas) => acc + notas, 0)
        return soma/(this.notas.length)
    }
    
    min = () => {
        this.notas.sort()
        return this.notas.filter((n) => n==this.notas[0])
    }

    max = () => {
        this.notas.sort()
        return this.notas.filter((n) => n==this.notas[(this.notas.length-1)])
    }
    
    lt = (valor) => {
        this.notas.sort()
        return this.notas.filter((n) => n<valor)
    }

    gt = (valor) => {
        this.notas.sort()
        return this.notas.filter((n) => n>valor)
    }

}

export default { Exam }