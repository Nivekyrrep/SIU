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
  Aliases: Alias[]=[];
  currentAlias!: Alias;
    alias= '';
    aliasid= 0;
    reportid= 0;
  


  constructor(private AliasService: AliasService) { }

  ngOnInit(): void {
    this.retrieveAliases();
  }

  retrieveAliases(): void {

    this.AliasService.getAll().subscribe(data => {
          this.Aliases = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }


  // ---------------------------
  // ---------------------------


  // getRequestParams(): any {
  //   let params: any = {};

  //   return params;
  // }
}


// }