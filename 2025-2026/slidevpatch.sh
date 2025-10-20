#!/bin/bash

# Script to replace text in markdown files
# Usage: ./replace_markdown.sh <filename>

# Check if filename is provided
if [ $# -eq 0 ]; then
    echo "Error: Please provide a filename as argument"
    echo "Usage: $0 <filename>"
    exit 1
fi

filename="$1"

# Check if file exists
if [ ! -f "$filename" ]; then
    echo "Error: File '$filename' not found"
    exit 1
fi

# Create a temporary file
temp_file=$(mktemp)

# Perform all replacements sequentially
sed -e 's|favicon: .*|favicon: '\''https://raw.githubusercontent.com/alptugan/alptugan.com-v6/refs/heads/main/v6/favicon-72-precomposed.png?token=GHSAT0AAAAAADJYWS74VCPN2IEKYITFOZ422G2WTWA'\''|g' \
    -e 's|image: /|image: |g' \
    -e 's|Lecturer Alp Tuğan|Lecturer Alp Tuğan, PhD<br>|g' \
    -e 's|src: ./pages/|src: pages/|g' \
    "$filename" > "$temp_file"

# Replace original file with the modified one
mv "$temp_file" "$filename"

echo "Text replacements completed successfully in '$filename'"
