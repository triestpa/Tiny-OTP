gsutil rsync -d  -x '\..*|./[.].*$|node_modules'  -r . gs://cdn.patricktriest.com/vendor/otp/