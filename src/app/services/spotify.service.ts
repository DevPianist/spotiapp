import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map } from "rxjs/operators";
@Injectable({
  providedIn: "root"
})
export class SpotifyService {
  constructor(private http: HttpClient) {
    console.log("Service spotify");
  }

  getQuery(query: string) {
    const url = `https://api.spotify.com/v1/${query}`;
    const headers = new HttpHeaders({
      Authorization:
        "Bearer BQA680FTKr_0dKBGarT1HsUSuN1dOgwAQPTYXFKnbkug6wK1FGbF5AUlDtidTPJim3OUTaUVYghQ0VUTxgU"
    });

    return this.http.get(url, { headers });
  }
  getNewReleases() {
    return this.getQuery("browse/new-releases?limit=20").pipe(
      map(data => data["albums"].items)
    );
  }
  getArtists(termino: string) {
    return this.getQuery(`search?q=${termino}&type=artist`).pipe(
      map(data => data["artists"].items)
    );
  }
  getArtist(id: string) {
    return this.getQuery(`artists/${id}`);
  }
  getTopTracks(id: string) {
    return this.getQuery(`artists/${id}/top-tracks?country=us`).pipe(
      map(data => data["tracks"])
    );
  }
  // /v1/artists/{id}
}
