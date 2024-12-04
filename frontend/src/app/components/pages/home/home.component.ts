import { Component, OnInit } from '@angular/core';
import { ReportService } from '../../../services/report.service';
import { Report } from '../../../shared/models/report';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { SeachComponent } from '../../partials/seach/seach.component';
import { TagsComponent } from "../../partials/tags/tags.component";

@Component({
  selector: 'app-home',
  imports: [CommonModule, RouterLink, SeachComponent, TagsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  
  reports:Report[] = [];
  constructor(private reportService:ReportService, activatedRoute:ActivatedRoute){
    activatedRoute.params.subscribe((params) => {
      if(params.searchTerm)
        this.reports = this.reportService.getAllReportBySearchTerm(params.searchTerm);
      else if(params.tag)
        this.reports = this.reportService.getAllReportByTag(params.tag);
      else
        this.reports = reportService.getAll();
    })
  }

  ngOnInit(): void {
  }

}
