DEBUG=site*,api*,proxy*
API_PORT=3001
PROXY_PORT=8080
SITE_PORT=3000

install-tools: 
	npm install -g gulp bower

install-api:
	cd api && npm install;

install-proxy:
	cd proxy && npm install;

install-site:
	cd site && npm install && bower install;

start: install-tools install-api install-proxy install-site ; ${MAKE} -j4 api proxy site  

api: 
	DEBUG=$(DEBUG) \
	PORT=$(API_PORT) \
	./api/bin/www

proxy:
	cd proxy && \
	DEBUG=$(DEBUG) \
	API_PORT=$(API_PORT) \
	PROXY_PORT=$(PROXY_PORT) \
	SITE_PORT=$(SITE_PORT) \
	node proxy.js

site:
	cd site && \
	DEBUG=$(DEBUG) \
	PROXY_PORT=$(PROXY_PORT) \
	PORT=$(SITE_PORT) \
	gulp

.PHONY: api proxy site test
