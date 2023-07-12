const mongoose=require('mongoose');
const schema=mongoose.Schema;

const newUserSchema=new schema({
userName:{type:String,
required:true,
},

password:{type:String,
required:true,
default:"toolong"
}
})

module.exports=mongoose.model('Users',newUserSchema);