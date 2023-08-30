import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Video } from '../types';


@Component({
  selector: 'app-video-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})

export class VideoListComponent {
  @Input() videoList: Video[] = [];
  @Output() videoSelected = new EventEmitter<Video>();

  selectVideo(video: Video) : void{
    this.videoSelected.emit(video);
  }
}

