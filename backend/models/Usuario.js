const mongoose = require('mongoose');
//const crypto = require('crypto');
//const { v1: uuidv1 } = require('uuid');
/*
{
    "usuario": {
        "role": 0,
        "inventory": [],
        "_id": "5fed33b5e2e08400ec978ba8",
        "name": "Rosita",
        "email": "ejemplo@hotmail",
        "nickname": "ryuza",
        "createdAt": "2020-12-31T02:13:09.490Z",
        "updatedAt": "2020-12-31T02:13:09.490Z",
        "__v": 0
    }
}
*/
const usuarioSchema = new mongoose.Schema(
    {        
        first_name: {
        type: String,
        required: false
        },

        last_name: {
        type: String,
        required: false
        },

        email: {
        type: String,
        required: false
        },

        nickname: {
        type: String,
        required: true
        },

        phone: {
        type: Number,
        required: false
        },

        password: { 
        type: String,
        required: true,
        },

        remember: { 
          type: Boolean,
          required: false,
        },

        photo:{
          type: String,
          required: false,
          default: "https://www.flaticon.com/svg/vstatic/svg/20/20079.svg?token=exp=1612404177~hmac=696269f6531ff597667fcb0df21eabe5"
        }
        //role: {
        //type: Number,
        //default: 0
        //},

        // inventory: {
        // type: Array,
        //default: []
        //}
        },
        {timestamps: true}
);

/*

usuarioSchema.virtual('password')
.set(function(password) {
  this._password = password;
  this.salt = uuidv1();
  this.hashed_password = this.encryptPassword(password);
})
.get(function() {
  return this._password;
});

usuarioSchema.methods = {
  authenticate: function(plainText) {
    return this.encryptPassword(plainText) === this.hashed_password;
  },

  encryptPassword: function(password) {
    if(!password) return '';
    try {
      return crypto.createHmac('sha1',this.salt)
      .update(password)
      .digest('hex')
    } catch (err) {
      return "";
    }
  }
};

*/

module.exports = mongoose.model("Usuario", usuarioSchema)