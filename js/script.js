function calcular(){
    let inputAcesso=document.getElementById('input-numero').value
    let sectionAcesso=document.getElementById('section-resultado')
    //verificar se o input está vazio
    if(inputAcesso==0){
        alert('[ERRO] digite um número!')
    }else{
        //será criando variavel contador
        let contador=1
        sectionAcesso.innerText=''
        while(contador<=10){
            //vai criar um elemento na section
            let criarElemento=document.createElement('option')
            //vai escrever valores no elemento
            //primeiro vamos converter o valor do input
            let inputValorReal=Number(inputAcesso)
            criarElemento.innerText=`${inputValorReal} x ${contador} = ${inputValorReal*contador}`
            //agora vai colocar o elemento criado na section
            sectionAcesso.appendChild(criarElemento)
            //incrementar contador
            contador++
            //por ultimo zerar a section para não mostrar tabuada uma em baixo da outra esse comando será implementado antes do laço while
        }
    }

}