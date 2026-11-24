function addbudget(){
    let output =document.getElementById('output')
        let input =document.getElementById('input').value
        document.getElementById('input').value=''
    if(input.trim()===''){
        alert('Enter your budget')
    }else{
    // output(input)
    output.innerHTML+=`<p>${input}</p>`
    }
}
list=[]
let totalprice=0
let itemprice=Number(price.value)

function addlist(){
    let listinput=document.getElementById('listinput')
    let listoutput=document.getElementById('listoutput')
    let price=document.getElementById('price')
    // listoutput.innerHTML=''
    if(listinput.value.trim()===''||price.value===''){
        alert('Add item and price')
    }else{
        let itemprice=Number(price.value)
        list.push({name:listinput.value,price:itemprice})
        totalprice=0
        listoutput.innerHTML=''
        for( let index=0;index<list.length;index++){
            totalprice+=list[index].price
            listoutput.innerHTML+= `<p>${index+1}. ${list[index].name}- #${list[index].price}</p>`
            // getElementById('listinput').value.innerHTML=''
            listinput.value=''
            price.value=''
        }
        checkbudget()
    }
}

function checkbudget(){
let budget=Number(document.getElementById('input').value)
if(totalprice>budget){
    alert('Your expenses are greater than your budget!')
}else{
    alert('You are within the budget')
}
}
