import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.send({
    response: "holaddd"
  });
});

export default router;
