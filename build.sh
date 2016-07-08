rm -rf /tmp/nastya_package;
npm run clean && grunt client;
cp -a ./. /tmp/nastya_package/;
cd /tmp/nastya_package/;
rm -rf .idea/ node_modules/ npm-debug.log package.zip package/;
zip -r package.zip *;
cd -;
cp /tmp/nastya_package/package.zip ./