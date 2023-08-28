import { pool } from "../db.js";

export const getPartyByProvince = async (req, res) => {
  try {
    const [rows] = await pool.query(
      "SELECT PAR_NAME, SUF_VOTE FROM SUFFRAGE s, PARTY p WHERE s.PAR_ID = p.PAR_ID AND PRO_ID = ?",
      [req.params.id]
    );

    if (rows.length <= 0)
      return res.status(404).json({ message: "Suffrage not found" });

    res.json(rows);
  } catch (error) {
    return res.status(500).json({ message: "Something goes wrong" });
  }
};
