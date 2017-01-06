import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
// import { Observable } from 'rxjs/Observable';

import { APP_API } from '../settings/api';
import { API_ENDPOINTS, BaseService } from '../app.service';

@Injectable()
export class KnowledgebaseService extends BaseService {
  constructor(http: Http) {
    super(http);
  }

  getQuestions(search?: URLSearchParams) {
    return super.get(APP_API.KNOWLEDGEBASE, API_ENDPOINTS.QUESTIONS, search).map(res => res.json());
  }

  postQuestion(data: any) {
    return super.post(APP_API.KNOWLEDGEBASE, API_ENDPOINTS.QUESTIONS, data).map(res => res.json());
  }

  getQuestionById(questionId: string) {
    return super.get(APP_API.KNOWLEDGEBASE, `${API_ENDPOINTS.QUESTION}/${questionId}`).map(res => res.json());
  }

  getRole(roleId: number) {
      return super.get(APP_API.KNOWLEDGEBASE, `${API_ENDPOINTS.ROLE}/${roleId}`).map(res => res.json().name);
  }

  getQuestionByTag(tag: string, search?: URLSearchParams) {
    return super.get(APP_API.KNOWLEDGEBASE, `${API_ENDPOINTS.TAG}/${tag}`, search).map(res => res.json());
  }

  updateQuestion(questionId: number, data: any) {
    return super.put(APP_API.KNOWLEDGEBASE, `${API_ENDPOINTS.QUESTION}/${questionId}`, data).map(res => res.json());
  }

  deleteQuestion(questionId: number) {
    return super.delete(APP_API.KNOWLEDGEBASE, `${API_ENDPOINTS.QUESTION}/${questionId}`).map(res => res.json());
  }
}
