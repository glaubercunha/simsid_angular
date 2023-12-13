import { EstimativaItemService } from './../../../services/estimativa-item.service';
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
@Component({
  selector: 'app-estimativa-item-list',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './estimativa-item-list.component.html',
  styleUrl: './estimativa-item-list.component.scss'
})
export class EstimativaItemListComponent {
  public displayedColumns = ['id', 'caderno', 'demanda', 'acron', 'acron_dim'];

  public fullColumns = ['id', 'caderno', 'demanda', 'acron', 'acron_dim'];

  public estimativaItemService = inject(EstimativaItemService);

  public itens = this.estimativaItemService.estimativaItens;

  public totalEstimativaItens = this.estimativaItemService.totalEstimativaItens;
}
