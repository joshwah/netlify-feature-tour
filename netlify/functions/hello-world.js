exports.handler = async () => {
    const mySecret = process.env.MY_SECRET;
    return {
      statusCode: 200,
      body: `hello world! here is the secret: ${mySecret}`
    };
  };