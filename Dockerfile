FROM rtsi.inca.rte-france.com/apache:2.4.6
MAINTAINER Ismail Soulaimane <soulaimane@gmail.com>
COPY dist /var/www/html
COPY httpd.conf /etc/httpd/conf/httpd.conf
