import { Pipe, PipeTransform } from '@angular/core';
import {forEach} from "@angular/router/src/utils/collection";
import {isUndefined} from "util";

@Pipe({
  name: 'filterBy',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(items: any[], args: string[]): any[] {
    if (typeof items === 'object') {
      let resultArray = [];
      if (args[1] === '' && args[0][0] === 'all categories' ) {
        resultArray = items;
      } else {
        if (args[1] !== '') {
          for (const item of items) {
            if (item.name.toLowerCase().indexOf(args[1].toLowerCase()) !== -1) {
              resultArray.push(item);
            }
          }
        }  else {
          for (const cat of args[0]) {
            for (const item of items) {
              if (item.category.toLowerCase() === cat.toLowerCase()) {
                resultArray.push(item);
              }
            }
          }
        }
      }

      return resultArray;
    } else {
      return null;
    }

  }
}

