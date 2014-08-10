# -*- mode: ruby -*-
# vi: set ft=ruby

PROJECT_NAME    = "website-corporate"
BOX_NAME        = "ubuntu/precise64"

VM_CPUCAP          = ENV.has_key?("VM_CPUCAP")          ? ENV["VM_CPUCAP"]          : "100"
VM_CPUS            = ENV.has_key?("VM_CPUS")            ? ENV["VM_CPUS"]            : 2
VM_MEMORY          = ENV.has_key?("VM_MEMORY")          ? ENV["VM_MEMORY"]          : 2048
VM_PRIVATE_NETWORK = ENV.has_key?("VM_PRIVATE_NETWORK") ? ENV["VM_PRIVATE_NETWORK"] : "199.199.199.11"

Vagrant.configure("2") do |config|
  config.vm.define PROJECT_NAME do |config|
    config.vm.box      = BOX_NAME
    config.vm.box_check_update = false

    config.vm.hostname = PROJECT_NAME
    config.vm.network :private_network, ip: VM_PRIVATE_NETWORK

    config.vm.provider "virtualbox" do |v|
      v.customize ["modifyvm", :id, "--cpuexecutioncap", VM_CPUCAP]
      v.customize ["modifyvm", :id, "--memory",          VM_MEMORY]
      v.customize ["modifyvm", :id, "--cpus",            VM_CPUS]
      v.name = PROJECT_NAME
    end

    config.ssh.forward_agent = true

    config.vm.synced_folder "../website-corporate", "/var/www/website-corporate/current", id: "website-corporate", type: "nfs", nfs_udp: false, create: true
    config.vm.synced_folder "../sdk-dashboard", "/var/www/sdk-dashboard", id: "sdk-dashboard", type: "nfs", nfs_udp: false, create: true

    config.vm.provision "ansible" do |ansible|
      ansible.sudo = true
      ansible.playbook = "provisioning/site.yml"
    end
  end
end
