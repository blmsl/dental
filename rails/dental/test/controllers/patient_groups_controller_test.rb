require 'test_helper'

class PatientGroupsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @patient_group = patient_groups(:one)
  end

  test "should get index" do
    get patient_groups_url, as: :json
    assert_response :success
  end

  test "should create patient_group" do
    assert_difference('PatientGroup.count') do
      post patient_groups_url, params: { patient_group: { description: @patient_group.description } }, as: :json
    end

    assert_response 201
  end

  test "should show patient_group" do
    get patient_group_url(@patient_group), as: :json
    assert_response :success
  end

  test "should update patient_group" do
    patch patient_group_url(@patient_group), params: { patient_group: { description: @patient_group.description } }, as: :json
    assert_response 200
  end

  test "should destroy patient_group" do
    assert_difference('PatientGroup.count', -1) do
      delete patient_group_url(@patient_group), as: :json
    end

    assert_response 204
  end
end
