
## podman restarts

```
loginctl enable-linger $USER
systemctl --user enable --now podman-restart.service
podman run -d -p 8321:8321 --restart=always ghcr.io/leanderziehm/container-example-cicd:latest
```

## container dev setup:

```
podman run --rm -it quay.io/fedora/fedora:latest bash
```

```
docker pull ghcr.io/leanderziehm/dev-environment-fedora:latest
```


or add this to .bashrc

```
work() {
    local name="work-${1:-default}"
    local image="ghcr.io/leanderziehm/dev-environment-fedora:latest"

    if ! podman container exists "$name"; then
        podman run -it --name "$name" "$image"
    else
        podman start -ai "$name"
    fi
}
```





# Conters to try:

| category | app          | image                      | downloads | stars | purpose                                                |
| -------- | ------------ | -------------------------- | --------- | ----- | ------------------------------------------------------ |
| browser  | chrome       | selenium/standalone-chrome | 500M+     | 638   | browser automation for testing                         |
| browser  | chrome       | browserless/chrome         | 100M+     | 256   | scraping, pdf, screenshot, playwright, browser control |
| browser  | chrome       | kasmweb/chrome:1.8.0-edge  | 10M+      | 179   | interactive desktop                                    |
|          |              |                            |           |       |                                                        |
|          |              |                            |           |       |                                                        |
| dashboar | heimdall     | linuxserver/heimdall       | 500M+     | 1.2K  |                                                        |
| habits   | beaverhabits | daya0576/beaverhabits      | 500K+     | 1     |                                                        |








vscode in docker, code server.
obsidian
linux over http 
reverse proxy with logging and automatic ip ban


bookstack?



| name                | downloads | stars | updated | link                                         |
| ------------------- | --------- | ----- | ------- | -------------------------------------------- |
| memcached           | 1B+       | 2.5K  | 3d      | https://hub.docker.com/_/memcached           |
| nginx               | 1B+       | 10K+  | 3d      | https://hub.docker.com/_/nginx               |
| busybox             | 1B+       | 3.5K  | 1m      | https://hub.docker.com/_/busybox             |
| alpine              | 1B+       | 10K+  | 6d      | https://hub.docker.com/_/alpine              |
| postgres            | 1B+       | 10K+  | 1d      | https://hub.docker.com/_/postgres            |
| redis               | 1B+       | 10K+  | 1d      | https://hub.docker.com/_/redis               |
| ubuntu              | 1B+       | 10K+  | 9d      | https://hub.docker.com/_/ubuntu              |
| python              | 1B+       | 10K+  | 3d      | https://hub.docker.com/_/python              |
| node                | 1B+       | 10K+  | 3d      | https://hub.docker.com/_/node                |
| mysql               | 1B+       | 10K+  | 5d      | https://hub.docker.com/_/mysql               |
| mongo               | 1B+       | 10K+  | 16d     | https://hub.docker.com/_/mongo               |
| httpd               | 1B+       | 4.9K  | 4d      | https://hub.docker.com/_/httpd               |
| rabbitmq            | 1B+       | 5.4K  | 4d      | https://hub.docker.com/_/rabbitmq            |
| docker              | 1B+       | 2.7K  | 1d      | https://hub.docker.com/_/docker              |
| traefik             | 1B+       | 3.6K  | 5d      | https://hub.docker.com/_/traefik             |
| hello-world         | 1B+       | 2.6K  | 19d     | https://hub.docker.com/_/hello-world         |
| mariadb             | 1B+       | 6.1K  | 3d      | https://hub.docker.com/_/mariadb             |
| openjdk             | 1B+       | 4.1K  | 1d      | https://hub.docker.com/_/openjdk             |
| golang              | 1B+       | 5.1K  | 4d      | https://hub.docker.com/_/golang              |
| registry            | 1B+       | 4.2K  | 5d      | https://hub.docker.com/_/registry            |
| debian              | 1B+       | 5.3K  | 4d      | https://hub.docker.com/_/debian              |
| ruby                | 1B+       | 2.4K  | 3d      | https://hub.docker.com/_/ruby                |
| wordpress           | 1B+       | 5.9K  | 22h     | https://hub.docker.com/_/wordpress           |
| php                 | 1B+       | 7.9K  | 1d      | https://hub.docker.com/_/php                 |
| sonarqube           | 1B+       | 2.6K  | 25d     | https://hub.docker.com/_/sonarqube           |
| centos              | 1B+       | 7.8K  | 3y      | https://hub.docker.com/_/centos              |
| haproxy             | 1B+       | 2.0K  | 1d      | https://hub.docker.com/_/haproxy             |
| influxdb            | 1B+       | 2.0K  | 5d      | https://hub.docker.com/_/influxdb            |
| consul              | 1B+       | 1.5K  | 2y      | https://hub.docker.com/_/consul              |
| nextcloud           | 1B+       | 4.5K  | 9h      | https://hub.docker.com/_/nextcloud           |
| amazonlinux         | 500M+     | 1.5K  | 6d      | https://hub.docker.com/_/amazonlinux         |
| elasticsearch       | 500M+     | 6.6K  | 3d      | https://hub.docker.com/_/elasticsearch       |
| tomcat              | 500M+     | 3.8K  | 3d      | https://hub.docker.com/_/tomcat              |
| maven               | 500M+     | 1.7K  | 4d      | https://hub.docker.com/_/maven               |
| caddy               | 500M+     | 978   | 4d      | https://hub.docker.com/_/caddy               |
| eclipse-mosquitto   | 500M+     | 1.4K  | 6d      | https://hub.docker.com/_/eclipse-mosquitto   |
| telegraf            | 500M+     | 731   | 4d      | https://hub.docker.com/_/telegraf            |
| bash                | 500M+     | 753   | 4d      | https://hub.docker.com/_/bash                |
| vault               | 500M+     | 1.2K  | 2y      | https://hub.docker.com/_/vault               |
| adminer             | 100M+     | 979   | 10d     | https://hub.docker.com/_/adminer             |
| ghost               | 100M+     | 1.8K  | 4d      | https://hub.docker.com/_/ghost               |
| kong                | 100M+     | 834   | 11d     | https://hub.docker.com/_/kong                |
| solr                | 100M+     | 1.0K  | 26d     | https://hub.docker.com/_/solr                |
| zookeeper           | 100M+     | 1.5K  | 1m      | https://hub.docker.com/_/zookeeper           |
| neo4j               | 100M+     | 1.4K  | 4d      | https://hub.docker.com/_/neo4j               |
| eclipse-temurin     | 100M+     | 784   | 3d      | https://hub.docker.com/_/eclipse-temurin     |
| gradle              | 100M+     | 626   | 2d      | https://hub.docker.com/_/gradle              |
| mongo-express       | 100M+     | 1.5K  | 1y      | https://hub.docker.com/_/mongo-express       |
| cassandra           | 100M+     | 1.6K  | 4d      | https://hub.docker.com/_/cassandra           |
| buildpack-deps      | 100M+     | 688   | 22h     | https://hub.docker.com/_/buildpack-deps      |
| perl                | 100M+     | 474   | 44m     | https://hub.docker.com/_/perl                |
| nats                | 100M+     | 519   | 6d      | https://hub.docker.com/_/nats                |
| percona             | 100M+     | 648   | 3d      | https://hub.docker.com/_/percona             |
| kibana              | 100M+     | 2.8K  | 3d      | https://hub.docker.com/_/kibana              |
| composer            | 100M+     | 1.1K  | 9d      | https://hub.docker.com/_/composer            |
| drupal              | 100M+     | 1.1K  | 18h     | https://hub.docker.com/_/drupal              |
| couchdb             | 100M+     | 596   | 4d      | https://hub.docker.com/_/couchdb             |
| logstash            | 100M+     | 2.3K  | 3d      | https://hub.docker.com/_/logstash            |
| chronograf          | 100M+     | 371   | 4d      | https://hub.docker.com/_/chronograf          |
| jenkins             | 100M+     | 5.7K  | 8y      | https://hub.docker.com/_/jenkins             |
| amazoncorretto      | 100M+     | 498   | 6d      | https://hub.docker.com/_/amazoncorretto      |
| java                | 100M+     | 2.0K  | 9y      | https://hub.docker.com/_/java                |
| teamspeak           | 100M+     | 610   | 6d      | https://hub.docker.com/_/teamspeak           |
| matomo              | 100M+     | 358   | 14h     | https://hub.docker.com/_/matomo              |
| fedora              | 100M+     | 1.3K  | 1m      | https://hub.docker.com/_/fedora              |
| rust                | 100M+     | 1.1K  | 4d      | https://hub.docker.com/_/rust                |
| sentry              | 100M+     | 663   | 6y      | https://hub.docker.com/_/sentry              |
| nats-streaming      | 100M+     | 167   | 2y      | https://hub.docker.com/_/nats-streaming      |
| adoptopenjdk        | 100M+     | 378   | 4y      | https://hub.docker.com/_/adoptopenjdk        |
| flink               | 50M+      | 466   | 5d      | https://hub.docker.com/_/flink               |
| couchbase           | 50M+      | 930   | 26d     | https://hub.docker.com/_/couchbase           |
| phpmyadmin          | 50M+      | 1.1K  | 1d      | https://hub.docker.com/_/phpmyadmin          |
| joomla              | 50M+      | 475   | 13h     | https://hub.docker.com/_/joomla              |
| swarm               | 50M+      | 1.1K  | 6y      | https://hub.docker.com/_/swarm               |
| groovy              | 50M+      | 160   | 6d      | https://hub.docker.com/_/groovy              |
| rethinkdb           | 50M+      | 638   | 4d      | https://hub.docker.com/_/rethinkdb           |
| rocket.chat         | 50M+      | 853   | 5d      | https://hub.docker.com/_/rocket.chat         |
| redmine             | 50M+      | 1.3K  | 4d      | https://hub.docker.com/_/redmine             |
| elixir              | 50M+      | 582   | 4d      | https://hub.docker.com/_/elixir              |
| erlang              | 50M+      | 379   | 4d      | https://hub.docker.com/_/erlang              |
| kapacitor           | 50M+      | 266   | 6d      | https://hub.docker.com/_/kapacitor           |
| owncloud            | 50M+      | 1.4K  | 7y      | https://hub.docker.com/_/owncloud            |
| jruby               | 50M+      | 118   | 17d     | https://hub.docker.com/_/jruby               |
| odoo                | 50M+      | 1.5K  | 6d      | https://hub.docker.com/_/odoo                |
| mediawiki           | 10M+      | 616   | 4d      | https://hub.docker.com/_/mediawiki           |
| jetty               | 10M+      | 412   | 6d      | https://hub.docker.com/_/jetty               |
| oraclelinux         | 10M+      | 1.1K  | 3d      | https://hub.docker.com/_/oraclelinux         |
| mono                | 10M+      | 522   | 2y      | https://hub.docker.com/_/mono                |
| rockylinux          | 10M+      | 324   | 2y      | https://hub.docker.com/_/rockylinux          |
| pypy                | 10M+      | 402   | 4d      | https://hub.docker.com/_/pypy                |
| clojure             | 10M+      | 365   | 4d      | https://hub.docker.com/_/clojure             |
| arangodb            | 10M+      | 293   | 6d      | https://hub.docker.com/_/arangodb            |
| xwiki               | 10M+      | 323   | 3d      | https://hub.docker.com/_/xwiki               |
| ros                 | 10M+      | 723   | 9d      | https://hub.docker.com/_/ros                 |
| archlinux           | 10M+      | 664   | 6d      | https://hub.docker.com/_/archlinux           |
| swift               | 10M+      | 736   | 3d      | https://hub.docker.com/_/swift               |
| znc                 | 10M+      | 121   | 5h      | https://hub.docker.com/_/znc                 |
| gcc                 | 10M+      | 900   | 1d      | https://hub.docker.com/_/gcc                 |
| hylang              | 10M+      | 67    | 3d      | https://hub.docker.com/_/hylang              |
| tomee               | 10M+      | 120   | 6d      | https://hub.docker.com/_/tomee               |
| haxe                | 10M+      | 63    | 4d      | https://hub.docker.com/_/haxe                |
| websphere-liberty   | 10M+      | 301   | 11d     | https://hub.docker.com/_/websphere-liberty   |
| sapmachine          | 10M+      | 56    | 6d      | https://hub.docker.com/_/sapmachine          |
| django              | 10M+      | 1.2K  | 9y      | https://hub.docker.com/_/django              |
| yourls              | 10M+      | 321   | 22h     | https://hub.docker.com/_/yourls              |
| varnish             | 10M+      | 183   | 4d      | https://hub.docker.com/_/varnish             |
| piwik               | 10M+      | 192   | 7y      | https://hub.docker.com/_/piwik               |
| crate               | 10M+      | 229   | 3d      | https://hub.docker.com/_/crate               |
| aerospike           | 10M+      | 147   | 24d     | https://hub.docker.com/_/aerospike           |
| photon              | 10M+      | 203   | 16d     | https://hub.docker.com/_/photon              |
| iojs                | 10M+      | 143   | 9y      | https://hub.docker.com/_/iojs                |
| julia               | 10M+      | 344   | 4d      | https://hub.docker.com/_/julia               |
| orientdb            | 10M+      | 189   | 9d      | https://hub.docker.com/_/orientdb            |
| almalinux           | 10M+      | 213   | 26d     | https://hub.docker.com/_/almalinux           |
| bonita              | 10M+      | 190   | 6d      | https://hub.docker.com/_/bonita              |
| open-liberty        | 10M+      | 69    | 11d     | https://hub.docker.com/_/open-liberty        |
| ibmjava             | 10M+      | 134   | 1m      | https://hub.docker.com/_/ibmjava             |
| monica              | 10M+      | 226   | 10h     | https://hub.docker.com/_/monica              |
| fluentd             | 10M+      | 210   | 4d      | https://hub.docker.com/_/fluentd             |
| ibm-semeru-runtimes | 10M+      | 61    | 26d     | https://hub.docker.com/_/ibm-semeru-runtimes |
| r-base              | 10M+      | 561   | 4d      | https://hub.docker.com/_/r-base              |
| neurodebian         | 10M+      | 116   | 4d      | https://hub.docker.com/_/neurodebian         |
| opensuse            | 5M+       | 333   | 7y      | https://hub.docker.com/_/opensuse            |
| storm               | 5M+       | 205   | 10d     | https://hub.docker.com/_/storm               |
| rails               | 5M+       | 907   | 9y      | https://hub.docker.com/_/rails               |
| ubuntu-debootstrap  | 5M+       | 52    | 10y     | https://hub.docker.com/_/ubuntu-debootstrap  |
| irssi               | 5M+       | 181   | 4d      | https://hub.docker.com/_/irssi               |
| haskell             | 5M+       | 495   | 4d      | https://hub.docker.com/_/haskell             |
| plone               | 5M+       | 102   | 2y      | https://hub.docker.com/_/plone               |
| backdrop            | 5M+       | 119   | 4d      | https://hub.docker.com/_/backdrop            |
| clearlinux          | 5M+       | 181   | 1y      | https://hub.docker.com/_/clearlinux          |
| cirros              | 5M+       | 79    | 2y      | https://hub.docker.com/_/cirros              |
| lightstreamer       | 5M+       | 95    | 9d      | https://hub.docker.com/_/lightstreamer       |
| notary              | 5M+       | 72    | 2y      | https://hub.docker.com/_/notary              |
| geonetwork          | 5M+       | 91    | 3d      | https://hub.docker.com/_/geonetwork          |
| friendica           | 5M+       | 125   | 18h     | https://hub.docker.com/_/friendica           |
| postfixadmin        | 5M+       | 215   | 12d     | https://hub.docker.com/_/postfixadmin        |
| convertigo          | 5M+       | 60    | 3d      | https://hub.docker.com/_/convertigo          |
| nuxeo               | 5M+       | 95    | 5y      | https://hub.docker.com/_/nuxeo               |
| hello-seattle       | 5M+       | 14    | 7y      | https://hub.docker.com/_/hello-seattle       |
| emqx                | 1M+       | 108   | 4d      | https://hub.docker.com/_/emqx                |
| php-zendserver      | 1M+       | 213   | 3y      | https://hub.docker.com/_/php-zendserver      |
| gazebo              | 1M+       | 149   | 1y      | https://hub.docker.com/_/gazebo              |
| dart                | 1M+       | 170   | 21h     | https://hub.docker.com/_/dart                |
| celery              | 1M+       | 318   | 9y      | https://hub.docker.com/_/celery              |
| spiped              | 1M+       | 66    | 1d      | https://hub.docker.com/_/spiped              |
| swipl               | 1M+       | 74    | 3d      | https://hub.docker.com/_/swipl               |
| clickhouse          | 1M+       | 51    | 2d      | https://hub.docker.com/_/clickhouse          |
| thrift              | 1M+       | 121   | 4y      | https://hub.docker.com/_/thrift              |
| kaazing-gateway     | 1M+       | 65    | 4y      | https://hub.docker.com/_/kaazing-gateway     |
| fsharp              | 1M+       | 86    | 5y      | https://hub.docker.com/_/fsharp              |
| eggdrop             | 1M+       | 84    | 6d      | https://hub.docker.com/_/eggdrop             |
| rapidoid            | 1M+       | 27    | 4y      | https://hub.docker.com/_/rapidoid            |
| docker-dev          | 1M+       | 106   | 10y     | https://hub.docker.com/_/docker-dev          |
| rakudo-star         | 1M+       | 60    | 4d      | https://hub.docker.com/_/rakudo-star         |
| express-gateway     | 1M+       | 76    | 3y      | https://hub.docker.com/_/express-gateway     |
| silverpeas          | 1M+       | 48    | 1m      | https://hub.docker.com/_/silverpeas          |
| ubuntu-upstart      | 1M+       | 116   | 10y     | https://hub.docker.com/_/ubuntu-upstart      |
| spark               | 1M+       | 121   | 1m      | https://hub.docker.com/_/spark               |
| mageia              | 1M+       | 44    | 12d     | https://hub.docker.com/_/mageia              |
| known               | 1M+       | 46    | 7y      | https://hub.docker.com/_/known               |
| hola-mundo          | 1M+       | 11    | 7y      | https://hub.docker.com/_/hola-mundo          |
| glassfish           | 1M+       | 159   | 10y     | https://hub.docker.com/_/glassfish           |
| unit                | 1M+       | 58    | 9m      | https://hub.docker.com/_/unit                |
| liquibase           | 1M+       | 13    | 6d      | https://hub.docker.com/_/liquibase           |
| crux                | 500K+     | 40    | 6y      | https://hub.docker.com/_/crux                |
| clefos              | 500K+     | 23    | 4y      | https://hub.docker.com/_/clefos              |
| alt                 | 500K+     | 71    | 2m      | https://hub.docker.com/_/alt                 |
| euleros             | 500K+     | 34    | 6y      | https://hub.docker.com/_/euleros             |
| jobber              | 500K+     | 47    | 2y      | https://hub.docker.com/_/jobber              |
| sourcemage          | 500K+     | 49    | 5y      | https://hub.docker.com/_/sourcemage          |
| sl                  | 500K+     | 58    | 2y      | https://hub.docker.com/_/sl                  |
| hitch               | 500K+     | 28    | 4d      | https://hub.docker.com/_/hitch               |
| satosa              | 500K+     | 16    | 4d      | https://hub.docker.com/_/satosa              |
| hipache             | 100K+     | 84    | 10y     | https://hub.docker.com/_/hipache             |
| krakend             | 100K+     | 7     | 6d      | https://hub.docker.com/_/krakend             |
| scratch             | 100K+     | 1.0K  | 13y     | https://hub.docker.com/_/scratch             |
| api-firewall        | 50K+      | 58    | 6d      | https://hub.docker.com/_/api-firewall        |
| azul-zulu           | 10K+      | 1     | 4d      | https://hub.docker.com/_/azul-zulu           |
