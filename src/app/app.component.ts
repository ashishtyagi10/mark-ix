import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatMenuTrigger, MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {MypositionService} from './myposition.service';
import {MyPosition} from './MyPosition';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {

  constructor(private mypositionService: MypositionService) {}
  displayedColumns = ['id', 'cusip', 'isin', 'desc', 'mDate', 'random', 'our', 'outside'];
  dataSource = new MatTableDataSource<MyPosition>();

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;


  @ViewChild(MatMenuTrigger)
  contextMenu: MatMenuTrigger;

  contextMenuPosition = {x: '0px' , y : '0px'};

  ngOnInit() {
    this.dataSource.data = this.mypositionService.getAllPositions();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  doFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  onContextMenu(event: MouseEvent, element: MyPosition) {
    event.preventDefault();
    this.contextMenuPosition.x = event.clientX + 'px';
    this.contextMenuPosition.y = event.clientY + 'px';
    this.contextMenu.menuData = { 'item': element };
    this.contextMenu.openMenu();
  }

  onContextMenuAction1(item: MyPosition) {
    alert(`Click on Action 1 for ${item.cusip}`);
  }

  onContextMenuAction2(item: MyPosition) {
    alert(`Click on Action 2 for ${item.cusip}`);
  }
}


