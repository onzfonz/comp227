#!/bin/bash

images="list_of_images.txt"
branch="sentence_transfer"

while read -r image; do
  git checkout "$branch" -- "$image"
done < "$images"
