import responses from "../responses";

const hotel = {
  
  "/hotels": {
    post: {
      tags: ["Hotel"],
      summary: "",
      parameters: [
        {
          in: "body",
          name: "body",
          schema: {
            $ref: "#/definitions/Hotel",
          },
        },
      ],
      consumes: ["application/json"],
      produces: ["application/json"],
      responses,
      security: [
        {
          JWT: [],
        },
      ],
    },
    get: {
      tags: ["Hotel"],
      summary: "",
      description: "",
      parameters: [],
      consumes: ["application/json"],
      produces: ["application/json"],
      responses,
      security: [
        {
          JWT: [],
        },
      ],
    },
  },
  "/hotels/{id}": {
    get: {
      tags: ["Hotel"],
      summary: "",
      description: "",
      parameters: [
        {
          in: "path",
          name: "id",
          required: true,
          type: "string",
        },
      ],
      consumes: ["application/json"],
      produces: ["application/json"],
      responses,
      security: [
        {
          JWT: [],
        },
      ],
    },
    put: {
      tags: ["Hotel"],
      summary: "",
      description: "",
      parameters: [
        {
          in: "path",
          name: "id",
          required: true,
          type: "string",
        },
        {
          in: "body",
          name: "body",
          schema: {
            $ref: "#/definitions/Hotel",
          },
        },
      ],
      consumes: ["application/json"],
      produces: ["application/json"],
      responses,
      security: [
        {
          JWT: [],
        },
      ],
    },
    delete: {
      tags: ["Hotel"],
      summary: "",
      description: "",
      parameters: [
        {
          in: "path",
          name: "id",
          required: true,
          type: "string",
        },
      ],
      consumes: ["application/json"],
      produces: ["application/json"],
      responses,
      security: [
        {
          JWT: [],
        },
      ],
    },
  },
};

export default hotel;