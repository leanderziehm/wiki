# VPN

## Wireguard

```
mkdir ~/wireguard && cd ~/wireguard
```

```
umask 077
wg genkey > privatekey
```

```
wg pubkey < privatekey > publickey
```

```
sudo ip link add dev wg0 type wireguard
```

```
ip address add dev wg0 192.168.2.1/24
```

```
sudo wg set wg0 private-key ~/wireguard/privatekey
```

```
sudo ip link set up dev wg0
```


```
sudo wg
```



---

```
 wg genkey | tee privatekey | wg pubkey > publickey
```

```
wg set wg0 listen-port 51820 private-key /path/to/private-key peer ABCDEF... allowed-ips 192.168.88.0/24 endpoint 209.202.254.14:8172
```