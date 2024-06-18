const mongoose=require("mongoose");

const productCategorySchema=new mongoose.Schema({
      categoryName:{type:String,required:true},
      userId:{type:String },
      userName:{type:String },
      adminId:{type:String },
      adminId:{type:String },
      brandName:{type:String },
      status:{type:String ,default:"ACTIVE"}

},{timestamps:true});

const ProductCategoryModel=new mongoose.model("ProductCategory",productCategorySchema);
module.exports=ProductCategoryModel;