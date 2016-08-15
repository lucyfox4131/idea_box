FactoryGirl.define do
  factory :idea do
    title
    body
    quality 0
  end

  sequence :title do |n|
    "Idea Title#{n}"
  end

  sequence :body do |n|
    "This is the body of idea#{n}. It is such a great idea!"
  end
end
