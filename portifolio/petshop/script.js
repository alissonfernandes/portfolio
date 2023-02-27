let lista = [];

function adicionarNaLista(){
    let cadastro = {data:null, hora:null, nomeDono:null, nomePet:null, sexo:null, raca:null, idade:null, tipoAnimal:null, contato:null, endereco:null, servicos:'', obs:null };

    // nome do formulario
    const formName = 'cadastrar';

    cadastro.data = document.forms[formName]['data'].value;
    cadastro.hora = document.forms[formName]['hora'].value;
    cadastro.nomeDono = document.forms[formName]['nomeDono'].value;
    cadastro.nomePet = document.forms[formName]['nomePet'].value;
    cadastro.sexo = document.forms[formName]['sexoPet'].value;
    cadastro.raca = document.forms[formName]['raca'].value;
    cadastro.idade = document.forms[formName]['idadePet'].value;
    cadastro.tipoAnimal = document.forms[formName]['tipoPet'].value;
    cadastro.contato = 'E-mail: ' + document.forms[formName]['email'].value + ' Whatsapp: ' + document.forms[formName]['whatsapp'].value;
    cadastro.endereco = document.forms[formName]['endereco'].value;

    if (document.forms[formName]['banhoPet'].value === '1') cadastro.servicos += 'Banho';
    if (document.forms[formName]['hidratacaoPet'].value === '1') cadastro.servicos += '<br>Hidratação '; 
    if (document.forms[formName]['desemboloPet'].value === '1') cadastro.servicos += '<br>Desembolo ';
    if (document.forms[formName]['tosaPet'].value === '1') cadastro.servicos += '<br>Tosa ';
    if (document.forms[formName]['maquinaPet'].value === '1') cadastro.servicos += '<br>Máquina ';
    if (document.forms[formName]['tesouraPet'].value === '1') cadastro.servicos += '<br>Tesoura';

    cadastro.obs = document.forms[formName]['observacoes'].value;
    lista.push(cadastro);
    mostrarLista();
}

function mostrarLista() {
    let bodyTable = document.getElementById('bodyTable');

    lista.forEach(e => {
        bodyTable.innerHTML += ` <tr>
            <th>${e.data} <br> ${e.hora}</th>
            <th>${e.servicos}</th>
            <th>${e.obs}</th>
            <th>Nome pet: ${e.nomePet} <br> Tipo animal: ${e.tipoAnimal} <br> Sexo: ${e.sexo} <br> Raça: ${e.raca} <br> Idade: ${e.idade}</th>
            <th>Nome dono: ${e.nomeDono} <br> Contato: ${e.contato} <br> Endereço: ${e.endereco}</th>
        </tr>
        `;
    });
}