import app from "./app.js";
import { PORT } from "./config.js";

app.set("port", PORT);

app.listen(app.get("port"), "0.0.0.0", () => {
  console.log(`Server on port: ${app.get("port")}`);
});
