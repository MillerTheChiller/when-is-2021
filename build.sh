#!/bin/bash

cd client
npm run build
cd ..

if [ -d "./server/build" ]; then
    rm -r ./server/build

mv ./client/build ./server/build

npm run

fi;