const environment = {
  appsUrl: {
    aviationStack: {
      api:
        process.env.NEXT_PUBLIC_AVIATION_STACK_API ?? "http://localhost:3000",
      accessKey: process.env.NEXT_PUBLIC_AVIATION_STACK_KEY ?? "",
    },
  },
};

export default environment;
