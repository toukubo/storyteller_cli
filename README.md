# storyteller_cli

## General Development Flow

### Create Projects

1. project name, github urlなどを設定する
2. local environmental setup for the storyteller enable project. projectにstorytellerを有効にする
3. core projectを作成する
4. 管理対象プロジェクト（実プロジェクト）を作成する

管理対象プロジェクト：実際のプロジェクト
the actual project that you wanna run and code. 
core project : storytellerではあるprojectに関するモデル、

in storyteller, we use the models, it's attrutes, features, use cases, scenarios, api specs, and code itself, are managed in the meta way. so those management contents are in the core project. so you have to make this too. 

#### storyteller cli のinstall

```bash
npm install storyteller_cli -g
```

#### Config CLI

##### what happends internal of this 'init'

1. create .env file in the directory. Create one from the sample.env file.
2. it set the DEFAULTS from the backend settings. syncing form the stgoryteller backends.

most of the configurational variables in .env are for the project-wide configration, but some variables(e.g, layers) are for the configs. 

### Create and Set Project Frmeworks 

1. Project 画面にて frameworks を新規作成する
2. 作成したframeworkについて framework.from にbaseとなるframeworkを設定する
通常、rails,nodejs,graphql,といった大規模粒度のフレームワークから、api-mode-rails, restfull-rails,airtable-plusといったframeworkを選択します。storytellerにおいてはアプリケーションは個別に「framework」でありすべての個別のプロジェクト、ソフトウェアは「規約の集合体」を所有します。一般的なフレームワークの規約を拡張子、独自の規約を暗黙的に定義していますが、storytellerにおいてはこのframeworkの規約定義を明示的に所有することでその規約とコードにもとづき実装コード生成が行われます。（詳細は  Frameworksを参照）

## Framework Templatesの作成

1. システムが自動で、fromからfarmeworkと、framework.templatesをコピーして作成
2. fromした独自frameworkの独自templatesを実装する( verbing )


# framework
FrameworkはDockerに影響を受けた構造をもちます。
Frameworks has the similar strcturte, influeneced with Docker a lot, 
it can extends the templates layers using "from" based framework.
in storyteller, the framework is the collectoins of hte template layers. when a framework extneds another frameoworkg using from, similarily to the docker, the framework can use the Templates of the Framework. 


### Story for sentences
If you have Storyfile in the repository root
```
story tell -g
```


* Storyteller cli works standalone with local data. 
If you wanna use storyteller backends, install and configure the storyteller backend tools to your client. It syncs the client nouns, verbs, to your backend.


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

### Story for sentences
If you have Storyfile in the repository root
```
story tell -g


## setup

```bash
mkdir yourproject_core
cd yourproject_core
storyteller init
```

or just copy and paste the core files. 

## Usage

### Single Sentence Usecase

```bash
sentence verb objecive secound_objective 
```





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


# base verb
## modelとcreateやof説などのnest
base 的なファイル（クラスのmodelやdaoなど



# sentence layers
1. sentence.layersを埋める(backendがairbtaleとかならairtbaleでそのlayersを選んで埋める）
2. 



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




# verb bases

## the Conclusion 

### templates code

* we expect the template codes exists in http://github.com/account/framework.id/template.id.extention, and tries to download the code from there. 
* if Templates is not in the url above, then it takes code from Airtable Template.code. ( in the rest backend ). 
* or if not in template.code, fail. 



## pros and cons on the storage methods

### verbs templates in git 
+ the templates are ABLE TO grow ( diffs and commits ) 
+ easy to verb ? 
- meta data not stored in the GitHub
	- path
+ can be used as a storyteller hub template format ? 

Like if 

```
app/controllers/UserCotrollers.rb
app/models/User.rb
.storyteller/controller/rails-controller-base.js
.storyteller/dao/nodejs-cli model-Model.js


.storyteller/dao/dao_base.js
.storyteller/dao/nodejs-cli model-Model.js


```


### verbs tamplate code in the Template backend as object data ? 
+ meta data in relational db
+ in the Airtable GUI

### both, and sync

#### the runtime for the git and Airtable backend

##### from git to Airtable ? 

1. 
2. Diff
- [ ] the meta-tree of the Templates and the "Actual" templates should be synced partially ? 
	- [ ] the partial templates relationship
		- [ ] the Inclusion ( use ) relationships
		- [ ] concrete / general ( generalization ) relationships
- [ ] the "included mapped" collection SHOULD be treated. 	

#### Airtable 2 git ( flat file ) 


- [ ] how to take the diff.
