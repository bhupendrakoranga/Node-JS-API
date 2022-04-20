exports.getUserdata = (req, res, next) => {
    console.log("hiiii")
    return res.status(200).json({ data: [{ name: "Test", id: 1 }] });
};