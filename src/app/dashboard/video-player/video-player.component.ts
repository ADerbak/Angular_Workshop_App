import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Video } from '../types';

@Component({
  selector: 'app-video-player',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.css']
})
export class VideoPlayerComponent {
  @Input() video: Video | undefined;
}
