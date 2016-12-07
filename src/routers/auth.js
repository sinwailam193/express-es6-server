import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  const a = { a: 1 };
  const b = { ...a };
  
  res.send({
    response: b
  });
});

export default router;
