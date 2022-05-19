var carta1 = {
  nome: "Agiota",
  imagem: "imagens/agiota.jpg",
  atributos: {
    ataque: 9,
    defesa: 7,
    delícia: 8
  }
};

var carta2 = {
  nome: "Cgui no banheiro",
  imagem: "imagens/cgui.jpg",
  atributos: {
    ataque: 6,
    defesa: 8,
    delícia: 7
  }
};

var carta3 = {
  nome: "Evandro estudante",
  imagem: "imagens/evandro_estudante.jpg",
  atributos: {
    ataque: 5,
    defesa: 9,
    delícia: 10
  }
};

var carta4 = {
  nome: "Evandro mestre das Kimeras",
  imagem: "imagens/evandro_kimera.jpg",
  atributos: {
    ataque: 10,
    defesa: 8,
    delícia: 9
  }
};

var carta5 = {
  nome: "Godoka Social",
  imagem: "imagens/godoka_social.jpg",
  atributos: {
    ataque: 4,
    defesa: 4,
    delícia: 9
  }
};

var carta6 = {
  nome: "HDR Jovem",
  imagem: "imagens/hdr_jovem.jpg",
  atributos: {
    ataque: 7,
    defesa: 8,
    delícia: 8
  }
};

var carta7 = {
  nome: "HDR Senior",
  imagem: "imagens/hdr_senior.png",
  atributos: {
    ataque: 9,
    defesa: 2,
    delícia: 9
  }
};

var carta8 = {
  nome: "Amaro putaço",
  imagem: "imagens/hellbolha_bravo.png",
  atributos: {
    ataque: 10,
    defesa: 8,
    delícia: 10
  }
};

var carta9 = {
  nome: "Jailson Mendes",
  imagem: "imagens/jailson_mendes.jpg",
  atributos: {
    ataque: 10,
    defesa: 10,
    delícia: 100
  }
};

var carta10 = {
  nome: "manhattan",
  imagem: "imagens/manhatan.jpg",
  atributos: {
    ataque: 6,
    defesa: 4,
    delícia: 2
  }
};

var carta11 = {
  nome: "Sir Vinnie",
  imagem: "imagens/sir_vinnie.jpg",
  atributos: {
    ataque: 8,
    defesa: 6,
    delícia: 5
  }
};

var carta12 = {
  nome: "Zweist",
  imagem: "imagens/zweist.png",
  atributos: {
    ataque: 7,
    defesa: 5,
    delícia: 3
  }
};

var carta13 = {
  nome: "Zweist procedural",
  imagem: "imagens/zweist_procedural.jpg",
  atributos: {
    ataque: 5,
    defesa: 6,
    delícia: 4
  }
};

var carta14 = {
  nome: "Amaro lord supremo das ursas",
  imagem: "imagens/amaro_mestre.jpg",
  atributos: {
    ataque: 10,
    defesa: 10,
    delícia: 10
  }
};

var cartas = [carta1, carta2, carta3, carta4, carta5, carta6, carta7, carta8, carta9, carta10, carta11, carta12, carta13, carta14];
var cartaMaquina;
var cartaJogador;

function sortearCarta() {
	var divResultado = document.getElementById("resultado");
	divResultado.innerHTML = "";
	
	
  resetarCartas();
  var indiceCartaMaquina = parseInt(Math.random() * 14);
  cartaMaquina = cartas[indiceCartaMaquina];

  var indiceCartaJogador = parseInt(Math.random() * 14);
  // Condição para não pegar carta igual
  while (indiceCartaJogador == indiceCartaMaquina) {
    indiceCartaJogador = parseInt(Math.random() * 14);
  }
  cartaJogador = cartas[indiceCartaJogador];

  document.getElementById("btnSortear").disabled = true;
  document.getElementById("btnJogar").disabled = false;
  exibirCartaJogador();
}

function obtemAtributoSelecionado() {
  var radioAtributos = document.getElementsByName("atributo");

  for (var i = 0; i < radioAtributos.length; i++) {
    if (radioAtributos[i].checked == true) {
      return radioAtributos[i].value;
    }
  }
}

function jogar() {
  var atributoSelecionado = obtemAtributoSelecionado();

  if (atributoSelecionado == null) {
    alert("Escolha um atributo para jogar!");
  } else {
    var atributoSelecionado = obtemAtributoSelecionado(); // Pegando opção escolhida pelo jogador
    var divResultado = document.getElementById("resultado");
    
    var valorCartaJogador = cartaJogador.atributos[atributoSelecionado];
    var valorCartaMaquina = cartaMaquina.atributos[atributoSelecionado];
    
    var descResultado = "";
    if (valorCartaJogador > valorCartaMaquina) {
      descResultado = "Você venceu!";
    } else if (valorCartaJogador < valorCartaMaquina) {
      descResultado = "Você perdeu!";
    } else {
      descResultado = "Empate! ";
    }
    
    divResultado.innerHTML = "<p class='resultado-final'>"+ descResultado+" <br />(" + valorCartaJogador + " contra " +valorCartaMaquina + ") </p>";
    
    exibirCartaMaquina();
    document.getElementById("btnSortear").disabled = false;
    document.getElementById("btnJogar").disabled = true;
  }
}

function exibirCartaJogador(){
  var divCartaJogador = document.getElementById("carta-jogador");
  divCartaJogador.style.backgroundImage ="url("+cartaJogador.imagem+")";
  //divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`;
  var moldura =
    '<img src="imagens/template_carta.png" style=" width: inherit; height: inherit; position: absolute;">';
  
  var tagHTML = "<div id='opcoes' class='carta-status'>";
  var opcoesTexto = "";
  
  for (var atributo in cartaJogador.atributos) {
    opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" +
atributo + ": " +cartaJogador.atributos[atributo] + "<br>";
  }  
  var nome = "<p class='carta-subtitle'>"+cartaJogador.nome+"</p>";
  //var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`;
  
  divCartaJogador.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
}

function exibirCartaMaquina(){
  var divCartaMaquina = document.getElementById("carta-maquina");
  divCartaMaquina.style.backgroundImage ="url("+cartaMaquina.imagem+")";
  //divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`;
  var moldura =
    '<img src="imagens/template_carta.png" style=" width: inherit; height: inherit; position: absolute;">';
  
  var tagHTML = "<div id='opcoes' class='carta-status'>";
  var opcoesTexto = "";
  
  for (var atributo in cartaMaquina.atributos) {
    opcoesTexto += "<p name='atributo' value='" + atributo + "'>" +
atributo + ": " +cartaMaquina.atributos[atributo] + "</p>";
  }  
  var nome = "<p class='carta-subtitle'>"+cartaMaquina.nome+"</p>";
  
  divCartaMaquina.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
}

function resetarCartas(){
  var divCartaJogador = document.getElementById("carta-jogador");
  
  var divCartaMaquina = document.getElementById("carta-maquina");
  divCartaMaquina.style.backgroundImage ="";
  
  divCartaJogador.innerHTML = "";
  divCartaMaquina.innerHTML = "";
}