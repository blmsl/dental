enum QuestionTypeId {
    yes_no = 1,
    yes_no_i_dont_know = 2
}
export interface QuestionType {
    id:QuestionTypeId;
};

export const ListOfQuestionTypes:Array<QuestionType> = [
    {id:QuestionTypeId.yes_no}
    ,{id:QuestionTypeId.yes_no_i_dont_know}
];