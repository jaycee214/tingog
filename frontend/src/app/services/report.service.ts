import { Injectable } from '@angular/core';
import { Report } from '../shared/models/report';
import { sample_reports, sample_tags } from '../../data';
import { Tag } from '../shared/models/tag';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  constructor() { }

    getAll():Report[]{
      return sample_reports;
    }

    getAllReportBySearchTerm(searchTerm:string){
      return this.getAll().filter(report => report.title.toLowerCase().includes(searchTerm.toLowerCase()));
    }

    getAllTags():Tag[]{
      return sample_tags;
    }

    getAllReportByTag(tag:string):Report[]{
      return tag == 'All'?
      this.getAll():
      this.getAll().filter(report => report.tags?.includes(tag))
    }
}

