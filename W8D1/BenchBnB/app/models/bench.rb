class Bench < ApplicationRecord

  # validates :description, :lat, :lng, presence: true

  def self.find_by_credentials(bench_params)
    # debugger
    bench = find(bench_params)
    return nil if bench.nil?
    bench
  end

end
