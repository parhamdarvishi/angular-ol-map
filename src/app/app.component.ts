import { Component, VERSION } from "@angular/core";
import ol from "openlayers";

const INITIAL_OPACITY = 1;
const DIMMED_OPACITY = 0.3;

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular " + VERSION.major;
  private map: ol.Map;
  private lat: any;
  private lng: any;

  ngOnInit() {
    this.lng = 35.7439626787339;
    this.lat = 51.3820966622855;

    this.map = new ol.Map({
      layers: [
        new ol.layer.Tile({
          source: new ol.source.OSM(),
          opacity: INITIAL_OPACITY
        })
      ],
      target: document.getElementById("map"),
      view: new ol.View({
        center: ol.proj.fromLonLat([this.lat, this.lng]),
        zoom: 14
      })
    });
  }

  constructor() {}
}
