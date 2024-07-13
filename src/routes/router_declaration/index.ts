import express from "express";

function composeRouter(router: express.IRouter) {
  const appRouter = router;
  return () => appRouter;
}

export default composeRouter;
