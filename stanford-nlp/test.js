var StanfordSimpleNLP = require('./index');

// If encountering build errors, run `npm rebuild`

var stanfordSimpleNLP = new StanfordSimpleNLP.StanfordSimpleNLP( function(err) {
    stanfordSimpleNLP.process("Mary went to school but got bored.", function(err, result) {
        if (err) {
            console.log(err);
        } else {
            console.log(result.document.sentences.sentence);
        }
    });
});

