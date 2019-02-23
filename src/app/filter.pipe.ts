import { Pipe, PipeTransform } from '@angular/core';
import { User } from './models/user.model';
@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(items: User[], searchText: string): User[] {
    if (!items) return [];
    if (!searchText) return items;
    searchText = searchText.toLowerCase();
    return items.filter(it => {
      return it.firstname.toLowerCase().includes(searchText) || it.lastname.toLowerCase().includes(searchText);
    });
  }
}