import { Component, OnInit } from '@angular/core';
import { Contacto } from '../../models/contacto';
import { HttpServicio } from '../../services/servicio.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss'],
  providers: [HttpServicio]
})
export class ContactoComponent implements OnInit {

  //VARIABLES
  public contacto: Contacto;
  public status;

  constructor(
    private servicio: HttpServicio
  ) { 
    this.contacto= new Contacto('','',null,'');
  }

  ngOnInit(): void {
  }

  enviarContacto(form){
    console.log(this.contacto);
    this.servicio.contactoServicio(this.contacto).subscribe(
      response =>{
        console.log(response);
        form.reset();
        this.status='correcto';
      },
      error=>{
        console.log(error);
        this.status='error';
      }
    );
  }

}
