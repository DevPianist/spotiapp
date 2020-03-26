import { Component } from "@angular/core";
import { SpotifyService } from "src/app/services/spotify.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent {
  nuevasCanciones: any[] = [];
  loading: boolean;
  error: boolean = false;
  mensajeError: string;
  constructor(private spotify: SpotifyService) {
    this.loading = true;
    this.spotify.getNewReleases().subscribe(
      data => {
        this.nuevasCanciones = data;
        this.loading = false;
      },
      err => {
        this.error = true;
        this.loading = false;
        this.mensajeError = err.error.error.message;
      }
    );
  }
}
