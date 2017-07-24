export enum QuestionType {
    yes_no = 1,
    yes_no_i_dont_know = 2,
    yes_no_i_dont_know_and_text = 3,
    only_text = 4,
    left_right_i_dont_know = 5
}
export interface QuestionTypeItemList {
    id:QuestionType;
    description:string;
};


export const QuestionTypesList:Array<QuestionTypeItemList> = [
    {id:QuestionType.yes_no,description:"Yes/No"}
    ,{id:QuestionType.yes_no_i_dont_know,description:"Yes/No/I Don't Know"}
    ,{id:QuestionType.yes_no_i_dont_know_and_text,description:"Yes/No/I Don't Know and Text"}
    ,{id:QuestionType.only_text,description:"Only text"}
    ,{id:QuestionType.left_right_i_dont_know,description:"Left/Right/I Don't Know"}
];