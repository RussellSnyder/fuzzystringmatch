var fuzzyStringmatch = require('../')

var digester = new fuzzyStringmatch.Digester
var matcher = new fuzzyStringmatch.Matcher(digester)

digester.feed('United States of America')
digester.feed(new fuzzyStringmatch.Subject('United Kingdom of Great Britain'))
digester.feed('Germany')
digester.feed('France')
digester.feed('Japan')

matcher
    .match('grmnany')
    .forEach((resultEntry) => {
        var subject = resultEntry.getSubject()
        console.log(`${subject.getTerm()}, Matchscore: ${resultEntry.getMatchRelation()}`)
    })