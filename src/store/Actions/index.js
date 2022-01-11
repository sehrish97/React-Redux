export const depositMoney=(amount)=>{
    return(dispatch)=>{
        dispatch({
            type: 'deposit',
            playload:amount
        })
    }
} 
export const withdrawMoney=(amount)=>{
    return(dispatch)=>{
        dispatch({
            type: 'withdraw',
            playload:amount
        })
    }

}