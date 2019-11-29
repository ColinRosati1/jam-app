# Jam app

![alt text](https://github.com/ColinRosati1/jam-app/blob/master/jam-screenshot.JPG)

## Overview
Display songs from two JAM api enpdpoints. with like & comment POST functions

## Task 
build a page which is connected to some of JAM public APIs that are
showing:
 List of songs (paginated) with thumb nail and play/pause button
 Each row should have 2 options which are to like a song and to comment a song
 Each request should return success or failure status
The end points are:
get list of songs: https://api-stg.jam-community.com/song/trending

like a song: https://api-stg.jam-community.com/interact/like?
apikey=___agAFTxkmMIWsmN9zOpM_6l2SkZPPy21LGRlxhYD8
(method is post and you should send us `id` of a song which the sample id is 00042cf4-2ce4-11e6-
bd70-0661aaff07f9)
comment a song: https://api-stg.jam-community.com/interact/like?
apikey=___agAFTxkmMIWsmN9zOpM_6l2SkZPPy21LGRlxhYD8
(method is post and you should send us `id` of a song which the sample id is 00042cf4-2ce4-11e6-
bd70-0661aaff07f9 also `type` which is song and message which will be your comment)


## Context
React, Flexbox, Jest, responsive


## Proposed Solution

On Body load populate trending songs API. Each result is styled into feed. Play/pause button exist as states.
Create comment and like as seperate components with API calls.  

First display comment and likes  in initial API call. Then send update POST requests.
Construct Post HTTP request with API key and id in header and body

return success or failure states of comment and like elements


## TODOS

Fix POST api calls
authorization not correct
add POST body query param for comment and like
Clear failure status state once POST calls are fixed
Add Jest unit testing



## Steps to Run

1. Clone this repository
2. npm install
3. npm start



