var flag = 0;
    
    
    for (i=2;i<10; i++){
    
        if (10%i ==0 )
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