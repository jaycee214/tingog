import { Component } from '@angular/core';
import { Tag } from '../../../shared/models/tag';
import { ReportService } from '../../../services/report.service';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tags',
  imports: [RouterLink, CommonModule],
  templateUrl: './tags.component.html',
  styleUrl: './tags.component.css'
})
export class TagsComponent {
  tags?:Tag[];
  constructor(reportService:ReportService){
    this.tags = reportService.getAllTags();
  }

  ngOnInit():void{
  }
  
}
