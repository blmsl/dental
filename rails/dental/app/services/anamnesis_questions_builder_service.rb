# this class is a service that build AnamnesisQuestions objects
# based on a list of questions

class AnamnesisQuestionsBuilderService

    def initialize(params)
        @anamnesis_model = params[:anamnesis_model]
    end

    
    def build_anamnesis_questions_for(pQuestions)
       
        # get Id list of questions on an Anamnesis Model
        lExistingQuestions = @anamnesis_model.anamnesis_questions.map { |hash| hash[:question_id]}
                            
        # get id list of Existing Questions
        #lAllQuestions = pQuestions.map { |hash| hash[:id] }

        # get non existing elements on anamnesis
        lNotPresentElements =  pQuestions.reject { |question| lExistingQuestions.include? question.id }
        
        #build anamnesisQuestion for each non existing question
        lNotPresentElements.each do |question|
            lAnamnesisQuestion = @anamnesis_model.anamnesis_questions.build
            lAnamnesisQuestion.question_active = false
            lAnamnesisQuestion.question = question
        end

        @anamnesis_model
    end
end