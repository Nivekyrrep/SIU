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
  Aliases: Alias[] = [];
  count: any;


  constructor(private AliasService: AliasService) { }

  ngOnInit(): void {
    this.retrieveAliases();
  }

  getRequestParams(): any {
    let params: any = {};

    return params;
  }

  retrieveAliases(): void {
    const params = this.getRequestParams();
    this.AliasService.getAll(params)
      .subscribe(
        response => {
          const { Aliases, totalItems } = response;
          this.Aliases = Aliases;
          this.count = totalItems;
          console.log(response);
        },
        error => {
          console.log(error);
        });
  }

}