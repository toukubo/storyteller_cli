# storyteller_cli

# install
```
npm install storyteller_cli -g
```

# Usage
## Single Sentence
```
sentence verb objecive secound_objective 
```

## Story for sentences
If you have Storyfile in the repository root
```
story tell -g
```


## configs
create .env file in the directory. Create one from the sample.env file. 
layer: the current layer. 


storyteller uses .env file, this means you can use environmental variables in the shell if you prefer it. 
most of the configurational variables in .env are for the project-wide configration, but some variables(e.g, layers) are for the configs. 


# general usage 
Storyteller cli works standalone with local data. 
If you wanna use storyteller backends, install and configure the storyteller backend tools to your client. It syncs the client nouns, verbs, to your backend.
It expect the 




# options
## General Optuons 
-g generation. If you run sentence, story command without -g option it just creates sentence and story to the backend ( or local data repo )
-f file. It create the generated files into the file/files. 

## storyteller command options
story tell -id=:id 
as defualt, storyteller tell takes Story file in the repository root.
you can specify the Storyfile path.
## sentence command options



# Story
It just contains the list of the sentence. storyteller cli calls "sentence" command to each of the sentences
``` Story
verb objecive secound_objective 
```
So it should go like
```
Users Post Tweets.
```


to the objective  ( and secound_objective ) , use nouns


# Environmental variables
## $VERBBASE
default: ~/.verbs/
It contains the verbs. We recommend to do 
clone https://github.com/toukubo/verbs 

it follows the restful directory path convention.
## sentences 
sentence commands create sentences under the directory. 
$STORYTELLER_BASE/projects/:project_name/sentences/

Each of the sentences  the json and sentences

The sentence

project_name is REQUIRED to be identical,alphanumeric. usually it assumes the github repository names.
## arguments and parse convernsions
storyteller, server side storyteller, or sentence command, all of them follows this method. As a design philosophy the storyteller follows "human readable story with some tips of the conventions, it parses the software scenario ( = story ) and turns it into the software that runs on the modern, architecture. so there are some small conventions for the parsing. 
* it is Case sensitive. 
* it skipps small case words. 
	* in 'sentence user Post a Tweet' it skips "user" and "a", so it detects "Post" as a Verb, and "Tweet" as the first Objective. 
in Story below, it skipps the small capitalized words, so it looks very like human readable "story", and makes the verbs as it is supporsed to be.
Story file's delimiter of the lines are, "." just as in the human readdable texts.
```
users RegistViaWeb User himself. System DetectsLocation the Location of the User. system shows the SuggestedUsers to the user. User Posts Follows .System RealtimelyDisplays the Tweets of the Users. we call it timeline. The newly registered user Post a Tweet. then wow! another user Post RetweetTweet ! And the user Get Reply on his screen! what's this ! it's called twitter!
```
We know its are little bit unnatural that some of the verbs has too much explanatory. ( DetectsLocation ) 

# Adverbs in sentences, multiple, similar verbs on the same Noun.
In the modern software, we need to have some similar, but different screens and features. It is strongly recommended you use the common shared classes/methods to do this, however, storyteller allows you to do make similar features ( == Sentences ) in a project. As you can see in the Story, we have some multiple sentences that differs form each other slightly. Most of the ases, each of the those features has "different attributes". A good example for this is, "editing credentials of the users" and "editing the profile of the users". Usually the restful backend has the "patch command" but we should call 2 ways of patches to follow this scenario. User changes his profile very casually in a "casual edit page" and more carefully for the credentials, maybe followed by some logic to check the password, or password reset features ( and sentences ).

In storyteller we can generate multiple Sentences using Adverbs. Adverbs REQUIRED to follow after the Objectives. 

In storyteller we have the concepts ( and models ) named "Adverbs", with this,  we can have the "


# template

# dependecy
Storyteller cli code generation internally uses the charming {{Mustache}} template engine. 


## Setting Project in you environment variables
if you don't specify a project to run storyteller, it assume it is in one default project that contains every thing in your the top dir



## interpreters for the farmeworks 
```
interpreter_file_path = Conventions.VERB_BASE+"/"+framework+"/"+"interpreter.js"
```


ルーターに上書きマップない場合、そのままコマンドのモデルを呼ぶ。
sentenceの場合はsentenceを呼ぶ。
オプションに対しては、そのオプションの意味をルーターでマップ解釈する。
頭文字＋モデルメソッドにする。
例：-g generation
規約では-c = create , -d delete -u update -g get option なし == -c
-c と-uははjsonを渡せる。
envにsetする。
routes.js （呼び出すモデルと関数）は上書きできる

paramのmappingもminimistとかでする。
　　
例：sentence Model User -g 
sentence.generationが呼ばれる。

この場合は規約にない＝BFFとされる。
BFFの中身のロジックは基本的にスタブのみ吐き出されているので埋める。
require sentenceし、require nounDao,verb daoする
nounJson = nounDAO.load(param.noun_name)とかverbも同じに。


sentence.generation.jsが呼ばれる（requireされる）

sentence.generation.jsはsentence.create()を読み、
reuiqre SentenceDao.jsし、
sentene.create()する。この中身は
{{#attrs}}
this.{{name}} == req.{{name}}
{{/attrs}}
dao.save()
だけする。

特殊ルート無ければレストフルな呼び出しとみなしモデルを呼ぶ。
例：
sentence Model User 
これはcreateを呼ぶ。

この場合、引数のパースは？
restとかのparamとはだいぶ違う省略がある。sentenceの場合、parseをデフォルトと変更。要宣言。
この引数の特殊形を吸収するのはrouterにかく。sentenceコマンドで-gのオプションの時か、no オプションの時は、-gをつける。-gの時は第二引数をnoun_name=param[2」とするみたいな。


sentences generationは？

generation -cは sentenceのnameかidか引数にとると実装される。


よしゃこれ作るどー。　-> DONE!
thigns above are the spec! but 

# Verbinfg

make a verb from clipboard content, using the nouns and attrs in the project.
also this takesd the "sample" project. it contains the common sample code you can find the blogs, github, or read codes.

## use cases
### from clipboard inside of your current project
example usage
``` example usage
verbing Create --framework=nodejs
```
show up : 
https://cl.ly/c662e2
it's like 
telling things for the ppl

### from web, 


### from github
it would go like
1. you can publish your sample templates, https://github.com/USER/PROJECT/.storyteller/verbs/ in github.
2. developers can integrate the code in storyteller hub.




# Storyteller Hub
1. publish code in github. ~/.storyteller/ directory.
2. storyteller generates the pages for your verbs ( templates ), in https://hub.storyteller.com/USER/PROJECT/verbs/, with the original template, and the sample code with filled with your nouns. 
This means, you, a OSS author, can show your sample to public, at the same time you can give the template snippet that is changed to the project code ( of those who uses your library )

3. using package manager, just npm it. 
4. run sentence the_verb the-layer and your noun -> the code. 


