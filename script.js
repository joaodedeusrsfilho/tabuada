function tabuada(){
    let numero = Number(document.querySelector('#inputNumero').value)
    let select = document.querySelector('#selectTabuada')

    if(numero == 0){
        alert('Digite numero valido!')
    }else{
        let contador = 1
        select.innerHTML = ``
        while(contador <= 10){
            let criandoOption = document.createElement('option')
            criandoOption.text = `${numero} x ${contador} = ${numero*contador}`
            select.appendChild(criandoOption)
            contador++
        }
    }




}