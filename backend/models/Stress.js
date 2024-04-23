const schema = {
  type: "object",
  properties: {
    Books: {
      description:
        "10 answer for each keys",
      type: "object",
      properties: {
        Books: {
          type: "string",
          description:
            "10 books according to given data",
        },
        
      },
    },
    Exercies: {
      type: "object",
      description:
        "10 Exersices for best stress relief",
      properties: {
        Exercies: {
          type: "string",
          description:
            "10 exercises according to given data",
        },
        
      },
    },
    Food: {
      type: "object",
      description: "10 Food for stress relief",
      properties: {
        Fruites: {
          type: "string",
          description: "10 Fruites for stress relief",
        },
        Vegitables: {
          type: "string",
          description: "10 Vegitables for stress relief",
        },
        Nuts: {
          type: "string",
          description: "10 Nuts for stress relief",
        },
      },
    },
  },
};
module.exports = schema;
// foods: {
//   type: "string",
//   description: "10 food according to given data",
// },
