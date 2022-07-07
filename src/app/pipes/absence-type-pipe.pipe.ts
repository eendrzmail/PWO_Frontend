import { absenceTYPE } from './../models/absence';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'absenceTypePipe'
})
export class AbsenceTypePipePipe implements PipeTransform {

  transform(value: number, types: absenceTYPE[]): unknown {
    return types.find(x => x.absenceType_id == value)?.name;
  }

}
