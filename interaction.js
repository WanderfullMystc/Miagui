let ITENS_LOJA = [
    {
        url_img:"./img/bola_copa.webp",
        nome:"Bola da Copa",
        preco:86.30,
        descricao:"Bola utilizada na Copa do Mundo, idela para utilizar em campo e colecionar"

    },
    {
        url_img:"./img/carro_hotwheels.jpeg",
        nome:"Carrinho da Hot Wheels",
        preco:5.80,
        descricao:"Carrinho para dar de presentes para crianças ou colecionar"

    },
    {
        url_img:"./img/chinelo.webp",
        nome:"Chinelo",
        preco:19.99,
        descricao:"Chinelo para se utilizar em qualquer lugar"

    },
    {
        url_img:"./img/escorredor_louca.webp",
        nome:"Escorredor de Louça",
        preco:15.20,
        descricao:"Utilizando para ajudar no processo de secagem dos utensilios"

    },
    {
        url_img:"./img/espada_medieval.png",
        nome:"Espada Medieval",
        preco:200.18,
        descricao:"Utilizada em batalhar para neutralizar o inimigo ou como item de decoração"

    },
    {
        url_img:"./img/guitarra.webp",
        nome:"Guitarra",
        preco:1980.99,
        descricao:"Otima para utilizar em bandas de hard rock"

    },
    {
        url_img:"./img/toalha_banho.webp",
        nome:"Toalha de Banho",
        preco:9.99,
        descricao:"Boa para se secar apos o banho"

    },
    {
        url_img:"./img/vinho.webp",
        nome:"Vinho",
        preco:59.90,
        descricao:"Vinho que harmoniza muito bem com carnes vermelhas "

    }
]

function addProduct(i) {    
    /*############################ Table   ############################*/ 
    let table = document.createElement("table");
    document.getElementById("itens_section").appendChild(table);
    let tr = document.createElement("tr");
    table.append(tr);

    /*############################ Imagen  ############################*/   
    let  img =document.createElement("img");
    img.src = ITENS_LOJA[i].url_img;
    tr.append(img);
    // document.getElementById("");

    /*############################ Texto  ############################*/   
    let td = document.createElement("td");
    tr.append(td);
    td.innerHTML = ITENS_LOJA[i].nome;
    td = document.createElement("td");
    tr.append(td);
    td.innerHTML = "Preço: R$" + ITENS_LOJA[i].preco;
    td = document.createElement("td");
    tr.append(td);
    td.innerHTML = "Descrição: " + ITENS_LOJA[i].descricao;

}

for(let i=0 ; i<ITENS_LOJA.length ; i++) {
    addProduct(i);

}
