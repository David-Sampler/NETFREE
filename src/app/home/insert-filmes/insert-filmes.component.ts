import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup } from '@angular/forms'
import { Videos } from '../../models/modelVideos'
import { ServiceService } from 'src/app/services/service.service';
@Component({
  selector: 'app-insert-filmes',
  templateUrl: './insert-filmes.component.html',
  styleUrls: ['./insert-filmes.component.css']
})
export class InsertFilmesComponent implements OnInit {

  formulario: FormGroup

  constructor(private form: FormBuilder, private servidor: ServiceService) {

    this.formulario = this.form.group({
      nome: [""],
      genero: [""],
      linguagem: [""],
      url: [""],
    })

  }

  ngOnInit(): void {

  }

  setdados() {
    console.log(this.formulario.value)
    this.servidor.insertFilme(this.formulario.value).subscribe((res) => {
      console.log("Cadastro realizado", res)
    })

    window.location.reload()
  }


}
