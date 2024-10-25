module.exports = {
    type: "object",
    properties: {
      nome: { type: "string" },
      descricao: { type: "string" },
      preco: { type: "number" },
      tags: { type : "array"}
    },
    required: ["nome", "preco"],
    additionalProperties: false
}