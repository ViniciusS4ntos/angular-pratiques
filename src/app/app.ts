import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  imports: [RouterOutlet],
  selector: 'app-root', // nome da tag do componente \ eu posso mudar e so basta mudar no index.html apra ele encontra dnv
  templateUrl: './app.html', // mostra o caminho do html
  styleUrl: './app.css', //  mostra caminho do css
  
})
export class App {
  // variavel que vai ser usada no html
  protected readonly title = signal('World');
  protected readonly name = signal('Angular');
}
