var twit =require('twitter');
var config =require('./conf');

var T =new twit(config);

var params ={
    q: '#prime-bot',
    count:10,
    result_type:'recent',
    lang:'en'
}

T.get('search/tweet',params,function(err,data,response){
    if(!err){
        //code goes here
        for (leti = 0;i < data.status.length;i++) {
            let val ={val:data.status[i].text}
            let primes =get_primes(val);
            client.post('statuses/update', {status: primes}, function(error, tweet, response) {
                if (!error) {
                  console.log(tweet);
                }
              });

            
        }
    }
    else{
        console.log('error!!');
    }
})

function get_primes(val){
    var res ='';
    for (let i = 0; i < val; i++) {
        if(i%2==0){
            return null;
        }
        else{
            var isprime=true;
            for (let j = 1; j < i; j+2) {
                if (i%j==0) {
                    isprime=false;
                };
                
            }
            if (isprime) {
                res+" "+i;
            }
        }
        
    }
    return res;
}