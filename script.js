function verificar() {
    let dia = document.querySelector('#dia').value
    const placa = document.querySelector('#placa').value
    const p = document.querySelector('p')
    let pode_semana = false
    let pode_viaver = false
    let pode_vialitrofe = false
    dia = dia.toLowerCase()

    if ((placa == 1 || placa == 2) && (dia == "segunda")) {
    } else if ((placa == 3 || placa == 4) && (dia == "terça")) {
    } else if ((placa == 5 || placa == 6) && (dia == "quarta")) {
    } else if ((placa == 7 || placa == 8) && (dia == "quinta")) {
    } else if ((placa == 9 || placa == 0) && (dia == "sexta")) {
    } else {
        pode_semana = true
    }

    let radios = document.getElementsByName('veiculo')
    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            let veiculo = radios[i].value

            let tempo = document.querySelector('#horas').value
            let arr = tempo.split(':').map(Number)
            let hora = arr[0]
            let minuto = arr[1]

            if ((hora >= 17 && hora <= 20) || (hora >= 7 && hora <= 10)) {

            }
            else {
                pode_viaver = true
                pode_vialitrofe = true

            }


            if (veiculo == "caminhao") {
                pode_vialitrofe = true
                pode_semana = true

            }


            if (pode_semana && pode_vialitrofe && pode_viaver) {
                p.innerHTML = `A via vermelha está liberada:   `
            }
            else if (pode_semana && (pode_vialitrofe || pode_viaver)) {
                p.innerHTML = `A via vermelha não está toda liberada:   `
            }
            else {
                p.innerHTML = `A via vermelha não está liberada:   `
            }

            if (pode_viaver && pode_semana) {
                p.innerHTML += `Área vermelha = ✅`
            }
            else {
                p.innerHTML += `Área vermelha = ❌`
            }

            if (pode_vialitrofe && pode_semana) {
                p.innerHTML += `Via litrófe = ✅`
            }
            else {
                p.innerHTML += `Via litrófe = ❌`
            }
        }
    }





}
