#!/bin/bash

# Create directories
mkdir -p app/products app/customize app/about components lib styles

# Create files in app directory
touch app/globals.css
touch app/layout.tsx
touch app/page.tsx
touch app/products/page.tsx
touch app/customize/page.tsx
touch app/about/page.tsx

# Create component files
touch components/ProductList.tsx
touch components/CustomizationForm.tsx
touch components/Summary.tsx

# Create products.json in lib directory
cat << EOF > lib/products.json
{
  "products": [
    {
      "id": 1,
      "name": "Standard Window",
      "type": "window",
      "basePrice": 100,
      "options": {
        "sizes": [
          {"name": "Small", "price": 0},
          {"name": "Medium", "price": 50},
          {"name": "Large", "price": 100}
        ],
        "glassTypes": [
          {"name": "Clear", "price": 0},
          {"name": "Frosted", "price": 20},
          {"name": "Tinted", "price": 30}
        ],
        "frames": [
          {"name": "White uPVC", "price": 0},
          {"name": "Wood Effect", "price": 50},
          {"name": "Aluminum", "price": 75}
        ]
      }
    }
  ]
}
EOF

echo "Project structure and essential files have been created."
`
