require 'test_helper'

class DentistsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @dentist = dentists(:one)
  end

  test "should get index" do
    get dentists_url, as: :json
    assert_response :success
  end

  test "should create dentist" do
    assert_difference('Dentist.count') do
      post dentists_url, params: { dentist: { cpf: @dentist.cpf, cro: @dentist.cro, date_of_birth: @dentist.date_of_birth, gender: @dentist.gender, name: @dentist.name } }, as: :json
    end

    assert_response 201
  end

  test "should show dentist" do
    get dentist_url(@dentist), as: :json
    assert_response :success
  end

  test "should update dentist" do
    patch dentist_url(@dentist), params: { dentist: { cpf: @dentist.cpf, cro: @dentist.cro, date_of_birth: @dentist.date_of_birth, gender: @dentist.gender, name: @dentist.name } }, as: :json
    assert_response 200
  end

  test "should destroy dentist" do
    assert_difference('Dentist.count', -1) do
      delete dentist_url(@dentist), as: :json
    end

    assert_response 204
  end
end
