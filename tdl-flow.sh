#!/bin/bash

node_modules/.bin/flow stop
#node_modules/.bin/flow server --lazy-mode ide
#node_modules/.bin/flow force-recheck src/*.js
node_modules/.bin/flow server
