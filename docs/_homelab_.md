


```sh
arp -a

ip neigh
```


user@fedora:~$ arp -a
_gateway (10.222.232.100) at 00:e0:4c:36:00:90 [ether] on enp0s31f6
_gateway (10.88.143.119) at 0e:86:7c:27:02:84 [ether] on wlp4s0
? (10.88.143.128) at <incomplete> on wlp4s0
user@fedora:~$ ip neigh
10.222.232.100 dev enp0s31f6 INCOMPLETE 
10.88.143.119 dev wlp4s0 lladdr 0e:86:7c:27:02:84 REACHABLE 
10.88.143.128 dev wlp4s0 FAILED 
user@fedora:~$ 

