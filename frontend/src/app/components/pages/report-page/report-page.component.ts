import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ReportService } from '../../../services/report.service';
import { Report } from '../../../shared/models/report';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from "../../partials/not-found/not-found.component";

@Component({
  selector: 'app-report-page',
  imports: [CommonModule, RouterLink, NotFoundComponent],
  templateUrl: './report-page.component.html',
  styleUrl: './report-page.component.css'
})

export class ReportPageComponent {
  report!: Report;
  constructor(activatedRoute:ActivatedRoute, reportService:ReportService){
    activatedRoute.params.subscribe((params) => {
      if(params.id)
        reportService.getReportById(params.id).subscribe(serverReport => {
          this.report = serverReport;
      });
    })
  }
}
