require "rails_helper"

RSpec.describe ApplicationHelper, type: :helper do
  describe "#webpack_js_path" do
    let(:path) { "app.js" }

    subject { webpack_js_path path }

    context "when environment is development" do
      before { set_rails_env "development" }
      it { is_expected.to eq "http://0.0.0.0:8080/#{path}" }
    end

    context "when environment is not development" do
      before { set_rails_env "production" }

      it { is_expected.to eq "/#{path}" }
    end
  end
end
