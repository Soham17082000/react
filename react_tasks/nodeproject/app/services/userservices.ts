import bcrypt from 'bcrypt';

class userservices{
    async hashPassword(password:string)
    {
        return await bcrypt.hash(password,10)
    }
    //10 round of encryption applied
    async isPasswordMatch(attempted:any,original:any)
    {
        return await bcrypt.compare(attempted,original)
    }
   
}

export default  new userservices;