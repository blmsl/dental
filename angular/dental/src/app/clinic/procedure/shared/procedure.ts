import { ProcedureCategory } from './../../procedure-category/shared/procedure-category';
export class Procedure{
    id:number;
    description:string;
    procedure_category_id:number;
    category:ProcedureCategory;
}