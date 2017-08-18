import { BudgetItem } from './budget-item';

export class Budget{
  id:number;
  description:string;
  patient_id:number;
  observation:string;
  budget_items:BudgetItem[] = [];
  
  constructor(){
    this.budget_items = [];
  }
  
}