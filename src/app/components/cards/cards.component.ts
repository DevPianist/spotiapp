import { Component, Input } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-cards",
  templateUrl: "./cards.component.html",
  styleUrls: ["./cards.component.css"]
})
export class CardsComponent {
  @Input() items: any[] = [];
  constructor(private router: Router) {}
  showArtist(item: any) {
    let id;
    if ((item.type == "artist")) {
      id = item.id;
    } else {
      id = item.artists[0].id;
    }
    this.router.navigate(["artist", id]);
    console.log(id);
  }
}
