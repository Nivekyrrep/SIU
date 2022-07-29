import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Alias } from 'src/app/models/alias';
import { AliasService } from 'src/app/services/alias.service';

@Component({
  selector: 'app-alias',
  templateUrl: './alias.component.html',
  styleUrls: ['./alias.component.css']
})

export class AliasComponent implements OnInit {
  aliases?: Alias[];
  currentAlias: Alias = {};
  currentIndex = -1;
  
  // page = 1;
  // count = 0;
  // pageSize = 3;
  // pageSizes = [3, 6, 9];



  constructor(private AliasService: AliasService) { }

  ngOnInit(): void {
    this.retrieveAliases();
  }

  retrieveAliases(): void {

    this.AliasService.getAll().subscribe(data => {
      const {totalItems} = data;
      this.aliases = data;
      // this.count = totalItems;
      console.log(data);
    },
      error => {
        console.log(error);
      });
    }
      setActiveAlias(alias: Alias, index: number): void {
        this.currentAlias = alias;
        this.currentIndex = index;
  }
 
  refreshList(): void {
    this.retrieveAliases();
    this.currentAlias = {};
    this.currentIndex = -1;
  }

  // ---------------------------
  // ---------------------------


  // getRequestParams(): any {
  //   let params: any = {};

  //   return params;
  // }
}


