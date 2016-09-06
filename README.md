# All The Ideas

#### A blend of JavaScript and Rails, All the Ideas is a one page application written for the purposes of expanding my current knowledge of client side JavaScript. There is a simple Rails API serving data for the front end JavaScript.

#### Technologies Used:
* JavaScript
* Ruby on Rails
* Ajax
* jQuery
* TDD using RSpec, Teaspoon, Mocha, Capybara Webkit, Factory Girl

#### Functionality
  The production application can be found [here](https://all-the-ideas.herokuapp.com/)

  If you ever needed a place to record all the crazy ideas you have throughout the day, you've come to the right place. Idea box is a place for you to record those ideas. A new idea can be created with a title and a body. Quality of ideas defaults to "Swill", but can be upvoted to "Plausible" or "Genius". Downvotes can be used to decrease the quality of an idea in the opposite order. If an idea is truly terrible, you can delete it. Edit the title or body of an idea by clicking on it.

#### Run it Locally

Clone:
``` git clone https://github.com/lucyfox4131/idea_box.git ```

DB Setup: ```rails db:create db:migrate```

Run the Server: ``` rails s```

Navigate to: ```localhost:3000```

Add some ideas!
