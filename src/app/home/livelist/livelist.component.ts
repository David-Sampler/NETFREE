import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../services/service.service'
import { Videos } from '../../models/modelVideos'
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-livelist',
  templateUrl: './livelist.component.html',
  styleUrls: ['./livelist.component.css']
})
export class LivelistComponent implements OnInit {

  allVideos: Videos[]

  comedia = []
  acao = []
  desenho = []

  constructor(private serv: ServiceService, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    //console.log(this.getVideos())
    this.getVideos()
  }

  getVideos() {


    this.serv.getVideos().subscribe((res) => {
      this.allVideos = res

      this.allVideos.forEach(video => {

        if (video.genero == "Comedia") {
          video.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(video.url)
          this.comedia.push(video)

        }

        else if (video.genero == "ação") {
          video.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(video.url)
          this.acao.push(video)

        }

        else if (video.genero == "desenho") {
          video.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(video.url)
          this.desenho.push(video)
        }






      });



    })
  }
}
