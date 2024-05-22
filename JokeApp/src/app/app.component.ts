import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Joke, JokeService } from './joke.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [JokeService]
})
export class AppComponent implements OnInit{
  public joke: Joke | null = null; // Add this line to declare a joke variable

  constructor(private jokeService: JokeService) {}

  ngOnInit(): void {
    // subscribe to the joke service
    this.jokeService.getJoke().subscribe(joke => {
      this.joke = joke; // Store the joke in the joke variable
    });
  }

  title = 'JokeApp';
}
