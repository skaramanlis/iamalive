import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IamaliveService, IReport } from 'src/app/services/services/iamalive.service';


@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss'],
})
export class ReportComponent implements OnInit {
	reportForm: FormGroup
  

  constructor(
    // private iamaliveService: IamaliveService,
    private fb: FormBuilder
  ) { }

  async report() {
  
    const data = await this.reportForm.getRawValue();
    console.log("report1",data)
    // await this.iamaliveService.report(data)
  }

  ngOnInit() {
    this.reportForm = this.fb.group({
      mobile: [undefined, [
        Validators.required, Validators.pattern('[0-9]{3} [0-9]{3} [0-9]{3}')
      ]],
      country: [undefined, []],
      comment : [undefined, []],
      seen : [undefined, []],
      location : [undefined, []]
    })
  }

}
