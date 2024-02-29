# Swagger 

swagger: "2.0"
info:
  version: "1.0.0"
  title: "sequelize_course"
  x-postman-id: "820599d8-a599-4118-a5a8-115841ad988b"
  x-exporter-id: "31703929"
  x-schema-url: "https://schema.getpostman.com/json/collection/v2.1.0/collection.json"
host: "localhost:7777"
basePath: "/api"
schemes:
  - "http"
paths:
  /products:
    get:
      summary: "Get All products"
      responses: {}
    post:
      summary: "Post products"
      parameters:
        - in: "body"
          name: "body"
          description: "Product object"
          required: true
          schema:
            type: "object"
            properties:
              title:
                type: "string"
              price:
                type: "number"
              description:
                type: "string"
      responses: {}
  /products/published:
    get:
      summary: "Get published products"
      responses: {}
  /products/{productId}:
    get:
      summary: "Get One products"
      parameters:
        - in: "path"
          name: "productId"
          required: true
          type: "string"
      responses: {}
    put:
      summary: "Update products"
      parameters:
        - in: "path"
          name: "productId"
          required: true
          type: "string"
        - in: "body"
          name: "body"
          description: "Product object"
          required: true
          schema:
            type: "object"
            properties:
              title:
                type: "string"
              price:
                type: "number"
              description:
                type: "string"
              published:
                type: "boolean"
      responses: {}
    delete:
      summary: "Delete products"
      parameters:
        - in: "path"
          name: "productId"
          required: true
          type: "string"
      responses: {}
