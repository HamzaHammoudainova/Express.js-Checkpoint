var path = require('path')

const midleware = function (req, res, next) {
  
    const now = new Date();

    // Hours with Hour and minuts PM/AM
    const hoursAndMinutes = now.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
    });

    
    const days =  now.toLocaleDateString('en-US', {weekday: 'long'});
      

    const dayOfWeek = now.getDay(); 
    const hour = now.getHours();

   



    if (( hour < 17 && hour > 9) && ( dayOfWeek > 0 && dayOfWeek < 6)){
        console.log(' We are Online!! \n', days, '--', hoursAndMinutes, '(GMT) Tunisia')
        next();
    }else {
            res.sendFile(path.join(__dirname, './public/Weareoff.html'));
            console.log(' We are Offline!! \n', days, '--', hoursAndMinutes, '(GMT) Tunisia');
           
    }
    
}

module.exports = midleware;