var flag = 0;
var n = 83; 
    
    for (i=2;i<10; i++){
    
        if (n % i ==0 )
        {
            flag =1;
            break;
        }
    
    }
    if (flag ==0)
    {
        console.log("Yes");
    }
    else
    {
        console.log("No");
    }