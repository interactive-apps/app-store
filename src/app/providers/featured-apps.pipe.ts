import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'featuredApps',
  pure: false
})
export class FeaturedAppsPipe implements PipeTransform {

  transform(items: any[], args: string[]): any[] {
    if (typeof items === 'object') {
      let resultArray = [];
      if (args[1] === '' && args[0][0] === 'all categories' ) {
        resultArray = items;
      } else {
        if (args[0]) {
          for (const cat of args[0]) {
            for (const item of items) {
              if (item.id.indexOf(cat) > -1) {
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
