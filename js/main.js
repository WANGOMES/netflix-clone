//Código JS que insere os cads na página carnes.html por meio de uma lista contendo o TITULO, DESCRIÇÃO, IMAGEM e URL_VÍDEO.

var lista = [['pernil suíno na brasa','Receita de Pernil suíno feito na brasa. Super fácil de delicioso. conheça a receita','imagem1','https://youtu.be/8Wu1emqypFg'],
['paleta de cordeiro', 'Receita saborosa e sofisticada. Aprenda e surpreenda seus convidados. Veja a receita.','imagem2', 'https://youtu.be/T3_WnOgVHTg'],
['coxa e sobrecoxa de frango', 'Receita deliciosa de coxa e sobrecoxa suculentas.', 'imagem3', 'https://youtu.be/pQRfMlivlmk'],
['Nuggets de Frango','Delicioso aperitivo: Nugget de Frango e batata frita. Veja a receita...','imagem4', 'https://youtu.be/jI7P9Bzidqo'],
['Camarão na brasa', 'Camarão suculento feito na churrasqueira. Surpreenda-se!','imagem6', 'https://youtu.be/q20Br5uCTw4'],
['costelinha ao molho barbecue', 'Receita de Costelinha ao molho barbecue, fácil, rápida e saborosa. Aprenda como fazer!', 'capa1', 'https://youtu.be/PC5eRHgOKSI'],
['peixe assado na grelha', 'Receita de um delicioso peixe assado na grelha. Sensacional!', 'imagem7', 'https://youtu.be/YcVVmAqx_oI'],
['hamburger na churrasqueira', 'Nada melhor que um Hamburger! Ainda mais se for feito na brasa', 'imagem8', 'https://youtu.be/Kc154K3BrCs'],
['salmão suculento na brasa', 'Receita de Salmão rápido, prático e de dar água na boca!', 'imagem9', 'https://youtu.be/RG-2T_EPLIg'],
['Salsichas na brasa', 'Saiba como fazer Salsichas deliciosas na churrasqueira. Experimente!', 'imagem10', 'https://youtu.be/38Ovqx1gxho'],
['Espetinhos diversos', 'Conheça várias formas de fazer seus espetinhos na churrasqueira.', 'imagem11', 'https://youtu.be/J2CHgyRzK2g'],
['Costelinha na brasa', 'Receita de Costelinha de porco na brasa. Veja mais.', 'imagem12', 'https://youtu.be/0gClh5PO-Lk']];
var aux = '';

const conteudo = document.querySelector('.cards_principais');

for(var i=0; i<lista.length; i++){
    var titulo = lista[i][0];
    var descricao = lista[i][1];
    var imagem_card = lista[i][2];
    var url = lista[i][3];

    aux += '<div class=\"card col-lg-3\"><h3 class=\"titulo\">' + titulo + '</h3><p class=\"descricao\">' + descricao + '</p><div><a href=\"'+ url +'\" target=\"_blank\" rel=\"noopener noreferrer\"><img class=\"imagem_card\" src=\"/img/' + imagem_card + '.jpg\" alt=\"\"></a></div></div>';
}
conteudo.innerHTML = aux;

alert('Essa página é carregada por meio do arquivo \'main.js\'');