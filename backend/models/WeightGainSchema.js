const schema = {
  type: "object",
  properties: {
    days: {
      type: "array",
      description: "diet plan from monday to sunday",
      items: {
        type: "object",
        properties: {
          breakfast: {
            type: "string",
            description: "breakfast for monday",
          },
          lunch: {
            type: "string",
            description: "lunch for monday",
          },
          dinner: {
            type: "string",
            description: "dinner for monday",
          },
          totalNutrients: {
            type: "object",
            properties: {
              calories: {
                type: "string",
                description:
                  "calories in the suggested breakfast, lunch and dinner that day",
              },
              carbohydrates: {
                type: "string",
                description:
                  "carbohydrates in the suggested breakfast, lunch and dinner on that day",
              },
              fats: {
                type: "string",
                description:
                  "fats in the suggested breakfast, lunch and dinner on that day",
              },
              fibers: {
                type: "string",
                description:
                  "fibers in the suggested breakfast, lunch and dinner on that day",
              },
              protiens: {
                type: "string",
                description:
                  "Protien in the suggested breakfast, lunch and dinner on that day",
              },
            },
          },
        },
      },
    },
  },
};
module.exports = schema;
