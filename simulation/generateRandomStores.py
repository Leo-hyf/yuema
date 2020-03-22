import random
import json

all_tags = [
    'Clothing',
    'Shoes',
    'Consumer Electronics',
    'Books',
    'Movies',
    'Cosmetics',
    'Food and Drinks',
    'Sports',
    'Music',
    'Entertaining',
    'DIY',
    'Games',
    'Traveling',
    'Electronics',
    'Furniture',
    'Accessories',
    'Luxury',
    'Economical'
]
def generate(id,name):
    store = {
        "id": {"S":id},
        "storeName": {"S": name},
        "description": {"S": "ABCDEFG"},
        "tags": {"SS": random.sample(all_tags,5)},
        "lat": 0.0,
        "long": 0.0,
        "floor": random.randint(1,3),
        "terminal": random.randint(1,2)
    }

    return {"PutRequset":{"item":store}}

stores = []
for id in range(0,25):
    stores.append(generate(id,chr(ord('a') + id)))
    
with open('data.json','w') as file:
    json.dump({"Store-fy4gih74dzaw3fznmgahrq5knu-dev": stores}, file, indent=4)