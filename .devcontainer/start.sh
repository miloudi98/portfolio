#!/usr/bin/env bash

IMAGE="seg3125fs"
PORTFOLIO_DIR="$(git rev-parse --show-toplevel)"
DOCKERFILE_DIR="$PORTFOLIO_DIR/.devcontainer"

build() {
  docker images | grep $IMAGE || docker buildx build -t $IMAGE $DOCKERFILE_DIR
}

run() {
  docker run -it --rm -v $PORTFOLIO_DIR:/src -p 3000:3000 $IMAGE 
}

build && run
