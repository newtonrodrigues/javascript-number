function comentarios(){
         //   ReactDOM.render(
    //    <p>Hello</p>, //o que será escrito
    //    document.getElementById('root')) // onde será escrito

//var elemento = document.getElementById("root")
//elemento.innerHTML = '<h1>Aqui Educa</h1>'
//console.log(`oi`)

//if (colisao()) {
  //  console.log("Os navios irão colidir")
//} else {
  //  console.log("Os navios não irão colidir")
//}

//function colisao(){
  //  return false
//}

//console.log(n)

// 0 navio vertical - 1 navio horizontal 
//console.log(posicoes)
}
var qtdeNavios = 6
var navios = []
var posicoes = []
var qtdeLinhas = 15
var qtdeColunas = 15
var totalCelulas = qtdeLinhas * qtdeColunas
var qtdeCelulasClicaveis = totalCelulas
var tamanhoNavio = 4
var cellInicialNavio1 = []
var cellInicialNavio2 = []
var score = {
    municao: 100,
    pontuacao: 0,
    sucesso: [],
    falha: []
}

var jogoFinalizado = false
document.getElementById("progressBar").max = score.municao
document.getElementById("progressBar").value = score.municao
setScore()

function setScore(){
    document.getElementById("municao").innerText = score.municao
    document.getElementById("sucesso").innerText = score.sucesso.length
    document.getElementById("falha").innerText = score.falha.length
    document.getElementById("progressBar").value = score.municao

    if (score.municao == 0 || score.sucesso.length == (qtdeNavios * tamanhoNavio)) {
        finalizarJogo()
    }

}

function atirar(elemento){

    var existe = false
    score.sucesso.map(celula => {
        if (celula == elemento) 
            existe = true
        
    })
    score.falha.map(celula => {
        if (celula == elemento) 
            existe = true    
        
    })
    if (!existe) {
        var navioEncontrado = false
        var posicaoNavioEncontrado = ''

        navio.map(navio => {
            navio.celulas.map(celula => {
                var stringCelula = convertCelulatoString(celula)

                if (elemento == stringCelula) {
                    navioEncontrado = true
                    posicaoNavioEncontrado = 'n' + String(navios.indexOf(navio)) 
                    + '.' + stringCelula
                    qtdeCelulasClicaveis -= 1
                }
            })
        })
        if (navioEncontrado) {
            score.sucesso.push(elemento)
            document.getElementById(elemento).className = "cellNavio"
            document.getElementById(posicaoNavioEncontrado).className = "cellNavio"
        } else {
            score.falha.push(elemento)
            document.getElementById(elemento).className = "cellAgua"
        }
        score.municao -= 1
        setScore()
    }
}

renderizarPlano()
definirPosicoes()
celulasNavios()

function renderizarPlano(){
    
    var linhas = ""
    var elemento = document.getElementById('plano')

    for (let indexLinha = 0; indexLinha < qtdeLinhas; indexLinha++) {
         
        linhas += "<tr>"
        
            for (let indexColuna = 0; indexColuna < qtdeColunas; indexColuna++) {
                
                linhas += `<td class="cell" style="cursor: pointer"
                          id="${indexLinha}.${indexColuna}"></td>`
            }
        
         linhas += "</tr>"
    }
    elemento.innerHTML = linhas
}

function definirPosicoes(){
    posicoes.push(Math.floor(Math.random() * 2))
    posicoes.push(Math.floor(Math.random() * 2))
    console.log(posicoes)
}

function celulasNavios(){

    switch (posicoes[0]) {
        case 0:
            var linha = Math.floor(Math.random() * (qtdeLinhas - tamanhoNavio ))
            cellInicialNavio1.push(linha)
            var coluna = Math.floor(Math.random() * qtdeColunas)
            cellInicialNavio1.push(coluna)
            break;
        case 1:
            var linha = Math.floor(Math.random() * qtdeLinhas)
            cellInicialNavio1.push(linha)
            var coluna = Math.floor(Math.random() * (qtdeColunas - tamanhoNavio))
            cellInicialNavio1.push(coluna)
        break;
    }

    switch (posicoes[1]) {
        case 0:
            var linha = Math.floor(Math.random() * (qtdeLinhas - tamanhoNavio ))
            cellInicialNavio2.push(linha)
            var coluna = Math.floor(Math.random() * qtdeColunas)
            cellInicialNavio2.push(coluna)
            break;
        case 1:
            var linha = Math.floor(Math.random() * qtdeLinhas)
            cellInicialNavio2.push(linha)
            var coluna = Math.floor(Math.random() * (qtdeColunas - tamanhoNavio))
            cellInicialNavio2.push(coluna)
        break;
    }
    console.log(cellInicialNavio1)
    console.log(cellInicialNavio2)
}