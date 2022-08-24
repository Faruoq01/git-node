#! bin/bash

input="../../.ssh/authorized_keys"

if [[ -z $1 ]]
then
  echo "A key parameter is required"
else
  sed -i "/$1/d" /home/git/.ssh/authorized_keys
  echo "User key deleted successfully"
fi
