import {Router} from 'express'
import { addVideo, deleteVideo, getVideo, updateVideo } from '../controllers/video.controller.js'
import { verifyToken } from '../utils/verifyToken.js'

const router=Router()

router.post("/",verifyToken,addVideo)
router.put("/:id",verifyToken,updateVideo)
router.delete("/:id",verifyToken,deleteVideo)

router.get("/find/:id",getVideo)
router.post("/",verifyToken)

export default router