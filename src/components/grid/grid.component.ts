import { Component, effect, EventEmitter, input, OnInit, Output, signal, viewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { FilterComponent } from './filter/filter.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

const MaterialModules=[MatTableModule, MatSortModule, MatPaginatorModule, MatButtonModule, MatIconModule]

@Component({
  selector: 'app-grid',
  imports: [FilterComponent, MaterialModules],
  templateUrl: './grid.component.html',
  styleUrl: './grid.component.scss'
})

export class GridComponent<T> implements OnInit {

  displayedColumns = input.required<string[]>()
  data = input.required<T[]>()

  dataSource = new MatTableDataSource<T>();

  valueToFilter = signal('')

  private readonly sort = viewChild.required<MatSort>(MatSort);
  private readonly paginator = viewChild.required<MatPaginator>(MatPaginator);

  constructor() {
    effect(()=>{
      if(this.valueToFilter()){
        this.dataSource.filter = this.valueToFilter();
      } else {
        this.dataSource.filter = '';
      }
    }, {allowSignalWrites: true})
  }

  ngOnInit(): void {
    this.dataSource.data = this.data();
    this.dataSource.sort = this.sort();
    this.dataSource.paginator = this.paginator();
  }

  applyFilter(event:Event):void{
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLocaleLowerCase();
  }

  @Output() deleteCharacter = new EventEmitter<number>(); // Emisor de evento

  onDelete(id: number): void {
    this.deleteCharacter.emit(id); // Emitir el id del personaje a eliminar
  }
}
