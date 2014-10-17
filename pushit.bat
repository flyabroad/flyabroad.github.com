#!/bin/bash

if [ $# -lt 1 ]
then
        read -p "please input commit message:" desc
else
	echo "comment message = $1"
	desc="$1"
fi

git pull
git add . && \
git add -u && \
git commit -m "$desc" && \
git push