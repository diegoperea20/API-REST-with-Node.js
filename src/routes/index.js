import { Router } from "express";

const router = new Router();

router.get("/test", (req, res) => {
  const data = {
    name: "Diego Ivan Perea Montealegre",
    website: "https://diegoperea20.github.io/diego-ivan-perea-montealegre-cv/",
  };
  res.json(data);
});

export default router;
