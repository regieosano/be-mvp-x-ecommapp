import express from "express";

function composeRouter(router: express.IRouter) {
  const appRouter = router;
  return (function () {
    return appRouter;
  })();
}

export default composeRouter;
