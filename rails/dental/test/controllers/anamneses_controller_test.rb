require 'test_helper'

class AnamnesesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @anamnese = anamneses(:one)
  end

  test "should get index" do
    get anamneses_url, as: :json
    assert_response :success
  end

  test "should create anamnese" do
    assert_difference('Anamnesis.count') do
      post anamneses_url, params: { anamnese: { anamnesis_model_id: @anamnese.anamnesis_model_id, observation: @anamnese.observation, patient_id: @anamnese.patient_id } }, as: :json
    end

    assert_response 201
  end

  test "should show anamnese" do
    get anamnese_url(@anamnese), as: :json
    assert_response :success
  end

  test "should update anamnese" do
    patch anamnese_url(@anamnese), params: { anamnese: { anamnesis_model_id: @anamnese.anamnesis_model_id, observation: @anamnese.observation, patient_id: @anamnese.patient_id } }, as: :json
    assert_response 200
  end

  test "should destroy anamnese" do
    assert_difference('Anamnesis.count', -1) do
      delete anamnese_url(@anamnese), as: :json
    end

    assert_response 204
  end
end
