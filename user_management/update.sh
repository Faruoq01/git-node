#! bin/bash

if [[ -z $1 ]];
then
   echo "A user old key parameter is required to complete this operation."
else
   sed -i "/$1/d" /home/git/.ssh/authorized_keys
   if [[ -z $2 ]]
   then
     echo "A user new key parameter is required to complete this operation"
   else  
     echo $2  >> "/home/git/.ssh/authorized_keys"
     echo "User key updated successfully"
   fi
fi

