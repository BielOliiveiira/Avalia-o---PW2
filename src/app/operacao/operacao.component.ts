import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import { OperacaoAPIServiceService } from '../operacao-apiservice.service';
import { Operacao } from '../model/operacao';

@Component({
  selector: 'has-operacao',
  templateUrl: './operacao.component.html',
  styleUrls: ['./operacao.component.css']
})
export class OperacaoComponent implements OnInit {

  adcForm: FormGroup;

  constructor(public formBuilder: FormBuilder,
               private service : OperacaoAPIServiceService) { }

  ngOnInit() {

    this.adcForm = this.formBuilder.group({
      num1 : this.formBuilder.control(''),
      num2 : this.formBuilder.control('')
    })

  }

  onProcessar(){
    let num1 : string = this.adcForm.value.num1;
    let num2 : string = this.adcForm.value.num2;
    this.service.converter(num1,num2)
        .subscribe(data => alert(data),
                   error => console.log(error));


  }


  }


