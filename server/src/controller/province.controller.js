import { pool } from "../db.js";

export const getProvinces = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM PROVINCE");
    res.json(rows);
  } catch (error) {
    return res.status(500).json({ message: "Something goes wrong" });
  }
};

export const getProvince = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM PROVINCE WHERE PRO_ID = ?", [
      req.params.id,
    ]);

    if (rows.length <= 0)
      return res.status(404).json({ message: "Province not found" });

    res.json(rows[0]);
  } catch (error) {
    return res.status(500).json({ message: "Something goes wrong" });
  }
};
