import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { IamaliveService, IReport } from 'src/app/services/services/iamalive.service';


@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss'],
})
export class ReportComponent implements OnInit {
	reportForm: FormGroup
  subManager = new Subscription();
  constructor(
    private iamaliveService: IamaliveService,
    private fb: FormBuilder
  ) { }

  async report() {
  
    const data = await this.reportForm.getRawValue();
    console.log("report1",data)
    this.subManager.add(
      this.iamaliveService.report(data)
      .subscribe(() => {
        this.reportForm.patchValue({country:"hello"})
      })
    );
  }

  ngOnInit() {
    this.reportForm = this.fb.group({
      mobile: [undefined, [
        Validators.required
      ]],
      country: ['', [Validators.required]],
      comment : [undefined, []],
      seen : [undefined, []],
      location : [undefined, []]
    })
  }

  ngOnDestroy() {
    this.subManager.unsubscribe();
  }

}
