const state = {
  services: [{
      icon: "cocktail",
      title: "free cocktails",
      info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, corporis!",
    },
    {
      icon: "hiking",
      title: "Endless Hiking",
      info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, corporis!",
    },
    {
      icon: "shuttle-van",
      title: "Free shuttle",
      info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, corporis!",
    },
    {
      icon: "beer",
      title: "Strongest Beer",
      info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, corporis!",
    },
  ],
};

const getters = {
  allServices: (state) => state.services
};

export default {
  state,
  getters
}


