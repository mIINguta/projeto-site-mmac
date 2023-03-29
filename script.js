const controls = document.querySelectorAll(".control");
let currentItem = 0;
const items = document.querySelectorAll(".item");
const maxItems = items.length;
/* animation */
window.sr = ScrollReveal({reset:true});

function delay(){
   sr.reveal('.sec-text-individual p', {duration: 3000});
}

function mostrarConteudo(id){
  let div = document.querySelector(".sec-text-individual")
  div.style.display = "block";
  let span = document.querySelector(".aviso")
  span.style.display = "none";
  
  if (id =='#gustavoqs'){ 
   div.innerHTML = "<h2> Gustavo Minguta </h2> <p>Formado em Sistemas de Informação pela Unigranrio, é encarregado por toda parte tecnológica do escritório.</p> <p><a href='https://www.instagram.com/gustavominguta/' target='_blank'><i class='fa-brands fa-instagram'></i></a> | <a href='mailto:gustavo.minguta@gmail.com'><i class='fa-solid fa-envelope'></i></a></p>";
    delay();
 }
     else if(id =='#elizeuqs'){
       div.innerHTML = "<h2> Elizeu Moreira </h2> <p>CEO, especialista na área fiscal e tributária, graduado pela faculdade TREVISAN. Caracteriza-se pelo atendimento humanizado e personalizado de acordo com a demanda.</p> <p><a href='https://api.whatsapp.com/send?phone=5521970218912' target='_blank'><i class='fa-brands fa-whatsapp'></i></a> | <a href='mailto:elizeucontabil@hotmail.com'><i class='fa-solid fa-envelope'></i></a> | <a href='https://www.instagram.com/elizeu_ems/' target='_blank'><i class='fa-brands fa-instagram'></i></a></p> ";
       delay();
      }
     else if(id =='#almirqs'){
      div.innerHTML = "<h2> Almir Ferreira</h2> <p>Representa o departamento pessoal, responsável pela administração de funcionários e com toda a burocracia correspondente aos mesmos.</p> <p><a href='https://api.whatsapp.com/send?phone=5521964018625' target='_blank'><i class='fa-brands fa-whatsapp'></i></a> | <a href='mailto:almirfcarvalho8@gmail.com'><i class='fa-solid fa-envelope'></i></a><p>";
      delay();
    }
    else if(id =='#rosanaqs'){
      div.innerHTML = "<h2> Rosana Santos</h2> <p>Secretária freelancer do escritório, responsável pela recepção dos clientes e entrega de documentos físicos. Técnica de Enfermagem, cuidadora de idosos/acompanhante. </p> <p><a href='https://api.whatsapp.com/send?phone=5521970475355' target='_blank'><i class='fa-brands fa-whatsapp'></i></a>";
      delay();
    }
  else{ 
    div.innerHTML = "<h2> Marcelo Minguta </h2> <p>Fundador e CEO da empresa, técnico de contabilidade a mais de 19 anos. Responsável pela contabilidade societária.</p> <p><a href='https://api.whatsapp.com/send?phone=5521979820004' target='_blank'><i class='fa-brands fa-whatsapp'></i></a> | <a href='mailto:marcelomingutacontabilidade@gmail.com'><i class='fa-solid fa-envelope'></i></a><p>";
    delay();  
}
}
function fecharDesc(){
  let div = document.querySelector(".sec-desc-servicos");
  div.style.display = "none";
}
function abrirDesc(id){
  let div = document.querySelector(".sec-desc-servicos");
  div.style.display = "flex";
  
  if(id == "#le"){
    div.innerHTML = "<figure class='img-descricao'><img src='imagens/img-leg.jpg' alt='imagem aleatória departamento pessoal'></figure> <div class='text-desc-servicos'><h3>Legalização de Empresas</h3><p>Legalizar uma empresa vai muito além do que abrir um cnpj. Projetar receitas, analisar o mercado, estudar a tributação e o porte que a empresa se enquadra com o objetivo de não ser surpreendido pela falta de informação que é o motivo de muitas falencias. O credenciamentos junto aos órgãos púplicos e regularizadores da atividade são extremamente necessários para que a empresa opere de forma legal.</p></div><a class='btn-fechar-desc' href='#sec-servicos' onclick='fecharDesc()'><i class='fa-solid fa-circle-arrow-up'></i></a>"
  }
  else if(id=="#dp"){
    div.innerHTML = "<figure class='img-descricao'><img src='imagens/img-dep-pessoal.jpg' alt='imagem aleatória departamento pessoal'></figure> <div class='text-desc-servicos'><h3>Departamento Social</h3><p>Gerir o capital humano da empresa é parte inegociável para de um negócio, com isso são atribuições do departamento pessoal gerenciar a folha de pagamento, admissões e demissões, eSocial, férias, benefícios, atestados e afastamentos, registro de ponto e passivos trabalhistas.</p></div><a class='btn-fechar-desc' href='#sec-servicos' onclick='fecharDesc()'><i class='fa-solid fa-circle-arrow-up'></i></a>"
  }
  else if(id=="#fisc"){
    div.innerHTML = "<figure class='img-descricao'><img src='imagens/img-fiscal.jpg' alt='imagem referente a departamento pessoal'></figure> <div class='text-desc-servicos'><h3>Fiscal</h3><p>A escrituração das movimentações fiscais somado a uma análise exata da atividade da empresa pode precaver o pagamento indevido de imposto que prejudica o crescimento da empresa, além disso o setor fiscal garante que todas as obrigações acessórias da empresa sejam cumpridas.</p></div><a class='btn-fechar-desc' href='#sec-servicos' onclick='fecharDesc()'><i class='fa-solid fa-circle-arrow-up'></i></a>"
  }
  else if(id=="#ctb"){
    div.innerHTML = "<figure class='img-descricao'><img src='imagens/img-contabilidade.jpg' alt='imagem referente a contabilidade'></figure> <div class='text-desc-servicos'><h3>Contábil</h3><p>Registrar as operações financeiras e comerciais são passos essenciais para gerir o patrimônio de uma empresa e através disso identificar fenômenos que posam por em risco o patrimônio empresarial.</p></div><a class='btn-fechar-desc' href='#sec-servicos' onclick='fecharDesc()'><i class='fa-solid fa-circle-arrow-up'></i></a>"
  }
  else if(id=="#sm"){
    div.innerHTML = "<figure class='img-descricao'><img src='imagens/img-mei.jpg' alt='imagem referente a MEI'></figure> <div class='text-desc-servicos'><h3>Soluções para MEI</h3><p>A classe de MEI é muito afetada com multas, mesmo sendo favorecida em alguns aspectos da contabilidade, isso acontece pela falta de informação e gestão do negócio. Com isso  disponibilizamos uma assessoria para abertura, alteração e baixa de mei, além disso, cumprir com as obrigações acessórias, parcelar débitos atrasados e emitir notas fiscais são parte de uma sério de soluções que temos para o MEI.</p></div><a class='btn-fechar-desc' href='#sec-servicos' onclick='fecharDesc()'><i class='fa-solid fa-circle-arrow-up'></i></a>"
  }
  else if(id=="#cd"){
    div.innerHTML = "<figure class='img-descricao'><img src='imagens/img-certificado.jpg' alt='imagem referente a certificado digital'></figure> <div class='text-desc-servicos'><h3>Certificado Digital</h3><p>A tecnologia avança de forma muito rápida e cada vez mais é importante garantir a segurança de suas informações. O Certificado Digital é uma ferramenta de segurança eletrônica que garante a autenticidade e a integridade de documentos eletrônicos. Ele funciona como uma espécie de “assinatura digital” que confirma a identidade do remetente e impede que o conteúdo seja alterado sem que isso seja detectado.</p></div><a class='btn-fechar-desc' href='#sec-servicos' onclick='fecharDesc()'><i class='fa-solid fa-circle-arrow-up'></i></a>"
  }
}


/*index animations */
sr.reveal('.sec-apresentacao', {duration: 2000});
sr.reveal('.sec-contatos', {duration: 2000});
sr.reveal('.div-img-sobrenos', {duration: 3000});
/*quemsomos animations */
sr.reveal('.sec-quem-somos p', {duration: 6000});
sr.reveal('.sec-quem-somos figure', {duration: 6000});

