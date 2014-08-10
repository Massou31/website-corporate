# website-alkemics-corporate



Alkemics corporate website. On. Fire.

## For dev

### Requirements

- Install virtualbox sudo apt-get install virtualbox
- Download and install vagrant from their website
- Install python and pip sudo apt-get install python-dev python-pip
- Install ansible (provisionner) sudo pip install ansible
- Install nfs sudo apt-get install nfs-kernel-server
- Setup hosts:


    sudo /bin/bash -c "echo '199.199.199.11    wb-corp.alkemics.com' >> /etc/hosts"

### Installation and launch

    vagrant up
    vagrant ssh
    cd /var/www/website-corporate/current
    bower install
    grunt serve --force
