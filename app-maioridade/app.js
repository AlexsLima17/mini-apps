/**
 * Validação da maioridade
 * @author Alex Lima
 */

//função para validação de maioridade
function validar(event) {
    //a linha abaixo desabilita p comportamento padrão de envio do formulário
    event.preventDefault()
    //alert("teste de envio")
    let nome = document.getElementById('nome').value    
    //alerta(nome)
    //console.log(nome)
    let idade = document.getElementById('idade').value
    document.getElementById('aluno').value = `Aluno : ${nome}`

    if (idade < 18) {
        document.getElementById('status').value = "Menor de Idade"
    }else{
        document.getElementById('status').value = "Maior de idade"
    }
    
}