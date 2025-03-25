const environment = {
  appsUrl: {
    aviationStack: {
      api: process.env.AVIATION_STACK_API ?? "http://localhost:3000",
      accessKey: process.env.AVIATION_STACK_KEY ?? "",
    },
  },
};

export default environment;
