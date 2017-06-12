require 'test_helper'

class ProcedureCategoriesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @procedure_category = procedure_categories(:one)
  end

  test "should get index" do
    get procedure_categories_url, as: :json
    assert_response :success
  end

  test "should create procedure_category" do
    assert_difference('ProcedureCategory.count') do
      post procedure_categories_url, params: { procedure_category: { description: @procedure_category.description } }, as: :json
    end

    assert_response 201
  end

  test "should show procedure_category" do
    get procedure_category_url(@procedure_category), as: :json
    assert_response :success
  end

  test "should update procedure_category" do
    patch procedure_category_url(@procedure_category), params: { procedure_category: { description: @procedure_category.description } }, as: :json
    assert_response 200
  end

  test "should destroy procedure_category" do
    assert_difference('ProcedureCategory.count', -1) do
      delete procedure_category_url(@procedure_category), as: :json
    end

    assert_response 204
  end
end
