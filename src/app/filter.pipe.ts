import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'filter' })
export class FilterPipe implements PipeTransform {
    transform(recipes: any, term: any) {
        if (term === undefined) {
            return recipes;
        } else {
            return recipes.filter(function(recipe) {
                return recipe.title.toLowerCase().includes(term.toLowerCase());
            });
        }
    }
}
