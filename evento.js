//data do evento nao pode ser pode ser anterior a data artual
//participante tem que ser maior de 18 anos.
//listar partcipantes e palestrantes do evento.
//quantidade maxima 100 pessoas

let dataAtual = new Date(2021,06,12)
let dataEvento = new Date(2021,10,12)

if(dataEvento > dataAtual){
    console.log("Data disponivel, cadastro liberado!");

} else {
    console.log("Não é Possível Cadastrar um evento, Data de Cadastro Não Permitida")
}

let idade = 28;

if (idade >= 18) {
    console.log("Idade Permitida, É possivel realizar o cadastro")

} else {
    console.log("Idade mínima permitida 18 anos, Não é possível realizar o cadastro")
   
}

let ListaParticipantes = 97

if (ListaParticipantes < 100){ 
    console.log("É possível se cadastrar no evento, Participantes abaixo de 100")

} else {
    console.log("Quantidade Máxima de Inscritos Atingida, Limite de 100 participantes atingido!")
}

let palestrantes = [" Fulano"," Ciclano"," Beltrano"];
    console.log("Palestarntes do evento: "+palestrantes)

