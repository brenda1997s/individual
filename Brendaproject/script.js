var btnCodificar = document.querySelector('.codificar');
var btnDecodificar = document.querySelector('.decodificar');
var radCod = document.querySelector('.paraCod');
var radDecod = document.querySelector('.paraDecod');
var selecao = document.querySelector('.selecionar');
var resposta = document.querySelector('.respostaTxt');
var opcao = document.querySelector('.opcoes');

radCod.addEventListener('click', () =>{

  btnDecodificar.classList.add('codMensagem')
  btnCodificar.classList.remove('codMensagem')
  console.log("foi")
})

radDecod.addEventListener('click', () =>{
  btnCodificar.classList.add('codMensagem')
  btnDecodificar.classList.remove('codMensagem')
})

opcao.addEventListener('click', (event) => {
  event.preventDefault()
  var valor = selecao.value

  if (valor == 'base64') {
      document.querySelector('.deslocamento').classList.add('invisivel');

      btnCodificar.onclick = (event) => {
        event.preventDefault()
          var mensagem = document.querySelector('.txt').value;
          var mensagemCodificada = btoa(mensagem);
          var teste = document.querySelector('.respostaTxt');
          teste.classList.remove('invisivel') 
          resposta.innerHTML = mensagemCodificada
      }

      btnDecodificar.onclick = (event) => {
        event.preventDefault()
          var mensagem = document.querySelector('.txt').value;
          var mensagemDecodificada = atob(mensagem);

          var teste = document.querySelector('.respostaTxt');
          teste.classList.remove('invisivel') 

          resposta.innerHTML = mensagemDecodificada
      }}

      else if (valor === 'cifras'){ 
        var teste = document.querySelector('.deslocamento');
        teste.classList.remove('invisivel') 

        btnCodificar.onclick = (event) => {
          event.preventDefault() 
          var teste = document.querySelector('.respostaTxt');
          teste.classList.remove('invisivel') 


          var desloc = document.querySelector('.desloc').value

          var codificando = document.querySelector('.txt').value;
          console.log(codificando)
          var arrFrase = codificando.split('')

          var cod = [];
          var codificado = [];
          var fraseCod = '';
          
          for(var i = 0; i < arrFrase.length; i++){
            cod.push(arrFrase[i].charCodeAt() + parseInt(desloc))
            codificado.push(String.fromCharCode(cod[i]))
            fraseCod = codificado.join('')
          }
          resposta.innerHTML = fraseCod
          }
         
      btnDecodificar.onclick = (event) => {
        event.preventDefault()
        var teste = document.querySelector('.respostaTxt');
          teste.classList.remove('invisivel') 

          var desloc = document.querySelector('.desloc').value


        var codificando = document.querySelector('.txt').value;
          console.log(codificando)
          var arrFrase = codificando.split('')
        var decodificar = [];
        var descodificado =[];
        var fraseOrigin='';

        for(var i = 0; i < arrFrase.length; i++){
          decodificar.push(arrFrase[i].charCodeAt() - parseInt(desloc))
          descodificado.push(String.fromCharCode(decodificar[i]))
          fraseOrigin = descodificado.join('')
        }
        resposta.innerHTML = fraseOrigin
        }
}})
