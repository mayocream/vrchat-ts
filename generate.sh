#!/bin/bash

openapi-generator generate \
-i https://raw.githubusercontent.com/vrchatapi/specification/gh-pages/openapi.yaml \
-o . \
-g typescript-fetch

