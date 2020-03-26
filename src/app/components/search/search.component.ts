import { Component } from "@angular/core";
import { SpotifyService } from "src/app/services/spotify.service";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.css"]
})
export class SearchComponent {
  loading: boolean;
  artistas: any[] = [];
  constructor(private spotify: SpotifyService) {}
  buscar(termino: string) {
    this.loading = true;
    if (termino.length > 0) {
      this.spotify.getArtists(termino).subscribe(data => {
        this.artistas = data;
        this.loading = false;
      });
    } else {
      this.artistas = [];
      this.loading = false;
    }
  }
}
