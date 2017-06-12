require 'test_helper'

class AnamnesisModelsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @anamnesis_model = anamnesis_models(:one)
  end

  test "should get index" do
    get anamnesis_models_url, as: :json
    assert_response :success
  end

  test "should create anamnesis_model" do
    assert_difference('AnamnesisModel.count') do
      post anamnesis_models_url, params: { anamnesis_model: { description: @anamnesis_model.description } }, as: :json
    end

    assert_response 201
  end

  test "should show anamnesis_model" do
    get anamnesis_model_url(@anamnesis_model), as: :json
    assert_response :success
  end

  test "should update anamnesis_model" do
    patch anamnesis_model_url(@anamnesis_model), params: { anamnesis_model: { description: @anamnesis_model.description } }, as: :json
    assert_response 200
  end

  test "should destroy anamnesis_model" do
    assert_difference('AnamnesisModel.count', -1) do
      delete anamnesis_model_url(@anamnesis_model), as: :json
    end

    assert_response 204
  end
end
