#!/bin/sh

envsubst < /etc/nginx/templates/nginx.conf.template > /etc/nginx/conf.d/nginx.conf \
    && runtime-env-cra --config-name="/usr/share/nginx/html/runtime-env.js" \
    && nginx -g "daemon off;"
