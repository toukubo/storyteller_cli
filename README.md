# storyteller_cli

Storyteller cli, it works standalone with local data. If you wanna use storyteller backends, install and configure the storyteller backend tools to your client. It syncs the client nouns, verbs, to your backend.

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
storyteller tell 
```




# options
## storyteller command options
Storyteller tell storyfile
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
users Post Tweets.
```


to the objective  ( and secound_objective ) , use nouns


# Environmental variables
## $VERBBASE
default: ~/.verbs/
It contains the verbs. We recommend to do 
clone https://github.com/toukubo/verbs 

it follows the restful directory path convention.
## sentences location
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
users RegistViaWeb User himself.
System DetectsLocation the Location of the User.
system shows the SuggestedUsers to the user
User Posts Follows 
System RealtimelyDisplays the Tweets of the Users. we call it timeline.
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