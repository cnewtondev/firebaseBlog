1) Simple React JSX / Firebase (realtime) database blog template.
Listed below are a couple of add on options to play around with.
This mini app template will allow you to read and write
provided you have your rules set to developer options
*******************
{
"rules":{
    "write": true,
    "read": true
 }
}
******************


2) Option one - Look into auth.statedidchange((user)=>{
(user){
myConst = user.*specified*
}
})

to hide "input" component. ex:
<myConst == *lorem.ipsum* ? (return *input field*) : (null)>

Option two - change rules for read and write to be
auth.uid === $uid so users could only see the content that user uploaded

Option three - change rules for admin user to write and read where all other users 
can read: true BUT write: false.

3)Look into React Quill with 64 bit converter. This will allow you to push images
to a real time database.

Hope this helps :)
