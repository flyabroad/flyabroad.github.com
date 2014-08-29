#!/bin/bash

if [ $# -lt 1 ]
then
	echo "usage"
        echo "	$0 <Ìá½»µÄ×¢ÊÍ>"
        read commit_message

else

echo "first-args=$1"
commit_message="$1"

fi


git pull
git add . -A
git commit -m $commit_message
git push