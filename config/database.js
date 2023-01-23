module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'dpg-cehnst5a499fabmvtm3g-a.oregon-postgres.render.com'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'ecommerce_w5u3'),
      user: env('DATABASE_USERNAME', 'root'),
      password: env('DATABASE_PASSWORD', 'BsK2M5DbG1xOJw5iVdW4hdm2YlCLJHWr'),
      ssl: env.bool('DATABASE_SSL', true),
    },
  },
});
