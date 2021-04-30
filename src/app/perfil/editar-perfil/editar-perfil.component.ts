import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/servicos/auth.service';

@Component({
  selector: 'app-editar-perfil',
  templateUrl: './editar-perfil.component.html',
  styleUrls: ['./editar-perfil.component.css']
})
export class EditarPerfilComponent implements OnInit {

  constructor(
    public loginService : AuthService,
    public router : Router
  ) { }

  ngOnInit(): void {
  }

  salvar(){
    
    
  }
  async sair(){
    try{
      await this.loginService.sair().then(
        (success) => {this.router.navigate(['/home'])});
     }catch(error){
       console.error(error);
    }
  }
}
