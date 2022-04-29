import room1 from "@/assets/details-1.jpeg";
import room2 from "@/assets/details-2.jpeg";
import room3 from "@/assets/details-3.jpeg";
import room4 from "@/assets/details-4.jpeg";
import img1 from "@/assets/room-1.jpeg";
import img2 from "@/assets/room-2.jpeg";
import img3 from "@/assets/room-3.jpeg";
import img4 from "@/assets/room-4.jpeg";
import img5 from "@/assets/room-5.jpeg";
import img6 from "@/assets/room-6.jpeg";
import img7 from "@/assets/room-7.jpeg";
import img8 from "@/assets/room-8.jpeg";
import img9 from "@/assets/room-9.jpeg";
import img10 from "@/assets/room-10.jpeg";
import img11 from "@/assets/room-11.jpeg";
import img12 from "@/assets/room-12.jpeg";

function getUnique(value, index, self) {
    return self.indexOf(value) === index;
}

const state = {
    rooms: [{
            sys: {
                id: "1"
            },
            fields: {
                name: "single economy",
                slug: "single-economy",
                type: "single",
                price: 100,
                size: 200,
                capacity: 1,
                pets: false,
                breakfast: false,
                featured: false,
                description: "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.",
                extras: [
                    "Plush pillows and breathable bed linens",
                    "Soft, oversized bath towels",
                    "Full-sized, pH-balanced toiletries",
                    "Complimentary refreshments",
                    "Adequate safety/security",
                    "Internet",
                    "Comfortable beds"
                ],
                images: [{
                        fields: {
                            file: {
                                url: img1
                            }
                        }
                    },
                    {
                        fields: {
                            file: {
                                url: room2
                            }
                        }
                    },
                    {
                        fields: {
                            file: {
                                url: room3
                            }
                        }
                    },
                    {
                        fields: {
                            file: {
                                url: room4
                            }
                        }
                    }
                ]
            }
        },
        {
            sys: {
                id: "2"
            },
            fields: {
                name: "single basic",
                slug: "single-basic",
                type: "single",
                price: 150,
                size: 250,
                capacity: 1,
                pets: false,
                breakfast: false,
                featured: false,
                description: "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.",
                extras: [
                    "Plush pillows and breathable bed linens",
                    "Soft, oversized bath towels",
                    "Full-sized, pH-balanced toiletries",
                    "Complimentary refreshments",
                    "Adequate safety/security",
                    "Internet",
                    "Comfortable beds"
                ],
                images: [{
                        fields: {
                            file: {
                                url: img2
                            }
                        }
                    },
                    {
                        fields: {
                            file: {
                                url: room2
                            }
                        }
                    },
                    {
                        fields: {
                            file: {
                                url: room3
                            }
                        }
                    },
                    {
                        fields: {
                            file: {
                                url: room4
                            }
                        }
                    }
                ]
            }
        },
        {
            sys: {
                id: "3"
            },
            fields: {
                name: "single standard",
                slug: "single-standard",
                type: "single",
                price: 250,
                size: 300,
                capacity: 1,
                pets: true,
                breakfast: false,
                featured: false,
                description: "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.",
                extras: [
                    "Plush pillows and breathable bed linens",
                    "Soft, oversized bath towels",
                    "Full-sized, pH-balanced toiletries",
                    "Complimentary refreshments",
                    "Adequate safety/security",
                    "Internet",
                    "Comfortable beds"
                ],
                images: [{
                        fields: {
                            file: {
                                url: img3
                            }
                        }
                    },
                    {
                        fields: {
                            file: {
                                url: room2
                            }
                        }
                    },
                    {
                        fields: {
                            file: {
                                url: room3
                            }
                        }
                    },
                    {
                        fields: {
                            file: {
                                url: room4
                            }
                        }
                    }
                ]
            }
        },
        {
            sys: {
                id: "4"
            },
            fields: {
                name: "single deluxe",
                slug: "single-deluxe",
                type: "single",
                price: 300,
                size: 400,
                capacity: 1,
                pets: true,
                breakfast: true,
                featured: false,
                description: "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.",
                extras: [
                    "Plush pillows and breathable bed linens",
                    "Soft, oversized bath towels",
                    "Full-sized, pH-balanced toiletries",
                    "Complimentary refreshments",
                    "Adequate safety/security",
                    "Internet",
                    "Comfortable beds"
                ],
                images: [{
                        fields: {
                            file: {
                                url: img4
                            }
                        }
                    },
                    {
                        fields: {
                            file: {
                                url: room2
                            }
                        }
                    },
                    {
                        fields: {
                            file: {
                                url: room3
                            }
                        }
                    },
                    {
                        fields: {
                            file: {
                                url: room4
                            }
                        }
                    }
                ]
            }
        },
        {
            sys: {
                id: "5"
            },
            fields: {
                name: "double economy",
                slug: "double-economy",
                type: "double",
                price: 200,
                size: 300,
                capacity: 2,
                pets: false,
                breakfast: false,
                featured: false,
                description: "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.",
                extras: [
                    "Plush pillows and breathable bed linens",
                    "Soft, oversized bath towels",
                    "Full-sized, pH-balanced toiletries",
                    "Complimentary refreshments",
                    "Adequate safety/security",
                    "Internet",
                    "Comfortable beds"
                ],
                images: [{
                        fields: {
                            file: {
                                url: img5
                            }
                        }
                    },
                    {
                        fields: {
                            file: {
                                url: room2
                            }
                        }
                    },
                    {
                        fields: {
                            file: {
                                url: room3
                            }
                        }
                    },
                    {
                        fields: {
                            file: {
                                url: room4
                            }
                        }
                    }
                ]
            }
        },
        {
            sys: {
                id: "6"
            },
            fields: {
                name: "double basic",
                slug: "double-basic",
                type: "double",
                price: 250,
                size: 350,
                capacity: 2,
                pets: false,
                breakfast: false,
                featured: false,
                description: "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.",
                extras: [
                    "Plush pillows and breathable bed linens",
                    "Soft, oversized bath towels",
                    "Full-sized, pH-balanced toiletries",
                    "Complimentary refreshments",
                    "Adequate safety/security",
                    "Internet",
                    "Comfortable beds"
                ],
                images: [{
                        fields: {
                            file: {
                                url: img6
                            }
                        }
                    },
                    {
                        fields: {
                            file: {
                                url: room2
                            }
                        }
                    },
                    {
                        fields: {
                            file: {
                                url: room3
                            }
                        }
                    },
                    {
                        fields: {
                            file: {
                                url: room4
                            }
                        }
                    }
                ]
            }
        },
        {
            sys: {
                id: "7"
            },
            fields: {
                name: "double standard",
                slug: "double-standard",
                type: "double",
                price: 300,
                size: 400,
                capacity: 2,
                pets: true,
                breakfast: false,
                featured: false,
                description: "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.",
                extras: [
                    "Plush pillows and breathable bed linens",
                    "Soft, oversized bath towels",
                    "Full-sized, pH-balanced toiletries",
                    "Complimentary refreshments",
                    "Adequate safety/security",
                    "Internet",
                    "Comfortable beds"
                ],
                images: [{
                        fields: {
                            file: {
                                url: img7
                            }
                        }
                    },
                    {
                        fields: {
                            file: {
                                url: room2
                            }
                        }
                    },
                    {
                        fields: {
                            file: {
                                url: room3
                            }
                        }
                    },
                    {
                        fields: {
                            file: {
                                url: room4
                            }
                        }
                    }
                ]
            }
        },
        {
            sys: {
                id: "8"
            },
            fields: {
                name: "double deluxe",
                slug: "double-deluxe",
                type: "double",
                price: 400,
                size: 500,
                capacity: 2,
                pets: true,
                breakfast: true,
                featured: true,
                description: "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.",
                extras: [
                    "Plush pillows and breathable bed linens",
                    "Soft, oversized bath towels",
                    "Full-sized, pH-balanced toiletries",
                    "Complimentary refreshments",
                    "Adequate safety/security",
                    "Internet",
                    "Comfortable beds"
                ],
                images: [{
                        fields: {
                            file: {
                                url: img8
                            }
                        }
                    },
                    {
                        fields: {
                            file: {
                                url: room2
                            }
                        }
                    },
                    {
                        fields: {
                            file: {
                                url: room3
                            }
                        }
                    },
                    {
                        fields: {
                            file: {
                                url: room4
                            }
                        }
                    }
                ]
            }
        },
        {
            sys: {
                id: "9"
            },
            fields: {
                name: "family economy",
                slug: "family-economy",
                type: "family",
                price: 300,
                size: 500,
                capacity: 3,
                pets: false,
                breakfast: false,
                featured: false,
                description: "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.",
                extras: [
                    "Plush pillows and breathable bed linens",
                    "Soft, oversized bath towels",
                    "Full-sized, pH-balanced toiletries",
                    "Complimentary refreshments",
                    "Adequate safety/security",
                    "Internet",
                    "Comfortable beds"
                ],
                images: [{
                        fields: {
                            file: {
                                url: img9
                            }
                        }
                    },
                    {
                        fields: {
                            file: {
                                url: room2
                            }
                        }
                    },
                    {
                        fields: {
                            file: {
                                url: room3
                            }
                        }
                    },
                    {
                        fields: {
                            file: {
                                url: room4
                            }
                        }
                    }
                ]
            }
        },
        {
            sys: {
                id: "10"
            },
            fields: {
                name: "family basic",
                slug: "family-basic",
                type: "family",
                price: 350,
                size: 550,
                capacity: 4,
                pets: false,
                breakfast: false,
                featured: false,
                description: "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.",
                extras: [
                    "Plush pillows and breathable bed linens",
                    "Soft, oversized bath towels",
                    "Full-sized, pH-balanced toiletries",
                    "Complimentary refreshments",
                    "Adequate safety/security",
                    "Internet",
                    "Comfortable beds"
                ],
                images: [{
                        fields: {
                            file: {
                                url: img10
                            }
                        }
                    },
                    {
                        fields: {
                            file: {
                                url: room2
                            }
                        }
                    },
                    {
                        fields: {
                            file: {
                                url: room3
                            }
                        }
                    },
                    {
                        fields: {
                            file: {
                                url: room4
                            }
                        }
                    }
                ]
            }
        },
        {
            sys: {
                id: "11"
            },
            fields: {
                name: "family standard",
                slug: "family-standard",
                type: "family",
                price: 400,
                size: 600,
                capacity: 5,
                pets: true,
                breakfast: false,
                featured: false,
                description: "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.",
                extras: [
                    "Plush pillows and breathable bed linens",
                    "Soft, oversized bath towels",
                    "Full-sized, pH-balanced toiletries",
                    "Complimentary refreshments",
                    "Adequate safety/security",
                    "Internet",
                    "Comfortable beds"
                ],
                images: [{
                        fields: {
                            file: {
                                url: img11
                            }
                        }
                    },
                    {
                        fields: {
                            file: {
                                url: room2
                            }
                        }
                    },
                    {
                        fields: {
                            file: {
                                url: room3
                            }
                        }
                    },
                    {
                        fields: {
                            file: {
                                url: room4
                            }
                        }
                    }
                ]
            }
        },
        {
            sys: {
                id: "12"
            },
            fields: {
                name: "family deluxe",
                slug: "family-deluxe",
                type: "family",
                price: 500,
                size: 700,
                capacity: 6,
                pets: true,
                breakfast: true,
                featured: true,
                description: "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.",
                extras: [
                    "Plush pillows and breathable bed linens",
                    "Soft, oversized bath towels",
                    "Full-sized, pH-balanced toiletries",
                    "Complimentary refreshments",
                    "Adequate safety/security",
                    "Internet",
                    "Comfortable beds"
                ],
                images: [{
                        fields: {
                            file: {
                                url: img12
                            }
                        }
                    },
                    {
                        fields: {
                            file: {
                                url: room2
                            }
                        }
                    },
                    {
                        fields: {
                            file: {
                                url: room3
                            }
                        }
                    },
                    {
                        fields: {
                            file: {
                                url: room4
                            }
                        }
                    }
                ]
            }
        },
        {
            sys: {
                id: "13"
            },
            fields: {
                name: "presidential",
                slug: "presidential-room",
                type: "presidential",
                price: 600,
                size: 1000,
                capacity: 10,
                pets: true,
                breakfast: true,
                featured: true,
                description: "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.",
                extras: [
                    "Plush pillows and breathable bed linens",
                    "Soft, oversized bath towels",
                    "Full-sized, pH-balanced toiletries",
                    "Complimentary refreshments",
                    "Adequate safety/security",
                    "Internet",
                    "Comfortable beds"
                ],
                images: [{
                        fields: {
                            file: {
                                url: room1
                            }
                        }
                    },
                    {
                        fields: {
                            file: {
                                url: room2
                            }
                        }
                    },
                    {
                        fields: {
                            file: {
                                url: room3
                            }
                        }
                    },
                    {
                        fields: {
                            file: {
                                url: room4
                            }
                        }
                    }
                ]
            }
        }
    ],
    filter: {
        rooms: [],
        type: "all",
        capacity: 1,
        minPrice: 0,
        maxPrice: 600,
        price: 600,
        breakfast: false,
        pets: false,
        minSize: 0,
        maxSize: 1000,
    }
};

const getters = {
    allRooms: (state) => state.rooms,
    filterRooms: (state) => state.filter.rooms,
    filter: (state) => state.filter,
    featuredRooms: (state) => {
        return state.rooms.filter((room) => {
            return room.fields.featured === true;
        });
    },
    getUniqueType: (state) => {
        let types = state.rooms.map((room) => {
            return room.fields.type;
        })
        const filterTypes = types.filter(getUnique);
        const allTypes = ["all", ...filterTypes];
        return allTypes;
    },
    getUniqueCapacity: (state) => {
        let capacity = state.rooms.map((room) => {
            return room.fields.capacity;
        })
        const filterCapacity = capacity.filter(getUnique);
        return filterCapacity;
    }
}

const mutations = {
    GET_FILTERED_ROOMS: (state, rooms) => (state.filter.rooms = rooms),
};

const actions = {
    filterRooms({ commit }) {
        let tempRooms = state.rooms;
        let {
            type,
            capacity,
            price,
            breakfast,
            pets,
            maxSize,
            minSize,
        } = state.filter;

        //type
        if (type !== 'all') {
            tempRooms = tempRooms.filter(room => room.fields.type === type);
        }
        //capacity
        if (capacity > 0) {
            tempRooms = tempRooms.filter(room => room.fields.capacity >= capacity);
        }
        //price
        tempRooms = tempRooms.filter(room => room.fields.price <= price);

        //size
        tempRooms = tempRooms.filter(room => room.fields.size >= minSize && room.fields.size <= maxSize);

        //breakfast
        if (breakfast) {
            tempRooms = tempRooms.filter(room => room.fields.breakfast === true);
        }
        //pets
        if (pets) {
            tempRooms = tempRooms.filter(room => room.fields.pets === true);
        }

        commit("GET_FILTERED_ROOMS", tempRooms);
    },
};

export default {
    state,
    getters,
    mutations,
    actions,
}