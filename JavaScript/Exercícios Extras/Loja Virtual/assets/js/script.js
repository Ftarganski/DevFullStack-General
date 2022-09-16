class Produto {
  constructor() {
    this.id = 1;
    this.arrayProdutos = [];
    this.editId = null;
  }

  salvar() {
    let produto = this.lerDados();
    if (this.validaCampos(produto)) {
      if(this.editId == null){
      this.adicionar(produto);
    }else{
      this.atualizar(this.editId, produto);
    }
  }
    this.listaTabela();
    this.cancelar();
  }

  listaTabela() {
    let tbody = document.getElementById('tbody');
tbody.innerText = '';


    for (let i = 0; i < this.arrayProdutos.length; i++) {
      let tr = tbody.insertRow();

      let td_id = tr.insertCell();
      let td_produto = tr.insertCell();
      let td_valor = tr.insertCell();
      let td_acao = tr.insertCell();

      td_id.innerText = this.arrayProdutos[i].id;
      td_produto.innerText = this.arrayProdutos[i].nomeProduto;
      td_valor.innerText = this.arrayProdutos[i].valorProduto;
      
      let iconEdit = document.createElement('i')
      iconEdit.className = ('fa-solid fa-pen-to-square');
      iconEdit.setAttribute("onclick","produto.editar("+ JSON.stringify(this.arrayProdutos[i]) +")");
      
      let iconErase = document.createElement('i')
      iconErase.className = ('fa-solid fa-trash');
      iconErase.setAttribute("onclick","produto.deletar("+ this.arrayProdutos[i].id +")");
      
      td_acao.appendChild(iconEdit);
      td_acao.appendChild(iconErase);
    }
  }

  adicionar(produto) {
    produto.valorProduto = parseFloat(produto.valorProduto);
    this.arrayProdutos.push(produto);
    this.id++;
  }

  editar(dados){
    this.editId = dados.id;
document.getElementById('produto').value = dados.nomeProduto;
document.getElementById('valor').value = dados.valorProduto;
document.getElementById('btn1').innerText = 'Atualizar'

  }

  atualizar(id, produto){
    for(let i = 0; i < this.arrayProdutos.length; i++){
      if(this.arrayProdutos[i].id == id){
        this.arrayProdutos[i].nomeProduto = produto.nomeProduto
        this.arrayProdutos[i].valorProduto = produto.valorProduto
      }
    }
  }

  lerDados() {
    let produto = {};
    produto.id = this.id;
    produto.nomeProduto = document.getElementById(`produto`).value;
    produto.valorProduto = document.getElementById(`valor`).value;

    return produto;
  }

  validaCampos(produto) {
    let msg = "";
    if (produto.nomeProduto == "") {
      msg += "Informe o nome do produto\n";
    }
    if (valor.valorProduto == "") {
      msg += "Informe o valor do produto\n";
    }

    if (msg != "") {
      alert(msg);
      return false;
    }

    return true;
  }

  cancelar() {
    document.getElementById(`produto`).value = '';
    document.getElementById(`valor`).value = '';

    document.getElementById('btn1').innerText = 'Salvar';
    this.editId = null;


  }


  deletar(id){
if(confirm(`Deseja realmente apagar o produto do ID ${id}?`)){
    let tbody = document.getElementById('tbody')

    for(let i = 0; i < this.arrayProdutos.length; i++){
      if(this.arrayProdutos[i].id == id){
        this.arrayProdutos.splice(i, 1);
        tbody.deleteRow(i);

      }
    }
  }
}
}
var produto = new Produto();
