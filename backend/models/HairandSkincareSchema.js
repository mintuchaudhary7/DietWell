const schema = {
  type: "object",
  properties: {
    Haircare: {
      description:
        " 3 Products with product name or company name for hare care",
      type: "object",
      properties: {
        Shampoo: {
          type: "string",
          description:
            "3 hair Shampoo product  with product name or company name according to given data",
        },
        Conditioner: {
          type: "string",
          description:
            "3 hair conditioner product  with product name  or company name according to given data",
        },
        Hairoil: {
          type: "string",
          description:
            "3 hair oil product  with product name or company name according to given data",
        },
      },
    },
    Skincare: {
      type: "object",
      description:
        "3 Products  with product name or company name for skin care",
      properties: {
        Moiteriser: {
          type: "string",
          description:
            "any 3 Moiterizer  with product name or company name according to given data",
        },
        Toner: {
          type: "string",
          description:
            "any 3 toner  with product name or company name according to given data",
        },
        Mask: {
          type: "string",
          description:
            "3 mask oil  with product name or company name according to given data",
        },
        Cleanser: {
          type: "string",
          description:
            "3 cleanser  with product name or company name according to given data",
        },
        Serum: {
          type: "string",
          description:
            "3 serum  with product name or company name according to given data",
        },
      },
    },
    Food: {
      type: "object",
      description: "10 Food for hair and skin care",
      properties: {
        Fruites: {
          type: "string",
          description: "10 Fruites for hair care",
        },
        Vegitables: {
          type: "string",
          description: "10 Vegitables for hair care",
        },
        Nuts: {
          type: "string",
          description: "10 Nuts for hair care",
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
