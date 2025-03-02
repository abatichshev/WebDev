import {Component, OnInit} from '@angular/core';
import {Album} from "../models";
import {NgFor, CommonModule} from "@angular/common";
import {ALBUMS} from "../fake-db";
import {RouterLink} from "@angular/router";
import {AlbumsService} from "../albums.service";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [
    NgFor,
    CommonModule,
    ALBUMS,
    RouterLink,
    FormsModule
  ],
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent {
  albums = ALBUMS;
  newAlbum = { title: '', userId: 0 };

  deleteAlbum(id: number) {
    this.albums = this.albums.filter(album => album.id !== id);
  }

  addAlbum() {
    const newId = this.albums.length > 0 ? this.albums[this.albums.length - 1].id + 1 : 1;
    this.albums.push({ id: newId, title: this.newAlbum.title, userId: this.newAlbum.userId });
    this.newAlbum = { title: '', userId: 0 }; 
  }
}
