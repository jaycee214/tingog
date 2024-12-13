import { Injectable } from '@angular/core';
import { Report } from '../shared/models/report';
import { sample_reports, sample_tags } from '../../data';
import { Tag } from '../shared/models/tag';
import { HttpClient } from '@angular/common/http';
import { REPORTS_BY_ID_URL, REPORTS_BY_SEARCH_URL, REPORTS_BY_TAG_URL, REPORTS_TAGS_URL, REPORTS_URL } from '../shared/models/constants/urls';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  constructor(private http:HttpClient) { }

    getAll(): Observable<Report[]> {
      return this.http.get<Report[]>(REPORTS_URL);
    }

    getAllReportBySearchTerm(searchTerm:string){
      return this.http.get<Report[]>(REPORTS_BY_SEARCH_URL + searchTerm);
    }

    getAllTags():Observable<Tag[]>{
      return this.http.get<Tag[]>(REPORTS_TAGS_URL);
    }

    getAllReportByTag(tag:string):Observable<Report[]>{
      return tag == 'All'?
      this.getAll():
      this.http.get<Report[]>(REPORTS_BY_TAG_URL + tag);
    }

    getReportById(reportId:string):Observable<Report>{
      return this.http.get<Report>(REPORTS_BY_ID_URL + reportId);
    }
}

