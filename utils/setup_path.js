require('dotenv').config()
const env = process.env;
STORYTELLER_BASE = env.STORYTELLER_BASE

PROJECT=env.storyteller_project == null?'default':env.storyteller_project
PROJECT=PROJECT === ''?'default':PROJECT

LAYER = env.layer

NOUNS = {}
NOUNS.ID = "nouns"
NOUNS.TABLE_NAME = "Nouns"
PROJECTS = {}
PROJECTS.ID = "projects"
PROJECTS.TABLE_NAME = "Projects"
ATTRS = {}
ATTRS.ID = "attrs"
ATTRS.TABLE_NAME = "Attrs"
VERBS = {}
VERBS.ID = "verbs"
VERBS.TABLE_NAME = "Verbs"
SENTENCES = {}
SENTENCES.ID = "sentences"
SENTENCES.TABLE_NAME = "Sentences"


// # Conventions
Conventions = {}
Conventions.LOCAL_FILE_BASE = process.cwd()
Conventions.PROJECT_BASE = Conventions.LOCAL_FILE_BASE
Conventions.NOUN_BASE = Conventions.LOCAL_FILE_BASE +"/"+ NOUNS.ID +"/"
Conventions.ATTR_BASE = Conventions.LOCAL_FILE_BASE +"/"+ ATTRS.ID +"/"
Conventions.SENTENCE_BASE = Conventions.LOCAL_FILE_BASE +"/"+ SENTENCES.ID +"/"
// should have verbs json and also the templates.... verbs has many files
Conventions.VERB_BASE = STORYTELLER_BASE + VERBS.ID+"/"

console.log("Target Project : "+PROJECT)
console.log("PROJECT_BASE : "+Conventions.PROJECT_BASE)
console.log("NOUN_BASE : " + Conventions.NOUN_BASE)
console.log("VERB_BASE:"+Conventions.VERB_BASE)
console.log("SENTENCE_BASE:" +Conventions.SENTENCE_BASE)


/// # stack
Stack = {}
Stack.restbase=env.RESTBASE
Stack.bff=env.microjs
Stack.backend=env.BACKEND
Stack.logic=env.nodejs
Stack.api_method=env.graphql
Stack.bff_api_client=env.axios
Stack.CLIENT_LANG=env.js


console.log("BFF : "+Stack.bff)
console.log("LOGIC : "+Stack.logic)
console.log("API_METHOD : "+Stack.api_method)
console.log("BFF_API_CLIENT : "+Stack.bff_api_client)
console.log("CLIENT_LANG : "+Stack.CLIENT_LANG)
console.log("BACKEND : "+Stack.backend)

//defaulting layers_frameworks
Stack.RESTBASE=Stack.RESTBASE === ''?'local':Stack.RESTBASE
Stack.BFF=Stack.BFF === ''?'microjs':Stack.BFF
Stack.LOGIC=Stack.LOGIC === ''?'nodejs':Stack.LOGIC
Stack.LOGIC='nodejs'
// API_METHOD=API_METHOD === ''?'rest':API_METHOD
// BFF_API_CLIENT=BFF_API_CLIENT === ''?'rest':BFF_API_CLIENT
// CLIENT_LANG=CLIENT_LANG === ''?'js':CLIENT_LANG

// RESTBASE=RESTBASE === ''?'local':RESTBASE
