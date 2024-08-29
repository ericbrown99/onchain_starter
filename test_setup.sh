#!/bin/bash

# Create a temporary directory
temp_dir=$(mktemp -d)
echo "Created temporary directory: $temp_dir"

# Copy necessary files
cp setup.js "$temp_dir/"
cp .env.example "$temp_dir/"
cp package.json "$temp_dir/"

# Change to the temporary directory
cd "$temp_dir"

# Run the setup script
echo "Running setup script..."
node setup.js

# Inspect the results
echo "Generated .env file:"
cat .env

# Clean up
cd -
rm -rf "$temp_dir"
echo "Cleaned up temporary directory"