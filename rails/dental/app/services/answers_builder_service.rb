# this class is a service that build AnswersQuestions objects
# based on a list of questions

class AnswersBuilderService

    def initialize(params)
        @anamnesis = params[:anamnesis]
    end

    
    def build_answers
        # get Id list of answers on an Anamnesis
        lExistingAnswers = @anamnesis.answers.map { |hash| hash[:question_id]}
        print lExistingAnswers

        # get Id list of available questions for this Anamnesis
        lAllQuestions = @anamnesis.questions.map { |hash| hash[:question_id]}
        print lAllQuestions
                           
        # get non existing elements on anamnesis
        lNotPresentElements = lAllQuestions.reject { |question| lExistingAnswers.include? question }
        print lNotPresentElements
        
        #build anamnesisQuestion for each non existing question
        lNotPresentElements.each do |qId|
            lAnswerQuestion = @anamnesis.answers.build
            lAnswerQuestion.question_id = qId
        end
        @anamnesis
    end
end