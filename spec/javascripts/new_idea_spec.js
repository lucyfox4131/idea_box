//= require new_idea

describe('Quality Output', function(){
  it('returns Swill for 0', function(){
    var quality = 0
    var result = "Swill"

    expect(qualityOutput(quality)).to.equal(result)
  });

  it('returns Plausible for 1', function(){
    var quality = 1
    var result = "Plausible"

    expect(qualityOutput(quality)).to.equal(result)
  });

  it('returns Genius for 2', function(){
    var quality = 2
    var result = "Genius"

    expect(qualityOutput(quality)).to.equal(result)
  });
});

describe('truncateBody', function(){
  it("successfully shortens long body", function(){
    var body = "Bacon ipsum dolor amet spare ribs andouille biltong, strip steak rump flank corned beef salami. Ham andouille hamburger, salami ball tip bacon flank. Landjaeger tenderloin frankfurter hamburger. Flank tongue alcatra pork loin ribeye."
    var result = "Bacon ipsum dolor amet spare ribs andouille biltong, strip steak rump flank corned beef salami. Ham"

    expect(truncateBody(body)).to.equal(result);
    expect(truncateBody(body).length).to.be.below(100);
  });

  it("wont truncate a short body", function(){
    var body = "Shorter than 100 characters"

    expect(truncateBody(body)).to.equal(body);
  });
});
