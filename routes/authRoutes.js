const express = require('express');
const router = express.Router();
const cors = require('cors');
const { test ,registerUser,loginUser,getProfile,logoutUser} = require('../controllers/authController');

//middleware
router.use(
    cors({
        credentials: 'true',
        origin:'https://main--wingmantraders.netlify.app/'

    })

)


router.get('/', test);
router.post('/register',registerUser);
router.post('/login',loginUser);
router.get('/profile',getProfile);
router.get('/logout',(req, res) => {

    try {
        res.clearCookie('token')
        return res.json( 'user logged out')
    } catch (e) {
        return  res.json({
            error:e.message
        });
    }  
    
    
  });


module.exports = router

