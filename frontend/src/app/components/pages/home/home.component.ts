import { Component, OnInit } from '@angular/core';
import { ReportService } from '../../../services/report.service';
import { Report } from '../../../shared/models/report';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { SeachComponent } from '../../partials/seach/seach.component';
import { TagsComponent } from "../../partials/tags/tags.component";
import { NotFoundComponent } from '../../partials/not-found/not-found.component';
import { Observable } from 'rxjs';
import { LoginPageComponent } from '../login-page/login-page.component';

@Component({
  selector: 'app-home',
  imports: [CommonModule, RouterLink, SeachComponent, TagsComponent, NotFoundComponent, LoginPageComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  
  reports:Report[] = [];
  constructor(private reportService:ReportService, activatedRoute:ActivatedRoute){
    let reportsObservable:Observable<Report[]>;
    activatedRoute.params.subscribe((params) => {
      if(params.searchTerm)
        reportsObservable = this.reportService.getAllReportBySearchTerm(params.searchTerm);
      else if(params.tag)
        reportsObservable = this.reportService.getAllReportByTag(params.tag);
      else
      reportsObservable = reportService.getAll();

      reportsObservable.subscribe((serverReports) => {
        this.reports = serverReports;
      })
    })
  }

  truncatePost(post:string, limit: number=500): string{ 
    return post.length > limit ? post.substring(0, limit) + '...' : post;
  }

  ngOnInit(): void {
  }

}
