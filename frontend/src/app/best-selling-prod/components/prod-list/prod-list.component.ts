import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { ProdMasVendidosService } from 'src/app/services/prod-mas-vendidos.service';

@Component({
  selector: 'app-prod-list',
  templateUrl: './prod-list.component.html',
  styleUrls: ['./prod-list.component.scss'],
  //encapsulation: ViewEncapsulation.None,
})
export class ProdListComponent implements OnInit {

  categories = ['Electrodomesticos', 'Casa', 'Tecnologia'];
  prodAvailable: any[] = [];

  selectedCategory: string | null = null;
  //selectedSeller: string | null = null;
  
  

  constructor(private prodService: ProdMasVendidosService, public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(DialogDataExampleDialog, {
      data: {
        animal: 'panda',
      },
    });
  }



  selectCategory(cat: string) {
    this.selectedCategory = cat;
    this.prodAvailable = []
  }

  selectProd(prod: any){
    this.prodService.getProducts(prod).subscribe(data => {
      this.prodAvailable = data
    })

    console.log(prod)
  }

  ngOnInit(): void {
  }

}

@Component({
  selector: 'dialog-data-example-dialog',
  templateUrl: 'dialog-data-example-dialog.html',
  styleUrls: ['./prod-list.component.scss'],
})
export class DialogDataExampleDialog {
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogDataExampleDialog) {}
}
