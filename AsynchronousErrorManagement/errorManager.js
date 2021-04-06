
    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
      }

     function processStart() {
        sleep(1000).then(()=>{
            console.log("Process started");
        })
    }

     function processProduction() {
        var error = false;
        sleep(2000).then(()=>{
            console.log("Process is running");
            throw "Running Failed";
        }).catch((errors)=>{console.log(errors);error = true;}).finally(()=>{
            if(!error)
                setTimeout(()=>{processDone()},3000);
        })
        
    }

    function processDone() {
         console.log("Process is done!");
    }

    function* processGenerator(){
        yield processStart();
        yield processProduction();
    }

    var process = processGenerator();
    
    while(!process.next().done)
    {
       process.next();
    }
