import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-seach',
  imports: [],
  templateUrl: './seach.component.html',
  styleUrl: './seach.component.css'
})

export class SeachComponent{
  searchTerm = '';
  constructor(activatedRoute:ActivatedRoute, private router:Router){
    activatedRoute.params.subscribe((params) => {
      if(params.searchTerm) this.searchTerm = params.searchTerm;
    });
  }
  ngOnInit(): void {
  }

  search(term:string):void{
    if(term)
      this.router.navigateByUrl('/search/' + term);
    else
      this.router.navigateByUrl('');
  }
}
