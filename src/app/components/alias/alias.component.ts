import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AliasService } from 'src/app/services/alias.service';

@Component({
  selector: 'app-alias',
  templateUrl: './alias.component.html',
  styleUrls: ['./alias.component.css']
})

export class AliasComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {
  }
}