require('dotenv').config()
const env = process.env;
STORYTELLER_BASE = env.STORYTELLER_BASE

PROJECT=env.storyteller_project == null?'default':env.storyteller_project
PROJECT=PROJECT === ''?'default':PROJECT

PROJECT_BASE = STORYTELLER_BASE + "projects/" + PROJECT +"/"
NOUN_BASE = PROJECT_BASE + "nouns/"
VERB_BASE = STORYTELLER_BASE + "verbs/"
SENTENCE_BASE = PROJECT_BASE + "sentences/"

console.log("target project : "+PROJECT)
console.log("PROJECT_BASE : "+PROJECT_BASE)
console.log("NOUN_BASE : " + NOUN_BASE)
console.log("VERB_BASE:"+VERB_BASE)
console.log("SENTENCE_BASE:" +SENTENCE_BASE)
