#!/bin/bash
# Create folder structure
mkdir -p server/{models,routes,middleware,config} client/{src/{components,pages,services},public}

# Create .gitignore
cat > .gitignore << 'GITIGNORE'
node_modules/
.env
.env.local
build/
dist/
.DS_Store
*.log
