import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nome = 'Ojuara';
  adicionado = false;

  adicionar() {
    console.log(`Adicionando ${this.nome}`);
    this.adicionado = true;
//    this.nome = nome;
//    const numero = Math.round(Math.random() * 100);
 //   this.nome = 'João ' + numero;
  }

//  alterarNome(event : any) {
    // console.log(event);
//    this.nome = event.target.value;
//  }

//  getIdade(){
//    return this.idade;
//  }
}
