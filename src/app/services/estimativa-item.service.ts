import { EstimativaItem } from './../interfaces/estimativa-item';
import { HttpClient } from '@angular/common/http';
import { Injectable, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
@Injectable({
  providedIn: 'root'
})
export class EstimativaItemService {

  public http = inject(HttpClient);

  public estimativaItemUrl = 'http://localhost:3000/estimativa_item';

  private EstimativaItens$ = this.http.get<EstimativaItem[]>(this.estimativaItemUrl);

  public estimativaItens = toSignal(this.EstimativaItens$, { initialValue: [] as EstimativaItem[] });

  public totalEstimativaItens = computed(() => this.estimativaItens().length);
}
