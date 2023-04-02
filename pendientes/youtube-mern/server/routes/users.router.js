import {Router} from 'express'
import { deleteUser, dislike, getUser, like, subscribe, unsubscribe, update } from '../controllers/user.controller.js'
import User from '../models/User.js'
import { verifyToken } from '../utils/verifyToken.js'

const router=Router()

//update user
router.put("/:id",verifyToken,update)

//delete user
router.delete("/:id",verifyToken,deleteUser)

//get User
router.get("/find/:id",getUser)

//subscribe a user
router.put("/sub/:id",verifyToken,subscribe)

//unsubscribe a user
router.put("/unsub/:id",verifyToken,unsubscribe)

//like a video
router.put("/like/:videoid",verifyToken,like)

//dislike a video
router.put("/dislike/:videoid",verifyToken,dislike)

router.get("/abc",async (req,res)=>{
      const subscriptions = await User.find({ subscriptions: "63c542f873e168634259e93d" });
      res.json(subscriptions)
})

export default router