require 'test_helper'

class ChairsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @chair = chairs(:one)
  end

  test "should get index" do
    get chairs_url, as: :json
    assert_response :success
  end

  test "should create chair" do
    assert_difference('Chair.count') do
      post chairs_url, params: { chair: { description: @chair.description } }, as: :json
    end

    assert_response 201
  end

  test "should show chair" do
    get chair_url(@chair), as: :json
    assert_response :success
  end

  test "should update chair" do
    patch chair_url(@chair), params: { chair: { description: @chair.description } }, as: :json
    assert_response 200
  end

  test "should destroy chair" do
    assert_difference('Chair.count', -1) do
      delete chair_url(@chair), as: :json
    end

    assert_response 204
  end
end
