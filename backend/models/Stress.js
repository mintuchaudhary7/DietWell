const schema = {
    type: "object",
    properties: {
      Books: {
        description: " 3 Products with product name or company name for stress relife",
        type: "object",
        properties: {
          Books: {
            type: "string",
            description:
              "10 books which help to overcome stress according to given data",
          },
        },
      },
      Foods: {
        type: "object",
        description: "10 Products  with product name or company name for skin care",
        properties: {
          Foods: {
            type: "string",
            description:
              "10 foods which help to overcome stress according to given data",
          },
          
        },
      },
      Exercise: {
        type: "object",
        description: "10 exercise which help to overcome stress according to given data",
        properties: {
          Exercise: {
            type: "string",
            description: "10 foods which help to overcome stress according to given data",
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
  