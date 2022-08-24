#! bin/bash

if [[ -z $1 ]];
then
   echo "A user key parameter is required to complete this operation."
else
   sed -i "/$1/d" /home/git/.ssh/unauthorised_user_keys
   echo $1  >> "/home/git/.ssh/authorized_keys"
   echo "A user is activated successfully!"
fi

