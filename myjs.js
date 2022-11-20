let text ;
let txt1 = document.getElementById('txt1');
let txt2 = document.getElementById('txt2');
document.getElementById("btn").onclick = function(){
    text = document.getElementById("box").value;
    if(Array.from(text)[0]=="+"||Array.from(text)[0]=="-"||Array.from(text)[0]=="*"||Array.from(text)[0]=="/"||Array.from(text)[0]=="%"||Array.from(text)[0]=="^"){
        console.log("prefix");
        preToPost(text);
        PretoIn(text);
    }
    else if (text.charAt(text.length - 1)=="+"||text.charAt(text.length - 1)=="-"||text.charAt(text.length - 1)=="*"||text.charAt(text.length - 1)=="/"||text.charAt(text.length - 1)=="%"||text.charAt(text.length - 1)=="^"){
        console.log("postfix");
    }    
    else[
        console.log("infix")
    ]

    }       

function isOperator(x)
{
    switch (x) {
    case '+':
    case '-':
    case '/':
    case '*':
        return true;
    }
    return false;
}

function preToPost(pre_exp)
    {
  
        let s = [];
  
        // length of expression
        let length = pre_exp.length;
  
        // reading from right to left
        for (let i = length - 1; i >= 0; i--)
        {
  
            // check if symbol is operator
            if (isOperator(pre_exp[i]))
            {
                // pop two operands from stack
                let op1 = s[s.length - 1];
                s.pop();
                let op2 = s[s.length - 1];
                s.pop();
  
                // concat the operands and operator
                let temp = op1 + op2 + pre_exp[i];
  
                // Push String temp back to stack
                s.push(temp);
            }
  
            // if symbol is an operand
            else {
                // push the operand to the stack
                s.push(pre_exp[i] + "");
            }
        }
  
        // stack contains only the Postfix expression
        let answer = (s[s.length - 1]);
        txt2.innerHTML = `Prefix to Postfix: ${answer}`;
    }
function PretoIn(str)
    {
        let stack = [];
 
        // Length of expression
        let l = str.length;
 
        // Reading from right to left
        for(let i = l - 1; i >= 0; i--)
        {
            let c = str[i];
 
            if (isOperator(c))
            {
                let op1 = stack[stack.length - 1];
                stack.pop()
                let op2 = stack[stack.length - 1];
                stack.pop()
 
                // Concat the operands and operator
                let temp = "(" + op1 + c + op2 + ")";
                stack.push(temp);
            }
            else
            {
 
                // To make character to string
                stack.push(c + "");
            }
        }
        let answer = stack[stack.length - 1];
        txt1.innerHTML = `Prefix to Infix: ${answer}`;
    }
