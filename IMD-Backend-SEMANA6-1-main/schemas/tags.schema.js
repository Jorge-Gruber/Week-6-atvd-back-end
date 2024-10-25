module.exports = {
    type: "object",
    properties: {
      valor: { type: "string" },
      produtoId: { type: "number"}
    },
    required: ["valor", "produtoId"],
    additionalProperties: false
}