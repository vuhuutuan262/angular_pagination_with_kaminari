module CommonHelpers
  def set_rails_env env
    Rails.env.stub(:"#{env}?" => true)
  end
end
