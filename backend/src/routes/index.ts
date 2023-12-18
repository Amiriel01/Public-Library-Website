import {Router} from "express";
const router = Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

import multer from 'multer';

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/")
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now()
    cb(null, uniqueSuffix + file.originalname)
  }
})

const upload = multer({ storage: storage })

router.post("/upload-image", upload.single("image"), async (req, res) => {
  console.log(req.body);
  const imageName = req.file.filename;
  res.json(imageName)
  console.log(imageName)

  // try {
  //   await ImageDetails.create({ image: imageName });
  //   res.json({ status: "ok" });
  // } catch (error) {
  //   res.json({ status: error });
  // }
});

// router.post("/upload-image", async (req, res) => {

// });
// router.get("/get-image", async (req, res) => {
//   try {
//     ImageDetails.find({}).then((data) => {
//       res.send({ status: "ok", data: data });
//     });
//   } catch (error) {
//     res.json({ status: error });
//   }
// });

export default router;
