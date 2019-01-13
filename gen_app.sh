sudo docker run --rm --mount type=bind,source="$(pwd)",target=/app react-cli create-react-app ipweb

sudo docker run --rm -it -p 127.0.0.1:3000:3000 --mount type=bind,source="$(pwd)/ipweb",target=/app react-cli yarn start

sudo docker run --rm -it -p 0.0.0.0:6379:6379 -v $(pwd)/redis_data:/data redis redis-server --requirepass prvmtv123