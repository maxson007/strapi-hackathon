module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 1337),
  app: {
    keys: [
      "4CIqUOnXk1IZbNqzVoSauA==",
      "bi0UBRTe7mzOnoPVb4JznQ==",
      "L/S1SF8qA/jV2e9PL5KDxA==",
      "KX1wZfyvonXHaQb7PREkGw==",
    ],
  },
});
