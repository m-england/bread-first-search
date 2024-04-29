

export class ServiceData {
    createDb(): { bakedGoods: BakedGood[] } {
        return {
            bakedGoods: [
                {
                    id: 1,
                    name: "Pumpkin Sesame rolls",
                    description: "Infused with pumpkin and sprinkled with sesame seeds, these rolls are seasonal favorites.",
                    totalTime: "13 hours",
                    pictures: ["baking_39.jpg"],
                    rating: 4
                },
                {
                    id: 2,
                    name: "Marbled Rye Sandwich Loaf",
                    description: "Delicious marbled rye loaf, ideal for standout sandwiches with its unique swirl pattern.",
                    totalTime: "5 hours",
                    pictures: ["baking_1.jpg"],
                    rating: 1
                },
                {
                    id: 3,
                    name: "Jalapeno Cheddar Bread",
                    description: "Spicy jalapeno bits and rich cheddar cheese give this bread a hearty flavor with a kick.",
                    totalTime: "21 hours",
                    pictures: ["baking_2.jpg"],
                    rating: 5
                },
                {
                    id: 4,
                    name: "Creampuffs",
                    description: "Light and airy creampuffs filled with sweet, creamy custard, a delightful treat.",
                    totalTime: "9 hours",
                    pictures: ["baking_3.jpg"],
                    rating: 3
                },
                {
                    id: 5,
                    name: "Sourdough Dinner Rolls",
                    description: "Tender, crusty rolls made from traditional sourdough, perfect for any dinner table.",
                    totalTime: "6 hours",
                    pictures: ["baking_4.jpg"],
                    rating: 3
                },
                {
                    id: 6,
                    name: "Smores Babka",
                    description: "Inspired by the campfire treat, this babka features marshmallow, chocolate, and a hint of graham cracker.",
                    totalTime: "9 hours",
                    pictures: ["baking_44.jpg"],
                    rating: 5
                },
                {
                    id: 7,
                    name: "Bagels",
                    description: "Classic sea salt and onion bagels made with sourdough starter, perfect for breakfast or lunch.",
                    totalTime: "20 hours",
                    pictures: ["baking_0.jpg"],
                    rating: 3
                },
                {
                    id: 8,
                    name: "Pretzels",
                    description: "Soft, chewy pretzels with a classic twist and a sprinkle of coarse salt.",
                    totalTime: "19 hours",
                    pictures: ["baking_11.jpg"],
                    rating: 4
                },
                {
                    id: 9,
                    name: "Walnut and Goat Cheese Focaccia",
                    description: "Aromatic focaccia topped with walnuts and creamy goat cheese for a rich flavor.",
                    totalTime: "6 hours",
                    pictures: ["baking_14.jpg"],
                    rating: 5
                },
                {
                    id: 10,
                    name: "Sourdough Dinner Rolls",
                    description: "Tender, crusty rolls made from traditional sourdough, perfect for any dinner table.",
                    totalTime: "1 hour",
                    pictures: ["baking_18.jpg"],
                    rating: 5
                },
                {
                    id: 11,
                    name: "Garlic Parmesan Focaccia",
                    description: "Flavor-packed focaccia infused with garlic and sprinkled with Parmesan cheese.",
                    totalTime: "23 hours",
                    pictures: ["baking_24.jpg"],
                    rating: 3
                },
                {
                    id: 12,
                    name: "Chocolate Babka",
                    description: "Rich and twisty loaf filled with chocolate, a sweet treat for any time of day.",
                    totalTime: "12 hours",
                    pictures: ["baking_26.jpg"],
                    rating: 4
                },
                {
                    id: 13,
                    name: "New England Hot Dog Buns",
                    description: "Soft buns with a side cut, perfect for the classic American hot dog.",
                    totalTime: "3 hours",
                    pictures: ["baking_32.jpg"],
                    rating: 4
                },
                {
                    id: 14,
                    name: "Garlic Bread",
                    description: "Aromatic and buttery, this garlic bread is the perfect side for any pasta dish.",
                    totalTime: "1 hour",
                    pictures: ["baking_36.jpg"],
                    rating: 2
                },
                {
                    id: 15,
                    name: "Sandwich Loaf",
                    description: "Soft, versatile bread that’s perfect for sandwich making.",
                    totalTime: "4 hours",
                    pictures: ["baking_37.jpg"],
                    rating: 5
                },
                {
                    id: 16,
                    name: "Cinammon Babka",
                    description: "Swirled bread with a sweet cinnamon filling, perfect for a cozy snack.",
                    totalTime: "15 hours",
                    pictures: ["baking_42.jpg"],
                    rating: 2
                }
            ]
        }
    }

}

export interface BakedGood {
    id: number;
    name: string;
    date?: Date;
    recipeLink?: string;
    pictures: string[];
    description: string;
    totalTime: string;
    rating: number;
}