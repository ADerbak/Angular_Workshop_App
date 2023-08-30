import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoListComponent } from '../video-list/video-list.component';
import { VideoPlayerComponent } from '../video-player/video-player.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, VideoListComponent, VideoPlayerComponent],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export default class DashboardComponent {

}
