#! bin/bash


if [[ -z $1 ]];
then
   echo "A user key is required to complete this operation."
else
   echo $1  >> "/home/git/.ssh/authorized_keys"
   echo "User key added successfully"
fi
